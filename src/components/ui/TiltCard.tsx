"use client";

import React, { useState, ReactNode } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxRotate?: number;
  glow?: boolean;
}

export default function TiltCard({
  children,
  className = "",
  maxRotate = 8,
  glow = true,
}: TiltCardProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseY = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [maxRotate, -maxRotate]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-maxRotate, maxRotate]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mousePosX = (event.clientX - rect.left) / width - 0.5;
    const mousePosY = (event.clientY - rect.top) / height - 0.5;

    x.set(mousePosX);
    y.set(mousePosY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ 
        y: -8,
        transition: { type: "spring", stiffness: 400, damping: 25 }
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`perspective-1000 group/tilt ${className}`}
    >
      <div 
        className={`relative transition-all duration-500 rounded-[inherit] h-full border border-transparent
          ${glow ? "group-hover/tilt:shadow-[0_0_25px_rgba(254,81,2,0.12)] group-hover/tilt:border-orange/30 group-hover/tilt:bg-orange/[0.02]" : "group-hover/tilt:shadow-xl"}
        `}
        style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}
      >
        <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}>
          {children}
        </div>
      </div>
    </motion.div>
  );
}
