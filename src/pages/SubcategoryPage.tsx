import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { supabase } from "../lib/supabase";
import type { Project } from "../types/project";
import { useNavigate } from "react-router";
import ProjectCard from "../components/ProjectCard";

export default function SubcategoryPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const { subcategorySlug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchProjectsbySubCategory() {
      const { data: subcategoryData, error: subcategoryError } = await supabase
        .from("subcategories")
        .select("*")
        .eq("slug", subcategorySlug)
        .single();
      if (subcategoryError) {
        console.log(subcategoryError);
        return;
      }

      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("subcategory_id", subcategoryData.id);

      if (error) console.log(error);
      else setProjects(data as Project[]);
      setLoading(false);
    }
    fetchProjectsbySubCategory();
  }, [subcategorySlug]);

  if (loading) return <p>Loading...</p>;
  if (!projects) return <p>Project not found!</p>;

  return (
    <>
      <div className="container py-16">
        <button
          onClick={() => navigate(-1)}
          className=" bg-pink-500 hover:bg-pink-400 text-white px-8 py-3 text-2xl w-fit transition font-bold rounded"
        >
          Go Back
        </button>
        <section className=" container py-16 items-center flex flex-col">
          <h2 className="text-6xl font-bold mb-24">{subcategorySlug}</h2>

          <section className="container py-16">
            <div className="grid grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
