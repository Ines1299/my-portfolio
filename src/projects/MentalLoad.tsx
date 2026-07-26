import type { Project } from "../types/project";
import SlideShow from "../components/SlideShow";

export default function MentalLoad({ project }: { project: Project }) {
  const zineSlides = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/mental-load/2.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/mental-load/3.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/mental-load/4.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/mental-load/5.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/mental-load/6.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/mental-load/7.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/mental-load/8.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/mental-load/9.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/mental-load/10.jpg",
  ];

  return (
    <div className="container">
      <h1 className="text-6xl font-bold mt-12 text-center">{project.title}</h1>

      <div className="max-w-4xl mx-auto mt-10">
        <img
          src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/mental-load/1.jpg"
          alt={project.title}
          className="w-full max-h-180 object-contain"
        />
      </div>
      <p className="text-sm leading-relaxed max-w-4xl mx-auto mt-10 mb-10 text-blue-400">
        For “Mental Load” I decided to address the invisible work that women
        perform because I have begun to notice it more in my own life and the
        lives of those around me. The timing of this project, coinciding with
        Christmas and my return home to spend time with family, further
        highlighted these issues for me. In designing my zine, I scanned a
        variety of cleaning items I found around the house, selecting ones with
        striking colors and textures. I then edited these scans and incorporated
        them throughout the zine for visual impact. I really enjoy using scans,
        as they quickly capture the essence of a project. Additionally, I
        created some illustrations using Procreate to complement the text. The
        zine was made digitally using Photoshop and InDesign. To give it a
        printed feel, I used Spectrolite to mimic Riso printing textures and
        colours.
      </p>

      <div className="max-w-4xl mx-auto">
        <SlideShow images={zineSlides} />
      </div>
    </div>
  );
}
