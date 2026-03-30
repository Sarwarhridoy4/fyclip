"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Container } from "@/components/ui/container"

const screenshots = [
  {
    id: 1,
    title: "Main Interface",
    description: "Clean and intuitive clipboard history view",
    image: "/images/screenshot1.png",
  },
  {
    id: 2,
    title: "Search & Filter",
    description: "Powerful search to find any clipboard item instantly",
    image: "/images/screenshot2.png",
  },
  {
    id: 3,
    title: "Categories & Tags",
    description: "Organize your clips with custom categories and tags",
    image: "/images/screenshot3.png",
  },
]

export function Screenshots() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

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
                  {/* Placeholder for screenshot */}
                  <div className="aspect-video bg-linear-to-br from-(--neo-primary) to-(--neo-primary-dark) flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="text-6xl mb-4">📋</div>
                      <h3 className="text-2xl font-bold mb-2">{screenshots[currentIndex].title}</h3>
                      <p className="text-lg opacity-90">{screenshots[currentIndex].description}</p>
                    </div>
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
                className="relative max-w-4xl w-full"
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
                    <div className="aspect-video bg-linear-to-br from-(--neo-primary) to-(--neo-primary-dark) flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-6xl mb-4">📋</div>
                        <h3 className="text-2xl font-bold mb-2">{screenshots[currentIndex].title}</h3>
                        <p className="text-lg opacity-90">{screenshots[currentIndex].description}</p>
                      </div>
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
