import type { Project } from "../types/project";

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
    <div className="container">
      <h1 className="text-6xl font-bold mt-12 text-center">{project.title}</h1>

      <div className="max-w-5xl mx-auto">
        <img
          src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/19.png"
          alt={project.title}
          className="w-full max-h-180 object-contain"
        />
      </div>

      <div className="flex items-start max-w-4xl gap-4 mx-auto ">
        <p className="text-sm leading-relaxed max-w-4xl mx-auto mt-10 mb-10">
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

      <div className="columns-3 gap-2 mt-10 max-w-5xl mx-auto">
        {illustrations.map((url) => (
          <img
            key={url}
            src={url}
            alt={project.title}
            className="w-full mb-2"
          />
        ))}
      </div>
    </div>
  );
}
