"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import CinematicIntro from "@/components/ui/CinematicIntro";
import CustomCursor from "@/components/ui/CustomCursor";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showContent, setShowContent] = useState(false);
  const [removeIntro, setRemoveIntro] = useState(false);

  useEffect(() => {
    // Show content (Hero section) earlier so the layout transition (FLIP) can trigger
    const contentTimer = setTimeout(() => setShowContent(true), 1800);
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
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}
