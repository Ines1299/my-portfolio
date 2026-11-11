import { useEffect, useState } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  keepCursor?: boolean;
  smallCursor?: boolean;
  breakAfter?: number;
}

export default function Typewriter({
  text,
  speed = 35,
  delay = 0,
  keepCursor = true,
  smallCursor = false,
  breakAfter,
}: TypewriterTextProps) {
  const [typedLength, setTypedLength] = useState(0);
  const [finished, setFinished] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    setReducedMotion(reduce);

    if (reduce) {
      setTypedLength(text.length);
      setFinished(true);
      return;
    }

    setTypedLength(0);
    setFinished(false);

    let index = 0;
    let interval: number | undefined;

    const timeout = window.setTimeout(() => {
      interval = window.setInterval(() => {
        index++;
        setTypedLength(index);

        if (index >= text.length) {
          window.clearInterval(interval);
          setFinished(true);
        }
      }, speed);
    }, delay);

    return () => {
      window.clearTimeout(timeout);
      window.clearInterval(interval);
    };
  }, [text, speed, delay]);

  // Optional responsive line break for the hero description
  const formatText = (value: string) => {
    if (breakAfter === undefined || value.length <= breakAfter) {
      return value;
    }

    return (
      <>
        {value.slice(0, breakAfter)} <br className="hidden sm:block" />
        {value.slice(breakAfter).trimStart()}
      </>
    );
  };

  return (
    <span className="relative block whitespace-pre-line">
      {/* Reserve space to prevent layout shifts */}
      <span className="invisible block" aria-hidden="true">
        {formatText(text)}
      </span>

      {/* Animated text */}
      <span className="absolute inset-0 block" aria-hidden="true">
        {formatText(text.slice(0, typedLength))}

        {!reducedMotion && (!finished || keepCursor) && (
          <span
            className={`cursor-blink ml-1 inline-block bg-current align-middle ${
              smallCursor
                ? "h-[clamp(14px,2.5vw,28px)] w-1.25"
                : "h-[0.9em] w-[0.22em] max-w-2"
            }`}
          />
        )}
      </span>

      {/* Accessible complete text */}
      <span className="sr-only">{text}</span>
    </span>
  );
}
