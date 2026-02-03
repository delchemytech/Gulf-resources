import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/', '/_next/', '/private/'],
      }
    ],
    sitemap: 'https://gulfresources.ae/sitemap.xml',
    host: 'https://gulfresources.ae',
  }
}