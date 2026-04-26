import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter' 
});

const outfit = Outfit({ 
  subsets: ['latin'], 
  variable: '--font-outfit' 
});

export const metadata: Metadata = {
  title: 'GHK-Cu Analysis: Research Review & Molecular Protocols',
  description: 'A Review of Tripeptide-Copper Complexes in Cellular Models',
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
