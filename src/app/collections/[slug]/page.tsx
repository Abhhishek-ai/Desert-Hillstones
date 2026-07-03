"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Grid, Layers, Columns, Droplet, ArrowLeft, ZoomIn, X, Eye } from "lucide-react";
import { STONES, Stone } from "@/lib/stones";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { EASE_PREMIUM } from "@/lib/motion";

export default function StoneDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const [stone, setStone] = useState<Stone | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const found = STONES.find((s) => s.slug === slug);
    if (found) {
      setStone(found);
    } else {
      // If stone doesn't exist, redirect to catalog
      router.push("/collections");
    }
  }, [slug, router]);

  if (!stone) {
    return (
      <div className="w-full h-[60vh] flex items-center justify-center text-ink-muted font-micro text-xs uppercase tracking-widest">
        Loading Stone details...
      </div>
    );
  }

  // Handle WhatsApp Sample Request
  const waSampleLink = buildWhatsAppLink("sample_request", { stoneName: stone.name });

  // Render application icon helper
  const getAppIcon = (app: string) => {
    switch (app.toLowerCase()) {
      case "flooring":
        return <Grid className="w-4 h-4 text-gold shrink-0" />;
      case "countertops":
      case "kitchen countertops":
      case "bar tops":
        return <Layers className="w-4 h-4 text-gold shrink-0" />;
      case "feature walls":
      case "wall cladding":
      case "cladding":
        return <Columns className="w-4 h-4 text-gold shrink-0" />;
      case "bathrooms":
      case "pooja rooms":
        return <Droplet className="w-4 h-4 text-gold shrink-0" />;
      default:
        return <Eye className="w-4 h-4 text-gold shrink-0" />;
    }
  };

  const handleWheelZoom = (e: React.WheelEvent) => {
    e.preventDefault();
    setZoomScale((prev) => Math.max(1, Math.min(4, prev - e.deltaY * 0.005)));
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-16">
      {/* Back to Catalog */}
      <Link
        href="/collections"
        className="group inline-flex items-center gap-2 text-xs tracking-wider uppercase font-semibold text-ink-muted hover:text-ink mb-8 md:mb-12 focus-visible:outline-none"
      >
        <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-200" />
        Back to Gallery
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: Gallery & Thumbnail Filmstrip (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Main Visual Display (shared-element layoutId) */}
          <div 
            onClick={() => {
              setZoomScale(1);
              setDragOffset({ x: 0, y: 0 });
              setLightboxOpen(true);
            }}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-surface-warm cursor-zoom-in group"
          >
            <motion.div 
              layoutId={`stone-img-container-${stone.slug}`}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={stone.images[activeImageIndex] || stone.images[0]}
                alt={`${stone.name} slab primary image`}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </motion.div>
            
            {/* Hover indication icon */}
            <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-bg/95 backdrop-blur-sm border border-solid border-border/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
              <ZoomIn className="w-4.5 h-4.5 text-ink" />
            </div>
          </div>

          {/* Filmstrip thumbnails */}
          {stone.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
              {stone.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 md:w-24 aspect-[4/3] rounded-sm overflow-hidden shrink-0 border-2 border-solid focus-visible:outline-none transition-all duration-300 ${
                    activeImageIndex === idx 
                      ? "border-gold scale-[0.97]" 
                      : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`${stone.name} thumbnail view ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="100px"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Specifications & Characteristics Panel (5 cols) */}
        <div className="lg:col-span-5 flex flex-col">
          {/* Stone Title */}
          <span className="font-micro text-xs tracking-wider uppercase font-semibold text-gold mb-2">
            {stone.categoryLabel}
          </span>
          <h1 className="font-display text-3xl md:text-4xl text-ink font-semibold mb-6 tracking-tight">
            {stone.name}
          </h1>

          {/* Short editorial description */}
          <p className="font-accent italic text-base md:text-lg text-ink-muted mb-8 leading-relaxed border-l-2 border-solid border-gold/40 pl-4">
            {stone.story}
          </p>

          <p className="text-clamp-body text-ink-muted mb-8 leading-relaxed">
            {stone.description}
          </p>

          {/* Characteristics table */}
          <div className="border border-solid border-border rounded-sm bg-surface p-6 flex flex-col gap-4 mb-8">
            <div className="flex items-center justify-between text-sm py-1.5 border-b border-solid border-border/40">
              <span className="font-micro text-[11px] text-ink-muted uppercase tracking-wider font-semibold">Origin</span>
              <span className="font-sans text-ink font-medium">{stone.origin}</span>
            </div>
            <div className="flex items-center justify-between text-sm py-1.5 border-b border-solid border-border/40">
              <span className="font-micro text-[11px] text-ink-muted uppercase tracking-wider font-semibold">Color Family</span>
              <div className="flex items-center gap-2">
                <span className="font-sans text-ink font-medium">{stone.color}</span>
                <span 
                  className="w-3.5 h-3.5 rounded-full border border-solid border-border" 
                  style={{ backgroundColor: stone.colorHex }}
                />
              </div>
            </div>
            <div className="flex items-center justify-between text-sm py-1.5 border-b border-solid border-border/40">
              <span className="font-micro text-[11px] text-ink-muted uppercase tracking-wider font-semibold">Available Finishes</span>
              <span className="font-sans text-ink font-medium">{stone.finishes.join(" / ")}</span>
            </div>
            {stone.density && (
              <div className="flex items-center justify-between text-sm py-1.5 border-b border-solid border-border/40">
                <span className="font-micro text-[11px] text-ink-muted uppercase tracking-wider font-semibold">Bulk Density</span>
                <span className="font-sans text-ink font-medium">{stone.density}</span>
              </div>
            )}
            {stone.porosity && (
              <div className="flex items-center justify-between text-sm py-1.5">
                <span className="font-micro text-[11px] text-ink-muted uppercase tracking-wider font-semibold">Water Porosity</span>
                <span className="font-sans text-ink font-medium">{stone.porosity}</span>
              </div>
            )}
          </div>

          {/* Applications list */}
          <div className="mb-10">
            <span className="font-micro text-xs tracking-wider uppercase font-semibold text-ink-muted mb-4 block">
              Recommended Applications
            </span>
            <div className="flex flex-wrap gap-3">
              {stone.applications.map((app) => (
                <div
                  key={app}
                  className="flex items-center gap-2.5 px-4 py-2 bg-surface-warm border border-solid border-border rounded-sm text-xs font-semibold text-ink"
                >
                  {getAppIcon(app)}
                  <span>{app}</span>
                </div>
              ))}
            </div>
          </div>

          {/* WhatsApp Sample request CTA */}
          <a
            href={waSampleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full text-center py-4 bg-ink text-surface text-sm uppercase tracking-wider font-semibold hover:bg-gold-deep hover:text-surface transition-all duration-300 shadow-md"
          >
            Request Material Samples
          </a>
        </div>
      </div>

      {/* Fullscreen Lightbox Zoom Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-ink/95 z-[200] flex items-center justify-center p-4 select-none touch-none"
            onWheel={handleWheelZoom}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-surface/5 border border-solid border-surface/20 flex items-center justify-center text-surface hover:bg-surface/10 transition-colors duration-200 focus-visible:outline-none"
              aria-label="Close zoom"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Instruction tooltip */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 text-[10px] uppercase font-micro text-surface/50 tracking-wider hidden md:block">
              Use mouse wheel to zoom · Drag to pan
            </div>

            {/* Lightbox main zoomable container */}
            <div className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
              <motion.div
                style={{
                  scale: zoomScale,
                  x: dragOffset.x,
                  y: dragOffset.y,
                }}
                drag
                dragConstraints={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
                dragElastic={0.05}
                onDragEnd={(_, info) => {
                  setDragOffset((prev) => ({
                    x: prev.x + info.offset.x,
                    y: prev.y + info.offset.y
                  }));
                }}
                className="relative max-w-full max-h-full aspect-[4/3] w-[80vw] h-auto cursor-grab active:cursor-grabbing"
              >
                <Image
                  src={stone.images[activeImageIndex] || stone.images[0]}
                  alt={`${stone.name} fullscreen detail view`}
                  fill
                  className="object-contain pointer-events-none"
                  sizes="90vw"
                />
              </motion.div>
            </div>

            {/* Manual Zoom Controls (primarily for accessibility and touch devices) */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4 bg-surface/5 px-4 py-2 border border-solid border-surface/15 rounded-full">
              <button 
                onClick={() => setZoomScale((prev) => Math.max(1, prev - 0.5))}
                className="text-xs text-surface font-semibold px-3 py-1 hover:text-gold transition-colors duration-200"
              >
                Zoom Out
              </button>
              <span className="text-xs text-surface/55 font-mono">{Math.round(zoomScale * 100)}%</span>
              <button 
                onClick={() => setZoomScale((prev) => Math.min(4, prev + 0.5))}
                className="text-xs text-surface font-semibold px-3 py-1 hover:text-gold transition-colors duration-200"
              >
                Zoom In
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
