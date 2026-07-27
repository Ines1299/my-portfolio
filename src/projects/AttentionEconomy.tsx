import type { Project } from "../types/project";

export default function AttentionEconomy({ project }: { project: Project }) {
  const illustration =
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/3.jpg";

  const secIllustrations = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/4.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/5.png",
  ];

  return (
    <div className="container">
      <h1 className="text-6xl font-bold mt-12 text-center">{project.title}</h1>

      <p className="text-sm leading-relaxed max-w-4xl mx-auto mt-10 mb-10">
        {project.description}
      </p>
      <div className="max-w-3xl mx-auto mt-10">
        <img src={illustration} alt={project.title} />
      </div>
      <div className="flex items-start max-w-4xl gap-4 mx-auto mt-10">
        <img
          src={secIllustrations[0]}
          alt={project.title}
          className="w-1/2 max-h-180 object-contain"
        />
        <img
          src={secIllustrations[1]}
          alt={project.title}
          className="w-1/2 max-h-180 object-contain"
        />
      </div>
    </div>
  );
}
