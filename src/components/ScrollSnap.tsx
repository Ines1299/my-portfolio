import { useRef } from "react";
import { useScroll, useSpring, useMotionValueEvent } from "framer-motion";

interface ScrollSnapProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollSnap({
  children,
  className = "",
}: ScrollSnapProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001,
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (!ref.current) return;
    if (latest > 0.4) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (latest < 0.4) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
