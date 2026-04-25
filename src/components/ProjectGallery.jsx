"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function GalleryCard({ project, basePath }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const descriptor = project.description || project.location || "View project";

  return (
    <Link
      href={`/${basePath}/${project.slug}`}
      className="group block rounded-[var(--radius-md)] border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-3 transition-all duration-300 ease-[var(--ease-standard)] hover:-translate-y-0.5 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-[calc(var(--radius-md)-2px)] bg-[color:var(--color-surface)]">
        {!isLoaded && (
          <div className="absolute inset-0 animate-pulse bg-[color:var(--color-border)]/50" />
        )}
        <Image
          src={project.image.url}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          className={`object-cover transition-all duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } group-hover:scale-[1.02]`}
          onLoad={() => setIsLoaded(true)}
        />
      </div>

      <div className="px-1 pt-4 pb-1">
        <h3 className="text-base md:text-lg font-semibold tracking-[0.06em] uppercase leading-tight text-[color:var(--color-text)]">
          {project.title}
        </h3>
        <p
          className="mt-2 text-sm text-muted leading-relaxed"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {descriptor}
        </p>
      </div>
    </Link>
  );
}

export default function ProjectGallery({ projects, basePath }) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <GalleryCard key={project.id} project={project} basePath={basePath} />
      ))}
    </div>
  );
}
