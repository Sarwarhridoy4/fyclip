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
  // SEO optimizations
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['framer-motion'],
  },
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()'
          }
        ],
      },
    ]
  },
  redirects: async () => {
    return [
      {
        source: '/github',
        destination: 'https://github.com/Sarwarhridoy4/FyClip---Advanced-Clipboard-Manager',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
