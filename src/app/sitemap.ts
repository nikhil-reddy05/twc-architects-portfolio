import { MetadataRoute } from "next";
import architectureProjects from "@/data/architectureProjects";
import interiorProjects from "@/data/interiorProjects";

export default function sitemap(): MetadataRoute.Sitemap {
  const architectureData: MetadataRoute.Sitemap = architectureProjects.map(
    ({ slug }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/architecture/${slug}`,
    })
  );
  const interiorData: MetadataRoute.Sitemap = interiorProjects.map(
    ({ slug }) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/interiors/${slug}`,
    })
  );

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/architecture`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/interiors`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    },
    ...architectureData,
    ...interiorData,
  ];
}
