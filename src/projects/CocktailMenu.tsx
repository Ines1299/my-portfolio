import type { Project } from "../types/project";

export default function OliverConquest({ project }: { project: Project }) {
  return (
    <div className="container">
      <h1 className="text-6xl font-bold mt-12 text-center">{project.title}</h1>

      <div className="max-w-4xl mx-auto mt-10">
        <img
          src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/cocktail-menu/1.png"
          alt={project.title}
          className="w-full max-h-180 object-contain"
        />
      </div>
      <p className="text-sm leading-relaxed max-w-4xl mx-auto mt-10 mb-10 ">
        This comission was made for the bar{" "}
        <a
          href="https://www.conquestpubs.co.uk"
          className="underline"
          target="_blank"
        >
          The Oliver Conquest
        </a>{" "}
        in Aldgate East, London. The client asked me to do a cocktail menu with
        vibrant colors that was attention-grabbing. I decided to incorporate
        some of the bar’s ingredients, drinks and utensils.
      </p>

      <div className="max-w-4xl mx-auto flex">
        <img
          src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/cocktail-menu/2.png"
          alt={project.title}
          className="w-1/2 max-h-180 object-contain"
        />
        <img
          src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/cocktail-menu/3.jpg"
          alt={project.title}
          className="w-1/2 max-h-180 object-contain"
        />
      </div>
    </div>
  );
}
