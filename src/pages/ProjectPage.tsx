import PutaDiaries from "../projects/PutaDiaries";
import PutaDiariesGhostStories from "../projects/PutaDiariesGhostStories";
import IllustrationTemplate from "../templates/IllustrationTemplate";
import MentalLoad from "../projects/MentalLoad";
import EternalSummer from "../projects/EternalSummer.tsx";
import UrbanPicnic from "../projects/UrbanPicnic";
import CocktailMenu from "../projects/CocktailMenu";
import Wazi from "../projects/Wazi";
import Divided from "../projects/Divided";
import AttentionEconomy from "../projects/AttentionEconomy";
import OhGravity from "../projects/OhGravity";
import IllustratedMan from "../projects/IllustratedMan.tsx";
import LoveEncyclopedia from "../projects/LoveEncyclopedia";
import NewHorizons from "../projects/NewHorizons";
import WeWontBeLong from "/Users/ines/Desktop/Portfolio_website/my-portfolio/src/projects/WeWontBeLong.tsx";

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
    case "cocktail-menu":
      return <CocktailMenu project={project} />;
    case "wazi":
      return <Wazi project={project} />;
    case "divided":
      return <Divided project={project} />;
    case "attention-economy":
      return <AttentionEconomy project={project} />;
    case "oh-gravity":
      return <OhGravity project={project} />;
    case "illustrated-man":
      return <IllustratedMan project={project} />;
    case "love-encyclopedia":
      return <LoveEncyclopedia project={project} />;
    case "new-horizons":
      return <NewHorizons project={project} />;
    case "we-wont-be-long":
      return <WeWontBeLong project={project} />;

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
