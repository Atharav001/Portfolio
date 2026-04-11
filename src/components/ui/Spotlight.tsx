"use client";

import { useState, useEffect, useCallback } from "react";

export function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = useCallback((ev: MouseEvent) => {
    requestAnimationFrame(() => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [updateMousePosition]);

  return mousePosition;
}

export default function Spotlight() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden"
      style={{
        background: `radial-gradient(
          600px circle at ${x}px ${y}px,
          rgba(254, 81, 2, 0.08),
          transparent 80%
        )`,
      }}
    />
  );
}
