import type { Project } from "../types/project";

import ReactPlayer from "react-player";
import ProjectSpecs from "../components/ProjectSpecs";
import { projectStyles as ps } from "../styles/projectStyles";

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
    <div className={ps.page}>
      <h1 className={`${ps.title} mb-8`}>{project.title}</h1>

      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[2fr_1fr] lg:gap-12 ">
        {/* Left column */}
        <div className="flex flex-col gap-8">
          <p className={ps.description}>{project.description}</p>
          <img
            src={
              "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/proggraming/color.png"
            }
            alt={project.title}
            className="block h-auto object-contain w-full"
          />
        </div>

        {/* Right column */}
        <div className="md:-mt-4">
          <ProjectSpecs
            specs={[
              {
                label: "Front-end",
                value: "React Native · JavaScript · EXPO ",
              },
              {
                label: "Back-end",
                value: "Supabase · PostgreSQL · WebSocket ",
              },
              {
                label: "Role",
                value: (
                  <>
                    <span className="block">Front-end & components</span>
                    <span className="block">Backend endpoints</span>
                    <span className="block">
                      Design, wireframe & animations
                    </span>
                  </>
                ),
              },
              { label: "Year", value: "2026" },
              { label: "Status", value: "In production" },
            ]}
          />
        </div>
      </div>

      {/* Wireframes */}
      <div className="mx-auto grid  w-full max-w-225 grid-cols-2 items-start gap-4 sm:grid-cols-4 mt-16 ">
        {wireframe.map((url) => (
          <img
            src={url}
            key={url}
            alt={project.title}
            className="block h-auto w-full object-contain"
          />
        ))}
      </div>

      {/* Screenshots */}
      <div className="grid w-full gap-4 mt-16 max-w-250 grid-cols-2 items-start sm:grid-cols-3 mx-auto">
        {screenshots.map((url) => (
          <img
            src={url}
            key={url}
            alt={project.title}
            className="block h-auto w-full object-contain"
          />
        ))}
      </div>

      {/* Videos*/}

      <div className="grid w-full gap-6 mt-16 max-w-200 grid-cols-1 items-start mx-auto sm:grid-cols-2">
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
