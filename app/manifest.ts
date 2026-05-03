import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '99 Purity Research',
    short_name: '99 Purity',
    description: 'The authoritative database for 99 purity peptides research.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#00D2FF',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/99Logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/99Logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
