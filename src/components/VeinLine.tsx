"use client";

import { motion } from "framer-motion";

interface VeinLineProps {
  className?: string;
  delay?: number;
}

export default function VeinLine({ className = "", delay = 0 }: VeinLineProps) {
  return (
    <div className={`relative w-full h-8 flex items-center justify-center overflow-hidden ${className}`}>
      <svg
        width="100%"
        height="12"
        viewBox="0 0 1200 12"
        preserveAspectRatio="none"
        className="w-full h-3"
      >
        <motion.path
          // An organic, subtle wave representing a marble vein
          d="M0 6 Q 150 1, 300 6 T 600 8 T 900 4 T 1200 6"
          fill="none"
          stroke="var(--color-gold)"
          strokeWidth="1"
          opacity="0.6"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ 
            duration: 2.2, 
            ease: [0.16, 1, 0.3, 1],
            delay: delay 
          }}
        />
      </svg>
    </div>
  );
}
