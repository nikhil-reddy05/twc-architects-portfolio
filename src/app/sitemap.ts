import { MetadataRoute } from "next";
import architectureProjects from "@/data/architectureProjects";
import interiorProjects from "@/data/interiorProjects";
import { siteConfig } from "@/lib/siteConfig";

const BASE_URL = siteConfig.url;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
  ];

  const primaryRoutes: MetadataRoute.Sitemap = [
    "/architecture",
    "/interiors",
    "/about",
    "/contact",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const architectureRoutes: MetadataRoute.Sitemap = architectureProjects.map(
    ({ slug }) => ({
      url: `${BASE_URL}/architecture/${slug}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    })
  );

  const interiorRoutes: MetadataRoute.Sitemap = interiorProjects.map(
    ({ slug }) => ({
      url: `${BASE_URL}/interiors/${slug}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    })
  );

  return [...home, ...primaryRoutes, ...architectureRoutes, ...interiorRoutes];
}
