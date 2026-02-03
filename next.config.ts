import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove output: 'standalone' for Cloudflare Pages
  // Cloudflare handles this automatically
  
  // Image optimization settings
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 year cache for images
  },
  
  // Enable compression (Cloudflare also compresses, but this helps)
  compress: true,
  
  // Headers optimized for Cloudflare
  async headers() {
    return [
      {
        // Static assets - long cache with Cloudflare edge
        source: '/webp/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'CF-Cache-Tag',
            value: 'static-images',
          },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          {
            key: 'CF-Cache-Tag',
            value: 'static-images',
          },
        ],
      },
      {
        // HTML pages - shorter cache with revalidation
        source: '/((?!api|_next|_static|favicon.ico).*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
