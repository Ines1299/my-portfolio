import { Link } from "react-router-dom";
import type { Category } from "../types/project";
import Terminal from "./Terminal";

const storageUrl =
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/categories";

const categoryImages: Record<string, string> = {
  design: `${storageUrl}/design_coding.png`,
  programming: `${storageUrl}/coding_coding.png`,
  crochet: `${storageUrl}/crochet_coding.png`,
};

interface CodingFolderGridProps {
  categories: Category[];
}

export default function CodingFolderGrid({
  categories,
}: CodingFolderGridProps) {
  return (
    <section
      id="projects"
      className="flex min-h-svh w-full items-center justify-center bg-(--color-background) px-4 py-16 sm:px-8 lg:min-h-[calc(100svh-5rem)] lg:px-12 lg:py-4"
    >
      <div className="mx-auto w-full max-w-300">
        <Terminal title="projects — terminal">
          <h2
            className="mb-10 text-center text-5xl text-(--color-primary) sm:mb-12 sm:text-7xl lg:mb-8 lg:text-8xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            PROJECTS
          </h2>
          <div className="grid w-full grid-cols-1 items-center justify-items-center gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-10">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="group flex flex-col items-center gap-4 no-underline"
              >
                <img
                  src={categoryImages[category.slug]}
                  alt=""
                  className="w-36 object-contain transition-transform duration-200 group-hover:scale-110 sm:w-40 lg:w-56"
                />

                <span
                  className="text-center text-base text-(--color-primary) sm:text-lg lg:text-xl"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </Terminal>
      </div>
    </section>
  );
}
