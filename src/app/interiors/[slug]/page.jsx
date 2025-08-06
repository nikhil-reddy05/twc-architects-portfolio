"use client";
import interiorProjects from "@/data/interiorProjects";
import Image from "next/image";
import { notFound } from "next/navigation";
import { useRef } from "react";

export default async function InteriorProjectPage({ params }) {
  const { slug } = params;
  const project = interiorProjects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const isMobile =
    typeof window !== "undefined" &&
    window.matchMedia("(hover: none) and (pointer: coarse)").matches;

  const videoRefs = useRef([]);

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
    <section className="pt-12 pb-8 max-w-5xl mx-auto px-4">
      <h1 className="text-2xl sm:text-3xl font-bold uppercase mb-4 text-center">
        {project.title}
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-6 text-sm font-medium text-neutral-400 uppercase tracking-wide">
        <span>{project.year}</span>
        <span className="hidden sm:inline">|</span>
        <span>{project.location}</span>
        <span className="hidden sm:inline">|</span>
        <span>{project.area}</span>
      </div>
      <p className="text-gray-300 text-base sm:text-lg mb-10 text-center">
        {project.details}
      </p>
      <div className="columns-1 lg:columns-2 gap-6 space-y-6 px-2 md:px-8">
        {project.gallery.map(({ url, width, height, resource_type }, index) => (
          <div
            key={index}
            className="relative mb-8 break-inside-avoid overflow-hidden rounded-3xl bg-neutral-100 group"
          >
            <div className="relative w-full h-full">
              {resource_type === "image" ? (
                <Image
                  src={url}
                  alt={`${project.title} image`}
                  width={width}
                  height={height}
                  className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1"
                  loading="lazy"
                />
              ) : resource_type === "video" ? (
                <video
                  src={url}
                  ref={(el) => (videoRefs.current[index] = el)}
                  width={width}
                  height={height}
                  className="object-cover w-full h-full"
                  style={{ display: "block" }}
                  preload="metadata"
                  muted
                  playsInline
                  controls={true}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  onClick={() => handleClick(index)}
                  tabIndex={0}
                />
              ) : null}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
