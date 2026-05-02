import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://research.99puritypeptides.com'
  
  // In a real app, you might fetch slugs from an API
  const compounds = [
    'ghk-cu', 'bpc-157', 'tb-500', 'mots-c', 'ss-31', 
    'epithalon', 'kpv', 'll-37', 'vip', 'thymosin-alpha-1', 
    'vilon', 'vesugen', 'pinealon', 'cortagen'
  ]
  
  const compoundUrls = compounds.map((slug) => ({
    url: `${baseUrl}/compounds/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/database`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/synthesis`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/protocols`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/glossary`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...compoundUrls,
  ]
}
