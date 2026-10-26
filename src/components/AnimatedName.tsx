import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const fonts = [
  '"Archivo Black", sans-serif',
  '"Ballet", cursive',
  '"Bitcount Prop Double", sans-serif',
  '"Danfo", serif',
  '"MuseoModerno", sans-serif',
  '"Pixelify Sans", sans-serif',
  '"Playwrite US Trad", cursive',
];

interface AnimatedNameProps {
  small?: boolean;
  breakOnMobile?: boolean;
}

export default function AnimatedName({
  small = false,
  breakOnMobile = false,
}: AnimatedNameProps) {
  const [fontIndex, setFontIndex] = useState(0);
  const [fontsReady, setFontsReady] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let cancelled = false;

    async function loadFonts() {
      await Promise.all(
        fonts.map((font) => document.fonts.load(`48px ${font}`, "Inês Mota")),
      );
      if (!cancelled) {
        setFontsReady(true);
      }
    }

    loadFonts().catch(console.error);

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (reduceMotion || !fontsReady) return;

    const interval = window.setInterval(() => {
      setFontIndex((prev) => (prev + 1) % fonts.length);
    }, 700);

    return () => window.clearInterval(interval);
  }, [reduceMotion, fontsReady]);

  const MotionTag = small ? motion.span : motion.h1;

  return (
    <MotionTag
      className={
        small
          ? "block whitespace-nowrap text-sm font-bold leading-none sm:text-xl"
          : breakOnMobile
            ? "w-full text-center text-[clamp(5.5rem,30vw,9rem)] leading-[1.05] tracking-[-0.065em] lg:whitespace-nowrap  lg:text-[clamp(4rem,16vw,15rem)] lg:leading-[1.15]"
            : "w-full whitespace-nowrap text-center text-[clamp(4rem,16vw,15rem)] leading-[1.15] tracking-[-0.065em]"
      }
      style={{
        fontFamily: fonts[fontIndex],
        color: "var(--color-primary)",
        fontWeight: "normal",
      }}
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0 }}
    >
      {breakOnMobile && !small ? (
        <>
          <span className="block lg:inline">Inês</span>
          <span className="block lg:inline"> Mota</span>
        </>
      ) : (
        "Inês Mota"
      )}
    </MotionTag>
  );
}
