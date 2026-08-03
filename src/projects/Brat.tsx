import type { Project } from "../types/project";

export default function Bray({ project }: { project: Project }) {
  return (
    <div className="container">
      <h1 className="text-6xl font-bold mt-12 text-center">{project.title}</h1>
      <img
        src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/crochet/1.png"
        className="w-full max-h-180 object-contain"
      />
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
  );
}
