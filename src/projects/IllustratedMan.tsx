import type { Project } from "../types/project";
import { projectStyles as ps } from "../styles/projectStyles";

const illustrations = [
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/12.jpg",
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/13.jpg",
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/11.jpg",
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/illustrations/10.jpg",
];

export default function IllustratedMan({ project }: { project: Project }) {
  return (
    <div className={ps.page}>
      <h1 className={`${ps.title} mb-8 hidden lg:block`}>{project.title}</h1>

      <p className={ps.description}>{project.description}</p>
      <div className={`${ps.gallery} mt-8 lg:mt-10`}>
        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-2 lg:gap-x-4 lg:gap-y-10">
          {illustrations.map((src, index) => (
            <img
              key={src}
              src={src}
              alt={`${project.title} illustration ${index + 1}`}
              className="block h-auto w-full object-contain lg:max-h-180"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
