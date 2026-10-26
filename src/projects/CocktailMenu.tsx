import type { Project } from "../types/project";
import { projectStyles as ps } from "../styles/projectStyles";

export default function OliverConquest({ project }: { project: Project }) {
  return (
    <div className={ps.page}>
      <div
        className="grid grid-cols-1 items-start gap-8 
       lg:grid-cols-2 lg:gap-16"
      >
        {/* Left column */}
        <div className="flex min-w-0 flex-col gap-6 lg:gap-10">
          <div>
            <h1 className={`${ps.title} mb-8 hidden lg:block`}>
              {project.title}
            </h1>

            <p className={ps.description}>
              This comission was made for the bar
              <a
                href="https://www.conquestpubs.co.uk"
                className="underline"
                target="_blank"
              >
                The Oliver Conquest
              </a>
              in Aldgate East, London. The client asked me to do a cocktail menu
              with vibrant colors that was attention-grabbing. I decided to
              incorporate some of the bar’s ingredients, drinks and utensils.
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2">
            <img
              src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/cocktail-menu/2.png"
              alt={project.title}
              className={ps.image}
            />
            <img
              src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/cocktail-menu/3.jpg"
              alt={project.title}
              className={ps.image}
            />
          </div>
        </div>

        {/* Right column */}
        <div>
          <img
            src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/cocktail-menu/1.png"
            alt={project.title}
            className={ps.image}
          />
        </div>
      </div>
    </div>
  );
}
