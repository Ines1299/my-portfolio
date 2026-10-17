import type { Project } from "../types/project";
import { projectStyles as ps } from "../styles/projectStyles";

export default function Divided({ project }: { project: Project }) {
  const posters = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/1.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/2.jpg",
  ];

  return (
    <div className={ps.page}>
      <h1 className={`${ps.title} mb-8`}>{project.title}</h1>
      <p className={ps.description}>{project.description}</p>

      <div className="flex items-start max-w-4xl gap-4 mx-auto mt-10">
        <img
          src={posters[0]}
          alt={project.title}
          className="w-1/2 max-h-180 object-contain"
        />
        <img
          src={posters[1]}
          alt={project.title}
          className="w-1/2 max-h-180 object-contain"
        />
      </div>
    </div>
  );
}
