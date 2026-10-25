import type { Subcategory, Category } from "../types/project";

import { supabase } from "../lib/supabase";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router";

const subcategoryImages: Record<string, string> = {
  illustration:
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/categories/illustration_design.png",
  branding:
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/categories/branding_design.png",
  publication:
    "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/categories/publication_design.png",
};

const subcategoryOrder = ["branding", "publication", "illustration"];

export default function CategoryPage() {
  const [subcategories, setSubCategories] = useState<Subcategory[]>([]);
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { slug } = useParams();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let cancelled = false;

    async function fetchSubCategories() {
      if (!slug) {
        setError("Category not found.");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError(null);
      setCategory(null);
      setSubCategories([]);

      const { data: categoryData, error: categoryError } = await supabase
        .from("categories")
        .select("*")
        .eq("slug", slug)
        .single();

      if (cancelled) return;

      if (categoryError || !categoryData) {
        console.log(categoryError);
        setError("Category not found");
        setLoading(false);
        return;
      }

      setCategory(categoryData as Category);

      const { data, error: subCategoryError } = await supabase
        .from("subcategories")
        .select("*")
        .eq("category_id", categoryData.id);

      if (cancelled) return;

      if (subCategoryError) {
        console.log(subCategoryError);
        setError("Couldn't load subcategories.");
        setLoading(false);
        return;
      }

      if (!data || data.length === 0) {
        navigate(`/category/${slug}/all`, { replace: true });
        return;
      }

      const sorted = (data as Subcategory[]).sort((a, b) => {
        const aIndex = subcategoryOrder.indexOf(a.slug);
        const bIndex = subcategoryOrder.indexOf(b.slug);

        return (
          (aIndex === -1 ? Infinity : aIndex) -
          (bIndex === -1 ? Infinity : bIndex)
        );
      });
      setSubCategories(sorted);
      setLoading(false);
    }
    fetchSubCategories();

    return () => {
      cancelled = true;
    };
  }, [slug, navigate]);

  if (loading) {
    return (
      <div className="flex min-h-svh items-center justify-center bg-(--color-secondary)">
        <p className="text-white">Loading...</p>
      </div>
    );
  }
  if (error || !category) {
    return <p className="p-10">{error ?? "Category not found."}</p>;
  }

  return (
    <section className="flex min-h-svh w-full items-center justify-center bg-(--color-secondary) px-5 py-16 sm:px-8 lg:px-12">
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
            color: "var(--color-light-grey)",
            WebkitTextStroke: "3px var(--color-primary)",
            paintOrder: "stroke fill",
          }}
        >
          {category.name}
        </motion.h2>

        <div className="grid grid-cols-3 items-end gap-4 sm:gap-8 lg:gap-16">
          {subcategories.map((subcategory) => {
            const imageUrl = subcategoryImages[subcategory.slug];

            return (
              <Link
                key={subcategory.id}
                to={`/category/${slug}/${subcategory.slug}`}
                className="group flex flex-col items-center gap-4 no-underline"
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
                  className="flex h-60 w-full items-end justify-center sm:h-70 lg:h-85"
                >
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt=""
                      className="max-h-full max-w-full object-contain"
                    />
                  ) : (
                    <span className=" no-underline text-sm text-black">
                      {subcategory.name}
                    </span>
                  )}
                </motion.div>

                <p className=" no-underline text-center text-sm font-bold text-black sm:text-lg">
                  {subcategory.name}
                </p>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
