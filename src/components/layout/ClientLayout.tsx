"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import CinematicIntro from "@/components/ui/CinematicIntro";
import CustomCursor from "@/components/ui/CustomCursor";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showContent, setShowContent] = useState(false);
  const [removeIntro, setRemoveIntro] = useState(false);

  useEffect(() => {
    // Show the target (Hero) almost immediately so magnets/layoutIds are ready
    const contentTimer = setTimeout(() => setShowContent(true), 200);
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
      
      <main>
        <motion.div
          animate={{ opacity: showContent ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      </main>
    </>
  );
}
