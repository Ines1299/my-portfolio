import type { Project } from "../types/project";

import ReactPlayer from "react-player";
import ProjectSpecs from "../components/ProjectSpecs";

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
      <div className="flex gap-12 items-start max-w-4xl mx-auto mt-10 mb-10">
        <p className="text-sm leading-relaxed flex-1 ">{project.description}</p>
        <ProjectSpecs
          specs={[
            { label: "Front-end", value: "React Native · JavaScript · EXPO " },
            { label: "Back-end", value: "Supabase · PostgreSQL · WebSocket " },
            {
              label: "Role",
              value: (
                <>
                  <span className="block">Front-end & components</span>
                  <span className="block">Backend endpoints</span>
                  <span className="block">Design, wireframe & animations</span>
                </>
              ),
            },
            { label: "Year", value: "2026" },
            { label: "Status", value: "In production" },
          ]}
        />
      </div>
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
