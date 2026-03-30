import { GitHubRelease, GitHubRepo } from "@/types"

const GITHUB_API = "https://api.github.com"
const REPO_OWNER = process.env.GITHUB_REPO_OWNER || "Sarwarhridoy4"
const REPO_NAME = process.env.GITHUB_REPO_NAME || "FyClip---Advanced-Clipboard-Manager"
const GITHUB_TOKEN = process.env.GITHUB_TOKEN

function getHeaders(): HeadersInit {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  }
  
  if (GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${GITHUB_TOKEN}`
  }
  
  return headers
}

export async function getLatestRelease(): Promise<GitHubRelease | null> {
  try {
    const response = await fetch(
      `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/releases/latest`,
      {
        headers: getHeaders(),
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    )

    if (!response.ok) {
      console.error("Failed to fetch latest release:", response.statusText)
      return null
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching latest release:", error)
    return null
  }
}

export async function getAllReleases(): Promise<GitHubRelease[]> {
  try {
    const response = await fetch(
      `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/releases`,
      {
        headers: getHeaders(),
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    )

    if (!response.ok) {
      console.error("Failed to fetch releases:", response.statusText)
      return []
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching releases:", error)
    return []
  }
}

export async function getRepoInfo(): Promise<GitHubRepo | null> {
  try {
    const response = await fetch(
      `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}`,
      {
        headers: getHeaders(),
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    )

    if (!response.ok) {
      console.error("Failed to fetch repo info:", response.statusText)
      return null
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching repo info:", error)
    return null
  }
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 Bytes"
  const k = 1024
  const sizes = ["Bytes", "KB", "MB", "GB"]
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i]
}

export function getPlatformFromAsset(assetName: string): string {
  const name = assetName.toLowerCase()
  if (name.includes("linux") || name.includes("amd64") || name.includes("x86_64")) {
    return "Linux"
  }
  if (name.includes("windows") || name.includes("win")) {
    return "Windows"
  }
  if (name.includes("macos") || name.includes("darwin") || name.includes("apple")) {
    return "macOS"
  }
  return "Other"
}

export function getVersionType(tagName: string): string {
  if (tagName.includes("beta") || tagName.includes("rc")) {
    return "Beta"
  }
  if (tagName.includes("alpha")) {
    return "Alpha"
  }
  return "Stable"
}

export interface GitHubContent {
  name: string
  path: string
  type: string
  download_url: string | null
}

export async function getScreenshots(): Promise<GitHubContent[]> {
  try {
    const response = await fetch(
      `${GITHUB_API}/repos/${REPO_OWNER}/${REPO_NAME}/contents/internal/app/assets/screenshots?ref=production`,
      {
        headers: getHeaders(),
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    )

    if (!response.ok) {
      console.error("Failed to fetch screenshots:", response.statusText)
      return []
    }

    const contents: GitHubContent[] = await response.json()
    return contents.filter(item => item.type === "file" && item.download_url)
  } catch (error) {
    console.error("Error fetching screenshots:", error)
    return []
  }
}
