import { Link } from "react-router";
import type { Project } from "../types/project";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link to={`/project/${project.slug}`} className="group block no-underline">
      <div
        key={project.id}
        className="relative aspect-square w-full overflow-hidden"
      >
        <img
          src={project.image_url}
          alt={project.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
          <h3 className="px-4 text-center text-xl font-bold sm:text-2xl">
            {project.title}
          </h3>
          <p className="mt-2 text-center text-sm sm:text-base text-(--color-primary)">
            {project.year}
          </p>
        </div>
      </div>
    </Link>
  );
}
