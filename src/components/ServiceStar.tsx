import { useTheme } from "../contexts/ThemeContext";

type ServiceStarProps = {
  label: string;
};

const starPoints =
  "50,0 62,35 100,35 70,58 82,100 50,75 18,100 30,58 0,35 38,35";

const pixelAlien =
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/profiles/pixel_alien.png";

export default function ServiceStar({ label }: ServiceStarProps) {
  const { theme } = useTheme();
  const isCoding = theme === "coding";

  return (
    <div className="group relative flex aspect-square w-full items-center justify-center">
      {isCoding ? (
        /* CODING: Pixel sticker */
        <img
          src={pixelAlien}
          alt=""
          aria-hidden="true"
          className="service-alien absolute inset-0 h-full w-full object-contain  group-hover:scale-105"
          style={{ imageRendering: "pixelated" }}
        />
      ) : (
        /* SVG star */
        <svg
          viewBox="-3 -3 106 106"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <polygon points={starPoints} fill="var(--color-secondary)" />
          <polygon
            points={starPoints}
            fill="none"
            stroke="var(--color-primary)"
            strokeWidth="3"
            strokeLinejoin="round"
            vectorEffect="non-scaling-stroke"
            className="opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
          />
        </svg>
      )}

      {/* Service label */}
      <span
        className={`pointer-events-none relative z-10 text-center text-xs font-bold leading-tight whitespace-normal wrap-break-word text-black sm:text-sm ${
          isCoding ? "w-[65%] translate-y-[50%]" : "w-[60%] sm:w-[55%]"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
