"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFirePreset } from "@tsparticles/preset-fire";

export const ParticlesComponent = () => {
  const [init, setInit] = useState(false);
  const [colors, setColors] = useState({
    background: "#121212",
    particle: "#ffffff",
    link: "#ffffff",
  });

  // Get Tailwind theme colors from CSS variables
  useEffect(() => {
    const root = getComputedStyle(document.documentElement);
    const background =
      root.getPropertyValue("--color-background").trim() || "#121212";
    const particle =
      root.getPropertyValue("--color-foreground").trim() || "#ffffff";
    const link = root.getPropertyValue("--color-primary").trim() || "#d4af37";

    setColors({ background, particle, link });
  }, []);

  // tsParticles init
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFirePreset(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: { value: colors.background },
      },
      fpsLimit: 60,
      interactivity: {
        events: {
          onClick: { enable: true, mode: "push" },
          onHover: { enable: true, mode: "repulse" },
        },
        modes: {
          push: { quantity: 1 },
          repulse: { distance: 200, duration: 0.4 },
        },
      },
      particles: {
        color: { value: colors.particle },

        move: {
          enable: true,
          speed: 1.6,
        },
        number: {
          density: { enable: true, area: 800 },
          value: 60,
        },
        opacity: { value: 0.5 },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 1 } },
      },
      detectRetina: true,
    }),
    [colors]
  );

  return init ? (
    <Particles
      id="tsparticles"
      options={options}
      className="fixed inset-0 -z-10"
    />
  ) : null;
};

export default ParticlesComponent;
