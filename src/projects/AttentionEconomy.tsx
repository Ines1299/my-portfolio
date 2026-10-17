import type { Project } from "../types/project";
import { projectStyles as ps } from "../styles/projectStyles";

export default function AttentionEconomy({ project }: { project: Project }) {
  const illustration =
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/3.jpg";

  const secIllustrations = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/4.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/5.png",
  ];

  return (
    <div className={ps.page}>
      <h1 className={`${ps.title} mb-8`}>{project.title}</h1>
      <div className={ps.intro}>
        <p className={ps.description}>{project.description}</p>
        <div className={ps.image}>
          <img src={illustration} alt={project.title} />
        </div>
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
