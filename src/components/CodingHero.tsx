import { useEffect, useState } from "react";

const name = "INÊS MOTA";
const descriptionFirstLine = "Illustrator, Designer Proggramer and";
const descriptionSecondLine = "occasional crocheter based in Brno.";
const description = `${descriptionFirstLine} ${descriptionSecondLine}`;

export default function CodingHero() {
  const [nameLength, setNameLength] = useState(0);
  const [descriptionLength, setDescriptionLength] = useState(0);

  const [phase, setPhase] = useState<"name" | "description" | "done">("name");

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setNameLength(name.length);
      setDescriptionLength(description.length);
      setPhase("done");
      return;
    }

    let nameIndex = 0;
    let descriptionIndex = 0;

    let nameTimer: number | undefined;
    let descriptionTimer: number | undefined;
    let pauseTimer: number | undefined;

    nameTimer = window.setInterval(() => {
      nameIndex++;
      setNameLength(nameIndex);

      if (nameIndex >= name.length) {
        window.clearInterval(nameTimer);

        pauseTimer = window.setTimeout(() => {
          setPhase("description");

          descriptionTimer = window.setInterval(() => {
            descriptionIndex++;
            setDescriptionLength(descriptionIndex);

            if (descriptionIndex >= description.length) {
              window.clearInterval(descriptionTimer);
              setPhase("done");
            }
          }, 35);
        }, 400);
      }
    }, 110);

    return () => {
      window.clearInterval(nameTimer);
      window.clearInterval(descriptionTimer);
      window.clearInterval(pauseTimer);
    };
  }, []);

  const typedDescription = description.slice(0, descriptionLength);

  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-(--color-background) px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-350">
        <h1
          className="relative text-center text-[clamp(4rem,13vw,12rem)] leading-[0.85] tracking-tight text-(--color-primary)"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="invisible block" aria-hidden="true">
            {name}
          </span>
          <span className="absolute inset-0" aria-hidden="true">
            {name.slice(0, nameLength)}
            {phase === "name" && (
              <span
                className="ml-2 inline-block h-[clamp(1.25rem,2.5vw, 2rem)] w-[clamp(0.25rem, 0.5vw, 0.5rem)] animate-pulse bg-current align-middle"
                aria-hidden="true"
              />
            )}
          </span>
          <span className="sr-only">{name}</span>
        </h1>

        <p
          className="relative mx-auto mt-10 max-w-150 text-center text-base leading-relaxed sm:mt-14 sm:text-xl lg:mt-16 lg:text-2xl"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-secondary)",
          }}
        >
          <span className="invisible block" aria-hidden="true">
            {descriptionFirstLine} <br className="hidden sm:block" />
            {descriptionSecondLine}
          </span>

          <span className="absolute inset-0" aria-hidden="true">
            {typedDescription.slice(0, descriptionFirstLine.length)}

            {descriptionLength > descriptionFirstLine.length && (
              <>
                {" "}
                <br className="hidden sm:block" />
                {typedDescription
                  .slice(descriptionFirstLine.length)
                  .trimStart()}
              </>
            )}

            {phase !== "name" && (
              <span
                className="ml-1 inline-block animate-pulse"
                aria-hidden="true"
              >
                ▌
              </span>
            )}
          </span>

          <span className="sr-only">{description}</span>
        </p>
      </div>
    </section>
  );
}
