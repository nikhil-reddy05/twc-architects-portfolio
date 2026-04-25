// app/interiors/page.jsx
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
      <h2 className="type-h1 text-center">
        Our Interiors
      </h2>
      <ProjectGallery projects={interiorProjects} basePath="interiors" />
    </section>
  );
}
