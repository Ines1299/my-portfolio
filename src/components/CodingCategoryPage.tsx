import { Link } from "react-router-dom";
import type { Category, Subcategory } from "../types/project";

import Terminal from "./Terminal";
import BackButton from "./BackButton";

const storageUrl =
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/categories";

const subcategoryImages: Record<string, string> = {
  illustration: `${storageUrl}/illustration_coding.png`,
  branding: `${storageUrl}/branding_coding.png`,
  publication: `${storageUrl}/publication_coding.png`,
};

interface CodingCategoryGridProps {
  category: Category;
  subcategories: Subcategory[];
}

export default function CodingCategoryPage({
  category,
  subcategories,
}: CodingCategoryGridProps) {
  return (
    <section className="relative flex min-h-svh w-full items-center justify-center bg-(--color-background) px-4 pb-16 pt-24 sm:px-8 lg:min-h-[calc(100svh-5rem)] lg:px-12 lg:py-8">
      {/* Back button */}
      <div className="absolute left-5 top-6 z-20 p-2 sm:left-8 lg:left-12">
        <BackButton />
      </div>

      {/* Terminal */}
      <div className="mx-auto w-full max-w-300">
        <Terminal title={`${category.slug} — terminal`} showCommands={false}>
          {/* Category heading */}
          <h2
            className="mb-10 text-center text-5xl uppercase text-(--color-primary) sm:mb-12 sm:text-7xl lg:mb-8 lg:text-8xl"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {category.name}
          </h2>

          {/* Subcategory grid */}
          <div className="grid w-full grid-cols-1 items-center justify-items-center gap-10 sm:grid-cols-3 sm:gap-6 lg:gap-10">
            {subcategories.map((subcategory) => {
              const imageUrl = subcategoryImages[subcategory.slug];

              return (
                <Link
                  key={subcategory.id}
                  to={`/category/${category.slug}/${subcategory.slug}`}
                  className="group flex flex-col items-center gap-4 no-underline"
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt=""
                      className="h-36 w-36 object-contain transition-transform duration-200 group-hover:scale-110 sm:h-40 sm:w-40 lg:h-56 lg:w-56"
                    />
                  ) : (
                    <div className="flex h-36 w-36 items-center justify-center text-center text-(--color-primary) sm:h-40 sm:w-40 lg:h-56 lg:w-56">
                      {subcategory.name}
                    </div>
                  )}

                  <span
                    className="text-center text-base text-(--color-primary) sm:text-lg lg:text-xl"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {subcategory.name}
                  </span>
                </Link>
              );
            })}
          </div>
        </Terminal>
      </div>
    </section>
  );
}
