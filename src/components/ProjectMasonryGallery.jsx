import ProjectCard from "@/components/ProjectCard";
import { cn } from "@/lib/utils";

export default function ProjectMasonryGallery({
  projects,
  basePath,
  columns = { desktop: 3, tablet: 2, mobile: 1 },
  gap = "2.5rem",
  imageRadius = "0px",
  showProjectName = true,
  nameTextSize = "text-xs",
  nameColor = "#34312c",
  nameHoverColor = "#111111",
  nameLetterSpacing = "0.18em",
  hoverEffect = true,
  className,
}) {
  return (
    <div
      className={cn("project-masonry", className)}
      style={{
        "--masonry-columns-mobile": columns.mobile,
        "--masonry-columns-tablet": columns.tablet,
        "--masonry-columns-desktop": columns.desktop,
        "--masonry-gap": gap,
      }}
    >
      {projects.map(({ id, title, image, slug }, index) => (
        <ProjectCard
          key={id}
          href={basePath && slug ? `/${basePath}/${slug}` : undefined}
          imageSrc={image.url}
          imageAlt={title}
          imageWidth={image.width}
          imageHeight={image.height}
          projectName={showProjectName ? title : ""}
          priority={index === 0}
          hoverEffect={hoverEffect}
          imageRadius={imageRadius}
          nameTextSize={nameTextSize}
          nameColor={nameColor}
          nameHoverColor={nameHoverColor}
          nameLetterSpacing={nameLetterSpacing}
        />
      ))}
    </div>
  );
}
