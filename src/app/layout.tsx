import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import WhatsAppFAB from "@/components/WhatsAppFAB";

// Optimize Google Fonts
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Desert Hillstone — Premium Marble & Granite Studio, Jaipur",
  description: "Curated Makrana marble, granites, premium ceramics and natural stone surfaces for luxury residences, villas, and commercial spaces in Mansarovar, Jaipur.",
  keywords: "premium marble supplier Jaipur, Makrana marble Jaipur, granite showroom Jaipur, luxury marble Jaipur, kitchen countertops Jaipur, architectural stone Jaipur, premium tiles Jaipur",
  metadataBase: new URL("https://deserthillstone.com"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://deserthillstone.com",
    title: "Desert Hillstone — Premium Marble & Granite Studio, Jaipur",
    description: "Curated architectural stone studio in Jaipur supplying Makrana marble, granites, ceramics, and natural surfaces.",
    siteName: "Desert Hillstone",
  },
  alternates: {
    canonical: "/",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // LocalBusiness structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeGoodsStore",
    "name": "Desert Hillstone",
    "alternateName": "डेजर्ट हिलस्टोन्स",
    "image": "https://deserthillstone.com/images/stone_makrana_white.jpg",
    "@id": "https://deserthillstone.com/#store",
    "url": "https://deserthillstone.com",
    "telephone": "+919587384264",
    "priceRange": "$$$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Near Hotel Royal Bagh, Opposite City Park, Ward 27, Mansarovar Sector 8, Mansarovar",
      "addressLocality": "Jaipur",
      "postalCode": "302020",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 26.8523, // Jaipur Mansarovar coordinates
      "longitude": 75.7618
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "10:00",
      "closes": "19:30"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "35"
    }
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${inter.variable} ${montserrat.variable} h-full antialiased`}
    >
      <head>
        {/* Inject JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-bg text-ink selection:bg-gold/20 selection:text-gold-deep relative">
        {/* Custom Cursor for desktop pointer interaction */}
        <CustomCursor />

        {/* Global Navigation Header */}
        <Header />

        {/* Dynamic Page Content */}
        <main className="flex-grow flex flex-col">
          {children}
        </main>

        {/* Floating Call & WhatsApp Buttons */}
        <WhatsAppFAB />

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
