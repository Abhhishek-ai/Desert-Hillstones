import { Variants } from "framer-motion";

export const EASE_PREMIUM: [number, number, number, number] = [0.16, 1, 0.3, 1]; // exp-out
export const DURATION_FAST = 0.2;
export const DURATION_BASE = 0.45;
export const DURATION_SLOW = 0.9;
export const DURATION_HERO = 1.4;

export const fadeUp: Variants = {
  hidden: { 
    opacity: 0, 
    y: 24 
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: EASE_PREMIUM 
    } 
  }
};

export const fadeIn: Variants = {
  hidden: { 
    opacity: 0 
  },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.6, 
      ease: EASE_PREMIUM 
    } 
  }
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

export const imageRevealMask: Variants = {
  hidden: { 
    clipPath: "inset(0 100% 0 0)" 
  },
  visible: { 
    clipPath: "inset(0 0% 0 0)", 
    transition: { 
      duration: DURATION_HERO, 
      ease: EASE_PREMIUM 
    } 
  }
};

export const imageRevealMaskScale: Variants = {
  hidden: { 
    scale: 1.15
  },
  visible: { 
    scale: 1,
    transition: { 
      duration: DURATION_HERO, 
      ease: EASE_PREMIUM 
    } 
  }
};

export const hoverZoom = {
  initial: { scale: 1, filter: "brightness(1)" },
  hover: { 
    scale: 1.06, 
    filter: "brightness(1.03)", 
    transition: { 
      duration: DURATION_SLOW, 
      ease: EASE_PREMIUM 
    } 
  }
};

export const goldShimmer: Variants = {
  initial: { 
    backgroundPosition: "0% 50%" 
  },
  hover: { 
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: { 
      duration: DURATION_SLOW, 
      ease: EASE_PREMIUM 
    } 
  }
};
