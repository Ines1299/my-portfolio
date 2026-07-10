import { Link } from "react-router";

export default function ProjectCard(props) {
  const project = props.project;
  return (
    <Link to={`/project/${project.slug}`}>
      <div key={project.id}>
        <img
          src={project.image_url}
          alt={project.title}
          className="w-full aspect-square object-cover"
        />
        <p>{project.title}</p>
        <p>{project.year}</p>
      </div>
    </Link>
  );
}
