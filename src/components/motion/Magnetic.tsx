"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState, MouseEvent } from "react";
import { EASE_PREMIUM } from "@/lib/motion";

interface MagneticProps {
  children: React.ReactNode;
  range?: number; // Distance threshold in pixels
}

export default function Magnetic({ children, range = 45 }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !ref.current) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    
    // Calculate center coordinates
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Distance from cursor to center
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;

    // If within hover range, attract slightly
    const distance = Math.hypot(deltaX, deltaY);
    if (distance < range) {
      // Scale displacement (up to 8px max)
      const pullFactor = 0.22;
      const x = deltaX * pullFactor;
      const y = deltaY * pullFactor;
      setPosition({ x, y });
    } else {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ 
        type: "spring", 
        stiffness: 120, 
        damping: 14, 
        mass: 0.15 
      }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
