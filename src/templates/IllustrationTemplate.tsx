import type { Project } from "../types/project";

export default function IllustrationTemplate({
  project,
}: {
  project: Project;
}) {
  return (
    <div className="container py-16">
      <h1>{project.title}</h1>
      <img src={project.image_url} alt={project.title} />
      <p>{project.year}</p>
      <p>{project.description}</p>
    </div>
  );
}
