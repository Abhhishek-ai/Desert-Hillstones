"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  const [cursorType, setCursorType] = useState<"default" | "hover" | "zoom">("default");
  const [isVisible, setIsVisible] = useState(false);

  // Motion values for raw cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Springs for smooth lagging follow effect
  const springConfig = { damping: 40, stiffness: 350, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Detect touch device
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      );
    };

    checkTouch();
    setIsVisible(true);

    if (typeof window === "undefined") return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeaveWindow = () => setIsVisible(false);
    const handleMouseEnterWindow = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeaveWindow);
    document.addEventListener("mouseenter", handleMouseEnterWindow);

    // Dynamic hover detection for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      // Check if target or parent is interactive
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.tagName === "INPUT" || 
        target.tagName === "TEXTAREA" || 
        target.tagName === "SELECT" ||
        target.closest("a") || 
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.closest(".interactive-hover");

      const hasZoom = target.closest("[data-cursor='zoom']");

      if (hasZoom) {
        setCursorType("zoom");
      } else if (isInteractive) {
        setCursorType("hover");
      } else {
        setCursorType("default");
      }
    };

    window.addEventListener("mouseover", handleMouseOver);

    // Apply cursor-none class to body when visible
    if (!isTouchDevice) {
      document.body.classList.add("custom-cursor-active");
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeaveWindow);
      document.removeEventListener("mouseenter", handleMouseEnterWindow);
      window.removeEventListener("mouseover", handleMouseOver);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [cursorX, cursorY, isVisible, isTouchDevice]);

  if (isTouchDevice || !isVisible) return null;

  const getVariants = () => {
    switch (cursorType) {
      case "hover":
        return {
          width: 60,
          height: 60,
          backgroundColor: "rgba(26, 26, 26, 0.03)",
          borderColor: "var(--color-gold)",
        };
      case "zoom":
        return {
          width: 70,
          height: 70,
          backgroundColor: "rgba(26, 26, 26, 0.05)",
          borderColor: "var(--color-gold-deep)",
        };
      default:
        return {
          width: 28,
          height: 28,
          backgroundColor: "transparent",
          borderColor: "var(--color-gold)",
        };
    }
  };

  return (
    <motion.div
      style={{
        left: cursorXSpring,
        top: cursorYSpring,
        x: "-50%",
        y: "-50%",
      }}
      animate={getVariants()}
      transition={{ type: "tween", ease: [0.16, 1, 0.3, 1], duration: 0.3 }}
      className="fixed pointer-events-none z-[9999] rounded-full border border-solid flex items-center justify-center overflow-hidden"
    >
      {/* Signature Vein line inside the cursor ring, rotating slowly */}
      <motion.svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full opacity-40"
        animate={{ rotate: [0, 3, 0] }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <path
          d="M20 50 Q 40 45, 60 55 T 80 50"
          fill="none"
          stroke="var(--color-ink)"
          strokeWidth="1.5"
        />
      </motion.svg>

      {/* Montserrat 'Zoom' label for stone hovers */}
      {cursorType === "zoom" && (
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-[9px] font-semibold text-ink font-micro uppercase tracking-wider select-none z-10"
        >
          Zoom
        </motion.span>
      )}
    </motion.div>
  );
}
