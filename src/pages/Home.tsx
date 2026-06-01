import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import type { Project } from "../types/project";

function Home() {
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
    <div>
      {/*Hero Section*/}
      <div className="mt-24">
        <section className="container py-24 flex justify-between gap-12 items-end ">
          {/*Left - Text*/}
          <div className="flex flex-col gap-6 max-w-lg ">
            <h1 className="text-9xl font-bold leading-none">Inês Mota</h1>
            <p className="tex-sm leading-relaxed">
              Illustrator, Designer, Programmer and occasional Crocheter based
              in London.
            </p>
          </div>
          {/* Right - Animation Placeholder*/}
          <div className=" w-96 h-96 border border-black flex items-center justify-center shrink-0 ">
            <p className="text-xs">[animation goes here]</p>
          </div>
        </section>
      </div>
      {/* Projects */}
      <div className="mt-68">
        <section className=" container py-16 items-center flex flex-col">
          <h2 className="text-6xl font-bold mb-24">Projects</h2>
          <div className="inline-flex gap-16">
            <div className="flex flex-col items-center gap-2">
              <img src="../../public/folder.png" className="w-18"></img>
              <p>Design</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="../../public/folder.png" className="w-18"></img>
              <p>Programming</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="../../public/folder.png" className="w-18"></img>
              <p>Crochet</p>
            </div>
          </div>
        </section>
        {/*Projects Images*/}
        <div className="mt-68">
          <section className="container py-16">
            <div className="grid grid-cols-3 gap-8">
              {projects.map((project) => (
                <div key={project.id}>
                  <img
                    src={project.image_url}
                    alt={project.title}
                    className="w-full aspect-square object-cover"
                  />
                  <p>{project.title}</p>
                  <p>{project.year}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Home;
