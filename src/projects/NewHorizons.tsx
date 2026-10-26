import type { Project } from "../types/project";
import { projectStyles as ps } from "../styles/projectStyles";

export default function NewHorizons({ project }: { project: Project }) {
  const illustrations = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/20.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/21.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/26.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/23.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/27.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/28.png",
  ];

  return (
    <div className={ps.page}>
      <h1 className={`${ps.title} mb-8 hidden lg:block `}>{project.title}</h1>

      <div className="max-w-5xl mx-auto w-full">
        <img
          src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/19.png"
          alt={project.title}
          className="block h-auto w-full lg:max-h-180 object-contain"
        />
      </div>

      <div className="mt-6 w-full lg:mt-0 flex items-start max-w-4xl gap-4 mx-auto ">
        <p className={ps.description}>
          On this piece of work I was asked to think about the concepts of
          contemporary mobility, migratory crisis and personal patrimony. These
          are very strong and emotional themes and so I wanted to work on
          something that is quite personal and close to me. For this effort I
          turned to my dad who had to leave the place where he was born because
          of war. I interviewed him and got a lot of visual descriptions as well
          as a timeline. I decided to take all of this information and make a
          fold book that follows a chronology of his exile.
        </p>
      </div>

      <div className="w-full columns-1 gap-4 mt-8 max-w-5xl mx-auto sm:columns-2 lg:mt-10 lg:columns-3 lg:gap-2">
        {illustrations.map((url) => (
          <img
            key={url}
            src={url}
            alt={project.title}
            className="mb-4 block h-auto w-full break-inside-avoid object-contain lg:mb-2"
          />
        ))}
      </div>
    </div>
  );
}
