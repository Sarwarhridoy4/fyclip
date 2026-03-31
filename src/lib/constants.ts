export const siteConfig = {
  name: "FyClip",
  description: "Your clipboard, supercharged. The most advanced clipboard manager for Linux, Windows, and macOS.",
  url: "https://fyclip.vercel.app",
  ogImage: "https://fyclip.vercel.app/og-image.png",
  links: {
    github: "https://github.com/Sarwarhridoy4/FyClip---Advanced-Clipboard-Manager",
    discord: "#",
    twitter: "#",
  },
}

export const features = [
  {
    category: "Core",
    items: [
      {
        title: "Clipboard History",
        description: "Keep track of everything you copy with unlimited clipboard history.",
        icon: "history",
      },
      {
        title: "Smart Search",
        description: "Find any clipboard item instantly with powerful search functionality.",
        icon: "search",
      },
      {
        title: "Pin Favorites",
        description: "Pin frequently used items for quick access.",
        icon: "pin",
      },
      {
        title: "Favorites",
        description: "Mark items as favorites for easy retrieval.",
        icon: "star",
      },
    ],
  },
  {
    category: "Content",
    items: [
      {
        title: "Image Support",
        description: "Capture and manage screenshots and images seamlessly.",
        icon: "image",
      },
      {
        title: "HTML Content",
        description: "Preserve rich text formatting from web pages and documents.",
        icon: "code",
      },
      {
        title: "File Management",
        description: "Copy and organize files and folders efficiently.",
        icon: "file",
      },
      {
        title: "Markdown",
        description: "Full markdown support for developers and writers.",
        icon: "markdown",
      },
    ],
  },
  {
    category: "Organization",
    items: [
      {
        title: "Categories",
        description: "Organize clips into custom categories for better management.",
        icon: "folder",
      },
      {
        title: "Tags",
        description: "Add tags to clips for flexible organization.",
        icon: "tag",
      },
      {
        title: "Snippets",
        description: "Create reusable text snippets for common phrases.",
        icon: "file-text",
      },
      {
        title: "Bulk Operations",
        description: "Manage multiple clips at once with bulk actions.",
        icon: "layers",
      },
    ],
  },
  {
    category: "Security",
    items: [
      {
        title: "Encryption",
        description: "Protect sensitive data with end-to-end encryption.",
        icon: "lock",
      },
      {
        title: "Backup & Restore",
        description: "Automatically backup your clipboard data.",
        icon: "hard-drive",
      },
      {
        title: "Sensitive Detection",
        description: "Automatically detect and protect sensitive information.",
        icon: "shield",
      },
      {
        title: "Privacy Mode",
        description: "Hide sensitive clips from the main view.",
        icon: "eye-off",
      },
    ],
  },
  {
    category: "System",
    items: [
      {
        title: "AutoStart",
        description: "Launch automatically when your system starts.",
        icon: "power",
      },
      {
        title: "Pause/Resume",
        description: "Temporarily pause clipboard monitoring when needed.",
        icon: "pause",
      },
      {
        title: "System Tray",
        description: "Quick access from your system tray.",
        icon: "minimize-2",
      },
      {
        title: "Auto Update",
        description: "Stay up-to-date with automatic updates.",
        icon: "refresh-cw",
      },
    ],
  },
  {
    category: "Performance",
    items: [
      {
        title: "Debounced",
        description: "Optimized clipboard monitoring with debouncing.",
        icon: "zap",
      },
      {
        title: "Async Operations",
        description: "Non-blocking operations for smooth performance.",
        icon: "loader",
      },
      {
        title: "O(1) Lookups",
        description: "Instant access to any clipboard item.",
        icon: "hash",
      },
      {
        title: "Low Memory",
        description: "Minimal memory footprint for efficient operation.",
        icon: "cpu",
      },
    ],
  },
]

export const faqs = [
  {
    question: "How do I install FyClip?",
    answer: "FyClip is available for Linux, Windows, and macOS. Download the appropriate installer from the Download section and follow the installation instructions for your platform.",
  },
  {
    question: "Is FyClip free?",
    answer: "Yes! FyClip is completely free and open-source. You can use it for personal and commercial purposes without any restrictions.",
  },
  {
    question: "Which platforms are supported?",
    answer: "FyClip supports Linux (Ubuntu, Fedora, Arch, etc.), Windows 10/11, and macOS 10.15+. We're working on adding support for more platforms.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely! FyClip uses end-to-end encryption to protect your sensitive data. Your clipboard history is stored locally on your device and never sent to external servers.",
  },
  {
    question: "Can I sync my clipboard across devices?",
    answer: "Currently, FyClip stores data locally on each device. Cross-device sync is on our roadmap for future releases.",
  },
  {
    question: "How much system resources does FyClip use?",
    answer: "FyClip is designed to be lightweight and efficient. It typically uses less than 50MB of RAM and minimal CPU resources.",
  },
  {
    question: "Can I contribute to FyClip?",
    answer: "Yes! FyClip is open-source and we welcome contributions. Visit our GitHub repository to report issues, suggest features, or submit pull requests.",
  },
  {
    question: "How do I update FyClip?",
    answer: "FyClip includes an auto-update feature that checks for new versions automatically. You can also manually check for updates in the settings.",
  },
]

export const downloads = [
  {
    platform: "Linux",
    icon: "linux",
    versions: [
      {
        name: "Ubuntu/Debian",
        file: "fyclip-linux-amd64.deb",
        size: "45 MB",
      },
      {
        name: "Fedora/RHEL",
        file: "fyclip-linux-amd64.rpm",
        size: "45 MB",
      },
      {
        name: "AppImage",
        file: "fyclip-linux-amd64.AppImage",
        size: "48 MB",
      },
    ],
  },
  {
    platform: "Windows",
    icon: "windows",
    versions: [
      {
        name: "Windows 10/11",
        file: "fyclip-windows-amd64.exe",
        size: "52 MB",
      },
      {
        name: "Portable",
        file: "fyclip-windows-amd64-portable.zip",
        size: "48 MB",
      },
    ],
  },
  {
    platform: "macOS",
    icon: "apple",
    versions: [
      {
        name: "Intel Macs",
        file: "fyclip-macos-amd64.dmg",
        size: "50 MB",
      },
      {
        name: "Apple Silicon",
        file: "fyclip-macos-arm64.dmg",
        size: "48 MB",
      },
    ],
  },
]
