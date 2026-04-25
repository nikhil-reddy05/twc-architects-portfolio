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
      <div className="mx-auto max-w-3xl space-y-5 text-center">
        <h2 className="type-h1">Architecture Portfolio</h2>
        <p className="type-body text-muted leading-relaxed">
          A curated selection of residential and institutional work shaped by
          climate, context, and craftsmanship. Explore each project for full
          visual narratives and technical details.
        </p>
      </div>

      <div className="pt-4 md:pt-8">
        <ProjectGallery projects={architectureProjects} basePath="architecture" />
      </div>
    </section>
  );
}
