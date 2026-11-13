import { useTheme } from "../contexts/ThemeContext";

type HoverImageProps = {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
};

export default function HoverImage({
  src,
  alt,
  title,
  subtitle,
}: HoverImageProps) {
  const { theme } = useTheme();
  const isCoding = theme === "coding";
  return (
    <div className="group w-full ">
      {/* Project image */}
      <div className="relative aspect-square w-full overflow-hidden">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover"
        />

        {/* Desktop hover overlay */}
        <div
          className={`pointer-events-none absolute inset-0 hidden flex-col items-center justify-center opacity-0 transition-opacity duration-300 sm:flex sm:group-hover:opacity-100 sm:group-focus-within:opacity-100 ${
            isCoding ? "bg-black/85" : "bg-black/50"
          }`}
        >
          <h3
            className={`px-4 text-center font-bold ${
              isCoding
                ? "text-3xl text-(--color-primary) sm:text-4xl"
                : "text-xl text-(--color-primary) sm:text-2xl"
            }`}
            style={{
              fontFamily: "var(--font-heading)",
            }}
          >
            {title}
          </h3>

          {subtitle !== undefined && (
            <p
              className={`mt-2 text-center ${
                isCoding
                  ? "text-base text-(--color-primary) sm:text-lg"
                  : "text-sm text-(--color-primary) sm:text-base"
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
      {/* Mobile project information */}
      <div className="mt-3 text-center sm:hidden">
        <h3
          className={`font-bold text-(--color-primary) ${
            isCoding ? "text-2xl" : "text-lg"
          }`}
        >
          {title}
        </h3>
      </div>
    </div>
  );
}
