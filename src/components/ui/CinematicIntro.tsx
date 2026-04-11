"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(1); // 1: Reveal, 2: Traveling/Split, 3: Finished

  useEffect(() => {
    // Phase 1 -> 2: Start the Split and Flight
    const startSplitTimer = setTimeout(() => {
      setPhase(2);
    }, 1800);

    // Phase 2 -> 3: Component is completely clear of the screen
    const finishTimer = setTimeout(() => {
      setPhase(3);
      onComplete(); // Only unmount after curtains have clearly left the screen
    }, 3200);

    return () => {
      clearTimeout(startSplitTimer);
      clearTimeout(finishTimer);
    };
  }, [onComplete]);

  const brandOrange = "#FF5F00";
  const name = "ATHARAV NARANG";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden pointer-events-none">
      {/* Background Dimmer (Fades out during split) */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: phase >= 2 ? 0 : 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-black z-0 pointer-events-auto"
      />

      {/* HORIZONTAL CURTAINS (The Split) */}
      {/* These stay until phase 3 to ensure the animation is visible */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: phase >= 2 ? "-100%" : "0%" }}
        transition={{ duration: 1.4, ease: [0.8, 0, 0.1, 1], delay: 0.1 }}
        className="absolute inset-y-0 left-0 w-1/2 bg-black z-[100] pointer-events-auto border-r border-[#FF5F00]/20 shadow-[10px_0_30px_rgba(0,0,0,0.5)]"
      />
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: phase >= 2 ? "100%" : "0%" }}
        transition={{ duration: 1.4, ease: [0.8, 0, 0.1, 1], delay: 0.1 }}
        className="absolute inset-y-0 right-0 w-1/2 bg-black z-[100] pointer-events-auto border-l border-[#FF5F00]/20 shadow-[-10px_0_30px_rgba(0,0,0,0.5)]"
      />

      {/* THE NAMES (Independent Reveal & Magnet Flight) */}
      <div className="relative z-[150] overflow-hidden px-12 py-4 h-[12rem] flex items-center justify-center">
        <AnimatePresence>
          {phase === 1 && (
            <motion.div
              key="intro-name-container"
              className="flex items-center justify-center"
              initial={{ y: "150%" }}
              animate={{ y: "0%" }}
              exit={{ opacity: 1 }} // Keep visible during flight
              transition={{ duration: 1, ease: [0.77, 0, 0.175, 1], delay: 0.3 }}
            >
              {name.split("").map((char, i) => (
                <motion.span
                  key={i}
                  layoutId={`brand-char-${i}`}
                  transition={{ 
                    duration: 1.6, 
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ color: brandOrange }}
                  className="inline-block font-heading font-black text-[clamp(2.5rem,7vw,7rem)] leading-none tracking-tighter uppercase whitespace-pre"
                >
                  {char}
                </motion.span>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
