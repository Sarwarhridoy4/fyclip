"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X, Loader2 } from "lucide-react"
import { Container } from "@/components/ui/container"
import { getScreenshots, GitHubContent } from "@/lib/github"
import Image from "next/image"

export function Screenshots() {
  const [screenshots, setScreenshots] = useState<GitHubContent[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchScreenshots() {
      try {
        setLoading(true)
        const fetchedScreenshots = await getScreenshots()
        setScreenshots(fetchedScreenshots)
        setError(null)
      } catch (err) {
        setError("Failed to fetch screenshots")
        console.error("Error fetching screenshots:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchScreenshots()
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  const openLightbox = (index: number) => {
    setCurrentIndex(index)
    setLightboxOpen(true)
  }

  if (loading) {
    return (
      <section id="screenshots" className="py-20 lg:py-32 neo-bg">
        <Container>
          <div className="flex items-center justify-center min-h-100">
            <div className="text-center">
              <Loader2 className="h-12 w-12 animate-spin text-(--neo-primary) mx-auto mb-4" />
              <p className="neo-text-muted">Loading screenshots...</p>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  if (error || screenshots.length === 0) {
    return (
      <section id="screenshots" className="py-20 lg:py-32 neo-bg">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold neo-text mb-4">
              See It in Action
            </h2>
            <p className="text-lg neo-text-muted max-w-2xl mx-auto">
              Unable to load screenshots at this time. Please check back later.
            </p>
          </motion.div>
        </Container>
      </section>
    )
  }

  return (
    <section id="screenshots" className="py-20 lg:py-32 neo-bg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold neo-text mb-4">
            See It in Action
          </h2>
          <p className="text-lg neo-text-muted max-w-2xl mx-auto">
            Take a look at FyClip&apos;s beautiful and intuitive interface. Designed
            for productivity and ease of use.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="cursor-pointer"
              onClick={() => openLightbox(currentIndex)}
            >
              <div className="neo-raised p-4 rounded-2xl">
                <div className="neo-pressed rounded-xl overflow-hidden">
                  <div className="aspect-video relative">
                    {screenshots[currentIndex].download_url && (
                      <Image
                        src={screenshots[currentIndex].download_url!}
                        alt={screenshots[currentIndex].name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                      />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 neo-icon-btn z-10"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 neo-icon-btn z-10"
            aria-label="Next screenshot"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-(--neo-primary) scale-125"
                    : "bg-(--neo-shadow-dark) hover:bg-(--neo-text-muted)"
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {lightboxOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
              onClick={() => setLightboxOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="absolute -top-12 right-0 neo-icon-btn z-10"
                  aria-label="Close lightbox"
                >
                  <X className="h-6 w-6" />
                </button>

                <div className="neo-raised p-4 rounded-2xl">
                  <div className="neo-pressed rounded-xl overflow-hidden">
                    <div className="aspect-video relative">
                      {screenshots[currentIndex].download_url && (
                        <Image
                          src={screenshots[currentIndex].download_url!}
                          alt={screenshots[currentIndex].name}
                          fill
                          className="object-contain"
                          sizes="100vw"
                        />
                      )}
                    </div>
                  </div>
                </div>

                {/* Lightbox navigation */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    prevSlide()
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 neo-icon-btn z-10"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    nextSlide()
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 neo-icon-btn z-10"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </section>
  )
}
