import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Viewport } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  colorScheme: "light dark",
};

export const metadata: Metadata = {
  title: "FyClip - Advanced Clipboard Manager for Linux, Windows & macOS",
  description: "FyClip is the most advanced open-source clipboard manager for Linux, Windows, and macOS. Featuring unlimited clipboard history, smart search, image support, and productivity tools.",
  keywords: [
    "clipboard manager",
    "clipboard history",
    "productivity software",
    "linux clipboard manager",
    "windows clipboard manager",
    "macos clipboard manager",
    "open source clipboard",
    "clipboard utility",
    "copy paste manager",
    "clipboard sync",
    "image clipboard",
    "text clipboard manager",
  ],
  authors: [{ name: "Sarwar Hridoy" }],
  creator: "Sarwar Hridoy",
  publisher: "FyClip",
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL("https://fyclip.vercel.app"),
  alternates: {
    canonical: "https://fyclip.vercel.app",
  },
  openGraph: {
    title: "FyClip - Advanced Clipboard Manager for Linux, Windows & macOS",
    description: "The most advanced open-source clipboard manager with unlimited history, smart search, and image support. Available for Linux, Windows, and macOS.",
    url: "https://fyclip.vercel.app",
    siteName: "FyClip",
    images: [
      {
        url: "https://fyclip.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "FyClip - Advanced Clipboard Manager",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FyClip - Advanced Clipboard Manager",
    description: "The most advanced open-source clipboard manager with unlimited history, smart search, and image support.",
    images: ["https://fyclip.vercel.app/og-image.png"],
    creator: "@SarwarHridoy",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
