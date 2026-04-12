"use client";

import Image from 'next/image';
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
}

const projects: Project[] = [
  {
    number: "01",
    title: "Scroller's Dashboard",
    category: "Android Dev / Production Systems",
    description:
      "A high-performance Android application designed to break mindful scrolling habits using real-time Accessibility Service tracking and glassmorphic intervention overlays.",
    tags: ["Kotlin", "Accessibility API", "Room DB", "UX Research"],
    image: "/projects/scrollers-dashboard.png",
    link: "https://github.com/Atharav001/shortform-usage-sentinel",
  },
  {
    number: "02",
    title: "MediLink RAG",
    category: "AI Engineering / Healthcare",
    description:
      "A high-precision retrieval-augmented generation system for clinical guidelines, featuring semantic chunking and automated citation verification.",
    tags: ["LlamaIndex", "Pinecone", "OpenAI", "Python"],
  },
  {
    number: "03",
    title: "AutoResearch Agent",
    category: "Agentic Workflows",
    description:
      "A multi-agent system that automates the entire research process from query expansion to drafting comprehensive literature reviews with verified sources.",
    tags: ["LangGraph", "Groq", "Research Automation"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
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
      damping: 25,
    },
  },
};

function ProjectImage({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-full aspect-[16/10] bg-[#2a2a2a] rounded-xl flex items-center justify-center overflow-hidden border border-vanilla/10"
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={project.title}
          width={800}
          height={500}
          className="w-full h-full object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-tr from-orange/10 to-transparent flex items-center justify-center">
          <span className="font-body text-vanilla/20 text-[14px]">Project Preview</span>
        </div>
      )}
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-baseline gap-4 mb-6"
        >
          <span className="font-pixel text-orange text-[12px]">04</span>
          <h2 className="font-heading text-[clamp(2rem,5vw,5rem)] font-bold text-vanilla leading-none tracking-[-2px]">
            Selected <span className="text-orange">Projects</span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-body text-vanilla/60 text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] max-w-[700px] mb-16"
        >
          Engineering robust AI solutions that solve real-world problems through advanced LLM architectures and production-grade systems.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col gap-6"
        >
          {projects.map((project) => (
            <TiltCard key={project.number}>
              <motion.a
                href={project.link || "#"}
                target={project.link ? "_blank" : undefined}
                rel={project.link ? "noopener noreferrer" : undefined}
                variants={itemVariants}
                className="group grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 p-8 rounded-2xl border border-vanilla/5 hover:border-orange/30 bg-vanilla/[0.01] hover:bg-vanilla/[0.03] transition-all block"
              >
                {/* Project Image/Mockup */}
                <ProjectImage project={project} />

                {/* Info */}
                <div className="flex flex-col justify-between">
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-baseline gap-3">
                        <span className="font-pixel text-orange text-[11px]">{project.number}</span>
                        <h3 className="font-heading text-[28px] font-bold text-vanilla group-hover:text-orange transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: -45 }}
                      >
                        <ArrowUpRight
                          size={20}
                          className="text-muted group-hover:text-orange transition-colors shrink-0"
                        />
                      </motion.div>
                    </div>
                    <p className="font-body text-[13px] text-muted mb-4">{project.category}</p>
                    <p className="font-body text-[16px] text-vanilla/60 leading-[1.6] max-w-[550px]">
                      {project.description}
                    </p>
                  </motion.div>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tags.map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(254, 81, 2, 0.1)" }}
                        className="font-body text-[12px] text-vanilla/60 bg-vanilla/5 px-3 py-1.5 rounded-full cursor-default"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.a>
            </TiltCard>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
