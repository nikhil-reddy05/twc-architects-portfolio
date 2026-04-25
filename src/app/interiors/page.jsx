import interiorProjects from "@/data/interiorProjects";
import ProjectGallery from "@/components/ProjectGallery";

export const metadata = {
  title: "Interiors | TWC Architects",
  description:
    "Explore selected interior design projects by TWC Architects, crafted with a focus on light, material, and detail.",
  alternates: {
    canonical: "https://www.twcarchitects.com/interiors",
  },
  openGraph: {
    title: "Interiors | TWC Architects",
    description:
      "Selected interior design projects by TWC Architects, crafted with a focus on light, material, and detail.",
    url: "https://www.twcarchitects.com/interiors",
  },
};

export default function InteriorsPage() {
  return (
    <section className="page-section flow-rhythm">
      <div className="mx-auto max-w-3xl space-y-5 text-center">
        <h2 className="type-h1">Interiors Portfolio</h2>
        <p className="type-body text-muted leading-relaxed">
          Spaces refined through proportion, texture, and light. Browse selected
          interior projects to see complete image sequences and project
          specifications.
        </p>
      </div>

      <div className="pt-4 md:pt-8">
        <ProjectGallery projects={interiorProjects} basePath="interiors" />
      </div>
    </section>
  );
}
