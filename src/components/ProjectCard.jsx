import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  projectName,
  href,
  hoverEffect = true,
  imageRadius = "0px",
  nameTextSize = "text-xs",
  nameColor = "#34312c",
  nameHoverColor = "#111111",
  nameLetterSpacing = "0.18em",
  priority = false,
}) {
  const content = (
    <>
      <div
        className={cn(
          "overflow-hidden bg-[#ebe7df] shadow-[0_18px_45px_rgba(24,27,31,0.06)] transition duration-300",
          hoverEffect && "group-hover:shadow-[0_24px_60px_rgba(24,27,31,0.11)]",
        )}
        style={{ borderRadius: imageRadius }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          priority={priority}
          sizes="(min-width: 1024px) 31vw, (min-width: 640px) 46vw, 100vw"
          className={cn(
            "h-auto w-full transition duration-500",
            hoverEffect && "group-hover:scale-[1.025] group-hover:opacity-95",
          )}
        />
      </div>
      {projectName ? (
        <h2
          className={cn(
            "mt-7 text-center font-semibold uppercase text-[var(--project-name-color)] transition-colors group-hover:text-[var(--project-name-hover-color)]",
            nameTextSize,
          )}
          style={{
            "--project-name-color": nameColor,
            "--project-name-hover-color": nameHoverColor,
            letterSpacing: nameLetterSpacing,
          }}
        >
          {projectName}
        </h2>
      ) : null}
    </>
  );

  if (!href) {
    return (
      <article className="group mb-[var(--masonry-gap)] break-inside-avoid">
        {content}
      </article>
    );
  }

  return (
    <Link
      href={href}
      className="group mb-[var(--masonry-gap)] block break-inside-avoid"
    >
      {content}
    </Link>
  );
}
