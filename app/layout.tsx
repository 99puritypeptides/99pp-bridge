import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Preloader from '@/components/ui/Preloader';
import SmoothScroll from '@/components/ui/SmoothScroll';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  weight: ['300', '400', '500'],
});

const outfit = Outfit({ 
  subsets: ['latin'], 
  variable: '--font-outfit',
  weight: ['300', '400', '600'],
});

export const metadata: Metadata = {
  title: {
    default: '99 Purity Research | Analytical Grade Peptide Synthesis',
    template: '%s | 99 Purity Research'
  },
  description: 'The global standard for analytical grade peptide synthesis. 100% HPLC and Mass Spectrometry verified sequences for academic and private research institutions.',
  keywords: ['peptide synthesis', 'analytical grade peptides', 'research chemicals', 'HPLC verification', 'mass spectrometry', 'peptide sequences', 'laboratory research'],
  authors: [{ name: '99 Purity Research' }],
  creator: '99 Purity Research',
  publisher: '99 Purity Research',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://99purityresearch.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '99 Purity Research | Premium Peptide Verification',
    description: 'Elevating In-Vitro Research through Verifiable Peptide Synthesis. 100% HPLC & Mass Spec Verified sequences.',
    url: 'https://99purityresearch.vercel.app',
    siteName: '99 Purity Research',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '99 Purity Research Laboratory',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '99 Purity Research | Premium Peptide Verification',
    description: '100% HPLC & Mass Spec Verified sequences for experimental research.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: '99 Purity Research',
      url: 'https://99purityresearch.vercel.app',
      logo: 'https://99purityresearch.vercel.app/logo.png',
      description: 'The global standard for analytical grade peptide synthesis.',
      sameAs: [
        'https://twitter.com/99purityresearch',
        'https://www.linkedin.com/company/99purityresearch',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: '99 Purity Research',
      url: 'https://99purityresearch.vercel.app',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://99purityresearch.vercel.app/database?q={search_term_string}'
        },
        'query-input': 'required name=search_term_string'
      }
    }
  ];

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-background text-primary selection:bg-accent/30" suppressHydrationWarning>
        <Preloader />
        <SmoothScroll>
          <Navigation />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
