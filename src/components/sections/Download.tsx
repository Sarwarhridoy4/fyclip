"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download as DownloadIcon, ChevronDown, ChevronUp, Monitor, Apple } from "lucide-react"
import { Container } from "@/components/ui/container"
import { downloads } from "@/lib/constants"

export function Download() {
  const [expandedPlatform, setExpandedPlatform] = useState<string | null>(null)

  const togglePlatform = (platform: string) => {
    setExpandedPlatform(expandedPlatform === platform ? null : platform)
  }

  const getPlatformIcon = (icon: string) => {
    switch (icon) {
      case "linux":
        return (
          <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.005c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.007.179.018.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.432-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.128.264.296.344.465.09.199.143.399.157.667v.004c.007.135.002.27-.016.402v.018c-.012.106-.032.2-.057.336-.166-.068-.37-.135-.568-.202v-.02a2.18 2.18 0 01-.016-.267c0-.063.004-.126.01-.19.01-.135.028-.268.065-.4.04-.2.096-.335.18-.466.078-.134.17-.2.278-.2h.018a.47.47 0 00-.278-.2c-.108-.066-.22-.133-.358-.133h-.017c-.11 0-.214.03-.313.133a.606.606 0 00-.228.335 1.05 1.05 0 00-.08.4v.02c.004.066.006.132.016.2.012.133.034.266.07.4-.18-.067-.383-.135-.567-.202a1.043 1.043 0 01-.065-.402v-.018a1.814 1.814 0 01.15-.768c.082-.22.232-.406.432-.533a.985.985 0 01.594-.2z" />
          </svg>
        )
      case "windows":
        return <Monitor className="h-8 w-8" />
      case "apple":
        return <Apple className="h-8 w-8" />
      default:
        return <Monitor className="h-8 w-8" />
    }
  }

  return (
    <section id="download" className="py-20 lg:py-32 neo-bg">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold neo-text mb-4">
            Download FyClip
          </h2>
          <p className="text-lg neo-text-muted max-w-2xl mx-auto">
            Get started with FyClip today. Available for Linux, Windows, and macOS.
            Free and open-source.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {downloads.map((platform, index) => (
            <motion.div
              key={platform.platform}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="neo-card"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 neo-raised rounded-xl flex items-center justify-center text-(--neo-primary)">
                  {getPlatformIcon(platform.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-bold neo-text">{platform.platform}</h3>
                  <p className="text-sm neo-text-muted">{platform.versions.length} versions available</p>
                </div>
              </div>

              <button
                onClick={() => togglePlatform(platform.platform)}
                className="w-full neo-btn flex items-center justify-between px-4 py-3 mb-4"
              >
                <span className="font-medium">View Downloads</span>
                {expandedPlatform === platform.platform ? (
                  <ChevronUp className="h-5 w-5" />
                ) : (
                  <ChevronDown className="h-5 w-5" />
                )}
              </button>

              <AnimatePresence>
                {expandedPlatform === platform.platform && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-3">
                      {platform.versions.map((version) => (
                        <div
                          key={version.name}
                          className="neo-flat p-4 rounded-xl flex items-center justify-between"
                        >
                          <div>
                            <p className="font-medium neo-text">{version.name}</p>
                            <p className="text-sm neo-text-muted">{version.size}</p>
                          </div>
                          <a
                            href="#"
                            className="neo-btn-primary flex items-center gap-2 px-4 py-2"
                          >
                            <DownloadIcon className="h-4 w-4" />
                            <span>Download</span>
                          </a>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Build from source */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="neo-card inline-block">
            <p className="neo-text-muted mb-2">Want to build from source?</p>
            <a
              href="https://github.com/Sarwarhridoy4/FyClip---Advanced-Clipboard-Manager"
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--neo-primary) hover:underline font-medium"
            >
              View build instructions on GitHub →
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
