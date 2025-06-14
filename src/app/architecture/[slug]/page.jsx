// app/architecture/[slug]/page.jsx
import architectureProjects from "@/data/architectureProjects";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function ArchitectureProjectPage({ params }) {
  const project = architectureProjects.find((p) => p.slug === params.slug);

  if (!project) return notFound();

  return (
    <section className="pt-12 pb-8 max-w-5xl mx-auto px-4">
      <h1 className="text-3xl sm:text-4xl font-bold uppercase mb-4 text-center">
        {project.title}
      </h1>

      <p className="text-gray-300 text-base sm:text-lg mb-10 text-center">
        {project.details}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {project.gallery.map((img, index) => (
          <div
            key={index}
            className="relative w-full aspect-[4/3] overflow-hidden rounded-xl shadow-md"
          >
            <Image
              src={img}
              alt={`${project.title} image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
