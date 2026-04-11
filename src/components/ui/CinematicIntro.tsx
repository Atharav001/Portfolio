"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(1); // 1: Reveal, 2: Suit-up

  useEffect(() => {
    const revealTimer = setTimeout(() => {
      setPhase(2);
      setTimeout(onComplete, 2000); // Allow time for the letters to "suit up"
    }, 1200);

    return () => clearTimeout(revealTimer);
  }, [onComplete]);

  const brandOrange = "#FE5102";
  const name = "ATHARAV NARANG";

  // Animation variants for the "Iron Man" suit-up feel
  const charTransition = (i: number) => ({
    duration: 1.4,
    ease: [0.23, 1, 0.32, 1],
    delay: 0.1 + (Math.abs(i - name.length / 2) * 0.05), // Stagger from center
  });

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none">
      {/* Background Mask */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 1 ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-black z-0 pointer-events-auto"
      />

      {/* Horizontal Curtain Split (The "Boutique" Reveal) */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: phase === 2 ? "-100%" : "0%" }}
        transition={{ duration: 1.2, ease: [0.8, 0, 0.1, 1], delay: 0.1 }}
        className="absolute inset-y-0 left-0 w-1/2 bg-black z-10 pointer-events-auto border-r border-orange/5"
      />
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: phase === 2 ? "100%" : "0%" }}
        transition={{ duration: 1.2, ease: [0.8, 0, 0.1, 1], delay: 0.1 }}
        className="absolute inset-y-0 right-0 w-1/2 bg-black z-10 pointer-events-auto border-l border-orange/5"
      />

      {/* The Individual Letters (Iron Man Suit Parts) */}
      <div className="relative z-20 flex gap-0 px-10 overflow-hidden">
        <motion.div
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          transition={{ duration: 1, ease: "circOut", delay: 0.3 }}
          className="flex"
        >
          {name.split("").map((char, i) => (
            <motion.span
              key={i}
              layoutId={`brand-char-${i}`}
              transition={charTransition(i)}
              initial={{ rotateX: 0 }}
              animate={{ rotateX: phase === 2 ? 360 : 0 }}
              style={{ color: brandOrange }}
              className="inline-block font-heading font-black text-[clamp(2.5rem,7vw,7rem)] leading-none tracking-tighter uppercase whitespace-pre"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
