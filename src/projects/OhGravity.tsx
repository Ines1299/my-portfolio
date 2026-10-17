import type { Project } from "../types/project";
import { projectStyles as ps } from "../styles/projectStyles";

export default function AttentionEconomy({ project }: { project: Project }) {
  const screenprint =
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/8.png";

  const etching =
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/7.jpg";

  const comic =
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/9.jpg";

  return (
    <div className={ps.page}>
      <h1 className={`${ps.title} mb-8 `}>{project.title}</h1>

      <p className={ps.description}>{project.description}</p>
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
