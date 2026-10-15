import CV from "../components/CV";

const meURL =
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/profiles/avatar1.jpg";

export default function About() {
  return (
    <div className="bg-white">
      <section className="mx-auto max-w-300 px-6 pb-20  sm:px-8 lg:pb-24 lg:pt-12 ">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          <div className="relative">
            <img
              src={meURL}
              alt="Black and white portrait of Inês Mota"
              className="ml-auto block w-[80%] max-w-105 object-cover"
            />

            <h1
              className="absolute -top-6 left-0 z-10 whitespace-nowrap text-[clamp(5rem,11vw,10rem)] leading-none text-(--color-primary)"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              I am a
            </h1>
          </div>

          <div className="max-w-lg">
            <p className="text-sm leading-relaxed text-(--color-secondary) sm:text-base md:text-lg">
              Portuguese Illustrator, Designer and Junior Developer based in
              Brno. First Class graduate in Illustration and Visual Media from
              UAL, recently completed an intensive JavaScript bootcamp at
              Northcoders. Equally comfortable in Figma and React, between
              creative briefs and codebases. Specialising in printmaking,
              publication and storytelling. Passionate about building
              accessible, intuitive interfaces where clean code and thoughtful
              design go hand in hand.
            </p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-300 px-6 pb-28 sm:px-8">
        <CV />
      </section>
    </div>
  );
}
