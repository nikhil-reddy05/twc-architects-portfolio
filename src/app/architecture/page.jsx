import architectureProjects from "@/data/architectureProjects";
import DotPageBackground from "@/components/DotPageBackground";
import ProjectHero from "@/components/ProjectHero";
import ProjectMasonryGallery from "@/components/ProjectMasonryGallery";
import { architecturePageTheme } from "@/config/projectPageThemes";

export const metadata = {
  title: "Architecture | TWC Architects",
  description:
    "Explore selected architecture projects by TWC Architects, including villas, residences, and elevation studies.",
  alternates: {
    canonical: "https://www.twcarchitects.com/architecture",
  },
  openGraph: {
    title: "Architecture | TWC Architects",
    description:
      "Selected architecture projects by TWC Architects, including villas, residences, and elevation studies.",
    url: "https://www.twcarchitects.com/architecture",
  },
};

export default async function ArchitecturePage() {
  const { background, hero, gallery } = architecturePageTheme;

  return (
    <DotPageBackground
      backgroundColor={background.color}
      dotColor={background.dotColor}
      dotOpacity={background.dotOpacity}
      dotSize={background.dotSize}
      dotSpacing={background.dotSpacing}
    >
      <ProjectHero
        title="Architecture Projects"
        subtitle="Explore our architectural works"
        image="https://res.cloudinary.com/dseo7dzfr/image/upload/v1754161941/Enscape_2022-11-24-18-57-40_ubgbmn.png"
        imageAlt="TWC Architects architecture project"
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
          projects={architectureProjects}
          basePath="architecture"
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
  );
}
