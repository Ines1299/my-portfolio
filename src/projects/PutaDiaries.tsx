import type { Project } from "../types/project";

import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

export default function ProjectPage() {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    async function fetchProject() {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("id", id)
        .single();
      if (error) console.log(error);
      else setProject(data as Project);
      setLoading(false);
    }
    fetchProject();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!project) return <p>Project not found!</p>;

  return (
    <>
      <div className="container py-16">
        <button
          onClick={() => navigate(-1)}
          className=" bg-pink-500 hover:bg-pink-400 text-white px-8 py-3 text-2xl w-fit transition font-bold rounded"
        >
          Go Back
        </button>
        <h1>{project.title}</h1>
        <img src={project.image_url} alt={project.title}></img>
        <p>{project.year}</p>
        <p>{project.description}</p>
      </div>
    </>
  );
}
