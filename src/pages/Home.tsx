function Home() {
  return (
    <div>
      {/*Hero Section*/}
      <div className="mt-16">
        <section className="container py-24 flex justify-between items-start gap-12 ">
          {/*Left - Text*/}
          <div className="flex flex-col gap-6 max-w-lg">
            <h1 className="text-7xl font-bold leading-none">Inês Mota</h1>
            <p className="tex-sm leading-relaxed">
              Illustrator, Designer, Programmer ad occasional crocheter based in
              London.
            </p>
          </div>
          {/* Right - Animation Placeholder*/}
          <div className=" w-96 h-96 border border-black flex items-center justify-center shrink-0 ">
            <p className="text-xs">[animation goes here]</p>
          </div>
        </section>
      </div>
      {/* Projects */}
      <div className="mt-24">
        <section className=" container py-16 items-center flex flex-col">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>
          <div className="items-center justify-between align-middle">
            <img src="../../public/folder.png" className="w-20"></img>
            <img src="../../public/folder.png" className="w-20"></img>
            <img src="../../public/folder.png" className="w-20"></img>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
