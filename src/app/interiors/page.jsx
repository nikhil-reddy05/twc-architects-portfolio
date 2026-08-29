// app/interiors/page.jsx
import interiorProjects from "@/data/interiorProjects";
import DotPageBackground from "@/components/DotPageBackground";
import ProjectHero from "@/components/ProjectHero";
import ProjectMasonryGallery from "@/components/ProjectMasonryGallery";
import { interiorsPageTheme } from "@/config/projectPageThemes";
import JsonLd from "@/components/JsonLd";
import { getBreadcrumbJsonLd } from "@/lib/siteConfig";

export const metadata = {
  title: "Interior Design Projects in Hyderabad",
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
  const { background, hero, gallery } = interiorsPageTheme;

  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Interiors", path: "/interiors" },
        ])}
      />
      <DotPageBackground
      backgroundColor={background.color}
      dotColor={background.dotColor}
      dotOpacity={background.dotOpacity}
      dotSize={background.dotSize}
      dotSpacing={background.dotSpacing}
    >
      <ProjectHero
        title="Interior Projects"
        subtitle="Explore our interior works"
        image="https://res.cloudinary.com/dseo7dzfr/image/upload/v1754439036/1301_Vasavi_ID_TWC_Architects_page-0005_cgownr.jpg"
        imageAlt="TWC Architects interior project"
        overlayIntensity={hero.overlayIntensity}
        titleColor={hero.titleColor}
        titleSize={hero.titleSize}
        subtitleColor={hero.subtitleColor}
        subtitleSize={hero.subtitleSize}
        heroHeight={hero.height}
        textAlign={hero.textAlign}
        fadeColor={background.color}
      />

      <div
        className={`mx-auto ${gallery.maxWidth} px-6 py-20 sm:py-24 lg:px-8 lg:py-28`}
      >
        <ProjectMasonryGallery
          projects={interiorProjects}
          basePath="interiors"
          columns={gallery.columns}
          gap={gallery.gap}
          imageRadius={gallery.imageRadius}
          nameColor={gallery.projectNameColor}
          nameHoverColor={gallery.projectNameHoverColor}
          nameTextSize={gallery.projectNameSize}
          nameLetterSpacing={gallery.projectNameLetterSpacing}
        />
      </div>
    </DotPageBackground>
    </>
  );
}
