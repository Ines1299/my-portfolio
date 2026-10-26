import type { Project } from "../types/project";
import { projectStyles as ps } from "../styles/projectStyles";

export default function IllustrationTemplate({
  project,
}: {
  project: Project;
}) {
  return (
    <div className={ps.page}>
      <h1 className={`${ps.title} mb-8 hidden lg:block`}>{project.title}</h1>
      <p className={ps.description}>{project.description}</p>
      <div className="mx-auto flex w-full items-center justify-center mt-10">
        {project.full_image_url && (
          <img
            src={project.full_image_url}
            alt={project.title}
            className="block h-auto max-h-[85svh] w-auto max-w-full object-contain"
          />
        )}
      </div>
    </div>
  );
}
