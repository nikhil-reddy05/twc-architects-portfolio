// Single source of truth for site-wide SEO + business data.
// Used by layout metadata, structured data (JSON-LD), sitemap, robots, manifest.

export const siteConfig = {
  name: "TWC Architects",
  legalName: "The White Walls Company",
  url: "https://www.twcarchitects.com",
  locale: "en_IN",
  tagline: "Architecture & Interior Design Studio in Hyderabad",
  description:
    "TWC Architects (The White Walls Company) is an architecture and interior design studio in Hyderabad, Telangana. We design timeless homes, villas, and commercial interiors with a focus on minimalism, natural light, and craftsmanship.",
  founder: "Ar. Pranav Jella",
  telephone: "+91-7036113378",
  email: "thewhitewallscompany@gmail.com",
  address: {
    locality: "Nalgonda",
    region: "Telangana",
    country: "IN",
  },
  geo: {
    latitude: 17.068867,
    longitude: 79.264052,
  },
  // Profiles that reinforce entity identity for Google (Knowledge Graph).
  sameAs: [
    "https://instagram.com/thewhitewallscompany",
    "https://wa.me/917036113378",
  ],
  ogImage: "/twc-b.png",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  keywords: [
    "architects in Hyderabad",
    "interior designers in Hyderabad",
    "architecture firm Hyderabad",
    "interior design studio Hyderabad",
    "residential architects Hyderabad",
    "villa design Hyderabad",
    "home interior designers Telangana",
    "modern architecture India",
    "TWC Architects",
    "The White Walls Company",
    "Pranav Jella architect",
  ],
};

// LocalBusiness is the highest-value schema for a studio with a physical
// presence + service area — it powers local pack / map results.
export function getLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "LocalBusiness"],
    "@id": `${siteConfig.url}/#business`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    alternateName: siteConfig.legalName,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.ogImage}`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    telephone: siteConfig.telephone,
    email: siteConfig.email,
    founder: { "@type": "Person", name: siteConfig.founder },
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address.locality,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    areaServed: [
      { "@type": "City", name: "Nalgonda" },
      { "@type": "City", name: "Hyderabad" },
      { "@type": "State", name: "Telangana" },
      { "@type": "Country", name: "India" },
    ],
    knowsAbout: [
      "Architecture",
      "Interior Design",
      "Residential Design",
      "Commercial Design",
      "Villa Design",
    ],
    sameAs: siteConfig.sameAs,
  };
}

export function getWebSiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    publisher: { "@id": `${siteConfig.url}/#business` },
    inLanguage: "en-IN",
  };
}

export function getBreadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

// Per-project rich data (helps image + creative-work rich results).
export function getProjectJsonLd(project, category, path) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description || project.details || undefined,
    url: `${siteConfig.url}${path}`,
    image: project.image?.url,
    genre: category.label,
    locationCreated: project.location
      ? { "@type": "Place", name: project.location }
      : undefined,
    creator: {
      "@type": "Organization",
      name: siteConfig.name,
      "@id": `${siteConfig.url}/#business`,
    },
  };
}
