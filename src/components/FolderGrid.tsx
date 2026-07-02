import type { Category } from "../types/project";

import { Link } from "react-router-dom";
import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";

export default function FolderGrid() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      const { data, error } = await supabase.from("categories").select("*");

      console.log("data:", data);
      console.log("error:", error);
      if (error) console.log(error);
      else setCategories(data as Category[]);
    }

    fetchCategories();
  }, []);

  return (
    <section className=" container py-16 items-center flex flex-col">
      <h2 className="text-6xl font-bold mb-24">Projects</h2>
      <div className="inline-flex gap-16">
        {categories.map((category) => (
          <Link key={category.id} to={`/category/${category.slug}`}>
            <div className="flex flex-col items-center gap-2">
              <img src="/folder.png" className="w-16"></img>
              <p>{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
