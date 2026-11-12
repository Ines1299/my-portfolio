import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";

interface StickerProps {
  src: string;
  alt?: string;
  className?: string;
  size?: number;
  delay?: number;
}

export default function Sticker({
  src,
  alt = "",
  className = "",
  size = 80,
  delay = 0,
}: StickerProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      drag
      dragMomentum={false}
      whileDrag={{
        scale: 1.15,
        zIndex: 50,
        cursor: "grabbing",
      }}
      className={`absolute z-10 w-(--sticker-mobile-size) cursor-grab touch-none select-none sm:w-(--sticker-tablet-size) lg:w-(--sticker-size) ${className}`}
      style={
        {
          "--sticker-mobile-size": `${size * 0.6}px`,
          "--sticker-tablet-size": `${size * 0.75}px`,
          "--sticker-size": `${size}px`,
        } as CSSProperties
      }
    >
      {/* Separate animation layer */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: reduceMotion ? 0 : [0, -6, 0],
        }}
        whileHover={reduceMotion ? undefined : { scale: 1.12 }}
        transition={{
          opacity: { duration: 0.4, delay },
          scale: { duration: 0.4, delay },
          y: {
            duration: 3.5,
            repeat: reduceMotion ? 0 : Infinity,
            ease: "easeInOut",
            delay,
          },
        }}
      >
        <img
          src={src}
          alt={alt}
          draggable={false}
          className="pointer-events-none w-full h-auto object-contain"
        />
      </motion.div>
    </motion.div>
  );
}
