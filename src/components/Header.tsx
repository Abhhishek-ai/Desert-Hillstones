"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const NAV_ITEMS = [
  { label: "Collections", href: "/collections" },
  { label: "Gallery", href: "/instagram" },
  { label: "The Founder", href: "/the-founder" },
  { label: "Our Legacy", href: "/our-legacy" },
  { label: "Contact", href: "/contact" }
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const observerRef = useRef<HTMLDivElement>(null);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Set up intersection observer for scroll styling
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    const target = observerRef.current;
    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  const isHome = pathname === "/";
  const isTransparent = isHome && !isScrolled;

  return (
    <>
      {/* Invisible anchor for scroll trigger */}
      <div ref={observerRef} className="absolute top-0 left-0 w-full h-1 pointer-events-none" />

      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-premium ${
          isTransparent 
            ? "bg-transparent border-b border-transparent py-6" 
            : "bg-bg/95 backdrop-blur-md border-b border-solid border-border py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Typographic Logo */}
          <Link 
            href="/" 
            className={`font-display font-medium text-xl md:text-2xl tracking-wide flex items-center gap-1.5 focus-visible:outline-none transition-colors duration-300 ${
              isTransparent ? "text-surface" : "text-ink"
            }`}
            aria-label="Desert Hillstone Home"
          >
            DESERT HILLSTONE
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-sans text-sm tracking-wide relative py-1 focus-visible:outline-none transition-colors duration-300 ${
                    isTransparent 
                      ? "text-surface/85 hover:text-surface" 
                      : "text-ink hover:text-ink/70"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className={`absolute bottom-0 left-0 right-0 h-[1px] ${
                        isTransparent ? "bg-surface" : "bg-gold"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Consultation Button */}
          <div className="hidden lg:block">
            <Link
              href="/consultation"
              className={`group relative font-sans text-sm tracking-wide py-1 focus-visible:outline-none transition-colors duration-300 ${
                isTransparent ? "text-surface hover:text-surface/90" : "text-ink hover:text-ink/70"
              }`}
            >
              Book Consultation
              <span className={`absolute bottom-0 left-0 w-full h-[1px] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-premium ${
                isTransparent ? "bg-surface" : "bg-gold"
              }`} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-end w-8 h-8 gap-1.5 focus-visible:outline-none z-50 relative"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            <motion.span 
              animate={mobileMenuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`w-7 h-[1px] block transition-colors duration-300 ${
                mobileMenuOpen ? "bg-ink" : isTransparent ? "bg-surface" : "bg-ink"
              }`}
            />
            <motion.span 
              animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              className={`w-5 h-[1px] block transition-colors duration-300 ${
                mobileMenuOpen ? "bg-ink" : isTransparent ? "bg-surface" : "bg-ink"
              }`}
            />
            <motion.span 
              animate={mobileMenuOpen ? { rotate: -45, y: -7, width: 28 } : { rotate: 0, y: 0, width: 16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className={`h-[1px] block transition-colors duration-300 ${
                mobileMenuOpen ? "bg-ink" : isTransparent ? "bg-surface" : "bg-ink"
              }`}
            />
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-bg z-[99] flex flex-col justify-center px-10 md:px-20 lg:hidden"
          >
            <nav className="flex flex-col gap-8 mb-16">
              {NAV_ITEMS.map((item, idx) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.16, 1, 0.3, 1],
                    delay: idx * 0.08
                  }}
                >
                  <Link
                    href={item.href}
                    className="font-display text-4xl text-ink hover:text-ink/70 tracking-wide block py-2"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: NAV_ITEMS.length * 0.08
                }}
                className="mt-4 pt-6 border-t border-solid border-border"
              >
                <Link
                  href="/consultation"
                  className="font-micro text-xs tracking-widest text-ink block uppercase py-2 hover:text-gold transition-colors duration-200"
                >
                  Book Consultation →
                </Link>
              </motion.div>
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              transition={{ delay: 0.4 }}
              className="absolute bottom-8 left-10 md:left-20 flex flex-col gap-1 text-xs text-ink-muted"
            >
              <span>+91 95873 84264</span>
              <span>Mansarovar, Jaipur</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for non-homepage to push content down below fixed header */}
      {!isHome && (
        <div className="h-[76px] lg:h-[92px] shrink-0" />
      )}
    </>
  );
}
