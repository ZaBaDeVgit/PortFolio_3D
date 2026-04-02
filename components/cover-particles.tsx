"use client"

import { useEffect, useState, useCallback } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const CoverParticles = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const particlesLoaded = useCallback(async (container?: any) => {
    console.log("Particles loaded");
  }, []);

  if (!init) return null;

  return (
    <div className="absolute inset-0 z-0">
      <Particles
        id="tsparticles"
        particlesLoaded={particlesLoaded}
        options={{
          fpsLimit: 120,
          fullScreen: { enable: false },
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "grab", parallax: { enable: true, force: 60, smooth: 10 } },
            },
            modes: {
              push: { quantity: 3 },
              grab: { distance: 200, links: { opacity: 0.8 } },
            },
          },
          particles: {
            color: { value: "#ff1b00" },
            links: {
              color: "#4a2fbd",
              distance: 180,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "out" },
              random: true,
              speed: 0.8,
              straight: false,
            },
            number: {
              density: { enable: true },
              value: 60,
            },
            opacity: { value: { min: 0.2, max: 0.6 }, animation: { enable: true, speed: 0.5 } },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 4 }, animation: { enable: true, speed: 2 } },
            twinkle: { particles: { enable: true, frequency: 0.05, opacity: 1 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default CoverParticles;
