import type { Project, Category } from "../types/project";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { supabase } from "../lib/supabase";
import ProjectCard from "../components/ProjectCard";

export default function CategoryProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [category, setCategory] = useState<Category | null>(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProjects() {
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
        .from("projects")
        .select("*")
        .eq("category_id", categoryData.id)
        .order("year", { ascending: false });

      if (error) console.log(error);
      else setProjects(data as Project[]);
      setLoading(false);
    }
    fetchProjects();
  }, [slug]);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container py-16">
      <button
        onClick={() => navigate(-1)}
        className="bg-pink-500 hover:bg-pink-400 text-white px-8 py-2 text-sm w-fit transition font-bold rounded"
      >
        Go Back
      </button>
      <h2 className="text-6xl font-bold mb-24 mt-8">{category?.name}</h2>
      <div className="grid grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
