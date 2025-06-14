export default function AboutPage() {
  return (
    <section className="pt-12 pb-8 px-6 max-w-5xl mx-auto text-white">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 uppercase text-center">
        About Us
      </h1>

      {/* Firm Story */}
      <div className="mb-12 space-y-4 text-lg leading-relaxed text-gray-300">
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
      <h2 className="text-2xl font-semibold mb-10 uppercase text-center">
        Meet the Team
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {team.map((member, index) => (
          <div
            key={index}
            className="bg-[#121212] rounded-xl p-6 text-center shadow-md hover:shadow-xl transition duration-300"
          >
            {/* Profile image placeholder */}
            <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white text-xl font-bold">
              {member.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>

            {/* Name & role */}
            <h3 className="text-xl font-semibold text-white mb-1">
              {member.name}
            </h3>
            <p className="text-gray-400 text-sm mb-3">{member.role}</p>

            {/* Social */}
            {member.social && (
              <a
                href={member.social}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:underline"
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
    name: "Riya Kapoor",
    role: "Principal Architect",
    social: "https://linkedin.com/in/riya-kapoor",
  },
  {
    name: "Aman Verma",
    role: "Creative Director",
    social: "https://linkedin.com/in/aman-verma",
  },
  { name: "Neha Sharma", role: "Interior Designer" },
  { name: "Karan Mehta", role: "Project Manager" },
  { name: "Simran Kaur", role: "3D Visualizer" },
  { name: "Ankit Desai", role: "Design Associate" },
];
