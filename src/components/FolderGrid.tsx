import type { Category } from "../types/project";

import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";

const categoryImages: Record<string, string> = {
  design:
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/categories/design_design.png",
  programming:
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/categories/coding_design.png",
  crochet:
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/categories/crochet_design.png",
};

const categoryOrder = ["design", "programming", "crochet"];

export default function FolderGrid() {
  const [categories, setCategories] = useState<Category[]>([]);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    async function fetchCategories() {
      const { data, error } = await supabase.from("categories").select("*");

      if (error) {
        console.error(error);
        return;
      }

      const sorted = (data as Category[]).sort(
        (a, b) => categoryOrder.indexOf(a.slug) - categoryOrder.indexOf(b.slug),
      );
      setCategories(sorted);
    }
    fetchCategories();
  }, []);

  return (
    <section
      id="projects"
      className=" flex h-svh w-full items-center justify-center bg-(--color-secondary) px-5 py-16 sm:px-8 lg:px-12"
    >
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto w-full max-w-300"
      >
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 text-center text-5xl font-bold sm:mb-16 sm:text-6xl"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-primary)",
            WebkitTextStroke: "1.5px white",
            paintOrder: "stroke fill",
          }}
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-3 items-end gap-4 sm:gap-8 lg:gap-16">
          {categories.map((category) => {
            const imageUrl = categoryImages[category.slug];

            return (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="group flex flex-col items-center gap-4 no underline"
              >
                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          scale: 1.08,
                          rotate: 3,
                        }
                  }
                  transition={{
                    type: "spring",
                    stiffness: 160,
                    damping: 18,
                  }}
                  className="flex h-50 w-full items-end justify-center sm:h-55 lg:h-70"
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt=""
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <span className=" no-underline text-sm text-black">
                      {category.name}
                    </span>
                  )}
                </motion.div>

                <p className=" no-underline text-center text-sm font-bold text-black sm:text-lg">
                  {category.name}
                </p>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
