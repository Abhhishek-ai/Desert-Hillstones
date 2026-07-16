import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg border-t border-solid border-border pt-16 pb-12 w-full mt-auto">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Column 1: Brand & Statement */}
          <div className="flex flex-col gap-4">
            <span className="font-display font-medium text-lg tracking-wide text-ink">
              DESERT HILLSTONE
            </span>
            <p className="font-sans text-sm text-ink-muted leading-relaxed max-w-[240px]">
              A curated architectural stone studio. Sourcing Rajasthan's legacy and global geological treasures.
            </p>
          </div>

          {/* Column 2: Navigate */}
          <div className="flex flex-col gap-4">
            <span className="font-micro text-xs tracking-widest text-ink uppercase">
              Navigate
            </span>
            <nav className="flex flex-col gap-2.5">
              <Link href="/" className="font-sans text-sm text-ink-muted hover:text-ink transition-colors duration-200">
                Home
              </Link>
              <Link href="/collections" className="font-sans text-sm text-ink-muted hover:text-ink transition-colors duration-200">
                Collections
              </Link>
              <Link href="/instagram" className="font-sans text-sm text-ink-muted hover:text-ink transition-colors duration-200">
                Gallery
              </Link>
              <Link href="/the-founder" className="font-sans text-sm text-ink-muted hover:text-ink transition-colors duration-200">
                The Founder
              </Link>
              <Link href="/our-legacy" className="font-sans text-sm text-ink-muted hover:text-ink transition-colors duration-200">
                Our Legacy
              </Link>
              <Link href="/consultation" className="font-sans text-sm text-ink-muted hover:text-ink transition-colors duration-200">
                Book Consultation
              </Link>
              <Link href="/contact" className="font-sans text-sm text-ink-muted hover:text-ink transition-colors duration-200">
                Contact
              </Link>
            </nav>
          </div>

          {/* Column 3: Visit */}
          <div className="flex flex-col gap-4">
            <span className="font-micro text-xs tracking-widest text-ink uppercase">
              Visit
            </span>
            <div className="flex flex-col gap-2.5 text-sm text-ink-muted">
              <p className="leading-relaxed">
                Near Hotel Royal Bagh,<br />
                Opposite City Park, Ward 27,<br />
                Mansarovar Sector 8, Mansarovar,<br />
                Jaipur, Rajasthan 302020
              </p>
              <a 
                href="tel:+919587384264" 
                className="hover:text-ink transition-colors duration-200 font-medium pt-1 inline-block"
              >
                +91 95873 84264
              </a>
              <span className="text-xs text-ink-muted/70 block pt-1">
                Mon – Sat: 10:00 AM – 7:30 PM<br />
                Sunday: Closed
              </span>
            </div>
          </div>

          {/* Column 4: Connect & Trust */}
          <div className="flex flex-col gap-4">
            <span className="font-micro text-xs tracking-widest text-ink uppercase">
              Connect
            </span>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <a 
                  href="https://www.instagram.com/nemi_choudhary_makrana/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 font-sans text-sm text-ink-muted hover:text-ink transition-colors duration-200"
                >
                  <svg 
                    className="w-4 h-4 shrink-0" 
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
                  Instagram
                </a>
                <a 
                  href="https://wa.me/919587384264" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 font-sans text-sm text-ink-muted hover:text-ink transition-colors duration-200"
                >
                  <svg 
                    className="w-4 h-4 fill-current shrink-0" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.004 2C6.51 2 2.014 6.5 2.014 12c0 1.91.537 3.708 1.466 5.26L2 22l4.896-1.28c1.472.8 3.146 1.28 4.908 1.28 5.496 0 9.996-4.5 9.996-10S17.5 2 12.004 2zm5.772 14.18c-.24.68-1.2 1.25-1.92 1.35-.48.06-1.12.1-3.23-.77-2.69-1.1-4.42-3.83-4.56-4.01-.13-.18-1.12-1.48-1.12-2.83 0-1.35.7-2 .95-2.27.24-.26.54-.33.72-.33h.52c.16 0 .38-.02.58.46.22.52.74 1.8.8 1.92.06.12.1.27.02.43-.08.16-.18.26-.35.45-.17.2-.36.44-.52.6-.18.18-.37.38-.16.74.22.36.96 1.58 2.06 2.56 1.42 1.26 2.61 1.65 2.98 1.84.37.19.59.16.81-.08.22-.24.96-1.11 1.22-1.49.26-.38.52-.32.87-.19.36.13 2.27 1.07 2.66 1.27.39.2.65.3.74.46.1.15.1.88-.14 1.56z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>

              {/* Verified Trust Badge */}
              <div className="pt-2 border-t border-solid border-border max-w-[200px]">
                <div className="flex items-center gap-1.5 text-gold mb-1">
                  <span className="text-sm font-semibold text-ink font-sans">5.0</span>
                  <div className="flex items-center text-xs">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i} className="leading-none">{star}</span>
                    ))}
                  </div>
                </div>
                <span className="text-xs text-ink-muted font-sans">
                  35+ Verified Google Reviews
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-solid border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs text-ink-muted/70">
            © {currentYear} Desert Hillstone. All rights reserved.
          </p>
          {/* Devanagari branding, quiet and dignified */}
          <span 
            className="font-accent italic text-lg text-gold font-medium select-none" 
            lang="hi"
          >
            डेजर्ट हिलस्टोन्स
          </span>
        </div>
      </div>
    </footer>
  );
}
