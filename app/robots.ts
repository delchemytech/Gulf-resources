import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Specifically block AI training bots
        userAgent: ['GPTBot', 'CCBot', 'Google-Extended', 'anthropic-ai'],
        disallow: '/',
      },
      {
        // Standard rules for everyone else (Google, Bing, etc.)
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/'],
      },
    ],
    sitemap: 'https://gulfresources.ae/sitemap.xml',
  }
}