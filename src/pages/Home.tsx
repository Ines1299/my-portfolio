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
  const reduceMotion = useReducedMotion();

  return (
    <>
      {/* Hero */}
      <section className=" mt-10 relative min-h-[calc(100svh-5rem)] overflow-hidden bg-white px-5 sm:px-8 lg:px-12">
        <div className="relative mx-auto min-h-[calc(100svh-5rem)] w-full max-w-350 pt-20 pb-16 sm:min-h-150">
          {/* stickers */}
          {stickers.map((sticker, index) => (
            <Sticker
              key={sticker.src}
              src={sticker.src}
              className={sticker.position}
              size={sticker.size}
              delay={index * 0.12}
            />
          ))}

          {/* Hero text */}
          <div className="mt-10 relative z-0 mx-auto w-full max-w-350">
            <AnimatedName breakOnMobile />

            <motion.p
              initial={reduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative mt-10 mx-auto w-[85%] max-w-137.5 text-left text-base leading-relaxed sm:mt-12 sm:text-xl lg:mt-16 lg:ml-[12%] lg:w-auto lg:text-2xl lg:leading-snug"
              style={{ color: "var(--color-secondary)" }}
            >
              Illustrator, Designer, Programmer and
              <br className="hidden lg:block" />
              occasional Crocheter based in Brno.
            </motion.p>
          </div>
        </div>
      </section>

      {/*Projects*/}

      <FolderGrid />

      {/*Projects Images*/}
      <div className="relative z-10 bg-white ">
        <AllProjects />
      </div>
    </>
  );
}

export default Home;
