import ProjectDetailPage from "@/components/ProjectDetailPage";
import JsonLd from "@/components/JsonLd";
import interiorProjects from "@/data/interiorProjects";
import {
  getBreadcrumbJsonLd,
  getProjectJsonLd,
  siteConfig,
} from "@/lib/siteConfig";
import { notFound } from "next/navigation";

const CATEGORY = { label: "Interiors" };

export function generateStaticParams() {
  return interiorProjects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = interiorProjects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };

  const title = `${project.title} — Interiors`;
  const description =
    project.description ||
    `${project.title}, an interior design project in ${
      project.location || "Hyderabad"
    } by TWC Architects (The White Walls Company).`;
  const path = `/interiors/${slug}`;

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

export default async function InteriorProjectPage({ params }) {
  const { slug } = await params;
  const project = interiorProjects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const path = `/interiors/${slug}`;

  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Interiors", path: "/interiors" },
          { name: project.title, path },
        ])}
      />
      <JsonLd data={getProjectJsonLd(project, CATEGORY, path)} />
      <ProjectDetailPage project={project} backHref="/interiors" />
    </>
  );
}
