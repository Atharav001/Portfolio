"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import CinematicIntro from "@/components/ui/CinematicIntro";
import CustomCursor from "@/components/ui/CustomCursor";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showContent, setShowContent] = useState(false);
  const [removeIntro, setRemoveIntro] = useState(false);

  useEffect(() => {
    // Show the destination (Hero) even earlier to match the high-speed intro
    const contentTimer = setTimeout(() => setShowContent(true), 800);
    return () => clearTimeout(contentTimer);
  }, []);

  return (
    <>
      <CustomCursor />
      
      <AnimatePresence>
        {!removeIntro && (
          <CinematicIntro key="intro" onComplete={() => setRemoveIntro(true)} />
        )}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 0.6 }}
      >
        {children}
      </motion.div>
    </>
  );
}
