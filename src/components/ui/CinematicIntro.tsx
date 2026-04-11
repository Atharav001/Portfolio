"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(1); // 1: Reveal, 2: Morph/Landing

  useEffect(() => {
    // Phase 1: Reveal
    const timer = setTimeout(() => {
      setPhase(2);
      // Give time for the morph animation to play before removing intro completely
      setTimeout(onComplete, 1600);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none"
    >
      {/* Background Overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 1 ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-0 bg-black z-0 pointer-events-auto"
      />

      {/* Vertical Split Curtain Reveal */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: phase === 2 ? "-100%" : "0%" }}
        transition={{ duration: 1, ease: [0.83, 0, 0.17, 1], delay: 0.1 }}
        className="absolute inset-x-0 top-0 h-1/2 bg-black z-10 pointer-events-auto"
      />
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: phase === 2 ? "100%" : "0%" }}
        transition={{ duration: 1, ease: [0.83, 0, 0.17, 1], delay: 0.1 }}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-black z-10 pointer-events-auto"
      />

      {/* The Name (Single Line in Intro) */}
      <div className="relative z-20">
        <motion.div
          initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.17, 1], delay: 0.4 }}
          className="flex gap-[0.5em]"
        >
          <motion.span
            layoutId="brand-first"
            className="font-heading font-black text-white text-[clamp(2rem,6vw,6rem)] leading-none tracking-tighter uppercase"
          >
            Atharav
          </motion.span>
          <motion.span
            layoutId="brand-last"
            className="font-heading font-black text-orange text-[clamp(2rem,6vw,6rem)] leading-none tracking-tighter uppercase"
          >
            Narang
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}
