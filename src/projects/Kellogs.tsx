import type { Project } from "../types/project";
import { projectStyles as ps } from "../styles/projectStyles";

export default function Kellogs({ project }: { project: Project }) {
  return (
    <div className={ps.page}>
      <h1 className={`${ps.title} mb-8 hidden lg:block`}>{project.title}</h1>
      <p className={ps.description}>
        Crocheted blanket of 135 x 190 cm depicting a Kellog's cereal box. I
        turned the image into pixels grids using 6 colors.
      </p>
      <div className="mt-10 grid w-full grid-cols-1 items-start gap-6 md:grid-cols-[2fr_1fr] max-w-200 mx-auto">
        <img
          src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/crochet/2.png"
          className="block max-h-200 w-full object-contain"
        />
        <iframe
          src="https://www.instagram.com/p/DCm4Sm3vBRp/embed/"
          title="Kellogg's crochet blanket Instagram post"
          width="325"
          height="740"
          allow="encrypted-media"
          allowFullScreen
          className="mx-auto block w-full max-w-81.25 rounded-xl border-0"
        />
      </div>
    </div>
  );
}
