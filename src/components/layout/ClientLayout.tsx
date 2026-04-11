"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CinematicIntro from "@/components/ui/CinematicIntro";
import CustomCursor from "@/components/ui/CustomCursor";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showContent, setShowContent] = useState(false);
  const [removeIntro, setRemoveIntro] = useState(false);

  useEffect(() => {
    // Show content (Hero section) just before the curtain splits to ensure smooth animation
    const contentTimer = setTimeout(() => setShowContent(true), 2400);
    return () => clearTimeout(contentTimer);
  }, []);

  return (
    <>
      <CustomCursor />
      {!removeIntro && (
        <CinematicIntro onComplete={() => setRemoveIntro(true)} />
      )}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
