import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const site = process.env.SITE_URL ?? 'http://localhost:3000'
  const now = new Date().toISOString()
  const paths = ['/', '/about', '/services', '/areas-of-focus', '/speaking-training', '/resources', '/contact']
  return paths.map((p) => ({
    url: `${site}${p}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: p === '/' ? 1 : 0.7,
  }))
}
