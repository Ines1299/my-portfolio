import { Link } from "react-router";
import type { Project } from "../types/project";
import HoverImage from "./HooverImage";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/project/${project.slug}`}
      className="group block no-underline focus-visible:outline-2 focus-visible:outline-(--color-primary)"
    >
      <HoverImage
        src={project.image_url}
        alt={project.title}
        title={project.title}
        subtitle={`${project.year}`}
      />
    </Link>
  );
}
