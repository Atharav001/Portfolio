"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(1); // 1: Reveal, 2: Curtain, 3: Completed

  useEffect(() => {
    // Phase 1: Reveal finishes after 1.5s
    const timer1 = setTimeout(() => setPhase(2), 2000);
    // Phase 2: Curtain finishes after 1s
    const timer2 = setTimeout(() => {
      setPhase(3);
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Black Curtain - Split Reveal */}
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: phase >= 2 ? 0 : 1 }}
            transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
            className="absolute inset-0 bg-black origin-top z-10"
          />
          <motion.div
            initial={{ scaleY: 1 }}
            animate={{ scaleY: phase >= 2 ? 0 : 1 }}
            transition={{ duration: 1, ease: [0.87, 0, 0.13, 1] }}
            className="absolute inset-0 bg-black origin-bottom z-10"
          />

          {/* Smooth Text Reveal */}
          <div className="relative z-20 overflow-hidden">
            <motion.div
              initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
              transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <motion.h1
                layoutId="brand-name"
                className="font-heading font-black text-orange text-[clamp(2.5rem,8vw,8rem)] leading-[0.9] tracking-tighter text-center uppercase"
              >
                Atharav<br />Narang
              </motion.h1>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
