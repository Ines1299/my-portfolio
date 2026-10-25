import type { Project } from "../types/project";

import SlideShow from "../components/SlideShow";
import ProjectSpecs from "../components/ProjectSpecs";
import { projectStyles as ps } from "../styles/projectStyles";

export default function NcNews({ project }: { project: Project }) {
  const pages = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/proggraming/nc-news-homepage.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/proggraming/nc-news-article-page.jpg",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/proggraming/nc-news-profile.jpg",
  ];

  const wireframes = [
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/proggraming/Homepage.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/proggraming/Single%20Article.png",
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/proggraming/Profile.png",
  ];

  return (
    <div className={ps.page}>
      <h1 className={`${ps.title} mb-8`}>{project.title}</h1>
      <div className=" mb-5 ">
        <a
          href="https://nc-news-one.vercel.app/"
          className="text-xl font-bold underline  text-(--color-secondary)"
        >
          Website
        </a>
      </div>
      <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[2fr_1fr] lg:gap-16">
        <p className={ps.description}>
          NC News is a comprehensive project developed during the Northcoders
          JavaScript bootcamp, intended to replicate the functionalities of a
          real-world news platform. It features a custom REST API integrated
          with a PostgreSQL database, while the frontend is built using React.
          The platform allows users to explore a variety of articles covering
          topics such as cooking, coding, and football. Articles can be sorted
          by date, votes, or title, and users can search through titles,
          authors, and subjects to locate specific content. Each article also
          includes functionality for comments and voting, enhancing community
          engagement and interaction. Users can also swap between hardcoded
          profiles and see all the articles written by each user. This project
          emphasizes both backend and frontend development. It involves
          designing a robust database schema, building and thoroughly testing
          numerous API endpoints, and ensuring effective error handling.
          Simultaneously, significant attention has been paid to creating a
          clean and user-friendly interface that enhances the overall user
          experience.
        </p>
        <div className="flex gap-12 items-start max-w-4xl mx-auto mb-10">
          <ProjectSpecs
            specs={[
              { label: "Front-end", value: "React · JavaScript · Tailwind" },
              { label: "Back-end", value: "Supabase · PostgreSQL" },
              { label: "Role", value: "Solo" },
              { label: "Year", value: "2026" },
              { label: "Status", value: "In production" },
            ]}
          />
        </div>
      </div>

      <div className="columns-3 gap-2 mt-10 max-w-5xl mx-auto">
        {wireframes.map((url) => (
          <img
            key={url}
            src={url}
            alt={project.title}
            className="w-full mb-2"
          />
        ))}
      </div>
      <div className="max-w-4xl mx-auto">
        <SlideShow images={pages} />
      </div>
    </div>
  );
}
