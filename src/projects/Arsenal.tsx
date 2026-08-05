import type { Project } from "../types/project";
import ReactPlayer from "react-player";

export default function Arsenal({ project }: { project: Project }) {
  return (
    <div className="container">
      <h1 className="text-6xl font-bold mt-12 text-center">{project.title}</h1>
      <img
        src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/crochet/4.png"
        className="mt-10 w-full max-h-180 object-contain"
      />
      <div className="max-w-5xl mx-auto mt-16">
        <ReactPlayer
          src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/crochet/5.mp4"
          width="100%"
          height="100%"
          controls={true}
          playing={true}
          muted={true}
          loop={true}
        />
      </div>
      <img
        src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/crochet/3.png"
        className="w-full max-h-180 object-contain"
      />
    </div>
  );
}
