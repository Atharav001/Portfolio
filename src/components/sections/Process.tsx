"use client";

import { motion } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";

const phases = [
  {
    title: "Analyze",
    description: "Domain research, requirement gathering, and defining success metrics for the LLM system.",
    items: ["Requirement Analysis", "Success Metrics", "Knowledge Mapping", "Domain Research"],
  },
  {
    title: "Architect",
    description: "Designing the RAG pipeline, agentic workflows, and choosing the optimal model stack.",
    items: ["Pipeline Design", "Model Selection", "Vector Store Strategy", "Agent Frameworks"],
  },
  {
    title: "Engine Build",
    description: "System implementation, fine-tuning scripts, and retrieval logic development.",
    items: ["RAG Implementation", "SFT / RLHF", "Tool Integration", "Agent Logic"],
  },
  {
    title: "Evaluate",
    description: "Robust testing, performance benchmarking, and scaling for production reliability.",
    items: ["LLM-as-a-Judge", "Load Testing", "Observability", "Production Scaling"],
  },
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
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

export default function Process() {
  return (
    <section id="process" className="relative py-32 px-8 md:px-16 lg:px-24 focus:outline-none">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-baseline gap-4 mb-6"
        >
          <span className="font-pixel text-orange text-[12px]">03</span>
          <h2 className="font-heading text-[clamp(2rem,5vw,5rem)] font-bold text-vanilla leading-none tracking-[-2px]">
            Execution <span className="text-orange">Framework</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-body text-vanilla/60 text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] max-w-[700px] mb-16"
        >
          A rigorous engineering approach to building scalable and reliable AI systems.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {phases.map((phase, i) => (
            <TiltCard key={phase.title}>
              <motion.div
                variants={itemVariants}
                className={`flex flex-col p-8 rounded-2xl border transition-all ${i < 2
                  ? "border-vanilla/5 bg-vanilla/[0.02]"
                  : "border-orange/10 bg-orange/[0.02]"
                  }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-pixel text-orange text-[10px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-[24px] font-bold text-vanilla">
                      {phase.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-2 h-2 rounded-full bg-orange shadow-[0_0_10px_rgba(254,81,2,0.5)]"
                  />
                </div>
                <p className="font-body text-[15px] text-vanilla/50 leading-[1.5] mb-8">
                  {phase.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {phase.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                      className="font-body text-[12px] text-vanilla/70 bg-vanilla/5 px-3 py-1.5 rounded-full cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
