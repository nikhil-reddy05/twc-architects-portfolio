"use client";

import Image from "next/image";
import { useRef } from "react";
import ProjectMasonryGallery from "@/components/ProjectMasonryGallery";

export default function ProjectGallery({
  projects,
  basePath,
  project,
  items,
  theme,
}) {
  const mediaItems = items || project?.gallery;
  const videoRefs = useRef([]);

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
        {mediaItems.map(({ url, width, height, resource_type }, index) => (
          <figure
            key={`${url}-${index}`}
            className="group mb-[var(--masonry-gap)] break-inside-avoid overflow-hidden bg-[#ebe7df] shadow-[0_18px_45px_rgba(24,27,31,0.07)] transition duration-300 hover:shadow-[0_24px_60px_rgba(24,27,31,0.12)]"
          >
            {resource_type === "video" ? (
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
                controls
                onMouseEnter={() => videoRefs.current[index]?.play()}
                onMouseLeave={() => {
                  const video = videoRefs.current[index];
                  if (!video) return;
                  video.pause();
                  video.currentTime = 0;
                }}
              />
            ) : (
              <Image
                src={url}
                alt={`${project?.title || "Project"} gallery image ${index + 1}`}
                width={width}
                height={height}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 100vw"
                className="h-auto w-full transition duration-500 group-hover:scale-[1.018] group-hover:opacity-95"
                loading={index < 2 ? "eager" : "lazy"}
              />
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}
