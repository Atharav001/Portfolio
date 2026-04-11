"use client";

import { ArrowDown } from "lucide-react";
import Typewriter from "../ui/Typewriter";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Texture */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 texture-overlay pointer-events-none"
      />

      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        <div className="mb-14 flex flex-col items-start gap-4">
          <div className="flex">
            {"ATHARAV".split("").map((char, i) => (
              <span
                key={i}
                style={{ color: "#FF5F00", opacity: 0 }}
                className={`hero-char-${i} font-pixel text-[clamp(2.5rem,8vw,8rem)] leading-[0.85] tracking-tight uppercase block`}
              >
                {char}
              </span>
            ))}
          </div>
          <div className="flex">
            {"NARANG".split("").map((char, i) => (
              <span
                key={i + 8}
                style={{ color: "#FF5F00", opacity: 0 }}
                className={`hero-char-${i + 8} font-pixel text-[clamp(2.5rem,8vw,8rem)] leading-[0.85] tracking-tight uppercase block`}
              >
                {char}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4"
        >
          <p className="font-pixel text-vanilla text-[clamp(0.7rem,2vw,1.6rem)] leading-normal">
            {"Let's talk about"}
          </p>
          <span className="font-pixel text-[clamp(0.7rem,2vw,1.6rem)]">
            <Typewriter />
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-body text-vanilla/60 text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] mt-8 max-w-[600px]"
        >
          Designer & developer crafting digital experiences that are thoughtful, functional, and beautiful.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex gap-4 mt-10"
        >
          <motion.a
            href="#projects"
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "#FE5102",
              boxShadow: "0 0 20px rgba(254, 81, 2, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="font-body font-medium text-[16px] bg-orange text-white px-6 py-3 rounded-full transition-all duration-300"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ 
              scale: 1.05, 
              borderColor: "#FE5102", 
              color: "#FE5102",
              boxShadow: "0 0 20px rgba(254, 81, 2, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            className="font-body font-medium text-[16px] border border-vanilla/20 text-vanilla px-6 py-3 rounded-full transition-all duration-300"
          >
            Get in Touch
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-vanilla/30 hover:text-orange transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
}
