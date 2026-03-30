"use client"

import { motion } from "framer-motion"
import { Download, Apple, Monitor } from "lucide-react"
import { Container } from "@/components/ui/container"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-32 neo-bg">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-(--neo-primary) opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-(--neo-primary) opacity-10 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 neo-badge mb-6"
            >
              <span className="text-(--neo-primary)">✨</span>
              <span className="neo-text-muted text-sm">Now available for Linux, Windows & macOS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold neo-text leading-tight"
            >
              Your Clipboard,{" "}
              <span className="text-(--neo-primary)">Supercharged</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-lg neo-text-muted max-w-xl mx-auto lg:mx-0"
            >
              The most advanced clipboard manager for power users. Keep track of
              everything you copy, search instantly, and boost your productivity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#download"
                className="neo-btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold"
              >
                <Download className="h-5 w-5" />
                Download Now
              </a>
              <a
                href="https://github.com/Sarwarhridoy4/FyClip---Advanced-Clipboard-Manager"
                target="_blank"
                rel="noopener noreferrer"
                className="neo-btn inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View on GitHub
              </a>
            </motion.div>

            {/* Platform badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start"
            >
              <div className="neo-badge flex items-center gap-2">
                <Monitor className="h-4 w-4" />
                <span className="text-sm">Linux</span>
              </div>
              <div className="neo-badge flex items-center gap-2">
                <Monitor className="h-4 w-4" />
                <span className="text-sm">Windows</span>
              </div>
              <div className="neo-badge flex items-center gap-2">
                <Apple className="h-4 w-4" />
                <span className="text-sm">macOS</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right content - Clipboard preview mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            <div className="neo-raised p-6 rounded-2xl">
              {/* Mockup window */}
              <div className="neo-pressed rounded-xl p-4">
                {/* Window header */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                {/* Clipboard items */}
                <div className="space-y-3">
                  {[
                    { type: "text", content: "Hello, World!", time: "2 min ago" },
                    { type: "code", content: "const x = 42;", time: "5 min ago" },
                    { type: "link", content: "https://github.com", time: "10 min ago" },
                    { type: "text", content: "Meeting notes...", time: "15 min ago" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                      className="neo-flat p-3 rounded-lg"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-(--neo-primary)" />
                          <span className="text-sm neo-text font-medium truncate max-w-50">
                            {item.content}
                          </span>
                        </div>
                        <span className="text-xs neo-text-muted">{item.time}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 neo-raised p-3 rounded-xl"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-(--neo-primary) flex items-center justify-center">
                  <span className="text-white text-sm font-bold">F</span>
                </div>
                <span className="text-sm font-semibold neo-text">FyClip</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
