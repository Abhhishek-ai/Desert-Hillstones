"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Grid, Layers, Columns, Droplet, Eye } from "lucide-react";
import { STONES, CATEGORIES, Stone } from "@/lib/stones";
import { hoverZoom, staggerContainer, fadeUp, EASE_PREMIUM } from "@/lib/motion";

function CollectionsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const prefersReducedMotion = useReducedMotion();
  
  // Get active category from search params, default to 'all'
  const activeCategory = searchParams.get("cat") || "all";
  
  const [filteredStones, setFilteredStones] = useState<Stone[]>(STONES);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredStones(STONES);
    } else {
      setFilteredStones(STONES.filter((stone) => stone.category === activeCategory));
    }
  }, [activeCategory]);

  const handleFilterClick = (catId: string) => {
    // Update URL query parameters without full page reloads
    const params = new URLSearchParams(searchParams.toString());
    if (catId === "all") {
      params.delete("cat");
    } else {
      params.set("cat", catId);
    }
    router.push(`/collections?${params.toString()}`, { scroll: false });
  };

  // Render application icons helper
  const renderAppIcon = (app: string) => {
    switch (app.toLowerCase()) {
      case "flooring":
        return <Grid className="w-3.5 h-3.5" />;
      case "countertops":
      case "kitchen countertops":
      case "bar tops":
        return <Layers className="w-3.5 h-3.5" />;
      case "feature walls":
      case "wall cladding":
      case "cladding":
        return <Columns className="w-3.5 h-3.5" />;
      case "bathrooms":
      case "pooja rooms":
        return <Droplet className="w-3.5 h-3.5" />;
      default:
        return <Eye className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
      {/* Editorial Header */}
      <div className="flex flex-col mb-12 md:mb-16">
        <span className="text-clamp-micro text-gold mb-3 font-semibold">Our Portfolio</span>
        <h1 className="text-clamp-h2 text-ink mb-4 font-medium tracking-tight">
          Surfaces & Stones
        </h1>
        <p className="text-sm text-ink-muted max-w-xl leading-relaxed">
          Explore our collection of Makrana marble, exotic granites, and statement stones. Filter by category to view geological specifications and sample requests.
        </p>
      </div>

      {/* Montserrat horizontal filter bar */}
      <div className="border-b border-solid border-border pb-4 mb-12 overflow-x-auto scrollbar-none flex whitespace-nowrap">
        <nav className="flex gap-8 md:gap-10">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => handleFilterClick(cat.id)}
                className="font-micro text-xs tracking-wider uppercase font-semibold text-ink hover:text-gold transition-colors duration-200 relative pb-4 focus-visible:outline-none"
              >
                {cat.label}
                {isActive && (
                  <motion.div
                    layoutId="filter-underline"
                    className="absolute bottom-[-1px] left-0 right-0 h-[1.5px] bg-gold"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Collections Grid - AnimatePresence handles filtering layouts */}
      <motion.div 
        layout={!prefersReducedMotion}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
      >
        <AnimatePresence mode="popLayout">
          {filteredStones.map((stone, idx) => (
            <motion.div
              key={stone.slug}
              layout={!prefersReducedMotion ? "position" : false}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.55, ease: EASE_PREMIUM }}
              className="flex flex-col group cursor-pointer"
              data-cursor="zoom"
            >
              <Link href={`/collections/${stone.slug}`} className="flex flex-col h-full focus-visible:outline-none">
                {/* Asymmetric card image wrapper */}
                <div 
                  className={`relative overflow-hidden rounded-sm bg-surface-warm mb-5 ${
                    idx % 3 === 0 
                      ? "aspect-[4/5]" 
                      : idx % 3 === 1 
                        ? "aspect-square" 
                        : "aspect-[4/3]"
                  }`}
                >
                  <motion.div
                    variants={hoverZoom}
                    initial="initial"
                    whileHover="hover"
                    className="relative w-full h-full"
                  >
                    {/* Shared Element morph image transition identifier */}
                    <motion.div 
                      layoutId={`stone-img-container-${stone.slug}`}
                      className="absolute inset-0 w-full h-full"
                    >
                      <Image
                        src={stone.images[0]}
                        alt={stone.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        priority={idx < 3}
                      />
                    </motion.div>
                    
                    <div className="absolute inset-0 bg-ink/10 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
                  </motion.div>

                  {/* Eyebrow Label on stone category */}
                  <span className="absolute top-4 left-4 bg-bg/90 backdrop-blur-md px-3 py-1 font-micro text-[9px] font-semibold text-ink tracking-wider uppercase">
                    {stone.categoryLabel}
                  </span>
                </div>

                {/* Card Info details */}
                <div className="flex flex-col flex-grow">
                  {/* Title & Swatch */}
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="font-display text-xl text-ink group-hover:text-gold transition-colors duration-200">
                      {stone.name}
                    </h2>
                    {/* Swatch color dot indicator */}
                    <div 
                      className="w-3.5 h-3.5 rounded-full border border-solid border-border shrink-0" 
                      style={{ backgroundColor: stone.colorHex }}
                      title={`Color Family: ${stone.color}`}
                    />
                  </div>

                  {/* Origin */}
                  <span className="font-sans text-xs text-gold font-medium mb-3">
                    {stone.origin}
                  </span>

                  {/* Specifications snippet */}
                  <p className="text-xs text-ink-muted leading-relaxed mb-4 flex-grow line-clamp-2">
                    {stone.description}
                  </p>

                  {/* Footer Row (Applications and Finishes) */}
                  <div className="flex items-center justify-between pt-4 border-t border-solid border-border/60 mt-auto text-xs text-ink-muted">
                    {/* Applications Row */}
                    <div className="flex items-center gap-2">
                      {stone.applications.slice(0, 3).map((app, i) => (
                        <div 
                          key={i} 
                          title={app}
                          className="w-6 h-6 rounded-full bg-surface-warm border border-solid border-border flex items-center justify-center text-ink-muted/80"
                        >
                          {renderAppIcon(app)}
                        </div>
                      ))}
                    </div>

                    {/* Finishes */}
                    <span className="font-sans text-[11px] tracking-wide text-ink-muted">
                      {stone.finishes.join(" / ")}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default function CollectionsPage() {
  return (
    <Suspense fallback={
      <div className="w-full h-[60vh] flex items-center justify-center text-ink-muted font-micro text-xs uppercase tracking-widest">
        Loading Collections...
      </div>
    }>
      <CollectionsContent />
    </Suspense>
  );
}
