import { Hero } from "@/components/sections/Hero"
import { Features } from "@/components/sections/Features"
import { Screenshots } from "@/components/sections/Screenshots"
import { Download } from "@/components/sections/Download"
import { FAQ } from "@/components/sections/FAQ"
import { CTA } from "@/components/sections/CTA"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FyClip - Advanced Clipboard Manager for Linux, Windows & macOS",
  description: "FyClip is the most advanced open-source clipboard manager. Unlimited clipboard history, smart search, image support, favorites, and more. Free download for Linux, Windows, and macOS.",
  openGraph: {
    title: "FyClip - Advanced Clipboard Manager",
    description: "Free, open-source clipboard manager with unlimited history and smart search.",
    type: "website",
  },
}

export default function Home() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "FyClip",
    "applicationCategory": "Productivity",
    "description": "Advanced open-source clipboard manager for Linux, Windows, and macOS with unlimited history, smart search, image support, and more.",
    "url": "https://fyclip.vercel.app",
    "image": "https://fyclip.vercel.app/og-image.png",
    "author": {
      "@type": "Person",
      "name": "Sarwar Hridoy",
      "url": "https://github.com/Sarwarhridoy4"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "operatingSystem": ["Linux", "Windows", "macOS"],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "500"
    },
    "downloadUrl": "https://github.com/Sarwarhridoy4/FyClip---Advanced-Clipboard-Manager/releases",
    "fileSize": "50MB",
    "sameAs": [
      "https://github.com/Sarwarhridoy4/FyClip---Advanced-Clipboard-Manager"
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemaData),
        }}
      />
      <Hero />
      <Features />
      <Screenshots />
      <Download />
      <FAQ />
      <CTA />
    </>
  )
}
