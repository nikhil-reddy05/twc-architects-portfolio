const detailFields = [
  ["Project Type", "projectType"],
  ["Location", "location"],
  ["Area", "area"],
  ["Year", "year"],
  ["Status", "status"],
  ["Scope", "scope"],
];

function formatValue(value) {
  if (Array.isArray(value)) return value.length ? value.join(", ") : "NA";
  if (value === null || value === undefined || value === "") return "NA";
  return String(value);
}

export default function ProjectDetailsCard({ project, theme }) {
  return (
    <section
      className={`mx-auto ${theme.layout.maxWidth} px-6 pb-9 sm:pb-16 lg:px-8 lg:pb-20`}
      aria-labelledby="project-details"
    >
      <div className="rounded-[1.15rem] bg-[#f7f5ef]/20 p-5 shadow-[0_18px_55px_rgba(24,27,31,0.12)] backdrop-blur-[0.5px] sm:p-8 lg:p-9">
        <h2
          id="project-details"
          className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-[#6f6a62]"
        >
          Project Details
        </h2>

        <dl className="relative mt-5 grid overflow-hidden rounded-[0.9rem] sm:mt-6 sm:grid-cols-2 lg:grid-cols-3">
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-5 right-5 top-[16.666%] h-px bg-[#d8d2c8]/70 sm:left-7 sm:right-7 sm:top-1/3 lg:top-1/2"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-5 right-5 top-[33.333%] h-px bg-[#d8d2c8]/70 sm:left-7 sm:right-7 sm:top-2/3 lg:hidden"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-5 right-5 top-1/2 h-px bg-[#d8d2c8]/70 sm:hidden"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-5 right-5 top-[66.666%] h-px bg-[#d8d2c8]/70 sm:hidden"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-5 right-5 top-[83.333%] h-px bg-[#d8d2c8]/70 sm:hidden"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-5 top-5 hidden w-px bg-[#d8d2c8]/70 sm:left-1/2 sm:block lg:left-1/3"
          />
          <span
            aria-hidden="true"
            className="pointer-events-none absolute bottom-5 top-5 hidden w-px bg-[#d8d2c8]/70 lg:left-2/3 lg:block"
          />
          {detailFields.map(([label, key]) => (
            <div
              key={key}
              className="relative z-10 bg-transparent px-5 py-4 sm:px-7 sm:py-5"
            >
              <dt className="text-[0.52rem] font-semibold uppercase tracking-[0.16em] text-[#7d766d]">
                {label}
              </dt>
              <dd className="mt-2 text-sm leading-6 text-[#25231f] sm:text-[0.95rem]">
                {formatValue(project[key])}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
