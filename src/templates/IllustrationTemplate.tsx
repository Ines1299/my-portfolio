import type { Project } from "../types/project";

export default function IllustrationTemplate({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="container pb-16">
      <h1 className="text-6xl font-bold mt-12 text-center">{project.title}</h1>
      <img src={project.image_url} alt={project.title} />
      <p>{project.year}</p>
      <p>{project.description}</p>
    </div>
  );
}
