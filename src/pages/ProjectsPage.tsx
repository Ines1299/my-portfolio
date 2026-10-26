import type { Category, Subcategory } from "../types/project";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "../lib/supabase";
import AllProjects from "../components/AllProjects";
import BackButton from "../components/BackButton";

export default function ProjectsPage() {
  const [category, setCategory] = useState<Category | null>(null);
  const [subcategory, setSubcategory] = useState<Subcategory | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { slug, subcategorySlug } = useParams();

  useEffect(() => {
    let cancelled = false;

    async function fetchPageData() {
      setLoading(true);
      setError(null);
      setCategory(null);
      setSubcategory(null);

      if (!slug || !subcategorySlug) {
        setError("Page not found.");
        setLoading(false);
        return;
      }

      // Find the parent category
      const { data: categoryData, error: categoryError } = await supabase
        .from("categories")
        .select("*")
        .eq("slug", slug)
        .single();

      if (cancelled) return;

      if (categoryError || !categoryData) {
        console.error(categoryError);
        setError("Category not found.");
        setLoading(false);
        return;
      }

      setCategory(categoryData as Category);

      // If the URL ends in /all, we don't need a subcategory
      if (subcategorySlug === "all") {
        setLoading(false);
        return;
      }

      // Otherwise, find the specific subcategory
      const { data: subcategoryData, error: subcategoryError } = await supabase
        .from("subcategories")
        .select("*")
        .eq("slug", subcategorySlug)
        .eq("category_id", categoryData.id)
        .single();

      if (cancelled) return;

      if (subcategoryError || !subcategoryData) {
        console.error(subcategoryError);
        setError("Subcategory not found.");
        setLoading(false);
        return;
      }

      setSubcategory(subcategoryData as Subcategory);
      setLoading(false);
    }

    fetchPageData();

    return () => {
      cancelled = true;
    };
  }, [slug, subcategorySlug]);

  if (loading) {
    return <p className="py-16 text-center">Loading...</p>;
  }

  if (error || !category) {
    return <p className="py-16 text-center">{error ?? "Page not found."}</p>;
  }

  const isAllProjects = subcategorySlug === "all";
  const title = isAllProjects ? category.name : subcategory?.name;

  return (
    <div className="w-full">
      {/* Page heading */}
      <div className="relative mx-auto w-full max-w-250 px-5 pt-6 sm:px-8 lg:max-w-none lg:px-0">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-3 lg:mx-auto lg:max-w-250 lg:px-8">
          {/* Back Button */}
          <div className="lg:absolute lg:left-5 lg:top-6">
            <BackButton />
          </div>

          {/* Title  */}

          <h1 className="min-w-0 text-center text-3xl font-bold leading-tight sm:text-5xl lg:col-start-2 lg:text-6xl">
            {title}
          </h1>
          <div className="invisible" aria-hidden="true">
            <BackButton />
          </div>
        </div>
      </div>

      {/* Shared project grid + sorting */}
      <AllProjects
        categoryId={isAllProjects ? category.id : undefined}
        subcategoryId={!isAllProjects ? subcategory?.id : undefined}
      />
    </div>
  );
}
