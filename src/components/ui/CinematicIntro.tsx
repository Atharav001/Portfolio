"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import gsap from "gsap";

export default function CinematicIntro({ onComplete }: { onComplete: () => void }) {
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    const createDustEffect = (x: number, y: number) => {
      const container = document.body;
      
      // 1. Sharp Shockwave
      const shock = document.createElement("div");
      shock.className = "shockwave";
      shock.style.left = `${x}px`;
      shock.style.top = `${y}px`;
      shock.style.width = "50px";
      shock.style.height = "50px";
      container.appendChild(shock);
      setTimeout(() => shock.remove(), 500);

      // 2. High-Density Powder Burst
      for (let i = 0; i < 12; i++) {
        const powder = document.createElement("div");
        powder.className = "powder-particle";
        const size = 1.5 + Math.random() * 2.5;
        powder.style.width = `${size}px`;
        powder.style.height = `${size}px`;
        powder.style.left = `${x}px`;
        powder.style.top = `${y}px`;
        
        const angle = Math.random() * Math.PI * 2;
        const distance = 40 + Math.random() * 80;
        
        powder.style.setProperty("--tw-translateX", `${-50 + (Math.cos(angle) * distance)}%`);
        powder.style.setProperty("--tw-translateY", `${-50 + (Math.sin(angle) * distance)}%`);
        powder.style.setProperty("--powder-duration", `${0.6 + Math.random() * 0.6}s`);
        
        container.appendChild(powder);
        setTimeout(() => powder.remove(), 1200);
      }

      // 3. Dense Smoke Clouds
      for (let i = 0; i < 5; i++) {
        const smoke = document.createElement("div");
        smoke.className = "smoke-particle";
        const size = 30 + Math.random() * 50;
        smoke.style.width = `${size}px`;
        smoke.style.height = `${size}px`;
        smoke.style.left = `${x}px`;
        smoke.style.top = `${y}px`;
        
        const angle = (Math.random() * Math.PI) + Math.PI;
        const distance = 30 + Math.random() * 50;
        
        smoke.style.setProperty("--tw-translateX", `${-50 + (Math.cos(angle) * distance)}%`);
        smoke.style.setProperty("--tw-translateY", `${-100 + (Math.sin(angle) * (distance / 2))}%`);
        smoke.style.setProperty("--smoke-duration", `${0.8 + Math.random() * 0.8}s`);
        smoke.style.setProperty("--smoke-scale", `${4 + Math.random() * 2}`);
        smoke.style.setProperty("--smoke-rotate", `${(Math.random() - 0.5) * 180}deg`);
        
        container.appendChild(smoke);
        setTimeout(() => smoke.remove(), 1800);
      }
    };

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
              // Trigger dust effect at landing position (targetRect coordinates)
              createDustEffect(targetRect.left + targetRect.width / 2, targetRect.top + targetRect.height / 2);

              // To make it seamless, we reveal the real Hero letter and hide the flying one
              targetEl.style.opacity = "1";
              char.style.opacity = "0";

              // If it's the last character to finish, call onComplete
              if (i === chars.length - 1 || i === 0) {
                // Buffer to assure all animations wrap up and curtains slide away
                setTimeout(onComplete, 800);
              }
            }
          });
        }
      });
    }, 1500);

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
                className={`intro-char font-pixel text-[clamp(2rem,5vw,5rem)] leading-none tracking-tighter uppercase ${char === " " ? "w-[4rem]" : ""}`}
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
