"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, Sun, Moon, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { Container } from "@/components/ui/container"

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Screenshots", href: "#screenshots" },
  { name: "Download", href: "#download" },
  { name: "FAQ", href: "#faq" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 neo-bg border-b border-(--neo-shadow-dark)">
      <Container>
        <nav className="flex items-center justify-between py-4" aria-label="Main navigation">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" aria-label="FyClip - Advanced Clipboard Manager">
              <Image src="/images/icon.png" alt="FyClip Logo" width={40} height={40} className="w-10 h-10" />
              <span className="text-xl font-bold neo-text">FyClip</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium neo-text-muted hover:text-(--neo-primary) transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side buttons */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
            {/* GitHub Stars Button */}
            <a
              href="https://github.com/Sarwarhridoy4/FyClip---Advanced-Clipboard-Manager"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn flex items-center gap-2 px-4 py-2"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <span className="text-sm font-medium">Star on GitHub</span>
            </a>

            {/* Theme Toggle */}
            <div className="neo-raised flex items-center gap-1 p-1">
              <button
                onClick={() => setTheme("light")}
                className={`neo-icon-btn ${theme === "light" ? "neo-pressed" : ""}`}
                aria-label="Light mode"
                suppressHydrationWarning
              >
                <Sun className="h-4 w-4" />
              </button>
              <button
                onClick={() => setTheme("dark")}
                className={`neo-icon-btn ${theme === "dark" ? "neo-pressed" : ""}`}
                aria-label="Dark mode"
                suppressHydrationWarning
              >
                <Moon className="h-4 w-4" />
              </button>
              <button
                onClick={() => setTheme("system")}
                className={`neo-icon-btn ${theme === "system" ? "neo-pressed" : ""}`}
                aria-label="System mode"
                suppressHydrationWarning
              >
                <Monitor className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="neo-icon-btn"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="fixed inset-0 z-50" />
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto neo-bg px-6 py-6 sm:max-w-sm">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
                  <Image src="/images/icon.png" alt="FyClip" width={40} height={40} className="w-10 h-10" />
                  <span className="text-xl font-bold neo-text">FyClip</span>
                </Link>
                <button
                  type="button"
                  className="neo-icon-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-(--neo-shadow-dark)">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 neo-text hover:bg-(--neo-shadow-light)"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <a
                      href="https://github.com/Sarwarhridoy4/FyClip---Advanced-Clipboard-Manager"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neo-btn-primary flex items-center justify-center gap-2 w-full px-4 py-3"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                      <span>Star on GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  )
}
