"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppFAB() {
  const [isVisible, setIsVisible] = useState(false);
  const [waLink, setWaLink] = useState("");

  useEffect(() => {
    // Generate WhatsApp link on client side
    setWaLink(buildWhatsAppLink("general"));

    const handleScroll = () => {
      // Show components after scrolling past the hero (approx. 80vh)
      if (window.scrollY > window.innerHeight * 0.7) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger check immediately in case page is loaded already scrolled
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Desktop WhatsApp FAB - hidden on mobile, visible on lg screens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-8 right-8 z-50 hidden lg:block"
          >
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Desert Hillstone on WhatsApp"
              className="relative flex items-center justify-center w-14 h-14 rounded-full bg-ink text-surface shadow-lg hover:text-gold-light transition-colors duration-300 group focus-visible:outline-none"
            >
              {/* Outer gold ring on hover */}
              <span className="absolute inset-0 rounded-full border border-solid border-transparent group-hover:border-gold group-hover:scale-110 transition-all duration-300" />
              
              {/* WhatsApp Icon SVG */}
              <svg 
                className="w-6 h-6 fill-current" 
                viewBox="0 0 24 24"
              >
                <path d="M12.004 2C6.51 2 2.014 6.5 2.014 12c0 1.91.537 3.708 1.466 5.26L2 22l4.896-1.28c1.472.8 3.146 1.28 4.908 1.28 5.496 0 9.996-4.5 9.996-10S17.5 2 12.004 2zm5.772 14.18c-.24.68-1.2 1.25-1.92 1.35-.48.06-1.12.1-3.23-.77-2.69-1.1-4.42-3.83-4.56-4.01-.13-.18-1.12-1.48-1.12-2.83 0-1.35.7-2 .95-2.27.24-.26.54-.33.72-.33h.52c.16 0 .38-.02.58.46.22.52.74 1.8.8 1.92.06.12.1.27.02.43-.08.16-.18.26-.35.45-.17.2-.36.44-.52.6-.18.18-.37.38-.16.74.22.36.96 1.58 2.06 2.56 1.42 1.26 2.61 1.65 2.98 1.84.37.19.59.16.81-.08.22-.24.96-1.11 1.22-1.49.26-.38.52-.32.87-.19.36.13 2.27 1.07 2.66 1.27.39.2.65.3.74.46.1.15.1.88-.14 1.56z"/>
              </svg>
            </a>
          </motion.div>

          {/* Mobile Sticky Consultation Bar - persistent on mobile, hidden on lg screens */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
          >
            {/* Blurry semi-transparent surface background */}
            <div className="w-full bg-bg/80 backdrop-blur-lg border-t border-solid border-border py-3 px-6 flex items-center justify-around shadow-lg">
              
              {/* Call Link */}
              <a
                href="tel:+919587384264"
                className="flex items-center gap-2 py-2 text-ink hover:text-gold transition-colors duration-200 focus-visible:outline-none"
              >
                <Phone className="w-4 h-4 text-gold" />
                <span className="font-micro text-xs tracking-wider uppercase font-semibold">Call Studio</span>
              </a>

              {/* Gold Divider Line */}
              <div className="w-[1px] h-6 bg-gold/40" />

              {/* WhatsApp Link */}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 text-ink hover:text-gold transition-colors duration-200 focus-visible:outline-none"
              >
                {/* Micro Inline WhatsApp SVG */}
                <svg 
                  className="w-4 h-4 fill-gold" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12.004 2C6.51 2 2.014 6.5 2.014 12c0 1.91.537 3.708 1.466 5.26L2 22l4.896-1.28c1.472.8 3.146 1.28 4.908 1.28 5.496 0 9.996-4.5 9.996-10S17.5 2 12.004 2zm5.772 14.18c-.24.68-1.2 1.25-1.92 1.35-.48.06-1.12.1-3.23-.77-2.69-1.1-4.42-3.83-4.56-4.01-.13-.18-1.12-1.48-1.12-2.83 0-1.35.7-2 .95-2.27.24-.26.54-.33.72-.33h.52c.16 0 .38-.02.58.46.22.52.74 1.8.8 1.92.06.12.1.27.02.43-.08.16-.18.26-.35.45-.17.2-.36.44-.52.6-.18.18-.37.38-.16.74.22.36.96 1.58 2.06 2.56 1.42 1.26 2.61 1.65 2.98 1.84.37.19.59.16.81-.08.22-.24.96-1.11 1.22-1.49.26-.38.52-.32.87-.19.36.13 2.27 1.07 2.66 1.27.39.2.65.3.74.46.1.15.1.88-.14 1.56z"/>
                </svg>
                <span className="font-micro text-xs tracking-wider uppercase font-semibold">WhatsApp</span>
              </a>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
