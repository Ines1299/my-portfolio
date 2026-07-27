import type { Project } from "../types/project";

export default function IllustrationTemplate({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="container pb-16">
      <h1 className="text-6xl font-bold mt-12 text-center">{project.title}</h1>
      <div className="max-w-3xl mx-auto mt-10">
        <img src={project.full_image_url} alt={project.title} />
      </div>
      <p className="text-sm leading-relaxed max-w-4xl mx-auto mt-10 mb-10">
        {project.description}
      </p>
    </div>
  );
}
