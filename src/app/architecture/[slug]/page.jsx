import ProjectDetailPage from "@/components/ProjectDetailPage";
import JsonLd from "@/components/JsonLd";
import architectureProjects from "@/data/architectureProjects";
import {
  getBreadcrumbJsonLd,
  getProjectJsonLd,
  siteConfig,
} from "@/lib/siteConfig";
import { notFound } from "next/navigation";

const CATEGORY = { label: "Architecture" };

export function generateStaticParams() {
  return architectureProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = architectureProjects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  const title = `${project.title} — Architecture`;
  const description =
    project.description ||
    `${project.title}, an architecture project in ${
      project.location || "Hyderabad"
    } by TWC Architects (The White Walls Company).`;
  const path = `/architecture/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${path}`,
      type: "article",
      images: project.image?.url
        ? [
            {
              url: project.image.url,
              width: project.image.width,
              height: project.image.height,
              alt: project.title,
            },
          ]
        : undefined,
    },
  };
}

export default async function ArchitectureProjectPage({ params }) {
  const { slug } = await params;
  const project = architectureProjects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const path = `/architecture/${slug}`;

  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Architecture", path: "/architecture" },
          { name: project.title, path },
        ])}
      />
      <JsonLd data={getProjectJsonLd(project, CATEGORY, path)} />
      <ProjectDetailPage project={project} backHref="/architecture" />
    </>
  );
}
