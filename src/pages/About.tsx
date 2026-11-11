import CV from "../components/CV";
import { useTheme } from "../contexts/ThemeContext";

const baseURL =
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/profiles";

const design = `${baseURL}/avatar_design.png`;
const coding = `${baseURL}/avatar_coding.png`;

export default function About() {
  const { theme } = useTheme();
  const isCoding = theme === "coding";

  const meURL = isCoding ? coding : design;

  return (
    <div className="bg-(--color-background)">
      <section className="mx-auto max-w-300 px-5 pb-16 pt-12 sm:px-8 sm:pb-20 lg:pb-24 lg:pt-12">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-8 lg:gap-20">
          <div className="relative w-full">
            <img
              src={meURL}
              alt="Portrait of Inês Mota"
              className={
                isCoding
                  ? "ml-auto block w-[85%] max-w-110 object-cover sm:w-[80%] lg:w-[85%]"
                  : "ml-auto block w-[80%] max-w-105 object-cover"
              }
            />

            <h1
              className={
                isCoding
                  ? "absolute -top-8 left-0 z-10 whitespace-nowrap text-[clamp(5rem,13vw,11rem)] leading-none text-(--color-primary) lg:-top-12 [-webkit-text-stroke:4px_#0000AA] [paint-order:stroke_fill]"
                  : "absolute -top-5 left-0 z-10 whitespace-nowrap text-[clamp(3.5rem,12vw,6rem)] leading-none text-(--color-primary) lg:-top-6 lg:text-[clamp(4rem,9vw,8rem)]"
              }
            >
              I am a
            </h1>
          </div>

          <div className={`w-full ${isCoding ? "max-w-md" : "max-w-lg"}`}>
            <p
              className={
                isCoding
                  ? "text-sm leading-relaxed text-(--color-primary) sm:text-base lg:text-base"
                  : "text-sm leading-relaxed text-(--color-secondary) sm:text-base lg:text-lg"
              }
            >
              Portuguese Illustrator, Designer and Junior Developer based in
              Brno. First Class graduate in Illustration and Visual Media from
              UAL, recently completed an intensive JavaScript bootcamp at
              Northcoders. Equally comfortable in Figma and React, jumping
              between creative briefs and codebases. Passionate about building
              accessible, intuitive interfaces where clean code and thoughtful
              design go hand in hand.
              <br /> With so many creative interests, I wanted a little corner
              of the internet that could bring them all together. So I designed
              and coded this website entirely from scratch, no vibe coding, just
              lots of experimenting, problem-solving and learning along the way.
              It's a space to showcase all the different things I love making,
              and a project in itself that brings together my love for design
              and development.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-225 pb-16 px-8 sm:pb-28 sm:px-10 lg:px-8">
        <CV />
      </section>
    </div>
  );
}
