"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { hoverZoom, fadeUp, staggerContainer, EASE_PREMIUM } from "@/lib/motion";

const INSTAGRAM_GALLERY = [
  {
    image: "/images/gallery_1.jpg",
    caption: "Premium Tiles. Exhibition of refined architectural tiling slabs in various stone textures.",
    aspect: "aspect-[4/5]"
  },
  {
    image: "/images/gallery_2.jpg",
    caption: "Premium Granite. Clean linear perspective of polished granite slabs showing intricate natural patterns.",
    aspect: "aspect-[3/4]"
  },
  {
    image: "/images/gallery_3.jpg",
    caption: "Premium Granite. Heavy solid slabs of deep black polished granite loaded in our yard.",
    aspect: "aspect-[4/5]"
  },
  {
    image: "/images/gallery_4.jpg",
    caption: "Premium Stones. Exquisite round marble plaque hand-painted with a traditional peacock design.",
    aspect: "aspect-[4/5]"
  },
  {
    image: "/images/gallery_5.jpg",
    caption: "Premium Stones. Curated collection of limestone, sandstone, and slate cladding samples with foliage.",
    aspect: "aspect-[4/5]"
  },
  {
    image: "/images/gallery_6.jpg",
    caption: "Premium Sandstone. Textured yellow sandstone slab in our storage yard.",
    aspect: "aspect-[4/5]"
  },
  {
    image: "/images/gallery_7.jpg",
    caption: "Bespoke Tiles. Hand-selected decorative tiling designs held by our studio model.",
    aspect: "aspect-[3/4]"
  },
  {
    image: "/images/gallery_8.jpg",
    caption: "Traditional Artistry. Flawlessly hand-painted marble plaque displaying a Rajasthani lady holding a lotus.",
    aspect: "aspect-[4/5]"
  },
  {
    image: "/images/gallery_9.jpg",
    caption: "Premium Slabs. Beautiful blue-grey marble cladding panel with elegant gold leaf veining detail.",
    aspect: "aspect-[3/4]"
  },
  {
    image: "/images/gallery_10.jpg",
    caption: "Premium Tiles. Collection of printed porcelain and ceramic floor tiles with traditional geometric motifs.",
    aspect: "aspect-[4/5]"
  },
  {
    image: "/images/gallery_11.jpg",
    caption: "Premium Granite. High-quality red-brown granite slabs stacked in our atelier yard.",
    aspect: "aspect-[4/5]"
  }
];

export default function InstagramGalleryPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 flex-grow">
      {/* Editorial Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="flex flex-col max-w-xl">
          <span className="text-clamp-micro text-gold mb-3 font-semibold uppercase tracking-widest">Visual Diary</span>
          <h1 className="text-clamp-h2 text-ink mb-4 font-medium tracking-tight">
            As Seen In Spaces
          </h1>
          <p className="text-sm text-ink-muted leading-relaxed">
            Curated installations, raw material selections, and behind-the-scenes moments from our Rajasthan stone quarries. Follow our visual narrative on Instagram.
          </p>
        </div>
        
        <Link 
          href="https://www.instagram.com/desert_hillstone/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-surface hover:bg-gold-deep text-xs tracking-wider uppercase font-semibold transition-all duration-300 rounded-sm self-start md:self-auto"
        >
          {/* Instagram SVG */}
          <svg 
            className="w-4 h-4" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
          </svg>
          Follow @desert_hillstone
        </Link>
      </div>

      {/* Grid Layout - Masonry Columns */}
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        viewport={{ once: true }}
        className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
      >
        {INSTAGRAM_GALLERY.map((post, idx) => (
          <motion.a
            key={idx}
            href="https://www.instagram.com/desert_hillstone/"
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeUp}
            className="break-inside-avoid group block relative overflow-hidden rounded-sm bg-surface-warm border border-solid border-border cursor-pointer shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Image Container with variable aspect ratios */}
            <div className={`relative w-full ${post.aspect}`}>
              <Image
                src={post.image}
                alt={post.caption}
                fill
                className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              
              {/* Elegant Hover Overlay */}
              <div className="absolute inset-0 bg-ink/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  {/* Instagram icon in circle */}
                  <div className="p-2 border border-solid border-surface/30 rounded-full text-surface bg-surface/10">
                    <svg 
                      className="w-4 h-4" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </div>
                </div>
                
                <div className="text-left">
                  <span className="text-[11px] tracking-widest font-semibold uppercase text-gold">
                    View on Instagram →
                  </span>
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
