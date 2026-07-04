"use client";

import { useEffect, useState } from "react";
import { Phone, Navigation, Clock, Star, ArrowRight } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function ContactPage() {
  const [waLink, setWaLink] = useState("");

  useEffect(() => {
    setWaLink(buildWhatsAppLink("general"));
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 flex-grow flex flex-col justify-center">
      {/* Editorial Header */}
      <div className="flex flex-col mb-12 text-center md:text-left">
        <span className="text-clamp-micro text-gold mb-3 font-semibold">Location & Directions</span>
        <h1 className="text-clamp-h2 text-ink mb-4 font-medium tracking-tight">
          Contact the Studio
        </h1>
        <p className="text-sm text-ink-muted max-w-xl leading-relaxed">
          Visit our material atelier in Jaipur or contact our concierge support team. Physical viewings of raw slabs are arranged by private appointment.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
        {/* Left: Contact Info Block (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-10">
          
          {/* Business details */}
          <div className="flex flex-col gap-8 bg-surface border border-solid border-border p-8 rounded-sm">
            {/* Address */}
            <div className="flex gap-4">
              <Navigation className="w-5 h-5 text-gold shrink-0 mt-1" />
              <div>
                <h3 className="font-micro text-[11px] text-ink font-semibold uppercase tracking-wider mb-2">Studio Address</h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  Near Hotel Royal Bagh,<br />
                  Opposite City Park, Ward 27,<br />
                  Mansarovar Sector 8, Mansarovar,<br />
                  Jaipur, Rajasthan 302020
                </p>
                <a 
                  href="https://www.google.com/maps/dir/?api=1&destination=Desert+Hillstones+Mansarovar+Jaipur+Rajasthan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] text-gold hover:text-gold-deep font-semibold tracking-wider uppercase mt-2.5 transition-colors duration-200"
                >
                  Get Directions
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex gap-4">
              <Clock className="w-5 h-5 text-gold shrink-0 mt-1" />
              <div>
                <h3 className="font-micro text-[11px] text-ink font-semibold uppercase tracking-wider mb-2">Business Hours</h3>
                <p className="text-sm text-ink-muted leading-relaxed">
                  Monday – Saturday: 10:00 AM – 7:30 PM<br />
                  Sunday: Closed (Private viewings only)
                </p>
              </div>
            </div>

            {/* Google Rating Badge */}
            <div className="flex gap-4 pt-4 border-t border-solid border-border/60">
              <Star className="w-5 h-5 text-gold shrink-0 fill-gold mt-1" />
              <div>
                <h3 className="font-micro text-[11px] text-ink font-semibold uppercase tracking-wider mb-1">Google Rating</h3>
                <p className="text-sm text-ink font-medium">
                  5.0 ★ <span className="text-ink-muted font-normal">(35+ Verified Reviews)</span>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Actions (Call / WhatsApp buttons) */}
          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <a
              href="tel:+919587384264"
              className="flex-1 text-center py-4 border border-solid border-ink text-ink hover:bg-ink hover:text-surface text-xs tracking-wider uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Studio
            </a>
            
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-4 bg-ink text-surface hover:bg-gold-deep text-xs tracking-wider uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-2"
            >
              {/* WhatsApp Micro SVG */}
              <svg 
                className="w-4 h-4 fill-current" 
                viewBox="0 0 24 24"
              >
                <path d="M12.004 2C6.51 2 2.014 6.5 2.014 12c0 1.91.537 3.708 1.466 5.26L2 22l4.896-1.28c1.472.8 3.146 1.28 4.908 1.28 5.496 0 9.996-4.5 9.996-10S17.5 2 12.004 2zm5.772 14.18c-.24.68-1.2 1.25-1.92 1.35-.48.06-1.12.1-3.23-.77-2.69-1.1-4.42-3.83-4.56-4.01-.13-.18-1.12-1.48-1.12-2.83 0-1.35.7-2 .95-2.27.24-.26.54-.33.72-.33h.52c.16 0 .38-.02.58.46.22.52.74 1.8.8 1.92.06.12.1.27.02.43-.08.16-.18.26-.35.45-.17.2-.36.44-.52.6-.18.18-.37.38-.16.74.22.36.96 1.58 2.06 2.56 1.42 1.26 2.61 1.65 2.98 1.84.37.19.59.16.81-.08.22-.24.96-1.11 1.22-1.49.26-.38.52-.32.87-.19.36.13 2.27 1.07 2.66 1.27.39.2.65.3.74.46.1.15.1.88-.14 1.56z"/>
              </svg>
              WhatsApp Us
            </a>
          </div>

        </div>

        <a 
          href="https://www.google.com/maps/dir/?api=1&destination=Desert+Hillstones+Mansarovar+Jaipur+Rajasthan"
          target="_blank"
          rel="noopener noreferrer"
          className="lg:col-span-7 relative border border-solid border-border rounded-sm overflow-hidden min-h-[300px] bg-surface-warm group block"
        >
          {/* Desaturated Google Map Iframe */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.88200676443!2d75.7618!3d26.8523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5dc49bbbbbb%3A0xbbbbbbbbbbbbbbbb!2sMansarovar%2C%20Jaipur%2C%20Rajasthan%20302020!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full desaturated-map min-h-[380px] pointer-events-none"
            title="Desert Hillstone location map"
          />
          {/* Hover overlay badge */}
          <div className="absolute inset-0 bg-ink/5 group-hover:bg-ink/0 transition-colors duration-300 flex items-center justify-center pointer-events-none">
            <span className="bg-surface px-4 py-2.5 text-xs tracking-wider uppercase font-semibold text-ink shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-solid border-border flex items-center gap-2">
              Open in Google Maps
              <ArrowRight className="w-3.5 h-3.5 text-gold" />
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
