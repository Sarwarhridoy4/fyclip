import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FyClip - Advanced Clipboard Manager",
  description: "Your clipboard, supercharged. The most advanced clipboard manager for Linux, Windows, and macOS.",
  keywords: ["clipboard manager", "clipboard history", "productivity", "linux", "windows", "macos"],
  authors: [{ name: "Sarwar Hridoy" }],
  openGraph: {
    title: "FyClip - Advanced Clipboard Manager",
    description: "Your clipboard, supercharged. The most advanced clipboard manager for Linux, Windows, and macOS.",
    url: "https://fyclip.com",
    siteName: "FyClip",
    images: [
      {
        url: "https://fyclip.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "FyClip - Advanced Clipboard Manager",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FyClip - Advanced Clipboard Manager",
    description: "Your clipboard, supercharged. The most advanced clipboard manager for Linux, Windows, and macOS.",
    images: ["https://fyclip.com/og-image.png"],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
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
