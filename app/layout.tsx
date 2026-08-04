import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Caprasimo, Figtree } from "next/font/google";
import { CustomCursor } from "@/components/custom-cursor";
import { IntroOverlay } from "@/components/intro-overlay";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/data/site";
import "@/app/globals.css";

const caprasimo = Caprasimo({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-caprasimo",
  display: "swap",
});

const figtree = Figtree({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = createMetadata({
  description: siteConfig.seoDescription,
});

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    email: siteConfig.email,
    jobTitle: siteConfig.title,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ottawa",
      addressRegion: "ON",
      addressCountry: "Canada",
    },
    sameAs: [siteConfig.linkedin, siteConfig.github],
    alumniOf: "University of Ottawa",
    url: siteConfig.url,
  };

  return (
    <html lang="en" className={`${caprasimo.variable} ${figtree.variable}`}>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>

        <CustomCursor />
        <IntroOverlay />

        <Navbar />
        <main id="main-content">
          {children}
        </main>
        <Footer />

        <Analytics />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
