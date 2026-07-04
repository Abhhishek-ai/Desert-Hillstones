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
                  href="https://www.instagram.com/desert_hillstone/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-sans text-sm text-ink-muted hover:text-ink transition-colors duration-200"
                >
                  Instagram
                </a>
                <a 
                  href="https://wa.me/919587384264" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-sans text-sm text-ink-muted hover:text-ink transition-colors duration-200"
                >
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
