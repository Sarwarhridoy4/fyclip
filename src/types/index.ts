export interface Feature {
  title: string
  description: string
  icon: string
}

export interface FeatureCategory {
  category: string
  items: Feature[]
}

export interface FAQ {
  question: string
  answer: string
}

export interface DownloadVersion {
  name: string
  file: string
  size: string
}

export interface Download {
  platform: string
  icon: string
  versions: DownloadVersion[]
}

export interface NavLink {
  name: string
  href: string
}

export interface GitHubRelease {
  tag_name: string
  name: string
  body: string
  published_at: string
  html_url: string
  assets: GitHubAsset[]
}

export interface GitHubAsset {
  name: string
  browser_download_url: string
  size: number
  download_count: number
}

export interface GitHubRepo {
  stargazers_count: number
  forks_count: number
  open_issues_count: number
}
