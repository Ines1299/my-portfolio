import type { Project } from "../types/project";

export default function IllustratedMan({ project }: { project: Project }) {
  const illustrations = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/12.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/13.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/11.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/10.jpg",
  ];

  return (
    <div className="container">
      <h1 className="text-6xl font-bold mt-12 text-center">{project.title}</h1>

      <p className="text-sm leading-relaxed max-w-4xl mx-auto mt-10 mb-10">
        {project.description}
      </p>

      <div className="flex items-start max-w-4xl gap-4 mx-auto mt-10">
        <img
          src={illustrations[0]}
          alt={project.title}
          className="w-1/2 max-h-180 object-contain"
        />
        <img
          src={illustrations[1]}
          alt={project.title}
          className="w-1/2 max-h-180 object-contain"
        />
      </div>
      <div className="flex items-start max-w-4xl gap-4 mx-auto mt-10">
        <img
          src={illustrations[2]}
          alt={project.title}
          className="w-1/2 max-h-180 object-contain"
        />
        <img
          src={illustrations[3]}
          alt={project.title}
          className="w-1/2 max-h-180 object-contain"
        />
      </div>
    </div>
  );
}
