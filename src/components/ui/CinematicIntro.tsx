"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(1); // 1: Reveal, 2: Traveling

  useEffect(() => {
    const revealTimer = setTimeout(() => {
      setPhase(2);
      // CALL onComplete immediately as phase 2 starts!
      // This triggers the layoutId handoff and our "Magnet" flight.
      onComplete();
    }, 1500);

    return () => clearTimeout(revealTimer);
  }, [onComplete]);

  const brandOrange = "#FE5102";
  const name = "ATHARAV NARANG";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
      {/* Background Mask */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 1 ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 bg-black z-0 pointer-events-auto"
      />

      {/* Horizontal Curtain Split (Slide Away) */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: phase === 2 ? "-100%" : "0%" }}
        transition={{ duration: 1, ease: [0.8, 0, 0.1, 1], delay: 0.1 }}
        className="absolute inset-y-0 left-0 w-1/2 bg-black z-10 border-r border-orange/5"
      />
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: phase === 2 ? "100%" : "0%" }}
        transition={{ duration: 1, ease: [0.8, 0, 0.1, 1], delay: 0.1 }}
        className="absolute inset-y-0 right-0 w-1/2 bg-black z-10 border-l border-orange/5"
      />

      {/* The Name Parts (Magnetic Source) */}
      <div className="relative z-20 flex gap-0 px-10 overflow-hidden">
        {phase === 1 && (
          <motion.div
            initial={{ y: "150%" }}
            animate={{ y: "0%" }}
            exit={{ opacity: 1 }} // Don't fade out, let layoutId handle the movement
            transition={{ duration: 0.8, ease: "circOut" }}
            className="flex"
          >
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                layoutId={`brand-char-${i}`}
                transition={{ 
                  duration: 1.4, 
                  ease: [0.23, 1, 0.32, 1],
                  rotateX: { duration: 1.4 }
                }}
                animate={{ rotateX: 360 }}
                style={{ color: brandOrange }}
                className="inline-block font-heading font-black text-[clamp(2.5rem,7vw,7rem)] leading-none tracking-tighter uppercase whitespace-pre"
              >
                {char}
              </motion.span>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
