"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Download, Star } from "lucide-react"
import { Container } from "@/components/ui/container"
import { getRepoInfo, getLatestRelease } from "@/lib/github"

interface Stats {
  stars: number
  downloads: number
}

export function CTA() {
  const [stats, setStats] = useState<Stats>({ stars: 0, downloads: 0 })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchStats() {
      try {
        const [repoInfo, release] = await Promise.all([
          getRepoInfo(),
          getLatestRelease()
        ])

        let totalDownloads = 0
        if (release?.assets) {
          totalDownloads = release.assets.reduce(
            (sum, asset) => sum + (asset.download_count || 0),
            0
          )
        }

        setStats({
          stars: repoInfo?.stargazers_count || 0,
          downloads: totalDownloads
        })
      } catch (error) {
        console.error("Failed to fetch stats:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStats()
  }, [])

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K"
    }
    return num.toString()
  }

  return (
    <section className="py-20 lg:py-32 neo-bg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="neo-raised rounded-3xl p-8 lg:p-16 text-center relative overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-(--neo-primary) opacity-10 rounded-full blur-3xl" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold neo-text mb-4">
              Ready to Supercharge Your Clipboard?
            </h2>
            <p className="text-lg neo-text-muted max-w-2xl mx-auto mb-8">
              Join thousands of users who have already transformed their workflow
              with FyClip. Download now and experience the difference.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
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
              Star on GitHub
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-3xl font-bold neo-text">
                  {isLoading ? "..." : formatNumber(stats.stars)}
                </span>
              </div>
              <p className="text-sm neo-text-muted">GitHub Stars</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Download className="h-5 w-5 text-(--neo-primary)" />
                <span className="text-3xl font-bold neo-text">
                  {isLoading ? "..." : formatNumber(stats.downloads)}
                </span>
              </div>
              <p className="text-sm neo-text-muted">Downloads</p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
