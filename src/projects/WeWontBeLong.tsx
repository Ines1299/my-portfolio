import type { Project } from "../types/project";
import ReactPlayer from "react-player";

export default function WeWontBeLong({ project }: { project: Project }) {
  return (
    <div className="container">
      <h1 className="text-6xl font-bold mt-12 text-center">{project.title}</h1>

      <p className="text-sm leading-relaxed max-w-4xl mx-auto mt-10 mb-10 ">
        {project.description}
      </p>

      <div className="max-w-5xl mx-auto mt-16">
        <ReactPlayer
          src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/we-wont-be-long.mp4"
          width="100%"
          height="100%"
          controls={true}
          playing={true}
          muted={true}
          loop={true}
        />
      </div>
    </div>
  );
}
