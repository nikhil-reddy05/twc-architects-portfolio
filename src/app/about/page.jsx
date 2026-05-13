import DotPageBackground from "@/components/DotPageBackground";
import TeamProfileCard from "@/components/TeamProfileCard";
import { aboutPageTheme } from "@/config/projectPageThemes";

export const metadata = {
  title: "About | TWC Architects",
  description:
    "Learn about TWC Architects (The White Walls Company), a multidisciplinary studio creating thoughtful architecture and interiors, and meet the team.",
  alternates: {
    canonical: "https://www.twcarchitects.com/about",
  },
  openGraph: {
    title: "About | TWC Architects",
    description:
      "Learn about TWC Architects (The White Walls Company) and meet the team behind the studio.",
    url: "https://www.twcarchitects.com/about",
    siteName: "TWC Architects",
    type: "website",
  },
};

export default function AboutPage() {
  const { background, content, teamCard } = aboutPageTheme;
  const principal = team[0];

  return (
    <DotPageBackground
      backgroundColor={background.color}
      dotColor={background.dotColor}
      dotOpacity={background.dotOpacity}
      dotSize={background.dotSize}
      dotSpacing={background.dotSpacing}
    >
      <div className="mx-auto max-w-7xl px-6 pb-20 pt-28 sm:pb-24 sm:pt-36 lg:px-8 lg:pb-32 lg:pt-40">
        <section className={`mx-auto ${content.maxWidth} text-center`}>
          <h1
            className="mb-8 text-3xl font-semibold uppercase leading-tight tracking-[0.12em] sm:text-4xl"
            style={{ color: content.headingColor }}
          >
            About Us
          </h1>

          {/* Firm Story */}
          <div
            className="mx-auto flex max-w-[48rem] flex-col gap-4 text-left text-[0.78rem] leading-6 sm:gap-5 sm:text-center sm:text-base sm:leading-8 md:text-lg md:leading-9"
            style={{ color: content.mutedTextColor }}
          >
            <p>
              <strong style={{ color: content.textColor }}>The White Walls Company</strong> is a multidisciplinary design studio committed to creating thoughtful, elegant spaces that seamlessly blend architecture and interiors.
            </p>
            <p>
              With a focus on minimalism, sustainability, and cultural context, we craft buildings that are both functional and inspiring. From residential to commercial, each project is a reflection of our client’s vision and our commitment to design excellence.
            </p>
          </div>
        </section>

        {/* Team */}
        <section className="mt-20 sm:mt-24 lg:mt-28">
          <h2
            className="mb-10 text-center text-xl font-semibold uppercase tracking-[0.16em] sm:mb-12 sm:text-2xl"
            style={{ color: content.headingColor }}
          >
            Meet the Team
          </h2>

          <TeamProfileCard
            name={principal.name}
            role={principal.role}
            secondaryRole={principal.role2}
            imageSrc="/ju-profile-picture.avif"
            imageAlt={`${principal.name}, ${principal.role}`}
            backgroundText={principal.name}
            cardHeight={teamCard.cardHeight}
            cardBackground={teamCard.backgroundColor}
            cardRadius={teamCard.radius}
            cardShadow={teamCard.shadow}
            backgroundTextOpacity={teamCard.backgroundTextOpacity}
            imageClassName={teamCard.imageClassName}
          />
        </section>
      </div>
    </DotPageBackground>
  );
}

const team = [
  {
    name: "Ar. Pranav Jella",
    role: "Principal Architect",
    role2: "Director",
  },
];
