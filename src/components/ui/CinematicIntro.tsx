"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(1); // 1: Reveal, 2: Morph/Landing

  useEffect(() => {
    // Phase 1: Reveal
    const timer = setTimeout(() => {
      setPhase(2);
      // Give time for the morph animation to play before removing intro
      setTimeout(onComplete, 1500);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none"
    >
      {/* Center Reveal Overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 1 ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 bg-black z-0 pointer-events-auto"
      />

      {/* The Curtain (Left & Right Split) */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: phase === 2 ? "-100%" : "0%" }}
        transition={{ duration: 1.2, ease: [0.83, 0, 0.17, 1], delay: 0.1 }}
        className="absolute inset-y-0 left-0 w-1/2 bg-black z-10 pointer-events-auto"
      />
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: phase === 2 ? "100%" : "0%" }}
        transition={{ duration: 1.2, ease: [0.83, 0, 0.17, 1], delay: 0.1 }}
        className="absolute inset-y-0 right-0 w-1/2 bg-black z-10 pointer-events-auto"
      />

      {/* The Name (Phase 1: Center, Phase 2: Morph into Hero) */}
      <div className="relative z-20">
        <motion.div
          initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.5 }}
        >
          <motion.h1
            layoutId="brand-name"
            className="font-heading font-black text-orange text-[clamp(2rem,6vw,6.5rem)] leading-none tracking-tighter whitespace-nowrap uppercase italic px-4"
          >
            Atharav Narang
          </motion.h1>
        </motion.div>
      </div>
    </motion.div>
  );
}
