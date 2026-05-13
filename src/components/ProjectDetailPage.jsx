import DotPageBackground from "@/components/DotPageBackground";
import ProjectDescriptionBlock from "@/components/ProjectDescriptionBlock";
import ProjectDetailHeader from "@/components/ProjectDetailHeader";
import ProjectDetailsCard from "@/components/ProjectDetailsCard";
import ProjectGallery from "@/components/ProjectGallery";
import { projectDetailTheme } from "@/config/projectPageThemes";

export default function ProjectDetailPage({ project, backHref }) {
  const { background } = projectDetailTheme;

  return (
    <DotPageBackground
      backgroundColor={background.color}
      dotColor={background.dotColor}
      dotOpacity={background.dotOpacity}
      dotSize={background.dotSize}
      dotSpacing={background.dotSpacing}
      className="min-h-screen"
    >
      <ProjectDetailHeader
        project={project}
        backHref={backHref}
        theme={projectDetailTheme}
      />
      <ProjectDescriptionBlock project={project} theme={projectDetailTheme} />
      <ProjectDetailsCard project={project} theme={projectDetailTheme} />
      <ProjectGallery project={project} theme={projectDetailTheme} />
    </DotPageBackground>
  );
}
