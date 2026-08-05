import type { Subcategory, Category } from "../types/project";

import { Link } from "react-router";
import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

export default function CategoryPage() {
  const [subcategories, setSubCategories] = useState<Subcategory[]>([]);
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchSubCategories() {
      const { data: categoryData, error: categoryError } = await supabase
        .from("categories")
        .select("*")
        .eq("slug", slug)
        .single();
      if (categoryError) {
        console.log(categoryError);
        return;
      }

      setCategory(categoryData as Category);

      const { data, error } = await supabase
        .from("subcategories")
        .select("*")
        .eq("category_id", categoryData.id);

      if (error) {
        console.log(error);
      } else if (data.length === 0) {
        navigate(`/category/${slug}/all`, { replace: true });
      } else {
        setSubCategories(data as Subcategory[]);
        setLoading(false);
      }
    }
    fetchSubCategories();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (!subcategories) return <p>Project not found!</p>;

  return (
    <>
      <div className="container py-16">
        <button
          onClick={() => navigate(-1)}
          className=" bg-pink-500 hover:bg-pink-400 text-white px-8 py-3 text-sm w-fit transition font-bold rounded z-10"
        >
          Go Back
        </button>
        <section className=" container py-16 items-center flex flex-col">
          <h2 className="text-6xl font-bold mb-24">{category?.name}</h2>
          <div className="inline-flex gap-16">
            {subcategories.map((subcategory) => (
              <Link
                key={subcategory.id}
                to={`/category/${slug}/${subcategory.slug}`}
              >
                <div className="flex flex-col items-center gap-2">
                  <img src="/folder.png" className="w-16"></img>
                  <p>{subcategory.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
