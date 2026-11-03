export default function CodingHero() {
  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-(--color-background) px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto w-full max-w-350">
        <h1
          className="text-center text-[clamp(4rem,13vw,12rem)] leading-[0.85] tracking-tight text-(--color-primary)"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          INÊS MOTA
        </h1>

        <p
          className="mx-auto mt-10 max-w-150 text-center text-base leading-relaxed sm:mt-14 sm:text-xl lg:mt-16 lg:text-2xl"
          style={{
            fontFamily: "var(--font-body)",
            color: "var(--color-secondary)",
          }}
        >
          Illustrator, Designer, Programmer and
          <br className="hidden sm:block" />
          occasional Crocheter based in Brno.
        </p>
      </div>
    </section>
  );
}
