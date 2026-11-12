import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "../contexts/ThemeContext";

import AllProjects from "../components/AllProjects";
import FolderGrid from "../components/FolderGrid";
import Sticker from "../components/Sticker";
import AnimatedName from "../components/AnimatedName";
import CodingHero from "../components/CodingHero";

const stickerBaseURL =
  "https://jvlcwxxjoppsnwglzomo.supabase.co/storage/v1/object/public/stickers";

const stickers = [
  {
    src: `${stickerBaseURL}/1.png`,
    position: "left-[8%] top-[7%] md:left-[4%] xl:left-[-3%]",
    size: 85,
  },
  {
    src: `${stickerBaseURL}/2.png`,
    position: "left-[52%] top-[1%]",
    size: 70,
  },
  {
    src: `${stickerBaseURL}/3.png`,
    position: "left-[5%] bottom-[23%]",
    size: 75,
  },
  {
    src: `${stickerBaseURL}/4.png`,
    position: "left-[5%] top-[36%]",
    size: 85,
  },
  {
    src: `${stickerBaseURL}/5.png`,
    position: "right-[8%] top-[80%] md:right-[4%] xl:right-[-4%]",
    size: 90,
  },
  {
    src: `${stickerBaseURL}/6.png`,
    position: "right-[8%]  top-[58%] md:right-[4%] xl:right-[-10%]",
    size: 75,
  },
  {
    src: `${stickerBaseURL}/7.png`,
    position: "left-[35%] bottom-[50%]",
    size: 70,
  },
  {
    src: `${stickerBaseURL}/8.png`,
    position: "right-[10%] bottom-[70%] md:bottom-[16%]",
    size: 80,
  },
  {
    src: `${stickerBaseURL}/9.png`,
    position: "left-[17%] top-[17%]",
    size: 75,
  },
  {
    src: `${stickerBaseURL}/10.png`,
    position: "right-[1%] top-[8%]",
    size: 85,
  },
  {
    src: `${stickerBaseURL}/11.png`,
    position: "left-[8%] top-[55%] md:left-[4%] xl:left-[-8%]",
    size: 80,
  },
  {
    src: `${stickerBaseURL}/12.png`,
    position: "right-[31%] bottom-[9%]",
    size: 90,
  },
  {
    src: `${stickerBaseURL}/13.png`,
    position: "left-[30%] bottom-[5%]",
    size: 80,
  },
  {
    src: `${stickerBaseURL}/14.png`,
    position: "right-[29%] top-[12%]",
    size: 75,
  },
  {
    src: `${stickerBaseURL}/15.png`,
    position: "left-[48%] bottom-[20%]",
    size: 85,
  },
  {
    src: `${stickerBaseURL}/16.png`,
    position: "right-[5%] top-[40%]",
    size: 70,
  },
  {
    src: `${stickerBaseURL}/17.png`,
    position: "left-[8%] bottom-[6%] md:left-[4%] xl:left-[-10%] ",
    size: 80,
  },
  {
    src: `${stickerBaseURL}/18.png`,
    position: "right-[23%] bottom-[40%]",
    size: 80,
  },
];

function Home() {
  const reduceMotion = useReducedMotion();
  const { theme } = useTheme();

  return (
    <>
      {theme === "coding" ? (
        <CodingHero />
      ) : (
        <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-(--color-background) px-5 sm:px-8 lg:px-12">
          <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] w-full max-w-350 flex-col justify-center py-16">
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
            <div className="relative z-0 mx-auto w-full max-w-350 lg:-translate-y-6">
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
      )}

      {/*Projects*/}

      <FolderGrid />

      {/*Projects Images*/}
      <div className="relative z-10 bg-(--color-background) ">
        <AllProjects />
      </div>
    </>
  );
}

export default Home;
