import PutaDiaries from "../projects/PutaDiaries";
import PutaDiariesGhostStories from "../projects/PutaDiariesGhostStories";
import IllustrationTemplate from "../templates/IllustrationTemplate";
import MentalLoad from "../projects/MentalLoad";
import EternalSummer from "../projects/EternalSummer.tsx";
import UrbanPicnic from "../projects/UrbanPicnic";

import type { Project } from "../types/project";

import { supabase } from "../lib/supabase";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

function renderTemplate(project: Project) {
  switch (project.slug) {
    case "puta-diaries":
      return <PutaDiaries project={project} />;
    case "puta-diaries-ghost-stories":
      return <PutaDiariesGhostStories project={project} />;
    case "mental-load":
      return <MentalLoad project={project} />;
    case "eternal-summer":
      return <EternalSummer project={project} />;
    case "urban-picnic":
      return <UrbanPicnic project={project} />;
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
    <div className="relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 bg-pink-500 hover:bg-pink-400 text-white px-4 py-2 text-sm w-fit transition font-bold rounded z-10"
      >
        Go Back
      </button>
      {renderTemplate(project)}
    </div>
  );
}
