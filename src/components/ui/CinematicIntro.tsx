"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(1); // 1: Reveal, 2: Suit-up/Traveling

  useEffect(() => {
    // No initial delay - start reveal immediately
    const revealTimer = setTimeout(() => {
      setPhase(2);
      // Give more time for the flying flight path
      setTimeout(onComplete, 2500);
    }, 1500);

    return () => clearTimeout(revealTimer);
  }, [onComplete]);

  const brandOrange = "#FE5102";

  // Aggressive "suit-up" cubic bezier
  const suitUpTransition = {
    duration: 1.5,
    ease: [0.19, 1, 0.22, 1],
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
      {/* Background Mask */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 1 ? 1 : 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute inset-0 bg-black z-0"
      />

      {/* Vertical Curtain Split (Mechanical Slide) */}
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: phase === 2 ? "-100%" : "0%" }}
        transition={{ duration: 1.2, ease: [0.8, 0, 0.1, 1], delay: 0.1 }}
        className="absolute inset-x-0 top-0 h-1/2 bg-black z-10 border-b border-orange/5"
      />
      <motion.div
        initial={{ y: "0%" }}
        animate={{ y: phase === 2 ? "100%" : "0%" }}
        transition={{ duration: 1.2, ease: [0.8, 0, 0.1, 1], delay: 0.1 }}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-black z-10 border-t border-orange/5"
      />

      {/* The Name Parts (Magnetized Logic) */}
      <div className="relative z-20 flex gap-[3rem] px-10 overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 0.8, ease: "circOut" }}
        >
          <div className="flex gap-[3rem]">
            <motion.span
              layoutId="brand-first"
              transition={suitUpTransition}
              style={{ color: brandOrange }}
              className="font-heading font-black text-[clamp(2.5rem,7vw,7rem)] leading-none tracking-tighter uppercase"
            >
              Atharav
            </motion.span>
            <motion.span
              layoutId="brand-last"
              transition={suitUpTransition}
              style={{ color: brandOrange }}
              className="font-heading font-black text-[clamp(2.5rem,7vw,7rem)] leading-none tracking-tighter uppercase"
            >
              Narang
            </motion.span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
