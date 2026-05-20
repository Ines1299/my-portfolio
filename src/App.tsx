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
    <div className="container">
      <div style={{ padding: "2rem" }}>
        <h1>Inês Mota</h1>
        <p>Illustrator & Designer based in London</p>
      </div>
      <h1>Projects</h1>
      {projects.map((p) => (
        <div key={p.id}>
          <p>{p.title}</p>
          <p>{p.description}</p>
          <img src={p.image_url} alt={p.title} className="w-64 mt-2" />
        </div>
      ))}
    </div>
  );
}

export default App;
