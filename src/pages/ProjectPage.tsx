import PutaDiaries from "../projects/PutaDiaries";
import IllustrationTemplate from "../templates/IllustrationTemplate";

import type { Project } from "../types/project";

import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

function renderTemplate(project: Project) {
  switch (project.slug) {
    case "puta-diaries":
      return <PutaDiaries project={project} />;
    default:
      return <IllustrationTemplate project={project} />;
  }
}

export default function ProjectPage() {
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const { slug } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    async function fetchProject() {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .eq("slug", slug)
        .single();
      if (error) console.log(error);
      else setProject(data as Project);
      setLoading(false);
    }
    fetchProject();
  }, [slug]);

  if (loading) return <p>Loading...</p>;
  if (!project) return <p>Project not found!</p>;

  return (
    <>
      <button
        onClick={() => navigate(-1)}
        className="bg-pink-500 hover:bg-pink-400 text-white px-8 py-3 text-2xl w-fit transition font-bold rounded"
      >
        Go Back
      </button>
      {renderTemplate(project)}
    </>
  );
}
