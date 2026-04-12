"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor({ enabled = true }: { enabled?: boolean }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ultra-responsive high-stiffness movement
  const springConfig = { damping: 50, stiffness: 800, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);
  
  const [zoomScale, setZoomScale] = useState(1);

  useEffect(() => {
    const updateZoom = () => {
      // Detect browser zoom level (rough estimation)
      const zoom = Math.round(((window.outerWidth) / window.innerWidth) * 100) / 100;
      if (zoom > 0) setZoomScale(1 / zoom);
    };

    window.addEventListener("resize", updateZoom);
    updateZoom();
    return () => window.removeEventListener("resize", updateZoom);
  }, []);

  useEffect(() => {
    setIsMounted(true);
    if (!enabled) return;

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 6);
      mouseY.set(e.clientY - 6);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("hover-glow")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    document.documentElement.classList.add("custom-cursor-active");

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.documentElement.classList.remove("custom-cursor-active");
    };
  }, [enabled, mouseX, mouseY, isVisible]);

  if (!isMounted || !enabled) return null;

  return (
    <motion.div
      className="pixel-cursor"
      style={{
        x: cursorX,
        y: cursorY,
        opacity: isVisible ? 1 : 0,
        scale: (isHovering ? 1.5 : 1) * zoomScale,
        rotate: isHovering ? 45 : 0,
      }}
    >
      <div className="pixel-cursor-dot" />
    </motion.div>
  );
}
