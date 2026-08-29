import Image from "next/image";

export default function ProjectDescriptionBlock({ project, theme }) {
  const description = project.details || project.description || "NA";

  return (
    <section
      className={`mx-auto ${theme.layout.maxWidth} px-6 py-9 sm:py-10 md:py-12 lg:px-8 lg:py-20`}
      aria-labelledby="project-description"
    >
      <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <h2
            id="project-description"
            className="text-lg font-light leading-tight tracking-[0.02em] text-[#25231f] sm:text-2xl lg:text-[1.65rem]"
          >
            Project Description
          </h2>
          <p className="mt-6 max-w-xl text-xs leading-6 text-[#625d55] sm:text-[0.95rem] sm:leading-8 lg:mt-8 lg:text-[1.045rem]">
            {description}
          </p>
        </div>

        <div className="relative aspect-[4/3] overflow-hidden bg-[#ebe7df] shadow-[0_24px_70px_rgba(24,27,31,0.12)] lg:aspect-[16/10]">
          <Image
            src={project.image.url}
            alt={`${project.title} main image`}
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
