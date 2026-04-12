"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

const links = [
  { label: "Website", href: "#" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/atharav-narang-132b74273/" },
  { label: "Github", href: "https://github.com/Atharav001" },
];

const differentiators = [
  "Key Differentiator #1",
  "Key Differentiator #2",
  "Key Differentiator #3",
  "Key Differentiator #4",
];

const careerItems = [
  { role: "Head of Design", type: "Co-Founder", period: "2025", company: "Open Session" },
  { role: "Lead Experience Designer", type: "", period: "2024 – 2025", company: "Salesforce" },
  { role: "Head of Design", type: "Co-Founder", period: "2024 – 2025", company: "Biltfour" },
  { role: "Lead Experience Designer", type: "Contract", period: "2023 – 2024", company: "Google" },
  { role: "Product Designer", type: "", period: "2022 – 2023", company: "Fitbit" },
  { role: "Senior UX Designer", type: "", period: "2021 – 2022", company: "Google" },
  { role: "IX Designer & PgM", type: "", period: "2020 – 2021", company: "SAP" },
  { role: "Analytics Engineer", type: "", period: "2019 – 2020", company: "SAP" },
  { role: "Tech Advisory", type: "", period: "2018 – 2019", company: "EY" },
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
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function Timeline() {
  return (
    <section id="timeline" className="relative py-32 px-8 md:px-16 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left column */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-baseline gap-4 mb-6"
            >
              <span className="font-pixel text-orange text-[12px]">02</span>
              <h2 className="font-heading text-[clamp(2rem,5vw,5rem)] font-bold text-vanilla leading-none tracking-[-2px]">
                Work Timeline
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-body text-vanilla/60 text-[clamp(1rem,1.5vw,1.25rem)] leading-[1.6] mb-10"
            >
              Elevator Pitch – one sentence about your career journey and what drives you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex gap-3 flex-wrap mb-12"
            >
              {links.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  whileHover={{ scale: 1.05, backgroundColor: "#FE5102", color: "#fff" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-charcoal px-4 py-2.5 rounded-full flex items-center gap-2 font-body font-medium text-[14px] transition-colors"
                >
                  {link.label}
                  <ArrowUpRight size={14} />
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="flex flex-col gap-2"
            >
              {differentiators.map((d, i) => (
                <motion.p
                  key={i}
                  variants={itemVariants}
                  className="font-body text-orange text-[clamp(1.2rem,2vw,2rem)] leading-[1.4]"
                >
                  {d}
                </motion.p>
              ))}
            </motion.div>
          </div>

          {/* Right column - Timeline */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="flex flex-col gap-0"
          >
            {careerItems.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group flex items-start gap-6 py-5 border-b border-vanilla/5 last:border-0 hover:border-orange/20 transition-colors cursor-default"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-heading text-[18px] font-semibold text-vanilla leading-[1.3] group-hover:text-orange transition-colors">
                    {item.role}
                  </p>
                  <p className="font-body text-[14px] text-muted leading-[1.4] mt-0.5">
                    {item.type && (
                      <span className="text-vanilla/30">{item.type} · </span>
                    )}
                    {item.period}
                  </p>
                </div>
                <span className="font-body text-[14px] text-muted shrink-0 mt-1">
                  {item.company}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
