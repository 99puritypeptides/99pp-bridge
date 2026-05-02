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
    default: '99 Purity Research | #1 Database for Peptides Research & Synthesis',
    template: '%s | 99 Purity Research'
  },
  description: '99 Purity Research is the global leader in analytical grade peptide research and sequence identification. We feature 100% HPLC and Mass Spectrometry verified data for research peptides in USA.',
  keywords: ['99 purity research', 'peptides research', 'research peptides', 'research peptides in USA', 'peptide synthesis', 'analytical grade peptides', 'HPLC verification', 'mass spectrometry'],
  authors: [{ name: '99 Purity Research' }],
  creator: '99 Purity Research',
  publisher: '99 Purity Research',
  icons: {
    icon: '/99Logo.png',
    shortcut: '/99Logo.png',
    apple: '/99Logo.png',
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://research.99puritypeptides.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '99 Purity Research | Premium Peptides Research & Verification',
    description: 'Elevating In-Vitro Peptides Research through Verifiable Synthesis. 100% HPLC & Mass Spec Verified research peptides in USA.',
    url: 'https://research.99puritypeptides.com',
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
    title: '99 Purity Research | Premium Peptides Research & Verification',
    description: '100% HPLC & Mass Spec Verified research peptides for experimental studies.',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: '99 Purity Research Laboratory',
    }],
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
      url: 'https://research.99puritypeptides.com',
      logo: 'https://research.99puritypeptides.com/99Logo.png',
      description: '99 Purity Research: The industry standard for analytical grade peptides research and synthesis.',
      sameAs: [
        'https://twitter.com/99purityresearch',
        'https://www.linkedin.com/company/99purityresearch',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: '99 Purity Research',
      url: 'https://research.99puritypeptides.com',
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: 'https://research.99puritypeptides.com/database?q={search_term_string}'
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
