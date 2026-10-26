import type { Project } from "../types/project";
import { projectStyles as ps } from "../styles/projectStyles";

export default function LoveEncyclopedia({ project }: { project: Project }) {
  const illustrations = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/Untitled_Artwork%203%20copy%202.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/15.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/16.JPG",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/17.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/18.jpg",
  ];

  return (
    <div className={ps.page}>
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:gap-16">
        {/* Left column */}
        <div className="flex flex-col gap-10">
          <div>
            <h1 className={`${ps.title} mb-8 hidden lg:block`}>
              {project.title}
            </h1>

            <p className={ps.description}>
              Illustrations made for a project depicting tragic love stories
              throughout history, including fictional ones.
            </p>
          </div>

          <img
            src={illustrations[0]}
            alt={project.title}
            className="block h-auto max-h-180 object-contain"
          />
        </div>

        {/* Right column */}
        <div className="mt-20">
          <img
            src={illustrations[1]}
            alt={project.title}
            className="block h-auto w-full object-contain"
          />
        </div>
      </div>

      {/* Bottom section */}

      <div className="mx-auto mt-16 grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
        {[2, 3, 4].map((index) => (
          <img
            key={index}
            src={illustrations[index]}
            alt={`${project.title} illustration ${index + 1}`}
            className="block h-auto w-full object-contain"
          />
        ))}
      </div>
    </div>
  );
}
