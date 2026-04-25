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
  return (
    <section className="page-section px-6 max-w-5xl mx-auto flow-rhythm">
      <h1 className="type-h1 text-center">
        About Us
      </h1>

      {/* Firm Story */}
      <div className="space-y-4 type-body text-muted">
        <p>
          <strong>The White Walls Company</strong> is a multidisciplinary design
          studio committed to creating thoughtful, elegant spaces that
          seamlessly blend architecture and interiors.
        </p>
        <p>
          With a focus on minimalism, sustainability, and cultural context, we
          craft buildings that are both functional and inspiring. From
          residential to commercial, each project is a reflection of our
          client’s vision and our commitment to design excellence.
        </p>
      </div>

      {/* Team */}
      <h2 className="type-h2 text-center">
        Meet the Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {team.map((member, index) => (
          <div
            key={index}
            className="surface-card p-6 text-center shadow-md hover:shadow-xl transition duration-[var(--motion-250)]"
          >
            {/* Profile image placeholder */}
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white text-xl font-bold">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>

            {/* Name & role */}
            <h3 className="text-lg font-semibold text-[color:var(--color-text)] mb-1 md:text-xl">
              {member.name}
            </h3>
            <p className="text-muted text-sm mb-3">{member.role}</p>
                {member.role2 && (<p className="text-muted text-sm mb-3">{member.role2}</p>)}
            {/* Social */}
            {member.social && (
              <a
                href={member.social}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm link-accent hover:underline"
              >
                View Profile
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

const team = [
  {
    name: "Ar. Pranav Jella",
    role: "Principal Architect",
    role2: "Director",
  },
];
