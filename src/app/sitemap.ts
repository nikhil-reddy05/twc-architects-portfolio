import { MetadataRoute } from "next";
import architectureProjects from "@/data/architectureProjects";
import interiorProjects from "@/data/interiorProjects";

export default function sitemap(): MetadataRoute.Sitemap {
  const architectureData: MetadataRoute.Sitemap = architectureProjects.map(
    ({ slug }) => ({
      url: `https://www.twcarchitects.com/architecture/${slug}`,
    })
  );
  const interiorData: MetadataRoute.Sitemap = interiorProjects.map(
    ({ slug }) => ({
      url: `https://www.twcarchitects.com/interiors/${slug}`,
    })
  );

  return [
    {
      url: "https://www.twcarchitects.com/",
    },
    {
      url: "https://www.twcarchitects.com/architecture",
    },
    {
      url: "https://www.twcarchitects.com/interiors",
    },
    {
      url: "https://www.twcarchitects.com/contact",
    },
    {
      url: "https://www.twcarchitects.com/about",
    },
    ...architectureData,
    ...interiorData,
  ];
}
