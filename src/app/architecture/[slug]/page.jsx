"use client";

import architectureProjects from "@/data/architectureProjects";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useRef, useState } from "react";

export default function ArchitectureProjectPage({ params }) {
  const { slug } = params;
  const project = architectureProjects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none) and (pointer: coarse)").matches;

  const videoRefs = useRef([]);
  const [loadedMedia, setLoadedMedia] = useState({});

  const markLoaded = (index) => {
    setLoadedMedia((prev) => ({ ...prev, [index]: true }));
  };

  const handleMouseEnter = (i) => {
    if (videoRefs.current[i] && !isMobile) {
      videoRefs.current[i].play();
    }
  };

  const handleMouseLeave = (i) => {
    if (videoRefs.current[i] && !isMobile) {
      videoRefs.current[i].pause();
      videoRefs.current[i].currentTime = 0;
    }
  };

  const handleClick = (i) => {
    if (videoRefs.current[i] && isMobile) {
      if (videoRefs.current[i].paused) {
        videoRefs.current[i].play();
      } else {
        videoRefs.current[i].pause();
        videoRefs.current[i].currentTime = 0;
      }
    }
  };

  return (
    <section className="page-section mx-auto max-w-6xl px-4 flow-rhythm">
      <header className="surface-card p-6 md:p-10">
        <div className="space-y-6">
          <h1 className="type-h1 text-center md:text-left">{project.title}</h1>

          <dl className="grid grid-cols-1 gap-4 border-t border-[color:var(--color-border)] pt-5 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="type-caption">Year</dt>
              <dd className="mt-1 text-sm md:text-base">{project.year}</dd>
            </div>
            <div>
              <dt className="type-caption">Location</dt>
              <dd className="mt-1 text-sm md:text-base">{project.location}</dd>
            </div>
            <div>
              <dt className="type-caption">Area</dt>
              <dd className="mt-1 text-sm md:text-base">{project.area}</dd>
            </div>
            <div className="sm:col-span-2 lg:col-span-1">
              <dt className="type-caption">Details</dt>
              <dd className="mt-1 text-sm md:text-base leading-relaxed text-muted">
                {project.details}
              </dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-6 md:gap-8">
        {project.gallery.map(({ url, width, height, resource_type }, index) => {
          const isLoaded = loadedMedia[index];
          const orientation = width && height && width >= height ? "aspect-[16/10]" : "aspect-[4/5]";

          return (
            <article
              key={index}
              className="relative overflow-hidden rounded-[var(--radius-md)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)]"
            >
              {!isLoaded && (
                <div className={`absolute inset-0 animate-pulse bg-[color:var(--color-border)]/50 ${orientation}`} />
              )}

              <div className="relative">
                {resource_type === "image" ? (
                  <Image
                    src={url}
                    alt={`${project.title} image ${index + 1}`}
                    width={width}
                    height={height}
                    loading="lazy"
                    className={`h-auto w-full object-cover transition-opacity duration-500 ${
                      isLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    onLoad={() => markLoaded(index)}
                  />
                ) : resource_type === "video" ? (
                  <video
                    src={url}
                    ref={(el) => (videoRefs.current[index] = el)}
                    width={width}
                    height={height}
                    className={`h-auto w-full object-cover transition-opacity duration-500 ${
                      isLoaded ? "opacity-100" : "opacity-0"
                    }`}
                    preload="metadata"
                    muted
                    playsInline
                    controls
                    onLoadedData={() => markLoaded(index)}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                    onClick={() => handleClick(index)}
                    tabIndex={0}
                  />
                ) : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
