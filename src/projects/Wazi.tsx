import type { Project } from "../types/project";

import Slideshow from "../components/SlideShow";
import ReactPlayer from "react-player";
import { projectStyles as ps } from "../styles/projectStyles";

const stories = [
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/wazi/1.jpg",
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/wazi/2.jpg",
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/wazi/3.jpg",
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/wazi/4.jpg",
];

const logo =
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/wazi/9.png";

const popUpStore = [
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/wazi/6.jpg",
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/wazi/7.png",
];

export default function Wazi({ project }: { project: Project }) {
  return (
    <div className={ps.page}>
      <h1 className={`${ps.title} mb-8 hidden lg:block`}>{project.title}</h1>

      {/* Campaign video */}
      <div className="max-w-4xl mx-auto overflow-hidden mb-20">
        <div className="aspect-video w-full">
          <ReactPlayer
            src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/wazi/8.mp4"
            width="100%"
            height="100%"
            controls={true}
            playing={true}
            muted={true}
            loop={true}
          />
        </div>
      </div>

      {/* Description, Pop-up images, stories and logo */}

      <div className="mx-auto mt-12 grid w-full max-w-4xl grid-cols-1 items-start gap-10 md:grid-cols-2 lg:gap-16">
        <div className="flex min-w-0 flex-col gap-10">
          <p className={ps.description}>
            Collaborative project made for the eye-wear brand Wazi. We were
            asked to do a re-branding and new campaign using social media as a
            way to reach and connect with more audience for the Brand.
          </p>
          <img
            src={popUpStore[1]}
            alt={`${project.title} pop-up store 1`}
            className="block h-auto w-full object-contain"
          />
        </div>

        <div className="mx-auto w-full max-w-75 min-w-0">
          <Slideshow images={stories} />
        </div>
      </div>

      <div className="mx-auto mt-12 grid w-full max-w-4xl grid-cols-1 items-center gap-8 md:grid-cols-2 lg:gap-12">
        <img
          src={popUpStore[0]}
          alt={`${project.title} pop-up store 2`}
          className="block h-auto w-full object-contain"
        />

        <img
          src={logo}
          alt={`${project.title} logo`}
          className="block h-auto w-full object-contain"
        />
      </div>
    </div>
  );
}
