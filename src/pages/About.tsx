import CV from "../components/CV";

const meURL =
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/profiles/avatar1.jpg";

export default function About() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-300 px-5 pb-16 pt-12  sm:px-8 sm:pb-20 lg:pb-24 lg:pt-12 ">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <div className="relative w-full">
            <img
              src={meURL}
              alt="Black and white portrait of Inês Mota"
              className="ml-auto block w-[80%] max-w-105 object-cover"
            />

            <h1 className="absolute -top-5 left-0 z-10 whitespace-nowrap text-[clamp(3.5rem,12vw,6rem)] leading-none text-(--color-primary) lg:-top-6 lg:text-[clamp(4rem,9vw,8rem)]">
              I am a
            </h1>
          </div>

          <div className="max-w-lg w-full">
            <p className="text-sm leading-relaxed text-(--color-secondary) sm:text-base lg:text-lg">
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
