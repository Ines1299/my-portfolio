import type { Category, Subcategory } from "../types/project";

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabase";
import AllProjects from "../components/AllProjects";

export default function ProjectsPage() {
  const [category, setCategory] = useState<Category | null>(null);
  const [subcategory, setSubcategory] = useState<Subcategory | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { slug, subcategorySlug } = useParams();
  const navigate = useNavigate();

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
      <div className="mx-auto max-w-225 px-6 pt-16 sm:px-8">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-10 w-fit rounded bg-(--color-primary) px-8 py-2 text-sm font-bold text-white transition-opacity hover:opacity-80"
        >
          Go Back
        </button>

        <h1
          className="text-5xl font-bold sm:text-6xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h1>
      </div>

      {/* Shared project grid + sorting */}
      <AllProjects
        categoryId={isAllProjects ? category.id : undefined}
        subcategoryId={!isAllProjects ? subcategory?.id : undefined}
      />
    </div>
  );
}
