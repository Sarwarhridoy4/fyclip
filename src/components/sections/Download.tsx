"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download as DownloadIcon, ChevronDown, ChevronUp, Monitor, Apple, Loader2, Tag } from "lucide-react"
import { Container } from "@/components/ui/container"
import { getAllReleases, formatFileSize, getPlatformFromAsset, getVersionType } from "@/lib/github"
import { GitHubRelease } from "@/types"
import ReactMarkdown from "react-markdown"

interface PlatformDownload {
  platform: string
  icon: string
  versions: {
    name: string
    file: string
    size: string
    downloadUrl: string
    downloadCount: number
  }[]
}

export function Download() {
  const [expandedPlatform, setExpandedPlatform] = useState<string | null>(null)
  const [releases, setReleases] = useState<GitHubRelease[]>([])
  const [selectedRelease, setSelectedRelease] = useState<GitHubRelease | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    async function fetchReleases() {
      try {
        setLoading(true)
        const allReleases = await getAllReleases()
        setReleases(allReleases)
        if (allReleases.length > 0) {
          setSelectedRelease(allReleases[0])
        }
        setError(null)
      } catch (err) {
        setError("Failed to fetch release information")
        console.error("Error fetching releases:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchReleases()
  }, [])

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

  // Group assets by platform
  const getPlatformDownloads = (release: GitHubRelease): PlatformDownload[] => {
    const platformMap: { [key: string]: PlatformDownload } = {}

    release.assets.forEach((asset) => {
      const platform = getPlatformFromAsset(asset.name)
      if (!platformMap[platform]) {
        platformMap[platform] = {
          platform,
          icon: platform.toLowerCase(),
          versions: [],
        }
      }

      platformMap[platform].versions.push({
        name: asset.name.replace(/\.(exe|dmg|deb|rpm|AppImage|zip|tar\.gz)$/i, ""),
        file: asset.name,
        size: formatFileSize(asset.size),
        downloadUrl: asset.browser_download_url,
        downloadCount: asset.download_count,
      })
    })

    return Object.values(platformMap)
  }

  const platformDownloads = selectedRelease ? getPlatformDownloads(selectedRelease) : []

  if (loading) {
    return (
      <section id="download" className="py-20 lg:py-32 neo-bg">
        <Container>
          <div className="flex items-center justify-center min-h-100">
            <div className="text-center">
              <Loader2 className="h-12 w-12 animate-spin text-(--neo-primary) mx-auto mb-4" />
              <p className="neo-text-muted">Loading release information...</p>
            </div>
          </div>
        </Container>
      </section>
    )
  }

  if (error || releases.length === 0) {
    return (
      <section id="download" className="py-20 lg:py-32 neo-bg">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold neo-text mb-4">
              Download FyClip
            </h2>
            <p className="text-lg neo-text-muted max-w-2xl mx-auto mb-8">
              Unable to load release information. Please try again later or visit our GitHub releases page.
            </p>
            <a
              href="https://github.com/Sarwarhridoy4/FyClip---Advanced-Clipboard-Manager/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="neo-btn-primary inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold"
            >
              View Releases on GitHub
            </a>
          </div>
        </Container>
      </section>
    )
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
          
          {/* Release Selector Dropdown */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <Tag className="h-5 w-5 text-(--neo-primary)" />
              <span className="text-sm font-medium neo-text">Select Release:</span>
            </div>
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="neo-btn flex items-center justify-between gap-4 px-6 py-3 min-w-64"
              >
                <span className="font-medium">
                  {selectedRelease?.tag_name || "Select a release"}
                  {selectedRelease?.tag_name === releases[0]?.tag_name && (
                    <span className="ml-2 text-xs opacity-75">(Latest)</span>
                  )}
                </span>
                <ChevronDown className={`h-5 w-5 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 right-0 mt-2 neo-raised rounded-xl overflow-hidden z-50 max-h-64 overflow-y-auto"
                  >
                    {releases.map((release) => (
                      <button
                        key={release.tag_name}
                        onClick={() => {
                          setSelectedRelease(release)
                          setDropdownOpen(false)
                          setExpandedPlatform(null)
                        }}
                        className={`w-full px-6 py-3 text-left hover:bg-(--neo-shadow-light) transition-colors ${
                          selectedRelease?.tag_name === release.tag_name ? 'bg-(--neo-primary) text-white' : ''
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{release.tag_name}</span>
                          {release.tag_name === releases[0].tag_name && (
                            <span className="text-xs opacity-75">(Latest)</span>
                          )}
                        </div>
                        <p className="text-xs opacity-75 mt-1">
                          {new Date(release.published_at).toLocaleDateString()}
                        </p>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {selectedRelease && (
            <div className="mt-4 flex items-center justify-center gap-4">
              <span className="neo-badge">
                Version {selectedRelease.tag_name}
              </span>
              <span className="neo-badge">
                {getVersionType(selectedRelease.tag_name)}
              </span>
            </div>
          )}
        </motion.div>

        {selectedRelease && (
          <>
            <div className="grid md:grid-cols-3 gap-8">
              {platformDownloads.map((platform, index) => (
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
                              key={version.file}
                              className="neo-flat p-4 rounded-xl flex items-center justify-between"
                            >
                              <div>
                                <p className="font-medium neo-text">{version.name}</p>
                                <p className="text-sm neo-text-muted">
                                  {version.size} • {version.downloadCount.toLocaleString()} downloads
                                </p>
                              </div>
                              <a
                                href={version.downloadUrl}
                                target="_blank"
                                rel="noopener noreferrer"
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

            {/* Snapcraft Download */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <div className="neo-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 neo-raised rounded-xl flex items-center justify-center text-(--neo-primary)">
                    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 2c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold neo-text">Snap Store</h3>
                    <p className="text-sm neo-text-muted">Install via Snapcraft</p>
                  </div>
                </div>

                <div className="neo-flat p-4 rounded-xl">
                  <p className="neo-text-muted mb-4">
                    FyClip is available on the Snap Store for easy installation on Linux distributions that support Snap packages.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="https://snapcraft.io/fyclip"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neo-btn-primary flex items-center justify-center gap-2 px-6 py-3"
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 3c-3.866 0-7 3.134-7 7s3.134 7 7 7 7-3.134 7-7-3.134-7-7-7zm0 2c2.761 0 5 2.239 5 5s-2.239 5-5 5-5-2.239-5-5 2.239-5 5-5z"/>
                      </svg>
                      <span>Get it from the Snap Store</span>
                    </a>
                    <div className="neo-flat px-4 py-2 rounded-lg">
                      <p className="text-xs neo-text-muted">
                        Install command:
                      </p>
                      <code className="text-sm font-mono neo-text">snap install fyclip</code>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Release Notes */}
            {selectedRelease.body && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <div className="neo-card">
                  <h3 className="text-xl font-bold neo-text mb-4">Release Notes</h3>
                  <div className="neo-pressed rounded-xl p-6 max-h-96 overflow-y-auto">
                    <div className="prose prose-sm neo-text-muted max-w-none">
                      <ReactMarkdown>{selectedRelease.body}</ReactMarkdown>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm neo-text-muted">
                      Released on {new Date(selectedRelease.published_at).toLocaleDateString()}
                    </p>
                    <a
                      href={selectedRelease.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-(--neo-primary) hover:underline text-sm font-medium"
                    >
                      View on GitHub →
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </>
        )}

        {/* Build from source */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
