"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import CinematicIntro from "@/components/ui/CinematicIntro";
import CustomCursor from "@/components/ui/CustomCursor";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [introFinished, setIntroFinished] = useState(false);

  return (
    <>
      <CustomCursor />
      {!introFinished && <CinematicIntro onComplete={() => setIntroFinished(true)} />}
      <motion.div
        animate={{ opacity: introFinished ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    </>
  );
}
