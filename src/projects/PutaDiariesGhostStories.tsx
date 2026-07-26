import type { Project } from "../types/project";
import SlideShow from "../components/SlideShow";

import ReactPlayer from "react-player";

export default function PutaDiariesGhostStories({
  project,
}: {
  project: Project;
}) {
  const coverBackCover = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/puta-diaries-ghost-stories/1.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/puta-diaries-ghost-stories/2.png",
  ];

  const zine4Pages = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/puta-diaries-ghost-stories/3.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/puta-diaries-ghost-stories/4.png",
  ];

  const scans = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/puta-diaries-ghost-stories/5.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/puta-diaries-ghost-stories/6.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/puta-diaries-ghost-stories/7.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/puta-diaries-ghost-stories/8.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/puta-diaries-ghost-stories/9.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/puta-diaries-ghost-stories/10.png",
  ];

  const cyanotypes = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/puta-diaries-ghost-stories/11.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/puta-diaries-ghost-stories/12.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/puta-diaries-ghost-stories/13.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/puta-diaries-ghost-stories/14.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/puta-diaries-ghost-stories/15.png",
  ];

  const reliefPrints = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/puta-diaries-ghost-stories/16.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/puta-diaries-ghost-stories/17.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/puta-diaries-ghost-stories/18.jpg",
  ];

  const reliefPrints2 = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/puta-diaries-ghost-stories/19.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/puta-diaries-ghost-stories/20.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/puta-diaries-ghost-stories/21.jpg",
  ];

  const halfPanties = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/puta-diaries-ghost-stories/22.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/puta-diaries-ghost-stories/23.jpg",
  ];

  return (
    <div className="container pb-16">
      <h1 className="text-6xl font-bold mt-12 mb-6 text-center">
        {project.title}
      </h1>

      <div className="flex gap-2 max-w-6xl mx-auto">
        <img src={coverBackCover[0]} alt={project.title} className="w-1/2 " />
        <img src={coverBackCover[1]} alt={project.title} className="w-1/2 " />
      </div>

      <p className="text-sm leading-relaxed max-w-4xl mx-auto mt-10 mb-10 text-pink-400">
        Puta Diaries: Ghost Stories is an archive book which features
        illustrations and text from the project Puta Diaries, as well as new and
        unused material. It is an A4 book spiral bounded and was printed in a
        Xerox V180.
      </p>

      <div className="flex flex-col gap-2 max-w-5xl mx-auto ">
        <img src={zine4Pages[0]} alt={project.title} className="w-full" />
        <img src={zine4Pages[1]} alt={project.title} className="w-full" />
      </div>

      <div className="columns-3 gap-2 mt-10 max-w-5xl mx-auto">
        {scans.map((url) => (
          <img
            key={url}
            src={url}
            alt={project.title}
            className="w-full mb-2"
          />
        ))}
      </div>

      <div className="flex gap-8 items-start mt-16">
        <p className=" text-sm leading-relaxed mx-auto mt-16 text-pink-400 w-1/2 pt-10">
          During this project, I explored various ways to express myself and
          create. I used scans for the cover and back cover. I created screen
          prints, cyanotypes and relief prints. I also utilized Photoshop,
          InDesign, and Spectrolite to edit photos and prepare the book layout.
        </p>

        <div className="flex gap-4 w-1/2">
          <SlideShow images={cyanotypes} />
        </div>
      </div>

      <div className="flex gap-8 mt-16 max-w-4xl mx-auto">
        <div className="max-w-3xl mx-auto mt-4 w-1/2">
          <SlideShow images={reliefPrints} />
        </div>

        <div className="max-w-3xl mx-auto mt-4 w-1/2">
          <SlideShow images={reliefPrints2} />
        </div>
      </div>

      <div className="flex gap-2 max-w-4xl mx-auto mt-16">
        <img src={halfPanties[0]} alt={project.title} className="w-1/2" />
        <img src={halfPanties[1]} alt={project.title} className="w-1/2" />
      </div>
      <div className="max-w-5xl mx-auto mt-16">
        <ReactPlayer
          src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/videos/puta-diaries-gs.mp4"
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
