import type { Project } from "../types/project";
import SlideShow from "../components/SlideShow";
import { projectStyles as ps } from "../styles/projectStyles";

export default function UrbanPicnic({ project }: { project: Project }) {
  const mainBox = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/main-box.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/main-box-sides.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/main-box-back.png",
  ];

  const triangleBox = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/triangle-open.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/triangle-closed.png",
  ];

  const rectangleBox = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/rectangle-up.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/rectangle-side.png",
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
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/patterns-1.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/patterns-2.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/pattern-4.png",
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
    <div className={ps.page}>
      <h1 className={`${ps.title} mb-8 hidden lg:block`}>{project.title}</h1>

      <div className="max-w-4xl mx-auto w-full">
        <img
          src={
            "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/urban-picnic/1.png"
          }
          alt={project.title}
          className="w-full max-h-180 object-contain block"
        />
      </div>

      <p className={ps.description}>
        During a brief given by the studio ForPeople I was asked to create a new
        plant-based takeaway restaurant based in London and think of a pop-up
        event to showcase it and its menu. I founded Urban Picnic, a restaurant
        serving Mediterranean picnic-inspired cuisine. My goal was to create a
        safe and inviting space where people could share each other’s company,
        experiences, and most importantly, food.
      </p>

      {/* Two logos */}
      <div className="mx-auto mt-16 max-w-200 grid w-full grid-cols-2 items-center gap-6">
        {logos.map((url, index) => (
          <img
            key={url}
            src={url}
            alt={`${project.title} logo ${index + 1}`}
            className="block h-auto w-full object-contain"
          />
        ))}
      </div>

      {/* Social Media*/}
      <div className="sm:col-span-2 mt-12">
        <img
          src={socialMediaMockup}
          alt={project.title}
          className="block h-auto w-full object-contain"
        />
      </div>
      {/* Branding sketch + description */}

      <div className="max-w-200 mx-auto mt-12 grid grid-cols-1 items-start gap-8 sm:grid-cols-2">
        <img
          src={brandingSketch}
          alt={project.title}
          className="block h-auto w-full object-contain"
        />

        <p className={ps.description}>
          I began to explore various types of packaging, and it was during this
          process that I came up with the idea of incorporating gingham pattern
          on the inside, which makes it work as a picnic blanket when opened,
          reenforcing the motto of the brand to be able to have a picnic
          anywhere. I illustrated items from the menu and used it for the
          outside of the package. I also created a picnic box which would be
          used to carry the individual takeaway boxes. I printed the layout
          patterns and lasercut them.
        </p>
      </div>

      {/* Packaging slideshows */}

      <div className="mx-auto grid w-full max-w-4xl grid-cols-1 items-start gap-8 sm:grid-cols-2 mt-10">
        <div className="min-w-0">
          <SlideShow images={mainBox} />
        </div>
        <div className="min-w-0">
          <SlideShow images={triangleBox} />
        </div>
        <div className="min-w-0">
          <SlideShow images={rectangleBox} />
        </div>
        <div className="min-w-0">
          <SlideShow images={patterns} />
        </div>
      </div>

      {/* Event description */}

      <p className={`${ps.description} mx-auto mt-20 `}>
        To promote the pop-up event, I designed a series of illustrations
        featuring the Urban Picnic characters enjoying picnics in different
        settings. My idea was to collaborate with an app to create a buddy-up
        experience, encouraging people to meet new people. This approach not
        only brings Urban Picnic's message to life, but also opens the event to
        a wider audience.
      </p>

      {/* Posters */}

      <div className="mx-auto mt-20 grid w-full grid-cols-1 items-start gap-6  max-w-300 sm:grid-cols-3">
        {posters.map((url, index) => (
          <img
            key={url}
            src={url}
            alt={`${project.title} poster ${index + 1}`}
            className="block h-auto w-full object-contain"
          />
        ))}
      </div>

      {/* Poster mockups */}

      <div className="mx-auto mt-20 grid w-full max-w-4xl grid-cols-1 items-start gap-6 sm:grid-cols-2">
        {posterMockups.map((url, index) => (
          <img
            key={url}
            src={url}
            alt={`${project.title} poster mockup ${index + 1}`}
            className="block h-auto w-full object-contain"
          />
        ))}
      </div>

      {/* Stickers */}

      <div className="mx-auto mt-20 grid w-full grid-cols-3 max-w-200 items-center gap-3 sm:gap-6">
        {stickers.map((url, index) => (
          <img
            key={url}
            src={url}
            alt={`${project.title} sticker ${index + 1}`}
            className="block h-auto w-full object-contain"
          />
        ))}
      </div>

      {/* Closing description and mockups*/}
      <div className="mx-auto mt-20 grid w-full grid-cols-1 items-start gap-10 md:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-10">
          <p className={ps.description}>
            Urban Picnic is a playful vegan food brand bringing the joy of a
            picnic to any place, any time. It invites city dwellers to slow
            down, connect, and savor the moment. Designed for young, socially
            conscious foodies, especially those craving connection in an
            isolating urban environment, Urban Picnic turns a good meal into a
            chance to make memories.
          </p>

          <img
            src={mockups[0]}
            alt={`${project.title} final mockup 2`}
            className="block h-auto w-full object-contain"
          />
        </div>

        <div>
          <img
            src={mockups[1]}
            alt={`${project.title} final mockup 1`}
            className="block h-auto w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
