import architectureProjects from "@/data/architectureProjects";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ArchitectureProjectPage({ params }) {
  const { slug } = await params;
  const project = architectureProjects.find((p) => p.slug === slug);

  if (!project) return notFound();

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

      <div className="columns-1  lg:columns-2 gap-6 space-y-6 px-2 md:px-8">
        {project.gallery.map((img, index) => (
          <div
            key={index}
            className="relative mb-8 break-inside-avoid overflow-hidden rounded-3xl bg-neutral-100 group"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={img}
                alt={`${project.title} image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1"
                loading="lazy"
              />
              {/* Optional: Overlay or hover effect here */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
