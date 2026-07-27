import type { Project } from "../types/project";

import Slideshow from "../components/SlideShow";
import ReactPlayer from "react-player";

export default function Wazi({ project }: { project: Project }) {
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
  return (
    <div className="container pb-16">
      <h1 className="text-6xl font-bold mt-12 text-center">{project.title}</h1>

      <div className="max-w-5xl mx-auto mt-16">
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
      <div className="flex gap-8 mt-16 max-w-4xl mx-auto">
        <p className=" text-sm leading-relaxed mx-auto  pt-10 w-1/2">
          Collaborative project made for the eye-wear brand Wazi. We were asked
          to do a re-branding and new campaign using social media as a way to
          reach and connect with more audience for the Brand.
        </p>
        <div className="max-w-2xl mx-auto mt-4 w-1/3">
          <Slideshow images={stories} />
        </div>
      </div>
      <div className="flex gap-8 items-start">
        <div className="max-w-3xl mx-auto mt-4 w-1/2">
          <img src={popUpStore[0]} />
        </div>
        <div className="max-w-3xl mx-auto mt-4 w-1/2">
          <img src={popUpStore[1]} />
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-4 w-full">
        <img src={logo} />
      </div>
    </div>
  );
}
