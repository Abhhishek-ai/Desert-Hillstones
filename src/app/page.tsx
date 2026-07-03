"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useReducedMotion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, FileText, Download, Award, ArrowRight } from "lucide-react";
import VeinLine from "@/components/VeinLine";
import { hoverZoom, EASE_PREMIUM } from "@/lib/motion";
import MagneticWrapper from "@/components/motion/Magnetic";

// Hero background image assets have been replaced by a premium loop video.

const COLLECTIONS = [
  {
    title: "Makrana pure white",
    category: "makrana-pure-white",
    image: "/images/makrana_white_1.jpg",
    className: "lg:col-span-3 lg:h-[480px] h-[360px]",
  },
  {
    title: "Albeta",
    category: "albeta",
    image: "/images/albeta_1.jpg",
    className: "lg:col-span-3 lg:h-[480px] h-[360px]",
  },
  {
    title: "premium tiles",
    category: "premium-tiles",
    image: "/images/tiles_2.jpg",
    className: "lg:col-span-6 lg:h-[480px] h-[360px]",
  },
  {
    title: "Dungri",
    category: "dungri",
    image: "/images/dungri_1.jpg",
    className: "lg:col-span-3 lg:h-[440px] h-[360px]",
  },
  {
    title: "premium granite",
    category: "premium-granite",
    image: "/images/granite_1.jpg",
    className: "lg:col-span-3 lg:h-[440px] h-[360px]",
  },
  {
    title: "Home temples",
    category: "home-temples",
    image: "/images/temple_1.jpg",
    className: "lg:col-span-3 lg:h-[440px] h-[360px]",
  },
  {
    title: "Bathroom Vanities",
    category: "bathroom-vanities",
    image: "/images/interior_calacatta_bath.jpg",
    className: "lg:col-span-3 lg:h-[440px] h-[360px]",
  },
  {
    title: "Handicraft and marble art",
    category: "handicraft-marble-art",
    image: "/images/handicraft_shiva_1.jpg",
    className: "lg:col-span-12 lg:h-[360px] h-[280px]",
  },
];

const INSTALLATIONS = [
  {
    title: "A private villa in Amer Road",
    desc: "Makrana white marble floors, hand-finished bookmatched installation.",
    image: "/images/interior_villa_floor.jpg",
  },
  {
    title: "Penthouse overlooking Central Park",
    desc: "Slab kitchen island of Black Taurus granite with leathered details.",
    image: "/images/interior_taurus_kitchen.jpg",
  },
  {
    title: "Luxury hospitality lounge bar",
    desc: "Backlit Patagonia quartzite feature wall panel.",
    image: "/images/interior_patagonia_bar.jpg",
  },
];

const REVIEWS = [
  {
    excerpt: "The showroom is impressive. Sourcing premium materials of high quality with custom finishes is their core strength.",
    name: "Rohan",
  },
  {
    excerpt: "Desert Hillstone does not just supply marble; they help map the design intent. Super professional approach.",
    name: "Karan",
  },
  {
    excerpt: "Excellent service. Sourced premium Makrana White blocks that perfectly matched our architect's rigorous drawings.",
    name: "Siddharth",
  },
  {
    excerpt: "Exclusive collection of exotic quartzites. The backlit bar installation is the centerpiece of our home.",
    name: "Anjali",
  },
];

const INSTAGRAM_POSTS = [
  { image: "/images/interior_villa_floor.jpg", caption: "Symmetry in stone. Makrana floor installation." },
  { image: "/images/interior_taurus_kitchen.jpg", caption: "Bold gestures. Black Taurus countertop details." },
  { image: "/images/interior_patagonia_bar.jpg", caption: "Illuminating details. Backlit quartzite surfaces." },
  { image: "/images/about_preview.jpg", caption: "Studio details. Exploring material palettes under sunlight." },
];

export default function HomePage() {
  const prefersReducedMotion = useReducedMotion();
  const [reviewIndex, setReviewIndex] = useState(0);
  const parallaxRef = useRef<HTMLDivElement>(null);

  // Parallax scroll effects
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);


  const nextReview = () => {
    setReviewIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setReviewIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section
        ref={parallaxRef}
        className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-ink"
      >
        {/* Video background */}
        <motion.div
          style={{ y: prefersReducedMotion ? 0 : heroY }}
          className="absolute inset-0 w-full h-full"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/stone_makrana_white.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-45 scale-105"
          >
            <source src="/videos/marble-surface.mp4" type="video/mp4" />
          </video>
          {/* Subtle Warm Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/40 to-ink/20 mix-blend-multiply" />
        </motion.div>

        {/* Hero Content Overlay */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative max-w-7xl mx-auto px-6 md:px-12 w-full text-center z-10 flex flex-col items-center"
        >
          {/* Eyebrow */}
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-clamp-micro text-gold tracking-widest mb-6 block font-semibold"
          >
            DESERT HILLSTONE
          </motion.span>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: EASE_PREMIUM }}
            className="text-clamp-h1 text-surface max-w-[960px] mb-8 font-medium tracking-tight"
          >
            Nature&apos;s Finest Art, Curated For Extraordinary Spaces.
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-clamp-body-lg text-surface/80 max-w-[640px] mb-12 font-light"
          >
            Premium marble, granite, ceramics and natural stone sourced to elevate timeless architecture.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <MagneticWrapper>
              <Link
                href="/collections"
                className="px-8 py-4 bg-surface text-ink text-sm tracking-wider uppercase font-semibold hover:bg-gold-light hover:text-ink transition-colors duration-300 shadow-md inline-block"
              >
                Explore Collections
              </Link>
            </MagneticWrapper>

            <Link
              href="/consultation"
              className="px-8 py-4 border border-solid border-surface/30 text-surface text-sm tracking-wider uppercase font-semibold hover:border-surface hover:bg-surface/5 transition-all duration-300 inline-block"
            >
              Private Consultation
            </Link>
          </motion.div>

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.55 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-16 sm:mt-24 border-t border-solid border-surface/10 pt-6 w-full max-w-3xl flex justify-center text-xs tracking-wider uppercase text-surface"
          >
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-center">
              <span>★★★★★ 5.0 Rated</span>
              <span className="hidden sm:inline">·</span>
              <span>35+ Verified Reviews</span>
              <span className="hidden sm:inline">·</span>
              <span>Architect Friendly</span>
              <span className="hidden sm:inline">·</span>
              <span>Jaipur Studio</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* 2. ABOUT PREVIEW SECTION */}
      <section className="sec-py bg-surface-warm w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Image Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              className="lg:col-span-7 relative overflow-hidden h-[360px] md:h-[500px]"
            >
              <Image
                src="/images/about_studio_new.jpg"
                alt="Desert Hillstone Atelier interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </motion.div>

            {/* Copy Column */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: EASE_PREMIUM }}
              className="lg:col-span-5 flex flex-col items-start"
            >
              <span className="text-clamp-micro text-gold mb-3 font-semibold">Our Studio</span>
              <h2 className="text-clamp-h2 text-ink mb-6 font-medium tracking-tight">
                Stone, Considered.
              </h2>
              <p className="text-clamp-body text-ink-muted mb-8 leading-relaxed">
                Desert Hillstone is a material studio for architects and homeowners who treat surfaces as design decisions, not afterthoughts. Every slab we curate is selected for how it will live in a finished space — under morning light, beneath bare feet, against a hand-finished countertop edge — long before it reaches a project site.
              </p>
              <Link
                href="/our-legacy"
                className="group inline-flex items-center gap-2 text-sm tracking-widest font-semibold uppercase text-ink hover:text-gold transition-colors duration-200"
              >
                Our Legacy
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Signature Vein Line divider */}
      <VeinLine />

      {/* 3. COLLECTIONS PREVIEW SECTION */}
      <section className="sec-py bg-surface w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center mb-16 text-center">
            <span className="text-clamp-micro text-gold mb-3 font-semibold">Atelier Collections</span>
            <h2 className="text-clamp-h2 text-ink font-medium tracking-tight">
              Curated Surfaces
            </h2>
          </div>

          {/* Asymmetric Masonry Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 md:gap-8">
            {COLLECTIONS.map((col, idx) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.8, delay: idx * 0.05, ease: EASE_PREMIUM }}
                className={`group relative overflow-hidden rounded-sm cursor-pointer ${col.className}`}
                data-cursor="zoom"
              >
                <Link href={`/collections?cat=${col.category}`} className="block w-full h-full">
                  {/* Image with zoom hover effect */}
                  <motion.div
                    variants={hoverZoom}
                    initial="initial"
                    whileHover="hover"
                    className="relative w-full h-full"
                  >
                    <Image
                      src={col.image}
                      alt={col.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                  </motion.div>

                  {/* Label bottom left */}
                  <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                    <h3 className="font-display text-xl md:text-2xl text-surface font-medium group-hover:text-gold-light transition-colors duration-300">
                      {col.title}
                    </h3>
                    {/* Hidden on mobile, subtle shimmer indication on desktop */}
                    <span className="hidden md:inline-block text-[10px] uppercase font-micro text-surface/60 group-hover:text-gold tracking-widest transition-colors duration-300">
                      View Collection →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURED PORTFOLIO (Full bleed scroll portfolio) */}
      <section className="bg-surface-warm w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-20 pb-10">
          <div className="flex flex-col items-center text-center">
            <span className="text-clamp-micro text-gold mb-3 font-semibold">Materialized</span>
            <h2 className="text-clamp-h2 text-ink font-medium tracking-tight">
              Featured Installations
            </h2>
          </div>
        </div>

        {/* Installations Stack */}
        <div className="flex flex-col">
          {INSTALLATIONS.map((inst) => (
            <div 
              key={inst.title}
              className="relative w-full h-[60vh] min-h-[400px] max-h-[700px] flex items-end mb-4 last:mb-0 group"
            >
              {/* Image Mask Reveal Wrapper */}
              <motion.div
                initial={{ clipPath: "inset(0 100% 0 0)" }}
                whileInView={{ clipPath: "inset(0 0% 0 0)" }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 1.4, ease: EASE_PREMIUM }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={inst.image}
                  alt={inst.title}
                  fill
                  className="object-cover transition-transform duration-1000 ease-premium group-hover:scale-105"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
              </motion.div>

              {/* Caption Overlay */}
              <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pb-10 md:pb-16 flex flex-col md:flex-row md:items-end justify-between gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="max-w-xl"
                >
                  <p className="font-accent italic text-clamp-h3 text-gold-light mb-1">
                    {inst.title}
                  </p>
                  <p className="font-sans text-sm text-surface/75">
                    {inst.desc}
                  </p>
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FOUNDER'S CURATION PREVIEW */}
      <section className="sec-py bg-surface w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Copy block */}
            <div className="flex flex-col items-start">
              <span className="text-clamp-micro text-gold mb-3 font-semibold">Signature Curation</span>
              <h2 className="text-clamp-h2 text-ink mb-6 font-medium tracking-tight leading-tight">
                Nemi Choudhary’s Geological Vision
              </h2>
              <p className="text-clamp-body text-ink-muted mb-8 leading-relaxed">
                Desert Hillstone is a pure expression of Nemi Choudhary's lifelong devotion to geological excellence. Drawing upon Rajasthan's deep stone heritage and global mining connections, he personally hand-selects every individual slab, ensuring each piece is a signature natural work of art.
              </p>
              <Link
                href="/the-founder"
                className="group inline-flex items-center gap-2 text-sm tracking-widest font-semibold uppercase text-ink hover:text-gold transition-colors duration-200"
              >
                Meet Nemi Choudhary
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>

            {/* List of Curation standards */}
            <div className="bg-surface-warm p-8 md:p-12 border border-solid border-border flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-surface border border-solid border-gold/30 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-ink font-semibold mb-1">Hand-Selected Blocks</h3>
                  <p className="text-xs text-ink-muted">Every raw block is inspected and procured at quarry source in Makrana, Rajasthan before slicing.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-surface border border-solid border-gold/30 flex items-center justify-center shrink-0">
                  <FileText className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-ink font-semibold mb-1">Architectural Alignments</h3>
                  <p className="text-xs text-ink-muted">Careful mapping of natural stone veins and density matches to meet high-end project specifications.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-surface border border-solid border-gold/30 flex items-center justify-center shrink-0">
                  <Download className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-ink font-semibold mb-1">Bespoke Stone Sourcing</h3>
                  <p className="text-xs text-ink-muted">Direct procurement channels matching custom layout drawings for high-end luxury residential projects.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GOOGLE REVIEW CAROUSEL */}
      <section className="sec-py bg-surface-warm w-full border-t border-b border-solid border-border">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-clamp-micro text-gold mb-8 block font-semibold">Studio Reputation</span>
          
          <div className="relative min-h-[160px] flex items-center justify-center">
            {REVIEWS.map((rev, idx) => (
              <AnimatePresence mode="wait" key={idx}>
                {reviewIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.45, ease: EASE_PREMIUM }}
                    className="flex flex-col items-center"
                  >
                    <p className="font-accent italic text-xl md:text-2xl text-ink leading-relaxed max-w-2xl mb-6">
                      “{rev.excerpt}”
                    </p>
                    <span className="text-clamp-micro text-ink font-semibold tracking-wider">
                      {rev.name}
                    </span>
                    <div className="flex items-center text-gold text-xs mt-2">
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i}>{star}</span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            ))}
          </div>

          {/* Carousel Arrows */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prevReview}
              className="w-10 h-10 border border-solid border-border hover:border-gold hover:text-gold rounded-full flex items-center justify-center text-ink-muted transition-colors duration-200 focus-visible:outline-none"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextReview}
              className="w-10 h-10 border border-solid border-border hover:border-gold hover:text-gold rounded-full flex items-center justify-center text-ink-muted transition-colors duration-200 focus-visible:outline-none"
              aria-label="Next review"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. INSTAGRAM FEED SHOWCASE */}
      <section className="sec-py bg-surface w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col items-center mb-12 text-center">
            <span className="text-clamp-micro text-gold mb-3 font-semibold">Visual Diary</span>
            <h2 className="text-clamp-h2 text-ink font-medium tracking-tight">
              As Seen In Spaces
            </h2>
          </div>

          {/* Instagram Crop Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {INSTAGRAM_POSTS.map((post, idx) => (
              <div
                key={idx}
                className="group relative aspect-square overflow-hidden rounded-sm bg-surface-warm border border-solid border-border cursor-pointer"
              >
                <Image
                  src={post.image}
                  alt={post.caption}
                  fill
                  className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Minimal Overlay with caption */}
                <div className="absolute inset-0 bg-ink/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6 text-center">
                  <p className="text-xs text-surface font-sans leading-relaxed">
                    {post.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CALL TO ACTION BANNER */}
      <section className="relative bg-ink text-surface sec-py-lg text-center overflow-hidden w-full flex flex-col items-center">
        {/* Draw a subtle vein line at background */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          <svg width="100%" height="200" viewBox="0 0 1200 200" preserveAspectRatio="none">
            <path d="M0 100 Q 300 10, 600 120 T 1200 100" fill="none" stroke="white" strokeWidth="2" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
          <span className="text-clamp-micro text-gold mb-6 font-semibold">Private Access</span>
          <h2 className="text-clamp-h1 text-surface mb-8 font-medium tracking-tight">
            Ready To Build Something Timeless?
          </h2>
          <p className="text-clamp-body-lg text-surface/70 max-w-xl mb-12 font-light leading-relaxed">
            Reach out to schedule a private studio viewing or consultation. We assist you in mapping materials to structural requirements.
          </p>

          <MagneticWrapper>
            <Link
              href="/consultation"
              className="px-10 py-5 border border-solid border-gold text-gold text-sm uppercase tracking-widest font-semibold hover:bg-gold hover:text-ink transition-all duration-300 inline-block shadow-lg"
            >
              Schedule Private Studio Consultation
            </Link>
          </MagneticWrapper>
        </div>
      </section>

    </div>
  );
}
