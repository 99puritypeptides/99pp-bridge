import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Preloader from '@/components/ui/Preloader';
import SmoothScroll from '@/components/ui/SmoothScroll';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit', display: 'swap' });

export const metadata: Metadata = {
  title: {
    default: '99 Purity Research | #1 Authority for Research Peptides in USA',
    template: '%s | 99 Purity Research'
  },
  description: 'The authoritative portal for 99 purity peptides research in the USA. Access 100% HPLC & Mass Spectrometry verified sequences, technical monographs, and synthesis protocols for analytical laboratory research.',
  keywords: ['99 purity research', 'peptides research', 'research peptides', 'research peptides in USA', 'peptide synthesis', 'analytical grade peptides', 'HPLC verification', 'mass spectrometry', 'buy peptides for research'],
  authors: [{ name: '99 Purity Research' }],
  creator: '99 Purity Research',
  publisher: '99 Purity Research',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://research.99puritypeptides.com'),
  openGraph: {
    title: '99 Purity Research | #1 Authority for Research Peptides in USA',
    description: 'The authoritative database for 99 purity peptides research. 100% HPLC & Mass Spec Verified sequences for analytical laboratory research.',
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
    title: '99 Purity Research | #1 Authority for Research Peptides in USA',
    description: '100% HPLC & Mass Spec Verified research peptides for analytical laboratory studies.',
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
      description: '99 Purity Research: The industry standard for analytical grade peptides research and synthesis in the USA.',
      areaServed: 'US',
      knowsAbout: [
        'Peptide Synthesis',
        'Analytical Chemistry',
        'Molecular Biology',
        'HPLC Verification',
        'Mass Spectrometry'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'technical support',
        url: 'https://99puritypeptides.com/contact/',
        email: 'support@99puritypeptides.com'
      },
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
