"use client";

import { Mail, Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";
import TiltCard from "@/components/ui/TiltCard";

const contactLinks = [
  { label: "Email", icon: Mail, href: "mailto:atharavnarang05@gmail.com" },
  { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/atharav-narang-132b74273/" },
  { label: "GitHub", icon: Github, href: "https://github.com/Atharav001" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-pixel text-orange text-[clamp(2rem,6vw,5rem)] leading-[0.95] mb-6"
        >
          {"Let's"}
          <br />
          Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-body text-vanilla/85 text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] max-w-[500px] mx-auto mb-16"
        >
          Interested in working together? Have a question? Feel free to reach out through any of these channels.
        </motion.p>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-6"
        >
          {contactLinks.map((link) => (
            <TiltCard key={link.label}>
              <motion.a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover={{
                  scale: 1.15,
                  borderColor: "#FE5102",
                  backgroundColor: "rgba(254, 81, 2, 0.1)",
                  boxShadow: "0 0 30px rgba(254, 81, 2, 0.2)"
                }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-16 h-16 bg-vanilla/[0.03] border border-vanilla/10 rounded-full transition-all text-vanilla hover:text-orange"
                title={link.label}
              >
                <link.icon size={24} />
              </motion.a>
            </TiltCard>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="max-w-[1400px] mx-auto mt-32 pt-8 border-t border-vanilla/5 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="font-pixel text-orange text-[9px] tracking-wider">ATHARAV NARANG</p>
        <p className="font-body text-[13px] text-vanilla/60">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </motion.div>
    </section>
  );
}
