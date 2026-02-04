import type { Metadata } from "next";
import dynamic from "next/dynamic";

import { Outfit } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/Navbar";

// Dynamically import Footer since it's below the fold
const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true, // Still render on server for SEO
});



const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  // Note: You don't even need the 'variable' or 'weight' property for this simplest approach!
  // But adding a 'display: swap' is good practice for performance.
  display: 'swap', 
});

export const metadata: Metadata = {
  title: {
    default: "Gulf Resources - Professional Business Solutions in UAE & India",
    template: "%s | Gulf Resources"
  },
  description: "Gulf Resources provides comprehensive facilities management, business setup, visa services, and travel solutions across UAE and India. Trusted partner since 2016 with offices in Abu Dhabi and Kerala.",
  keywords: [
    "facilities management UAE",
    "business setup Abu Dhabi", 
    "visa services UAE",
    "travel services Gulf",
    "manpower supply UAE",
    "PRO services Abu Dhabi",
    "Gulf Resources",
    "Gulf Track",
    "typing services UAE",
    "document clearance UAE"
  ],
  authors: [{ name: "Gulf Resources" }],
  creator: "Gulf Resources",
  publisher: "Gulf Resources",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gulfresources.ae',
    siteName: 'Gulf Resources',
    title: 'Gulf Resources - Professional Business Solutions in UAE & India',
    description: 'Gulf Resources provides comprehensive facilities management, business setup, visa services, and travel solutions across UAE and India. Trusted partner since 2016.',
    images: [
      {
        url: '/webp/hero_bg_optimized.webp',
        width: 1200,
        height: 630,
        alt: 'Gulf Resources - Professional Business Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gulf Resources - Professional Business Solutions in UAE & India',
    description: 'Gulf Resources provides comprehensive facilities management, business setup, visa services, and travel solutions across UAE and India.',
    images: ['/webp/hero_bg_optimized.webp'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://gulfresources.ae',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Gulf Resources Facilities Management L.L.C",
    "alternateName": ["Gulf Resources", "Gulf Track"],
    "url": "https://gulfresources.ae",
    "logo": "https://gulfresources.ae/webp/images/logo.webp",
    "description": "Gulf Resources provides comprehensive facilities management, business setup, visa services, and travel solutions across UAE and India since 2016.",
    "foundingDate": "2016",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Office 4, Musaffah 37, Opp. Gift Action",
      "addressLocality": "Abu Dhabi",
      "addressCountry": "UAE"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+971-2-517-6889",
        "contactType": "customer service",
        "areaServed": "UAE",
        "availableLanguage": ["English", "Arabic"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+971-50-134-4537",
        "contactType": "customer service",
        "areaServed": "UAE",
        "availableLanguage": ["English", "Arabic"]
      }
    ],
    "email": "info@gulfresources.ae",
    "sameAs": [
      "https://facebook.com/gulfresources",
      "https://instagram.com/gulfresources",
      "https://linkedin.com/company/gulfresources"
    ],
    "serviceArea": {
      "@type": "Place",
      "name": "United Arab Emirates and India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Gulf Resources Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Facilities Management",
            "description": "Comprehensive facilities management services for commercial and industrial operations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Setup Services",
            "description": "Business setup, visa processing, and government documentation services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Travel and Visa Services",
            "description": "Travel planning, flight booking, and visa assistance services"
          }
        }
      ]
    }
  };

  return (
    <html lang="en" className={outfit.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        
      </body>

    </html>
  );
}
