"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor({ enabled = true }: { enabled?: boolean }) {
  const [isMounted, setIsMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [zoomScale, setZoomScale] = useState(1);

  useEffect(() => {
    const updateZoom = () => {
      // Detect browser zoom level (rough estimation)
      // On most browsers, px units scale with zoom, so we inverse scale to keep physical size
      const dpr = window.devicePixelRatio || 1;
      // We assume the initial DPR is the 'normal' size. 
      // This is hit-or-miss but a standard approach for persistent physical size.
      setZoomScale(1 / (dpr / (window.devicePixelRatio || 1))); // This is a bit circular
      
      // More robust: compare innerWidth to a fixed reference if possible
      // For now, let's use a dynamic calculation
      // A common trick for zoom level is:
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
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
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
    document.body.classList.add("custom-cursor-active");

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [enabled, cursorX, cursorY, isVisible]);

  if (!isMounted || !enabled) return null;

  return (
    <motion.div
      className="pixel-cursor"
      transition={{ type: "spring", stiffness: 1000, damping: 50, mass: 0.1 }}
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
