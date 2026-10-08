import CV from "../components/CV";

import me from "/EditedforCV.png";

export default function About() {
  return (
    <div className="container pb-16">
      <div className="mt-16 mb-16 flex gap-12 items-start">
        <div className="w-2/3">
          <h1 className="text-9xl font-bold leading-none mb-8">
            Inês Mota Cadete
          </h1>

          <p className="text-sm leading-relaxed">
            Portuguese Illustrator, Designer and Junior Developer based in
            London. First Class graduate in Illustration and Visual Media from
            UAL, recently completed an intensive JavaScript bootcamp at
            Northcoders. Equally comfortable in Figma and React, between
            creative briefs and codebases. Specialising in printmaking,
            publication and storytelling. Passionate about building accessible,
            intuitive interfaces where clean code and thoughtful design go hand
            in hand.
          </p>
        </div>

        <div className=" w-1/3">
          <img src={me} alt="Inês Mota" className="w-full object-cover " />
          {/* <p className="text-xs">[my photo goes here]</p> */}
        </div>
      </div>

      <div className="border-t border black mb-16">
        <CV />
      </div>
    </div>
  );
}
