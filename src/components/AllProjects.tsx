import type { Project } from "../types/project";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

import ProjectCard from "./ProjectCard";

export default function AllProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("year", { ascending: false });
      if (error) console.log(error);
      else setProjects(data as Project[]);
    }

    fetchProjects();
  }, []);

  return (
    <div className="mt-68">
      <section className="container py-16">
        <div className="grid grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}
