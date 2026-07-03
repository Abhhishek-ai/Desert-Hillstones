"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { EASE_PREMIUM } from "@/lib/motion";
import VeinLine from "@/components/VeinLine";
import Magnetic from "@/components/motion/Magnetic";
import { ArrowRight, MessageSquare, ShieldCheck, Gem, Landmark } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function FounderPage() {
  const whatsAppUrl = buildWhatsAppLink("founder_connect");

  return (
    <div className="w-full bg-bg">
      {/* 1. EDITORIAL HERO */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 bg-surface-warm">
        {/* Soft, textured ambient background */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none">
          <Image
            src="/images/stone_detail_vein.jpg"
            alt="Vein texture background"
            fill
            className="object-cover filter grayscale"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          {/* Hero Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.span 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: EASE_PREMIUM }}
              className="text-clamp-micro text-gold mb-4 font-semibold"
            >
              The Chief Curator
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.15, ease: EASE_PREMIUM }}
              className="text-clamp-h1 text-ink font-medium tracking-tight mb-6 leading-none"
            >
              Nemi Choudhary
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE_PREMIUM }}
              className="font-accent italic text-clamp-h3 text-gold-deep mb-8 font-light max-w-xl"
            >
              “Every slab of stone is a natural sculpture, forged over millions of years. My passion is to hand-select only those pieces that carry the soul of the earth.”
            </motion.p>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: EASE_PREMIUM }}
              className="text-clamp-body text-ink-muted leading-relaxed max-w-lg mb-10"
            >
              Desert Hillstone was founded as a pure expression of Nemi Choudhary's lifelong devotion to geological excellence. Drawing upon Rajasthan's deep stone heritage and global mining connections, he has built a studio that refuses compromises, making every slab a design statement.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: EASE_PREMIUM }}
            >
              <Magnetic>
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4.5 bg-ink text-surface text-xs tracking-widest uppercase font-semibold hover:bg-gold-deep transition-all duration-300 inline-flex items-center gap-2.5 shadow-md"
                >
                  Connect Directly With Nemi
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* Hero Visual Column */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: 1.4, ease: EASE_PREMIUM }}
              className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-surface shadow-xl border border-solid border-border"
            >
              <Image
                src="/images/nemi_choudhary.jpg"
                alt="Nemi Choudhary, Founder of Desert Hillstone"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </motion.div>
            
            {/* Visual overlay tag */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute -top-6 -right-6 bg-surface p-6 shadow-lg border border-solid border-border max-w-[240px] hidden md:block"
            >
              <span className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase block mb-1">
                Heritage Studio
              </span>
              <p className="text-xs text-ink-muted leading-relaxed">
                Directly overseeing procurement from Makrana and global quarries.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. THREE PILLARS OF CURATION */}
      <section className="sec-py bg-surface w-full border-t border-b border-solid border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-clamp-micro text-gold mb-3 font-semibold">The Philosophy</span>
            <h2 className="text-clamp-h2 text-ink font-medium tracking-tight">
              Nemi's Curation Process
            </h2>
            <p className="text-sm text-ink-muted mt-4 leading-relaxed">
              We do not treat stone as bulk merchandise. Our brand represents a tailored search for natural masterworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Pillar 1 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE_PREMIUM }}
              className="p-8 bg-bg border border-solid border-border rounded-sm flex flex-col items-start hover:border-gold/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-surface-warm border border-solid border-gold/20 flex items-center justify-center mb-6">
                <Landmark className="w-5 h-5 text-gold-deep" />
              </div>
              <h3 className="font-display text-xl text-ink font-semibold mb-3">
                Legacy Procurement
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Nemi maintains personal, multi-generational relationships with quarry masters. This guarantees early, exclusive access to premium blocks before they hit open markets.
              </p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: EASE_PREMIUM }}
              className="p-8 bg-bg border border-solid border-border rounded-sm flex flex-col items-start hover:border-gold/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-surface-warm border border-solid border-gold/20 flex items-center justify-center mb-6">
                <Gem className="w-5 h-5 text-gold-deep" />
              </div>
              <h3 className="font-display text-xl text-ink font-semibold mb-3">
                Slab-by-Slab Selection
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Every single block is personally inspected by Nemi. He analyzes structural soundness, mineral composition, density, and the exact movement of veining.
              </p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE_PREMIUM }}
              className="p-8 bg-bg border border-solid border-border rounded-sm flex flex-col items-start hover:border-gold/50 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-surface-warm border border-solid border-gold/20 flex items-center justify-center mb-6">
                <ShieldCheck className="w-5 h-5 text-gold-deep" />
              </div>
              <h3 className="font-display text-xl text-ink font-semibold mb-3">
                Precision Craftsmanship
              </h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                From extraction to processing in Jaipur, Nemi's supervision ensures we use tension-free wire saws and exact calibration to avoid micro-fractures in finished slabs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. CORE STORY SPLIT */}
      <section className="sec-py bg-bg w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image */}
            <div className="lg:col-span-6">
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1.4, ease: EASE_PREMIUM }}
                className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-surface-warm shadow-md"
              >
                <Image
                  src="/images/about_studio_new.jpg"
                  alt="Jaipur showroom curation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              </motion.div>
            </div>

            {/* Right Column: Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: EASE_PREMIUM }}
              className="lg:col-span-6 flex flex-col items-start"
            >
              <span className="text-clamp-micro text-gold mb-3 font-semibold">The Brand Identity</span>
              <h3 className="font-display text-2xl md:text-3xl text-ink font-semibold mb-6 tracking-tight">
                Crafting Spaces with Character
              </h3>
              <p className="text-clamp-body text-ink-muted leading-relaxed mb-6">
                When you choose Desert Hillstone, you are not simply buying surfacing material. You are acquiring a piece handpicked by a master who understands the geological narrative of Rajasthan and the world. 
              </p>
              <p className="text-clamp-body text-ink-muted leading-relaxed mb-8">
                Nemi's curated collections of Makrana marble, exotic granites, and premium porcelain are assembled with an architect's eye. Every color palette, veining detail, and slab density is carefully aligned with the structural demands of high-end villas and hospitality projects.
              </p>
              
              <blockquote className="border-l border-gold pl-6 py-1 italic text-ink font-accent text-lg mb-4">
                "Our client's homes are heirlooms. We supply surfaces that grow more beautiful with time."
              </blockquote>
            </motion.div>

          </div>
        </div>
      </section>

      <VeinLine />

      {/* 4. DIRECT FOUNDER CONNECT CTA */}
      <section className="sec-py-lg bg-surface-warm w-full border-t border-solid border-border">
        <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
          <span className="text-clamp-micro text-gold mb-4 font-semibold">Inquire Directly</span>
          <h2 className="text-clamp-h2 text-ink font-medium tracking-tight mb-6">
            Consultation with Nemi Choudhary
          </h2>
          <p className="text-clamp-body-lg text-ink-muted max-w-xl mb-10 leading-relaxed font-light">
            If you are looking for highly specialized materials, custom cut-to-size panels, or legacy Makrana blocks, discuss your architectural vision directly with Nemi.
          </p>

          <Magnetic>
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-ink text-surface text-xs uppercase tracking-widest font-semibold hover:bg-gold-deep transition-colors duration-300 inline-flex items-center gap-3 shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              Discuss Bespoke Sourcing
            </a>
          </Magnetic>
        </div>
      </section>
    </div>
  );
}
