"use client";

import { motion } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";

const experiences = [
  { title: "Industrial", description: "3D modeling & fabrication with hands-on prototyping" },
  { title: "Automotive", description: "Vehicle UX and interface design for next-gen dashboards" },
  { title: "Art", description: "Mixed media installations and generative visual art" },
  { title: "Production", description: "End-to-end product manufacturing and quality systems" },
  { title: "Construction", description: "Architectural visualization and spatial computing" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function About() {
  return (
    <section id="about" className="relative py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-baseline gap-4 mb-6"
        >
          <span className="font-pixel text-orange text-[12px]">01</span>
          <h2 className="font-heading text-[clamp(2rem,5vw,5rem)] font-bold text-vanilla leading-none tracking-[-2px]">
            Born to <span className="text-orange">Build</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-body text-vanilla/60 text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] max-w-[700px] mb-20"
        >
          A multidisciplinary designer with a passion for turning complex problems into simple, elegant solutions. Here are some of the domains I work across.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        >
          {experiences.map((item) => (
            <TiltCard key={item.title}>
              <motion.div
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  transition: { type: "spring", stiffness: 300, damping: 15 },
                }}
                className="group flex flex-col gap-6 p-6 rounded-2xl border border-vanilla/5 hover:border-orange/40 bg-vanilla/[0.02] transition-all cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-full aspect-[4/3] bg-[#2a2a2a] rounded-lg overflow-hidden flex items-center justify-center"
                >
                  <div className="w-full h-full bg-gradient-to-br from-orange/5 to-transparent flex items-center justify-center">
                    <span className="font-pixel text-[8px] text-orange/20 opacity-0 group-hover:opacity-100 transition-opacity">BUILD_SYSTEM</span>
                  </div>
                </motion.div>
                <div>
                  <h3 className="font-pixel text-vanilla text-[14px] mb-2 group-hover:text-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-body text-vanilla/50 text-[15px] leading-[1.5]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
