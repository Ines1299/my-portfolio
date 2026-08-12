import type { Project } from "../types/project";

import ReactPlayer from "react-player";

export default function Spillr({ project }: { project: Project }) {
  const demos = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/proggraming/spillr-gif-1.mp4",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/proggraming/spillr-gif-2.mp4",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/proggraming/spillr-gif-3.mp4",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/proggraming/spillr-gif-4.mp4",
  ];

  const screenshots = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/proggraming/figma1.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/proggraming/figma2.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/proggraming/figma3.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/proggraming/figma4.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/proggraming/figma5.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/proggraming/figma6.png",
  ];

  const wireframe = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/proggraming/1.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/proggraming/2.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/proggraming/3.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/proggraming/4.png",
  ];

  return (
    <div className="container pb-16">
      <h1 className="text-6xl font-bold mt-12 mb-6 text-center">
        {project.title}
      </h1>

      <p className="text-sm leading-relaxed max-w-4xl mx-auto mt-10 mb-10 ">
        {project.description}
      </p>
      <div className="columns-4 gap-6 mt-10 max-w-5xl mx-auto">
        {wireframe.map((url) => (
          <img
            src={url}
            key={url}
            alt={project.title}
            className="w-full mb-2"
          />
        ))}
      </div>
      <img
        src={
          "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/proggraming/color.png"
        }
        key={project.title}
        alt={project.title}
        className="w-full mb-2"
      />
      <div className="columns-3 gap-2 mt-10 max-w-5xl mx-auto">
        {screenshots.map((url) => (
          <img
            src={url}
            key={url}
            alt={project.title}
            className="w-full mb-2"
          />
        ))}
      </div>
      <div className="columns-2 gap-2 mt-10 max-w-5xl mx-auto">
        {demos.map((url) => (
          <ReactPlayer
            src={url}
            width="100%"
            height="100%"
            controls={true}
            playing={true}
            muted={true}
            loop={true}
            className="w-full mb-2"
          />
        ))}
      </div>
    </div>
  );
}
