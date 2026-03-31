/**
 * SEO Optimizations for FyClip
 * Includes Schema.org structured data, OpenGraph metadata, and other SEO best practices
 */

export const seoConfig = {
  // Site configuration
  site: {
    name: "FyClip",
    description: "Advanced open-source clipboard manager for Linux, Windows, and macOS",
    url: "https://fyclip.vercel.app",
    image: "https://fyclip.vercel.app/og-image.png",
    language: "en",
    timezone: "UTC",
  },

  // Target keywords and phrases
  keywords: {
    primary: [
      "clipboard manager",
      "clipboard history",
      "text clipboard manager",
      "image clipboard",
    ],
    secondary: [
      "clipboard utility",
      "copy paste manager",
      "clipboard sync",
      "productivity software",
      "linux clipboard manager",
      "windows clipboard manager",
      "macos clipboard manager",
      "open source clipboard",
      "free clipboard manager",
    ],
    longtail: [
      "best clipboard manager for linux",
      "advanced clipboard history tool",
      "clipboard manager with image support",
      "clipboard tool for productivity",
      "free open source clipboard manager",
      "clipboard manager with search functionality",
      "cross platform clipboard manager",
    ],
  },

  // Schema.org structured data
  schema: {
    organization: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "FyClip",
      "url": "https://fyclip.vercel.app",
      "image": "https://fyclip.vercel.app/og-image.png",
      "description": "Advanced open-source clipboard manager",
      "sameAs": [
        "https://github.com/Sarwarhridoy4/FyClip---Advanced-Clipboard-Manager"
      ],
    },
  },

  // Social media handles
  social: {
    github: "https://github.com/Sarwarhridoy4/FyClip---Advanced-Clipboard-Manager",
    twitter: "https://twitter.com/SarwarHridoy",
  },

  // Open Graph defaults
  openGraph: {
    type: "website",
    locale: "en_US",
    site_name: "FyClip",
  },

  // Twitter Card defaults
  twitter: {
    card_type: "summary_large_image",
    creator: "@SarwarHridoy",
  },
};

/**
 * Generate meta description optimized for search engines
 * Keep between 150-160 characters
 */
export function generateMetaDescription(keywords: string[]): string {
  return `FyClip - Advanced open-source ${keywords.join(", ")} for Linux, Windows, and macOS. Free and fast.`;
}

/**
 * Generate SEO-friendly slug from text
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Generate internal link structure for better crawling
 */
export const internalLinks = {
  home: "/",
  features: "/#features",
  download: "/#download",
  faq: "/#faq",
  screenshots: "/#screenshots",
  cta: "/#cta",
  github: "https://github.com/Sarwarhridoy4/FyClip---Advanced-Clipboard-Manager",
};
