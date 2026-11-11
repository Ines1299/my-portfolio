import { useEffect, useRef } from "react";
import type P5 from "p5";
import { createParticleField } from "../sketches/particleField";

export default function ParticlesBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    let p5Instance: P5 | null = null;
    let disposeSketch: (() => void) | null = null;

    async function startSketch() {
      const { default: p5 } = await import("p5");

      const container = containerRef.current;

      if (!container || cancelled) return;

      const { sketch, dispose } = createParticleField(container);

      disposeSketch = dispose;

      p5Instance = new p5(sketch, container);
    }

    void startSketch().catch((error) => {
      console.error("Failed to start particle field:", error);
    });

    return () => {
      cancelled = true;
      disposeSketch?.();
      p5Instance?.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden"
    />
  );
}
