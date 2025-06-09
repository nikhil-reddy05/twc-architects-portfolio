import ProjectGallery from "@/components/ProjectGallery";

const architectureProjects = [
  {
    id: 1,
    title: "Mountain Retreat",
    image: "/images/architecture/mt-retreat.jpg",
  },
  {
    id: 2,
    title: "Urban Lofts",
    image: "/images/architecture/urban-lofts.jpg",
  },
  {
    id: 3,
    title: "Glass Pavilion",
    image: "/images/architecture/glass-pavilion.jpg",
  },
  // add more entries here...
];

export default function ArchitecturePage() {
  return (
    <section className="py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 uppercase">
        Our Architecture
      </h2>

      <ProjectGallery projects={architectureProjects} />
    </section>
  );
}
