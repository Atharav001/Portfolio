"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(1); // 1: Reveal, 2: Traveling

  useEffect(() => {
    // Phase 1: Reveal Duration (Wait until name is fully visible)
    const revealTimer = setTimeout(() => {
      setPhase(2);
      // Hand off to home page after a brief pause for impact
      onComplete();
    }, 1800);

    return () => clearTimeout(revealTimer);
  }, [onComplete]);

  // Brand Orange exactly as requested: #FF5F00
  const brandOrange = "#FF5F00";
  const name = "ATHARAV NARANG";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none bg-black">
      {/* Background Mask */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 1 ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-black z-0 pointer-events-auto"
      />

      {/* Horizontal Curtain Split (Boutique Slide) */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: phase === 2 ? "-100%" : "0%" }}
        transition={{ duration: 1.2, ease: [0.8, 0, 0.1, 1], delay: 0.1 }}
        className="absolute inset-y-0 left-0 w-1/2 bg-[#000000] z-10 pointer-events-auto border-r border-[#FF5F00]/5"
      />
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: phase === 2 ? "100%" : "0%" }}
        transition={{ duration: 1.2, ease: [0.8, 0, 0.1, 1], delay: 0.1 }}
        className="absolute inset-y-0 right-0 w-1/2 bg-[#000000] z-10 pointer-events-auto border-l border-[#FF5F00]/5"
      />

      {/* The Name (MASKED reveal, High-Res Styling) */}
      <div className="relative z-20 overflow-hidden px-12 py-4 h-[12rem] flex items-center justify-center">
        {phase === 1 && (
          <motion.div
            className="flex items-center justify-center"
            initial={{ y: 0 }}
          >
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                layoutId={`brand-char-${i}`}
                initial={{ y: "150%" }}
                animate={{ y: "0%" }}
                transition={{ 
                  y: { duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.2 + i * 0.04 },
                  layout: { duration: 1.4, ease: [0.23, 1, 0.32, 1] }
                }}
                style={{ color: brandOrange }}
                className="inline-block font-heading font-black text-[clamp(2.5rem,7vw,7rem)] leading-none tracking-tighter uppercase whitespace-pre drop-shadow-[0_0_15px_rgba(255,95,0,0.1)]"
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
