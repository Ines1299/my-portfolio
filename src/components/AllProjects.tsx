import type { Project } from "../types/project";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

import ProjectCard from "./ProjectCard";
import SortButton from "./SortButton";

type SortBy = "year" | "title";
type SortOrder = "ASC" | "DESC";

export default function AllProjects() {
  const [projects, setProjects] = useState<Project[]>([]);

  const [sortBy, setSortBy] = useState<SortBy>("year");
  const [order, setOrder] = useState<SortOrder>("DESC");

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order(sortBy, { ascending: order === "ASC" });
      if (error) {
        console.log(error);
        return;
      }
      setProjects(data as Project[]);
    }

    fetchProjects();
  }, [sortBy, order]);

  function handleSortChange(newSortBy: SortBy, newOrder: SortOrder) {
    setSortBy(newSortBy);
    setOrder(newOrder);
  }

  return (
    <section className="w-full bg-white px-6 pb-24 pt-28 sm:px-8 lg:pt-36">
      <div className="mx-auto max-w-[1050px]">
        <div className="mb-12 flex justify-start">
          <SortButton
            sortBy={sortBy}
            order={order}
            onSortChange={handleSortChange}
          />
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
