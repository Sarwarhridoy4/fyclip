import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        pathname: '/Sarwarhridoy4/FyClip---Advanced-Clipboard-Manager/**',
      },
    ],
  },
};

export default nextConfig;
