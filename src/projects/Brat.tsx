import type { Project } from "../types/project";
import { projectStyles as ps } from "../styles/projectStyles";

export default function Brat({ project }: { project: Project }) {
  return (
    <div className={ps.page}>
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 lg:gap-16">
        {/* Left column */}
        <div className="flex flex-col gap-10">
          <div>
            <h1 className={`${ps.title} mb-8`}>{project.title}</h1>

            <p className={ps.description}>
              Charli XCX inspired 4ply purple top. Brat lettering was made using
              a software for cross stitching and the rest of the top is a
              mixture of mesh crochet and double crochet.
            </p>
          </div>
          <img
            src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/crochet/Untitled-1.png"
            className="w-full max-w-200 object-contain"
          />
        </div>
        {/* Right column */}

        <div className="flex flex-col items-center gap-10 ">
          <iframe
            src="https://www.tiktok.com/player/v1/7519551388339244321"
            title="BRAT crochet top TikTok"
            width="325"
            height="740"
            loading="lazy"
            allow="encrypted-media; fullscreen"
            allowFullScreen
            className="w-full max-w-81.25 border-0 rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
