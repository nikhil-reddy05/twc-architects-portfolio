import ProjectDetailPage from "@/components/ProjectDetailPage";
import interiorProjects from "@/data/interiorProjects";
import { notFound } from "next/navigation";

export default async function InteriorProjectPage({ params }) {
  const { slug } = await params;
  const project = interiorProjects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return <ProjectDetailPage project={project} backHref="/interiors" />;
}
