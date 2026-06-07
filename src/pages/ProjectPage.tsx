import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { supabase } from "../lib/supabase";
import type { Project } from "../types/project";

export default function ProjectPage() {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

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
        <h1>{project.title}</h1>
        <img src={project.image_url}></img>
      </div>
    </>
  );
}
