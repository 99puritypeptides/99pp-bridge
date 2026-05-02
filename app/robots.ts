import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admin/'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'Claude-WebCheck', 'ClaudeBot', 'Google-Extended', 'PerplexityBot', 'CCBot'],
        allow: '/',
      }
    ],
    sitemap: 'https://research.99puritypeptides.com/sitemap.xml',
  }
}
