import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";

import AllProjects from "../components/AllProjects";
import FolderGrid from "../components/FolderGrid";
import Sticker from "../components/Sticker";
import AnimatedName from "../components/AnimatedName";

const stickers = [
  {
    src: "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/stickers/1.png",
    position: "left-[1%] top-[1%]",
    size: 85,
  },
  {
    src: "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/stickers/2.png",
    position: "left-[46%] top-[2%]",
    size: 70,
  },
  {
    src: "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/stickers/3.png",
    position: "left-[50%] top-[55%]",
    size: 75,
  },
  {
    src: "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/stickers/4.png",
    position: "left-[4%] top-[30%]",
    size: 85,
  },
  {
    src: "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/stickers/5.png",
    position: "right-[29%] top-[35%]",
    size: 90,
  },
  {
    src: "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/stickers/6.png",
    position: "right-[10%] top-[50%]",
    size: 75,
  },
  {
    src: "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/stickers/7.png",
    position: "left-[19%] bottom-[20%]",
    size: 70,
  },
  {
    src: "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/stickers/8.png",
    position: "right-[4%] bottom-[20%]",
    size: 80,
  },
  {
    src: "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/stickers/9.png",
    position: "left-[25%] top-[8%]",
    size: 75,
  },
  {
    src: "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/stickers/10.png",
    position: "right-[2%] top-[4%]",
    size: 85,
  },
  {
    src: "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/stickers/11.png",
    position: "left-[30%] top-[45%]",
    size: 80,
  },
  {
    src: "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/stickers/12.png",
    position: "right-[30%] bottom-[15%]",
    size: 90,
  },
];

function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="mt-10 relative min-h-[calc(100svh-5rem)] overflow-hidden bg-white px-5 sm:px-8 lg:px-12"
      >
        <div className="relative mx-auto min-h-[calc(100svh-5rem)] w-full max-w-350 pt-20 pb-16 sm:min-h-150">
          {/* stickers */}
          {stickers.map((sticker, index) => (
            <Sticker
              key={sticker.src}
              src={sticker.src}
              className={sticker.position}
              size={sticker.size}
              constraintsRef={heroRef}
              delay={index * 0.12}
            />
          ))}

          {/* Hero text */}
          <div className="mt-20 relative z-0 mx-auto w-full max-w-350">
            <AnimatedName />

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-16 ml-[20%] max-w-137.5 text-left  text-xl leading-snug sm:text-2xl"
              style={{ color: "var(--color-secondary)" }}
            >
              Illustrator, Designer, Programmer and <br />
              occasional Crocheter based in Brno.
            </motion.p>
          </div>
        </div>
      </section>

      {/*Projects*/}

      <FolderGrid />
      {/*Projects Images*/}
      <AllProjects />
    </>
  );
}

export default Home;
