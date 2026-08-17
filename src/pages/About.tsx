import Experience from "../components/Experience";

import me from "/EditedforCV.png";

export default function About() {
  return (
    <div className="container">
      <div className="flex mb-4 mt-12">
        <div className="w-1/2">
          <h1>About me</h1>
          <p>
            First Class Illustration and Visual Media graduate from UAL, now
            looking to work as a Junior Developer after completing an intensive
            JavaScript bootcamp at Northcoders. I bring a rare combination of
            design thinking and full-stack technical skills, comfortable moving
            between Figma and React, and between creative briefs and codebases.
            Passionate about building accessible, intuitive interfaces where
            clean code and thoughtful UX go hand in hand.
          </p>
        </div>
        <div className=" w-1/2 h-96 flex items-center justify-center">
          <img src={me} className="max-h-120 " />
          {/* <p className="text-xs">[my photo goes here]</p> */}
        </div>
      </div>
      <div>
        <Experience />
      </div>
    </div>
  );
}
