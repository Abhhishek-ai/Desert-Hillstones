"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isSweeping, setIsSweeping] = useState(false);

  useEffect(() => {
    setIsSweeping(true);
    const timer = setTimeout(() => {
      setIsSweeping(false);
    }, 950); // Matches transition duration + padding

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="relative w-full min-h-screen">
      {/* Cinematic Vein Line Sweep Overlay */}
      <AnimatePresence>
        {isSweeping && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-y-0 left-0 w-[120%] pointer-events-none z-[999] flex items-center justify-center"
            style={{
              background: "linear-gradient(90deg, rgba(248,249,250,0) 0%, rgba(243,241,236,0.95) 45%, rgba(243,241,236,0.95) 55%, rgba(248,249,250,0) 100%)",
            }}
          >
            <div className="w-full px-8">
              <svg
                width="100%"
                height="24"
                viewBox="0 0 1200 24"
                preserveAspectRatio="none"
                className="w-full h-6"
              >
                <path
                  d="M0 12 Q 150 4, 300 12 T 600 16 T 900 8 T 1200 12"
                  fill="none"
                  stroke="var(--color-gold)"
                  strokeWidth="1.5"
                  opacity="0.8"
                />
              </svg>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Page Slide & Fade Wrapper */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
        className="w-full flex-grow flex flex-col"
      >
        {children}
      </motion.div>
    </div>
  );
}
