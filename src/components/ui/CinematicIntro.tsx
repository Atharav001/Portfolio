"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(1); // 1: Group Reveal, 2: Suit-up

  useEffect(() => {
    // Phase 1: Reveal the name as a group (shorter duration)
    const revealTimer = setTimeout(() => {
      setPhase(2);
      // Hand off to Hero section immediately to trigger the "Magnet" flight
      onComplete();
    }, 1600);

    return () => clearTimeout(revealTimer);
  }, [onComplete]);

  const brandOrange = "#FF5F00";
  const name = "ATHARAV NARANG";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none bg-black">
      {/* Background Dimmer */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 1 ? 1 : 0 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-black z-0 pointer-events-auto"
      />

      {/* Horizontal Curtain Split (Stark-style Slide) */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: phase === 2 ? "-100%" : "0%" }}
        transition={{ duration: 1.2, ease: [0.8, 0, 0.1, 1], delay: 0.1 }}
        className="absolute inset-y-0 left-0 w-1/2 bg-[#000000] z-10 pointer-events-auto border-r border-[#FF5F00]/10"
      />
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: phase === 2 ? "100%" : "0%" }}
        transition={{ duration: 1.2, ease: [0.8, 0, 0.1, 1], delay: 0.1 }}
        className="absolute inset-y-0 right-0 w-1/2 bg-[#000000] z-10 pointer-events-auto border-l border-[#FF5F00]/10"
      />

      {/* The Name (Group Rise -> Independent "Magnet" Handoff) */}
      <div className="relative z-20 overflow-hidden px-12 py-4 h-[12rem] flex items-center justify-center">
        {phase === 1 && (
          <motion.div
            className="flex items-center justify-center"
            initial={{ y: "150%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.3 }}
          >
            {name.split("").map((char, i) => (
              <motion.span
                key={i}
                layoutId={`brand-char-${i}`}
                transition={{ 
                  duration: 1.5, 
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.02 // Very slight micro-stagger for the "Magnet" feel during flight
                }}
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
