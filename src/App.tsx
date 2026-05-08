import { useEffect, useState } from "react";
import { supabase } from "./lib/supabase";
import type { Project } from "./types/project";

function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    async function fetchProjects() {
      const { data, error } = await supabase.from("projects").select("*");
      if (error) console.error(error);
      else setProjects(data as Project[]);
    }
    fetchProjects();
  }, []);

  return (
    <div className="bg-black min-h-screen p-10">
      <h1 className="text-white text-4xl font-bold mb-8">Projects</h1>
      {projects.map((p) => (
        <div key={p.id} className="text-white mb-4">
          <p className="text-xl font-bold">{p.title}</p>
          <p className="text-gray-400">{p.description}</p>
          <img src={p.image_url} alt={p.title} className="w-64 mt-2" />
        </div>
      ))}
    </div>
  );
}

export default App;
