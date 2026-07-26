import type { Project } from "../types/project";
import SlideShow from "../components/SlideShow";

export default function UrbanPicnic({ project }: { project: Project }) {
  const mainBox = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/2.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/3.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/4.png",
  ];

  const triangleBox = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/5.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/6.png",
  ];

  const rectangleBox = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/7.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/8.png",
  ];

  const logos = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/logo.gif",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/logo2.gif",
  ];

  const brandingSketch =
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/9.png";

  const socialMediaMockup =
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/mockup.png";

  const patterns = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/pattern1.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/pattern2.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/pattern3.jpg",
  ];

  const posters = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/poster1.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/poster2.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/poster3.jpg",
  ];

  const posterMockups = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/poster-mockup1.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/poster-mockup2.jpg",
  ];

  const stickers = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/sticker1.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/stickers2.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/stickers3.png",
  ];

  const mockups = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/mockup1.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/mockup2.png",
  ];
  return (
    <div className="container pb-16">
      <h1 className="text-6xl font-bold mt-12 mb-6 text-center">
        {project.title}
      </h1>
      <div className="max-w-4xl mx-auto">
        <img
          src={
            "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/1.png"
          }
          alt={project.title}
          className="w-full max-h-180 object-contain"
        />
      </div>
      <p className="text-sm leading-relaxed max-w-4xl mx-auto mt-10 mb-10 text-pink-400">
        During a brief given by the studio ForPeople I was asked to create a new
        plant-based takeaway restaurant based in London and think of a pop-up
        event to showcase it and its menu. I founded Urban Picnic, a restaurant
        serving Mediterranean picnic-inspired cuisine. My goal was to create a
        safe and inviting space where people could share each other’s company,
        experiences, and most importantly, food.
      </p>

      <div className="max-w-4xl mx-auto">
        <img
          src={logos[0]}
          alt={project.title}
          className="w-full max-h-180 object-contain"
        />
        <img
          src={logos[1]}
          alt={project.title}
          className="w-full max-h-180 object-contain"
        />
      </div>
      <div className="max-w-4xl mx-auto">
        <img
          src={brandingSketch}
          alt={project.title}
          className="w-full max-h-180 object-contain"
        />
      </div>

      <div className="max-w-4xl mx-auto">
        <img
          src={socialMediaMockup}
          alt={project.title}
          className="w-full max-h-180 object-contain"
        />
      </div>

      <p className=" text-sm leading-relaxed mx-auto mt-16 text-pink-400 w-1/2 pt-10">
        I began to explore various types of packaging, and it was during this
        process that I came up with the idea of incorporating gingham pattern on
        the inside, which makes it work as a picnic blanket when opened,
        reenforcing the motto of the brand to be able to have a picnic anywhere.
        I illustrated items from the menu and used it for the outside of the
        package. I also created a picnic box which would be used to carry the
        individual takeaway boxes. I printed the layout patterns and lasercut
        them.
      </p>

      <div className="flex gap-8 items-start">
        <div className="max-w-3xl mx-auto mt-4 w-1/3">
          <SlideShow images={mainBox} />
        </div>

        <div className="max-w-3xl mx-auto mt-4 w-1/3">
          <SlideShow images={triangleBox} />
        </div>
        <div className="max-w-3xl mx-auto mt-4 w-1/3">
          <SlideShow images={rectangleBox} />
        </div>
      </div>

      <div className="flex gap-8 mt-16 max-w-4xl mx-auto">
        <div className="max-w-3xl mx-auto mt-4 w-1/2">
          <SlideShow images={patterns} />
        </div>
      </div>

      <p className=" text-sm leading-relaxed mx-auto text-pink-400 w-1/2 pt-10">
        To promote the pop-up event, I designed a series of illustrations
        featuring the Urban Picnic characters enjoying picnics in different
        settings. My idea was to collaborate with an app to create a buddy-up
        experience, encouraging people to meet new people. This approach not
        only brings Urbans Picnics message to life, but also opens the event to
        a wider audience.
      </p>

      <div className="flex gap-8 items-start">
        <div className="max-w-3xl mx-auto mt-4 w-1/3">
          <img src={posters[0]} />
        </div>
        <div className="max-w-3xl mx-auto mt-4 w-1/3">
          <img src={posters[1]} />
        </div>
        <div className="max-w-3xl mx-auto mt-4 w-1/3">
          <img src={posters[2]} />
        </div>
      </div>

      <div className="flex gap-8 items-start">
        <div className="max-w-3xl mx-auto mt-4 w-1/2">
          <img src={posterMockups[0]} />
        </div>
        <div className="max-w-3xl mx-auto mt-4 w-1/2">
          <img src={posterMockups[1]} />
        </div>
      </div>

      <div className="flex gap-8 items-start">
        <div className="max-w-3xl mx-auto mt-4 w-1/3">
          <img src={stickers[0]} />
        </div>
        <div className="max-w-3xl mx-auto mt-4 w-1/3">
          <img src={stickers[1]} />
        </div>
        <div className="max-w-3xl mx-auto mt-4 w-1/3">
          <img src={stickers[2]} />
        </div>
      </div>
      <p>
        Urban Picnic is a playful vegan food brand bringing the joy of a picnic
        to any place, any time. It invites city dwellers to slow down, connect,
        and savor the moment. Designed for young, socially conscious foodies,
        especially those craving connection in an isolating urban environment,
        Urban Picnic turns a good meal into a chance to make memories.
      </p>
      <div className="flex gap-8 items-start">
        <div className="max-w-3xl mx-auto mt-4 w-1/2">
          <img src={mockups[0]} />
        </div>
        <div className="max-w-3xl mx-auto mt-4 w-1/2">
          <img src={mockups[1]} />
        </div>
      </div>
    </div>
  );
}
