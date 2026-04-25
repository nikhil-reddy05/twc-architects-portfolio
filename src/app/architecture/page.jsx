import architectureProjects from "@/data/architectureProjects";
import ProjectGallery from "@/components/ProjectGallery";

export const metadata = {
  title: "Architecture | TWC Architects",
  description:
    "Explore selected architecture projects by TWC Architects, including villas, residences, and elevation studies.",
  alternates: {
    canonical: "https://www.twcarchitects.com/architecture",
  },
  openGraph: {
    title: "Architecture | TWC Architects",
    description:
      "Selected architecture projects by TWC Architects, including villas, residences, and elevation studies.",
    url: "https://www.twcarchitects.com/architecture",
  },
};

export default async function ArchitecturePage() {
  return (
    <section className="page-section flow-rhythm">
      <h2 className="type-h1 text-center">
        Our Architecture
      </h2>
      <ProjectGallery projects={architectureProjects} basePath="architecture" />
    </section>
  );
}
