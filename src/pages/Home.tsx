import AllProjects from "../components/AllProjects";
import FolderGrid from "../components/FolderGrid";

function Home() {
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
        <FolderGrid />
        {/*Projects Images*/}
        <AllProjects />
      </div>
    </div>
  );
}

export default Home;
