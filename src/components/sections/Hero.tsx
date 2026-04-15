"use client";

import { ArrowDown } from "lucide-react";
import Typewriter from "../ui/Typewriter";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-24 overflow-hidden">
      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        <div className="mb-14 flex flex-col items-start gap-4">
          <div className="flex">
            {"ATHARAV".split("").map((char, i) => (
              <span
                key={i}
                style={{ color: "#FF5F00", opacity: 0 }}
                className={`hero-char-${i} font-pixel text-[clamp(2rem,6vw,6rem)] leading-[0.85] tracking-tight uppercase block`}
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
                className={`hero-char-${i + 8} font-pixel text-[clamp(2rem,6vw,6rem)] leading-[0.85] tracking-tight uppercase block`}
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
          className="flex flex-col gap-1"
        >
          <h2 className="font-pixel text-orange text-[clamp(1rem,2.5vw,2rem)] leading-tight uppercase font-bold">
            AI Engineer | Building Production LLM Systems
          </h2>
          <div className="flex flex-col gap-1 mt-4">
             <p className="font-body text-vanilla/80 text-[clamp(1rem,1.5vw,1.25rem)] font-medium">
               First-year CS @ MIT Bangalore
             </p>
             <p className="font-body text-vanilla/85 text-[clamp(1rem,1.5vw,1.1rem)]">
               Specialized in RAG, Agents, Fine-Tuning
             </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap gap-4 mt-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "#FE5102",
              boxShadow: "0 0 25px rgba(254, 81, 2, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="font-body font-medium text-[15px] bg-orange text-white px-8 py-3.5 rounded-full transition-all duration-300 flex items-center gap-2"
          >
            View Projects
          </motion.a>
          <motion.a
            href="https://github.com/Atharav001"
            target="_blank"
            whileHover={{ 
              scale: 1.05, 
              borderColor: "#FE5102", 
              color: "#FE5102",
              boxShadow: "0 0 25px rgba(254, 81, 2, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            className="font-body font-medium text-[15px] border border-vanilla/20 text-vanilla px-8 py-3.5 rounded-full transition-all duration-300"
          >
            GitHub
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-vanilla/60 hover:text-orange transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </motion.a>
    </section>
  );
}
