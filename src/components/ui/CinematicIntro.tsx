"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(1); // 1: Reveal, 2: Flying/Morphing

  useEffect(() => {
    // Phase 1: Reveal starts quickly
    const revealTrigger = setTimeout(() => {
      // Stay in reveal for a shorter time
      const morphTrigger = setTimeout(() => {
        setPhase(2);
        // Complete the whole process faster
        setTimeout(onComplete, 1500);
      }, 1200);   // Show name for 1.2s
      
      return () => clearTimeout(morphTrigger);
    }, 200);      // Reduce initial black screen time to 200ms

    return () => clearTimeout(revealTrigger);
  }, [onComplete]);

  const brandOrange = "#FE5102";

  // Animation variants for the "Iron Man" suit-up feel
  const travelTransition = {
    duration: 1.2,
    ease: [0.23, 1, 0.32, 1], // Power4.out style for that "snap" into place
  };

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none"
    >
      {/* Background Overlay */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 1 ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-black z-0 pointer-events-auto"
      />

      {/* Vertical Split Curtain (The Reveal) */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: phase === 2 ? "-100%" : "0%" }}
        transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1], delay: 0.1 }}
        className="absolute inset-x-0 top-0 h-1/2 bg-black z-10 pointer-events-auto"
      />
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: phase === 2 ? "100%" : "0%" }}
        transition={{ duration: 1.2, ease: [0.85, 0, 0.15, 1], delay: 0.1 }}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-black z-10 pointer-events-auto"
      />

      {/* The Name (Iron Man Part Reveal) */}
      <div className="relative z-20 overflow-hidden px-10">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="flex gap-[2rem] items-baseline"
        >
          {/* Individual words traveling with layoutId */}
          <motion.span
            layoutId="brand-first"
            transition={travelTransition}
            style={{ color: brandOrange }}
            className="font-heading font-black text-[clamp(2rem,6vw,6rem)] leading-none tracking-tighter uppercase"
          >
            Atharav
          </motion.span>
          <motion.span
            layoutId="brand-last"
            transition={travelTransition}
            style={{ color: brandOrange }}
            className="font-heading font-black text-[clamp(2rem,6vw,6rem)] leading-none tracking-tighter uppercase"
          >
            Narang
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
}
