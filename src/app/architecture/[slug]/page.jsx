import ProjectDetailPage from "@/components/ProjectDetailPage";
import architectureProjects from "@/data/architectureProjects";
import { notFound } from "next/navigation";

export default async function ArchitectureProjectPage({ params }) {
  const { slug } = await params;
  const project = architectureProjects.find((p) => p.slug === slug);
  if (!project) return notFound();

  return <ProjectDetailPage project={project} backHref="/architecture" />;
}
