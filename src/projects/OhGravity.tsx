import type { Project } from "../types/project";

export default function AttentionEconomy({ project }: { project: Project }) {
  const screenprint =
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/8.png";

  const etching =
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/7.jpg";

  const comic =
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/9.jpg";

  return (
    <div className="container">
      <h1 className="text-6xl font-bold mt-12 text-center">{project.title}</h1>

      <p className="text-sm leading-relaxed max-w-4xl mx-auto mt-10">
        {project.description}
      </p>
      <div className="max-w-4xl mx-auto ">
        <img src={screenprint} alt={project.title} />
      </div>
      <div className=" max-w-4xl gap-4 mx-auto mt-10">
        <img
          src={comic}
          alt={project.title}
          className="w-full max-h-180 object-contain"
        />
      </div>
      <div className=" max-w-4xl gap-4 mx-auto mt-10">
        <img
          src={etching}
          alt={project.title}
          className="w-full max-h-180 object-contain"
        />
      </div>
    </div>
  );
}
