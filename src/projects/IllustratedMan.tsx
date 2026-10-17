import type { Project } from "../types/project";
import { projectStyles as ps } from "../styles/projectStyles";

const illustrations = [
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/12.jpg",
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/13.jpg",
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/11.jpg",
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/10.jpg",
];

export default function IllustratedMan({ project }: { project: Project }) {
  return (
    <div className={ps.page}>
      <h1 className={`${ps.title} mb-8`}>{project.title}</h1>

      <p className={ps.description}>{project.description}</p>
      <div className={ps.gallery}>
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
    </div>
  );
}
