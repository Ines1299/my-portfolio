import type { Project } from "../types/project";
import ReactPlayer from "react-player";
import { projectStyles as ps } from "../styles/projectStyles";

export default function Arsenal({ project }: { project: Project }) {
  return (
    <div className={ps.page}>
      <h1 className={`${ps.title} mb-8`}>{project.title}</h1>
      <div className={ps.intro}>
        <p className={ps.description}>
          Crochet arsenal scarf where I designed the imagery on Procreate, then
          used a cross-stitching software to utilize the design.
        </p>
        <img
          src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/crochet/3.png"
          className={ps.image}
        />
      </div>

      <div className="max-w-200 mx-auto">
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
        src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/crochet/4.png"
        className="mt-10 mx-auto w-full max-w-220 object-contain"
      />
    </div>
  );
}
