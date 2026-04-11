"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import CinematicIntro from "@/components/ui/CinematicIntro";
import CustomCursor from "@/components/ui/CustomCursor";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showContent, setShowContent] = useState(false);
  const [removeIntro, setRemoveIntro] = useState(false);

  useEffect(() => {
    // Reveal the main site at the exact moment parts start flying
    const contentTimer = setTimeout(() => setShowContent(true), 1300);
    return () => clearTimeout(contentTimer);
  }, []);

  return (
    <>
      <CustomCursor />
      
      <AnimatePresence mode="popLayout">
        {!removeIntro && (
          <CinematicIntro key="intro" onComplete={() => setRemoveIntro(true)} />
        )}
      </AnimatePresence>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>
    </>
  );
}
