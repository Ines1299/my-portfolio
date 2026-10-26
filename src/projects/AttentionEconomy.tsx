import type { Project } from "../types/project";
import { projectStyles as ps } from "../styles/projectStyles";

const illustration =
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/3.jpg";

const secIllustrations = [
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/4.jpg",
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/5.png",
];

export default function AttentionEconomy({ project }: { project: Project }) {
  return (
    <div className={ps.page}>
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:gap-16">
        {/* Left column */}
        <div className="flex flex-col gap-10">
          <div>
            <h1 className={`${ps.title} mb-8 hidden lg:block`}>
              {project.title}
            </h1>

            <p className={ps.description}>{project.description}</p>
          </div>

          <img
            src={secIllustrations[0]}
            alt={project.title}
            className="block h-auto w-full object-contain"
          />
        </div>

        {/* Right column */}

        <div className="flex flex-col gap-10 ">
          <img
            src={illustration}
            alt={project.title}
            className="block h-auto w-full object-contain"
          />
          <img
            src={secIllustrations[1]}
            alt={project.title}
            className="block h-auto w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
