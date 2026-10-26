import type { Project } from "../types/project";
import { projectStyles as ps } from "../styles/projectStyles";

export default function Divided({ project }: { project: Project }) {
  const posters = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/1.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/2.jpg",
  ];

  return (
    <div className={ps.page}>
      <h1 className={`${ps.title} mb-8 hidden lg:block`}>{project.title}</h1>
      <p className={ps.description}>{project.description}</p>

      <div className="flex flex-col items-center max-w-4xl gap-4 mx-auto mt-8 lg:mt-10 lg:flex-row lg:items-start">
        <img
          src={posters[0]}
          alt={project.title}
          className="h-auto w-full object-contain lg:w-1/2 lg:max-h-180"
        />
        <img
          src={posters[1]}
          alt={project.title}
          className="h-auto w-full object-contain lg:w-1/2 lg:max-h-180"
        />
      </div>
    </div>
  );
}
