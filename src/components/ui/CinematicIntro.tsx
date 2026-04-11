"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(1); // 1: Reveal, 2: Traveling

  useEffect(() => {
    // Phase 1: Reveal is snap-fast
    const revealTimer = setTimeout(() => {
      setPhase(2);
      // Quickly hand off the layout to the home page
      setTimeout(onComplete, 800); 
    }, 1000);

    return () => clearTimeout(revealTimer);
  }, [onComplete]);

  const brandOrange = "#FE5102";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
      {/* Background Dimmer */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 1 ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 bg-black z-0 pointer-events-auto"
      />

      {/* Vertical Split Curtain (High-speed Slide Away) */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: phase === 2 ? "-100%" : "0%" }}
        transition={{ duration: 0.8, ease: [0.85, 0, 0.15, 1], delay: 0.05 }}
        className="absolute inset-x-0 top-0 h-1/2 bg-black z-10"
      />
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: phase === 2 ? "100%" : "0%" }}
        transition={{ duration: 0.8, ease: [0.85, 0, 0.15, 1], delay: 0.05 }}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-black z-10"
      />

      {/* The Name (Intro State) */}
      <div className="relative z-20 overflow-hidden px-10">
        {phase === 1 && (
          <motion.div
            key="reveal-container"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "circOut" }}
            className="flex gap-[3rem] items-baseline"
          >
            <motion.span
              layoutId="brand-first"
              style={{ color: brandOrange }}
              className="font-heading font-black text-[clamp(2.5rem,7vw,7rem)] leading-none tracking-tighter uppercase"
            >
              Atharav
            </motion.span>
            <motion.span
              layoutId="brand-last"
              style={{ color: brandOrange }}
              className="font-heading font-black text-[clamp(2.5rem,7vw,7rem)] leading-none tracking-tighter uppercase"
            >
              Narang
            </motion.span>
          </motion.div>
        )}
      </div>
    </div>
  );
}
