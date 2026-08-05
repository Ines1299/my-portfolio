import type { Project } from "../types/project";

export default function Cigarette({ project }: { project: Project }) {
  return (
    <div className="container">
      <h1 className="text-6xl font-bold mt-12 text-center">{project.title}</h1>
      <img
        src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/crochet/8.png"
        className=" mt-10 w-full max-h-180 object-contain"
      />

      <img
        src="https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/crochet/7.png"
        className="w-full max-h-180 object-contain"
      />
    </div>
  );
}
