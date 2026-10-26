import type { Project } from "../types/project";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

import ProjectCard from "./ProjectCard";
import SortButton from "./SortButton";

type SortBy = "year" | "title";
type SortOrder = "ASC" | "DESC";

type AllProjectsProps = {
  categoryId?: number;
  subcategoryId?: number;
};

export default function AllProjects({
  categoryId,
  subcategoryId,
}: AllProjectsProps) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [sortBy, setSortBy] = useState<SortBy>("year");
  const [order, setOrder] = useState<SortOrder>("DESC");

  useEffect(() => {
    let cancelled = false;

    async function fetchProjects() {
      let query = supabase.from("projects").select("*");

      if (subcategoryId !== undefined) {
        query = query.eq("subcategory_id", subcategoryId);
      } else if (categoryId !== undefined) {
        query = query.eq("category_id", categoryId);
      }

      const { data, error } = await query.order(sortBy, {
        ascending: order === "ASC",
      });

      if (cancelled) return;

      if (error) {
        console.error(error);
        return;
      }

      setProjects(data as Project[]);
    }

    fetchProjects();

    return () => {
      cancelled = true;
    };
  }, [categoryId, subcategoryId, sortBy, order]);

  function handleSortChange(newSortBy: SortBy, newOrder: SortOrder) {
    setSortBy(newSortBy);
    setOrder(newOrder);
  }

  return (
    <section
      className={`w-full bg-white px-5 pb-16 sm:px-8 sm:pb-24 ${
        categoryId !== undefined || subcategoryId !== undefined
          ? "pt-6 lg:pt-8"
          : "pt-16 sm:pt-28 lg:pt-36"
      }`}
    >
      <div className="mx-auto max-w-225">
        <div className="mb-8 flex justify-start sm:mb-12">
          <SortButton
            sortBy={sortBy}
            order={order}
            onSortChange={handleSortChange}
          />
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
