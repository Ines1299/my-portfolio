import type { Project } from "../types/project";

export default function Divided({ project }: { project: Project }) {
  const posters = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/1.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/2.jpg",
  ];

  return (
    <div className="container">
      <h1 className="text-6xl font-bold mt-12 text-center">{project.title}</h1>

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
      <p className="text-sm leading-relaxed max-w-4xl mx-auto mt-10 mb-10">
        {project.description}
      </p>
    </div>
  );
}
