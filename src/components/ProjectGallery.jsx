"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ProjectMasonryGallery from "@/components/ProjectMasonryGallery";

export default function ProjectGallery({
  projects,
  basePath,
  project,
  items,
  theme,
}) {
  const mediaItems = items || project?.gallery;
  const mediaCount = mediaItems?.length || 0;
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const videoRefs = useRef([]);
  const activeMedia =
    lightboxIndex === null ? null : mediaItems?.[lightboxIndex] || null;
  const hasMultipleMedia = mediaCount > 1;

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const showPreviousImage = useCallback(() => {
    setLightboxIndex((currentIndex) => {
      if (currentIndex === null) return currentIndex;
      return (currentIndex - 1 + mediaCount) % mediaCount;
    });
  }, [mediaCount]);
  const showNextImage = useCallback(() => {
    setLightboxIndex((currentIndex) => {
      if (currentIndex === null) return currentIndex;
      return (currentIndex + 1) % mediaCount;
    });
  }, [mediaCount]);

  useEffect(() => {
    if (lightboxIndex === null) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        closeLightbox();
      }

      if (event.key === "ArrowLeft" && hasMultipleMedia) {
        showPreviousImage();
      }

      if (event.key === "ArrowRight" && hasMultipleMedia) {
        showNextImage();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [
    closeLightbox,
    hasMultipleMedia,
    lightboxIndex,
    showNextImage,
    showPreviousImage,
  ]);

  if (!mediaItems) {
    return <ProjectMasonryGallery projects={projects} basePath={basePath} />;
  }

  const columns = theme?.gallery?.columns || {
    desktop: 3,
    tablet: 2,
    mobile: 1,
  };
  const gap = theme?.gallery?.gap || "1.5rem";

  return (
    <>
      <section
        className={`mx-auto ${theme?.layout?.wideMaxWidth || "max-w-[88rem]"} px-6 pb-14 sm:pb-24 lg:px-8 lg:pb-28`}
        aria-labelledby="project-gallery"
      >
        <div className="mb-6 flex flex-col gap-2 sm:mb-10 sm:gap-3">
          <h2
            id="project-gallery"
            className="text-xl font-light leading-tight tracking-[0.02em] text-[#25231f] sm:text-2xl"
          >
            Project Gallery
          </h2>
        </div>

        <div
          className="project-masonry"
          style={{
            "--masonry-columns-mobile": columns.mobile,
            "--masonry-columns-tablet": columns.tablet,
            "--masonry-columns-desktop": columns.desktop,
            "--masonry-gap": gap,
          }}
        >
          {mediaItems.map(
            ({ url, width, height, resource_type }, index) => {
              const isVideo = resource_type === "video";

              return (
                <figure
                  key={`${url}-${index}`}
                  className="group mb-[var(--masonry-gap)] break-inside-avoid overflow-hidden bg-[#ebe7df] shadow-[0_18px_45px_rgba(24,27,31,0.07)] transition duration-300 hover:shadow-[0_24px_60px_rgba(24,27,31,0.12)]"
                >
                  {isVideo ? (
                    <button
                      type="button"
                      className="block w-full cursor-pointer text-left"
                      aria-label={`Open ${project?.title || "project"} gallery video ${index + 1} of ${mediaItems.length}`}
                      onClick={() => setLightboxIndex(index)}
                    >
                      <video
                        ref={(el) => {
                          videoRefs.current[index] = el;
                        }}
                        src={url}
                        width={width}
                        height={height}
                        className="block h-auto w-full"
                        preload="metadata"
                        muted
                        playsInline
                        onMouseEnter={() => videoRefs.current[index]?.play()}
                        onMouseLeave={() => {
                          const video = videoRefs.current[index];
                          if (!video) return;
                          video.pause();
                          video.currentTime = 0;
                        }}
                      />
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="block w-full cursor-pointer text-left"
                      aria-label={`Open ${project?.title || "project"} gallery image ${index + 1} of ${mediaItems.length}`}
                      onClick={() => setLightboxIndex(index)}
                    >
                      <Image
                        src={url}
                        alt={`${project?.title || "Project"} gallery image ${index + 1}`}
                        width={width}
                        height={height}
                        sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 100vw"
                        className="h-auto w-full transition duration-500 group-hover:scale-[1.018] group-hover:opacity-95"
                        loading={index < 2 ? "eager" : "lazy"}
                      />
                    </button>
                  )}
                </figure>
              );
            },
          )}
        </div>
      </section>

      {activeMedia && typeof document !== "undefined"
        ? createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#11100e]/95 px-4 py-5 backdrop-blur-sm sm:px-8"
          role="dialog"
          aria-modal="true"
          aria-label={`${project?.title || "Project"} media viewer`}
        >
          <button
            type="button"
            className="absolute inset-0 cursor-zoom-out"
            aria-label="Close image viewer"
            onClick={closeLightbox}
          />

          <div className="relative z-10 flex h-full w-full max-w-[96rem] flex-col">
            <div className="mb-3 flex shrink-0 items-center justify-between gap-4 text-white">
              <p className="text-xs uppercase tracking-[0.18em] text-white/72">
                {lightboxIndex + 1} / {mediaItems.length}
              </p>
              <button
                type="button"
                className="grid h-11 w-11 place-items-center border border-white/25 bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                aria-label="Close image viewer"
                onClick={closeLightbox}
              >
                <X aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>

            <div className="relative min-h-0 flex-1">
              {activeMedia.resource_type === "video" ? (
                <video
                  key={activeMedia.url}
                  src={activeMedia.url}
                  className="h-full w-full object-contain"
                  controls
                  autoPlay
                  playsInline
                />
              ) : (
                <Image
                  src={activeMedia.url}
                  alt={`${project?.title || "Project"} full gallery image ${lightboxIndex + 1}`}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              )}

              {hasMultipleMedia ? (
                <>
                  <button
                    type="button"
                    className="absolute left-0 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center border border-white/25 bg-[#11100e]/45 text-white transition hover:bg-[#11100e]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:left-4 sm:h-14 sm:w-14"
                    aria-label="Show previous media"
                    onClick={showPreviousImage}
                  >
                    <ChevronLeft aria-hidden="true" className="h-6 w-6" />
                  </button>
                  <button
                    type="button"
                    className="absolute right-0 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center border border-white/25 bg-[#11100e]/45 text-white transition hover:bg-[#11100e]/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-4 sm:h-14 sm:w-14"
                    aria-label="Show next media"
                    onClick={showNextImage}
                  >
                    <ChevronRight aria-hidden="true" className="h-6 w-6" />
                  </button>
                </>
              ) : null}
            </div>
          </div>
        </div>,
        document.body,
      )
        : null}
    </>
  );
}
