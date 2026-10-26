import type { Project } from "../types/project";
import SlideShow from "../components/SlideShow";

import { projectStyles as ps } from "../styles/projectStyles";
import ReactPlayer from "react-player";

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

export default function PutaDiariesGhostStories({
  project,
}: {
  project: Project;
}) {
  return (
    <div className={ps.page}>
      <h1 className={`${ps.title} mb-8 hidden lg:block `}>{project.title}</h1>

      <div className="flex gap-4 max-w-6xl flex-col mx-auto mb-8 lg:flex-row lg:gap-2">
        <img
          src={coverBackCover[0]}
          alt={project.title}
          className="h-auto w-full object-contain lg:w-1/2"
        />
        <img
          src={coverBackCover[1]}
          alt={project.title}
          className="h-auto w-full object-contain lg:w-1/2"
        />
      </div>

      <p className={ps.description}>
        Puta Diaries: Ghost Stories is an archive book which features
        illustrations and text from the project Puta Diaries, as well as new and
        unused material. It is an A4 book spiral bounded and was printed in a
        Xerox V180.
      </p>

      <div className="flex flex-col gap-2 max-w-5xl mx-auto mt-8 ">
        <img src={zine4Pages[0]} alt={project.title} className={ps.image} />
        <img src={zine4Pages[1]} alt={project.title} className={ps.image} />
      </div>

      <div className="w-full columns-1 gap-4 mt-8 max-w-5xl mx-auto sm:columns-2 lg:mt-10 lg:columns-3 lg:gap-2">
        {scans.map((url) => (
          <img
            key={url}
            src={url}
            alt={project.title}
            className="mb-4 block h-auto w-full break-inside-avoid lg:mb-2"
          />
        ))}
      </div>

      <div className="flex flex-col gap-6 items-start mt-12 lg:mt-16 lg:flex-row lg:gap-8">
        <p
          className={`${ps.description} w-full lg:mx-auto lg:mt-16 lg:w-1/2 lg:pt-10`}
        >
          During this project, I explored various ways to express myself and
          create. I used scans for the cover and back cover. I created screen
          prints, cyanotypes and relief prints. I also utilized Photoshop,
          InDesign, and Spectrolite to edit photos and prepare the book layout.
        </p>

        <div className="w-full min-w-0 lg:w-1/2">
          <SlideShow images={cyanotypes} />
        </div>
      </div>

      <div className="flex flex-col gap-6 mt-12 max-w-4xl mx-auto lg:mt-16 lg:flex-row lg:gap-8">
        <div className="w-full min-w-0 max-w-3xl lg:mx-auto lg:mt-4 lg:w-1/2">
          <SlideShow images={reliefPrints} />
        </div>

        <div className="w-full min-w-0 lg:mx-auto lg:mt-4 lg:w-1/2">
          <SlideShow images={reliefPrints2} />
        </div>
      </div>

      <div className="flex flex-col gap-4 max-w-4xl mx-auto mt-12 lg:mt-16 lg:flex-row lg:gap-2 ">
        <img
          src={halfPanties[0]}
          alt={project.title}
          className="h-auto w-full object-contain lg:w-1/2"
        />
        <img
          src={halfPanties[1]}
          alt={project.title}
          className="h-auto w-full object-contain lg:w-1/2"
        />
      </div>

      <div className="max-w-5xl mx-auto mt-12 w-full overflow-hidden lg:mt-16">
        <ReactPlayer
          src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/videos/puta-diaries-gs.mp4"
          width="100%"
          height="auto"
          controls={true}
          playing={true}
          muted={true}
          loop={true}
        />
      </div>
    </div>
  );
}
