import type { Project } from "../types/project";
import { projectStyles as ps } from "../styles/projectStyles";

export default function Kellogs({ project }: { project: Project }) {
  return (
    <div className={ps.page}>
      <h1 className={`${ps.title} mb-8`}>{project.title}</h1>
      <div className="flex max-w-200 gap-4 mx-auto">
        <img
          src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/crochet/2.png"
          className="w-full max-h-180 object-contain"
        />
        <iframe
          src="https://www.instagram.com/p/DCm4Sm3vBRp/embed/"
          width="325"
          height="740"
          allow="encrypted-media"
          allowFullScreen
          style={{
            border: 0,
            borderRadius: 12,
          }}
        />
      </div>
    </div>
  );
}
