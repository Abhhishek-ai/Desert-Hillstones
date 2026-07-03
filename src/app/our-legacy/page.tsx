"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion";
import VeinLine from "@/components/VeinLine";

const MANIFESTO_SECTIONS = [
  {
    quote: "Rajasthan has been giving the world its stone for centuries. We've spent ours learning which pieces deserve to leave it.",
    image: "/images/about_preview.jpg",
  },
  {
    quote: "Makrana marble built the Taj Mahal. We don't sell that history — we honor it, one slab at a time.",
    image: "/images/stone_detail_vein.jpg",
  },
  {
    quote: "Every block we select is chosen the way a sculptor chooses — not for what it costs, but for what it could become.",
    image: "/images/stone_patagonia.jpg",
  },
  {
    quote: "We work the way Rajasthan always has: with patience, with hands that know stone, and with no interest in shortcuts.",
    image: "/images/stone_makrana_white.jpg",
  },
];

export default function OurLegacyPage() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="w-full bg-bg">
      {/* 1. EDITORIAL HERO */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-24 text-center flex flex-col items-center">
        <span className="text-clamp-micro text-gold mb-3 font-semibold">Manifesto</span>
        <h1 className="text-clamp-h2 text-ink mb-6 font-medium tracking-tight">
          Our Legacy & Sourcing
        </h1>
        <p className="text-sm text-ink-muted max-w-xl leading-relaxed">
          At Desert Hillstone, we treat stone not as a commodity, but as a signature. Read our approach to curation, heritage, and geological craftsmanship.
        </p>
      </section>

      {/* 2. MANIFESTO PANEL STACK */}
      <div className="w-full flex flex-col">
        {MANIFESTO_SECTIONS.map((section, idx) => (
          <section 
            key={idx}
            className="w-full min-h-[70vh] flex items-center py-16 border-b border-solid border-border/40 last:border-b-0"
          >
            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                {/* Text Panel (Odd sections left, Even sections right) */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.8, ease: EASE_PREMIUM }}
                  className={`lg:col-span-6 flex flex-col justify-center ${
                    idx % 2 === 1 ? "lg:order-last" : ""
                  }`}
                >
                  <blockquote className="font-accent italic text-2xl md:text-3xl text-ink leading-relaxed font-light mb-4">
                    “{section.quote}”
                  </blockquote>
                  <span className="w-12 h-[1px] bg-gold mt-6" />
                </motion.div>

                {/* Visual Image Panel (Image reveal mask) */}
                <div className="lg:col-span-6">
                  <motion.div
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                    viewport={{ once: true, margin: "-15%" }}
                    transition={{ duration: 1.4, ease: EASE_PREMIUM }}
                    className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-surface-warm"
                  >
                    <Image
                      src={section.image}
                      alt="Stone extraction and sourcing showcase"
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 45vw"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      <VeinLine />

      {/* 3. CLOSING BRAND CONTEXT (Inter body text) */}
      <section className="sec-py bg-surface-warm w-full">
        <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center">
          <span className="text-clamp-micro text-gold mb-4 font-semibold">The Studio Philosophy</span>
          <h2 className="font-display text-2xl md:text-3xl text-ink font-semibold mb-6 tracking-tight">
            Curated Direct Sourcing
          </h2>
          <p className="text-clamp-body text-ink-muted leading-relaxed mb-10 text-center">
            By maintaining exclusive, multi-generational relationships with quarry masters in Makrana, Rajasthan, we hand-select individual raw blocks before they are sliced. We examine each block's density, structural veins, and color clarity. Our stones are processed using tension-free diamond wire saws and finished under skilled hands in Jaipur, ensuring every slab meets the meticulous specifications required by high-end architects.
          </p>

          <Link
            href="/consultation"
            className="px-8 py-4 bg-ink text-surface text-xs tracking-wider uppercase font-semibold hover:bg-gold-deep transition-colors duration-300 inline-block shadow-md"
          >
            Book Private Studio Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
