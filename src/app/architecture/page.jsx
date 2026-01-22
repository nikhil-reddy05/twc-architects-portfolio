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
    <section className="pt-12 pb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 uppercase">
        Our Architecture
      </h2>
      <ProjectGallery projects={architectureProjects} basePath="architecture" />
    </section>
  );
}
