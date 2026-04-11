"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    // Once the name reveals, trigger the GSAP Iron Man flight
    const flightTimer = setTimeout(() => {
      setPhase(2);

      const chars = document.querySelectorAll(".intro-char") as NodeListOf<HTMLElement>;
      const middleIndex = Math.floor(chars.length / 2);

      chars.forEach((char, i) => {
        // Skip spaces if any, though we render them as empty spans
        if (!char.textContent?.trim()) return;

        const targetEl = document.querySelector(`.hero-char-${i}`) as HTMLElement;
        
        if (targetEl) {
          // Calculate precise coordinates
          const charRect = char.getBoundingClientRect();
          const targetRect = targetEl.getBoundingClientRect();

          const deltaX = targetRect.left - charRect.left;
          // Font bounding boxes differ, so we align centers to be perfectly safe
          const deltaY = (targetRect.top + targetRect.height / 2) - (charRect.top + charRect.height / 2);

          const delay = Math.abs(i - middleIndex) * 0.05;

          gsap.to(char, {
            x: deltaX,
            y: deltaY,
            duration: 0.8,
            ease: "power3.inOut",
            delay: delay,
            onComplete: () => {
              // To make it seamless, we reveal the real Hero letter and hide the flying one
              targetEl.style.opacity = "1";
              char.style.opacity = "0";

              // Refined Spark Effect (Peripheral Bloom)
              gsap.fromTo(targetEl, 
                { textShadow: "0 0 20px rgba(255,255,255,1), 0 0 10px rgba(255,255,255,0.8)", scale: 1.05 }, 
                { textShadow: "0 0 0px rgba(255,255,255,0), 0 0 0px rgba(255,255,255,0)", scale: 1, duration: 0.4, ease: "power2.out" }
              );

              // If it's the last character to finish, call onComplete
              if (i === chars.length - 1 || i === 0) {
                // Buffer to assure all animations wrap up and curtains slide away
                setTimeout(onComplete, 800);
              }
            }
          });
        }
      });
    }, 1800);

    return () => clearTimeout(flightTimer);
  }, [onComplete]);

  const brandOrange = "#FF5F00";
  const name = "ATHARAV NARANG";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none">
      {/* Background Screen */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: phase >= 2 ? 0 : 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-black z-0"
      />

      {/* Horizontal Curtains (Boutique Slide) */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: phase >= 2 ? "-100%" : "0%" }}
        transition={{ duration: 1.2, ease: "expo.inOut" }}
        className="absolute inset-y-0 left-0 w-1/2 bg-black z-10"
      />
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: phase >= 2 ? "100%" : "0%" }}
        transition={{ duration: 1.2, ease: "expo.inOut" }}
        className="absolute inset-y-0 right-0 w-1/2 bg-black z-10"
      />

      {/* Flying Letters Container */}
      <div 
        className={`relative z-[150] px-12 h-[12rem] flex items-center justify-center transition-all duration-300 ${phase === 1 ? 'overflow-hidden' : 'overflow-visible'}`}
      >
        {phase <= 2 && (
          <motion.div
            className="flex items-center justify-center pt-8"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            {name.split("").map((char, i) => (
              <span
                key={i}
                style={{ color: brandOrange, display: "inline-block" }}
                className={`intro-char font-heading font-black text-[clamp(2.5rem,7vw,7rem)] leading-none tracking-tighter uppercase ${char === " " ? "w-[4rem]" : ""}`}
              >
                {char}
              </span>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
