import type { Project } from "../types/project";
import { projectStyles as ps } from "../styles/projectStyles";

export default function Brat({ project }: { project: Project }) {
  return (
    <div className={ps.page}>
      <h1 className={`${ps.title} mb-8`}>{project.title}</h1>
      <div className={ps.intro}>
        <p className={ps.description}>
          Charli XCX inspired 4ply purple top. Brat lettering was made using a
          software for cross stitching and the rest of the top is a mixture of
          mesh crochet and double crochet.
        </p>
        <img
          src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/crochet/1.png"
          className="w-full max-h-180 object-contain"
        />
      </div>

      <div>
        <iframe
          src="https://www.tiktok.com/embed/v2/7519551388339244321"
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
