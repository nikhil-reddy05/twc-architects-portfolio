import Image from "next/image";
import Link from "next/link";

export default function ProjectGallery({ projects, basePath }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map(({ id, title, image, description, slug }) => (
        <div
          key={id}
          className="overflow-hidden rounded-[var(--radius-md)] border border-[color:var(--color-border)] shadow-lg group"
        >
          <Link href={`/${basePath}/${slug}`} className="block">
            <div className="relative w-full h-full">
              <Image
                src={image.url}
                alt={title}
                width={image.width}
                height={image.height}
                loading="lazy"
                className="block w-full h-full object-contain group-hover:brightness-50 group-hover:scale-105 transition-transform duration-300"
              />
            <div className="absolute bottom-1 w-full  flex justify-center xl:hidden">
              <h4 className="text-[color:var(--color-text)] type-caption text-center w-[70%] bg-[color:var(--color-bg)]/90 backdrop-blur-sm font-semibold mb-2 rounded-[var(--radius-sm)] flex justify-center px-3 py-2">
                {title}
              </h4>
            </div>
            {/* Info overlay*/}
              <div
                className="
          absolute inset-0
          flex flex-col items-center justify-center
          p-4 text-center
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          z-20
        "
              >
                <h3 className="text-[color:var(--color-text)] text-lg sm:text-xl font-semibold mb-2">
                  {title}
                </h3>
                <p className="text-[color:var(--color-text)] text-sm sm:text-base">
                  {description}
                </p>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
