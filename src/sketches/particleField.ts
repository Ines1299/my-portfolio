import type P5 from "p5";

// Adapted from Taha Bakri's p5-particle-field (MIT license)
// https://github.com/tahabakri/p5-particle-field

// 1. Simulation settings
const cfg = {
  spacing: 40,
  sizeMin: 9,
  sizeMax: 17,
  maxParticles: 650,

  damping: 0.95,
  bounce: 0.55,

  interactRadius: 40,
  repulsion: 0.9,
  correction: 0.22,
  blend: 0.1,

  mouseRadius: 175,
  mousePush: 1.1,
  mouseDrag: 0.1,

  rippleRadius: 260,
  rippleForce: 9,

  returnStrength: 0.003,
};

// Coding theme colors (RGB)
const palette: [number, number, number][] = [
  [0, 185, 45],
  [0, 185, 45],
  [0, 185, 45],
  [91, 111, 232],
  [255, 255, 255],
];

// 2. Create a reusable p5 sketch
export function createParticleField(container: HTMLElement) {
  let detachListeners = () => {};

  const sketch = (p: P5) => {
    let particles: Particle[] = [];

    const mouse = {
      x: -1000,
      y: -1000,
      previousX: -1000,
      previousY: -1000,
      inside: false,
    };

    // 3. Each individual particle
    class Particle {
      x: number;
      y: number;
      previousX: number;
      previousY: number;

      homeX: number;
      homeY: number;

      vx = 0;
      vy = 0;
      ax = 0;
      ay = 0;
      density = 0;

      size: number;
      shape: number;
      rotation: number;
      rotationSpeed: number;
      color: [number, number, number];

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.previousX = x;
        this.previousY = y;

        this.homeX = x;
        this.homeY = y;

        this.size = cfg.sizeMin + Math.random() * (cfg.sizeMax - cfg.sizeMin);

        this.shape = Math.floor(Math.random() * 3);
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;

        this.color = palette[Math.floor(Math.random() * palette.length)];
      }

      // 4. Interaction between two nearby particles
      interact(other: Particle) {
        const dx = this.x - other.x;
        const dy = this.y - other.y;
        const distance = Math.hypot(dx, dy);

        if (distance === 0 || distance >= cfg.interactRadius) {
          return;
        }

        const nx = dx / distance;
        const ny = dy / distance;
        const closeness = 1 - distance / cfg.interactRadius;

        this.density += closeness;
        other.density += closeness;

        // Repel each other
        const force = closeness * cfg.repulsion;

        this.ax += nx * force;
        this.ay += ny * force;

        other.ax -= nx * force;
        other.ay -= ny * force;

        // Separate overlapping particles
        const minDistance = (this.size + other.size) / 2;

        if (distance < minDistance) {
          const correction = (minDistance - distance) * cfg.correction;

          this.x += nx * correction;
          this.y += ny * correction;

          other.x -= nx * correction;
          other.y -= ny * correction;
        }

        // Blend velocities for fluid-like motion
        const averageVX = (this.vx + other.vx) / 2;
        const averageVY = (this.vy + other.vy) / 2;
        const blend = closeness * cfg.blend;

        this.vx += (averageVX - this.vx) * blend;
        this.vy += (averageVY - this.vy) * blend;

        other.vx += (averageVX - other.vx) * blend;
        other.vy += (averageVY - other.vy) * blend;
      }

      // 5. Calculate the particle's movement
      update(dt: number) {
        this.previousX = this.x;
        this.previousY = this.y;

        this.rotation += this.rotationSpeed * dt;

        const mouseMoving =
          Math.hypot(mouse.x - mouse.previousX, mouse.y - mouse.previousY) >
          0.5;

        if (mouse.inside && mouseMoving) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.hypot(dx, dy);

          if (distance > 0.01 && distance < cfg.mouseRadius) {
            const strength = 1 - distance / cfg.mouseRadius;

            const movementX = mouse.x - mouse.previousX;
            const movementY = mouse.y - mouse.previousY;

            this.ax +=
              (dx / distance) * strength * cfg.mousePush +
              movementX * strength * cfg.mouseDrag;

            this.ay +=
              (dy / distance) * strength * cfg.mousePush +
              movementY * strength * cfg.mouseDrag;
          }
        }
        this.ax += (this.homeX - this.x) * cfg.returnStrength;
        this.ay += (this.homeY - this.y) * cfg.returnStrength;

        const damping = Math.max(0.7, cfg.damping - this.density * 0.02);

        this.vx = (this.vx + this.ax * dt) * damping;
        this.vy = (this.vy + this.ay * dt) * damping;

        this.x += this.vx * dt;
        this.y += this.vy * dt;

        // Bounce at canvas edges
        const radius = this.size / 2;

        if (this.x < radius) {
          this.x = radius;
          this.vx *= -cfg.bounce;
        } else if (this.x > p.width - radius) {
          this.x = p.width - radius;
          this.vx *= -cfg.bounce;
        }

        if (this.y < radius) {
          this.y = radius;
          this.vy *= -cfg.bounce;
        } else if (this.y > p.height - radius) {
          this.y = p.height - radius;
          this.vy *= -cfg.bounce;
        }

        // Reset forces for the next frame
        this.ax = 0;
        this.ay = 0;
        this.density = 0;

        this.rotationSpeed *= 0.99;
      }

      // 6. Draw the particle
      render() {
        p.push();

        p.translate(this.x, this.y);
        p.rotate(this.rotation);
        p.noStroke();

        p.fill(this.color[0], this.color[1], this.color[2], 115);

        if (this.shape === 0) {
          p.triangle(
            0,
            -this.size / 2,
            -this.size / 2,
            this.size / 2,
            this.size / 2,
            this.size / 2,
          );
        } else if (this.shape === 1) {
          p.square(0, 0, this.size);
        } else {
          p.circle(0, 0, this.size);
        }

        p.pop();
      }
    }

    // 7. Distribute particles across the canvas
    function seedField() {
      particles = [];

      const maxParticles = p.width < 640 ? 180 : cfg.maxParticles;

      const spacing = Math.max(
        cfg.spacing,
        Math.sqrt((p.width * p.height) / maxParticles),
      );

      const columns = Math.max(1, Math.floor(p.width / spacing));

      const rows = Math.max(1, Math.floor(p.height / spacing));

      const cellWidth = p.width / columns;

      const cellHeight = p.height / rows;

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
          const jitterX = (Math.random() - 0.5) * spacing * 0.3;
          const jitterY = (Math.random() - 0.5) * spacing * 0.3;

          particles.push(
            new Particle(
              (col + 0.5) * cellWidth + jitterX,
              (row + 0.5) * cellHeight + jitterY,
            ),
          );
        }
      }
    }

    // Convert screen coordinates into canvas coordinates
    function getLocalPointer(event: PointerEvent) {
      const rect = container.getBoundingClientRect();

      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        inside:
          event.clientX >= rect.left &&
          event.clientX <= rect.right &&
          event.clientY >= rect.top &&
          event.clientY <= rect.bottom,
      };
    }

    function handlePointerMove(event: PointerEvent) {
      const position = getLocalPointer(event);

      if (position.inside && !mouse.inside) {
        mouse.previousX = position.x;
        mouse.previousY = position.y;
      }

      mouse.x = position.x;
      mouse.y = position.y;
      mouse.inside = position.inside;
    }

    // 8. Click ripple
    function handlePointerDown(event: PointerEvent) {
      const position = getLocalPointer(event);

      if (!position.inside) return;

      for (const particle of particles) {
        const dx = particle.x - position.x;
        const dy = particle.y - position.y;
        const distance = Math.hypot(dx, dy);

        if (distance > 0.01 && distance < cfg.rippleRadius) {
          const strength = 1 - distance / cfg.rippleRadius;
          const impulse = strength * cfg.rippleForce;

          particle.vx += (dx / distance) * impulse;
          particle.vy += (dy / distance) * impulse;

          particle.rotationSpeed += (Math.random() - 0.5) * 0.15 * strength;
        }
      }
    }

    // 9. p5 setup: runs once
    p.setup = () => {
      p.createCanvas(
        Math.max(1, container.clientWidth),
        Math.max(1, container.clientHeight),
      );

      p.pixelDensity(Math.min(window.devicePixelRatio || 1, 2));
      p.frameRate(60);
      p.rectMode(p.CENTER);

      seedField();

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) {
        p.noLoop();
      } else {
        window.addEventListener("pointermove", handlePointerMove);
        window.addEventListener("pointerdown", handlePointerDown);

        detachListeners = () => {
          window.removeEventListener("pointermove", handlePointerMove);
          window.removeEventListener("pointerdown", handlePointerDown);
        };
      }
    };

    // 10. p5 draw: runs every frame
    p.draw = () => {
      // Transparent background
      p.clear();

      const dt = Math.min(p.deltaTime / 16.667, 2);

      // Spatial grid for efficient neighbor searches
      const grid = new Map<string, number[]>();
      const cellSize = cfg.interactRadius;

      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];

        const cellX = Math.floor(particle.x / cellSize);
        const cellY = Math.floor(particle.y / cellSize);
        const key = `${cellX},${cellY}`;

        const bucket = grid.get(key) ?? [];
        bucket.push(i);
        grid.set(key, bucket);
      }

      // Check nearby particles
      for (let i = 0; i < particles.length; i++) {
        const particle = particles[i];

        const cellX = Math.floor(particle.x / cellSize);
        const cellY = Math.floor(particle.y / cellSize);

        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const key = `${cellX + dx},${cellY + dy}`;
            const neighbors = grid.get(key) ?? [];

            for (const j of neighbors) {
              if (j > i) {
                particle.interact(particles[j]);
              }
            }
          }
        }
      }

      // Update positions, then draw
      for (const particle of particles) {
        particle.update(dt);
      }

      for (const particle of particles) {
        particle.render();
      }

      mouse.previousX = mouse.x;
      mouse.previousY = mouse.y;
    };

    // 11. Keep the canvas responsive
    p.windowResized = () => {
      p.resizeCanvas(
        Math.max(1, container.clientWidth),
        Math.max(1, container.clientHeight),
      );

      seedField();
    };
  };

  // React will call dispose() when the component unmounts
  return {
    sketch,
    dispose: () => detachListeners(),
  };
}
