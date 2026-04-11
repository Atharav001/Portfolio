"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(1); // 1: Reveal, 2: Traveling/Morphing

  useEffect(() => {
    // Phase 1: Reveal Duration (Wait for reveal to finish)
    const revealTimer = setTimeout(() => {
      setPhase(2);
      // Let the Traveling animation play out before unmounting
      setTimeout(onComplete, 2000);
    }, 2800);

    return () => clearTimeout(revealTimer);
  }, [onComplete]);

  const brandOrange = "#FE5102";

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none"
    >
      {/* Background Overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 1 ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute inset-0 bg-black z-0 pointer-events-auto"
      />

      {/* Vertical Split Curtain Reveal */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: phase === 2 ? "-100%" : "0%" }}
        transition={{ duration: 1.5, ease: [0.85, 0, 0.15, 1], delay: 0.2 }}
        className="absolute inset-x-0 top-0 h-1/2 bg-black z-10 pointer-events-auto border-b border-orange/10"
      />
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: phase === 2 ? "100%" : "0%" }}
        transition={{ duration: 1.5, ease: [0.85, 0, 0.15, 1], delay: 0.2 }}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-black z-10 pointer-events-auto border-t border-orange/10"
      />

      {/* The Name (Single Line in Intro, Center-aligned Reveal) */}
      <div className="relative z-20 overflow-hidden py-4">
        <motion.div
          initial={{ y: "110%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1], delay: 0.6 }}
          className="flex gap-[1.5em]"
        >
          <motion.span
            layoutId="brand-first"
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
            style={{ color: brandOrange }}
            className="font-heading font-black text-[clamp(2.5rem,6vw,6.5rem)] leading-none tracking-tighter uppercase italic"
          >
            Atharav
          </motion.span>
          <motion.span
            layoutId="brand-last"
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
            style={{ color: brandOrange }}
            className="font-heading font-black text-[clamp(2.5rem,6vw,6.5rem)] leading-none tracking-tighter uppercase italic"
          >
            Narang
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}
