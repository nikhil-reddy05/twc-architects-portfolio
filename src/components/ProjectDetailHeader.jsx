import Link from "next/link";

export default function ProjectDetailHeader({ project, backHref, theme }) {
  return (
    <header
      className={`mx-auto ${theme.layout.maxWidth} px-6 pt-20 sm:pt-28 md:pt-30 lg:px-8 lg:pt-44`}
    >
      <Link
        href={backHref}
        className="inline-flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#625d55] transition hover:text-[#25231f]"
      >
        <span aria-hidden="true">←</span>
        Back to Projects
      </Link>

      <h1
        className="mt-8 max-w-5xl text-[1.25rem] font-bold uppercase leading-[1.12] tracking-[0.025em] text-[#25231f] sm:mt-7 sm:text-4xl sm:tracking-[0.04em] lg:mt-10 lg:text-5xl"
      >
        {project.title}
      </h1>
    </header>
  );
}
