// app/interiors/page.jsx
import architectureProjects from "@/data/architectureProjects";
import ProjectGallery from "@/components/ProjectGallery";

export default function ArchitecturePage() {
  return (
    <section className="pt-12 pb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 uppercase">
        Our Architecture
      </h2>
      <ProjectGallery projects={architectureProjects} basePath="architecture" />
    </section>
  );
}
