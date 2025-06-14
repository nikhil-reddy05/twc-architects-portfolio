// app/interiors/page.jsx
import interiorProjects from "@/data/interiorProjects";
import ProjectGallery from "@/components/ProjectGallery";

export default function InteriorsPage() {
  return (
    <section className="pt-12 pb-8">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 uppercase">
        Our Interiors
      </h2>
      <ProjectGallery projects={interiorProjects} basePath="interiors" />
    </section>
  );
}
