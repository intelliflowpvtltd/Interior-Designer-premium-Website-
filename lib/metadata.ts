import { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://luxeinteriors.com'),
  title: {
    default: 'Luxe Interiors - Ultra-Premium Interior Design in India',
    template: '%s | Luxe Interiors'
  },
  description: "India's premier luxury interior design firm. Crafting timeless spaces that elevate daily life for discerning clients across Mumbai, Bangalore, Delhi, and beyond.",
  keywords: [
    'luxury interior design India',
    'premium interiors Mumbai',
    'luxury home design Bangalore',
    'bespoke interiors Delhi',
    'high-end interior designer',
    'luxury villa design',
    'commercial interior design',
    'turnkey interior solutions',
    'luxury penthouse design',
    'heritage restoration India'
  ],
  authors: [{ name: 'Luxe Interiors' }],
  creator: 'Luxe Interiors',
  publisher: 'Luxe Interiors',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://luxeinteriors.com',
    siteName: 'Luxe Interiors',
    title: 'Luxe Interiors - Ultra-Premium Interior Design in India',
    description: "India's premier luxury interior design firm crafting timeless spaces.",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxe Interiors - Luxury Interior Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxe Interiors - Ultra-Premium Interior Design',
    description: "India's premier luxury interior design firm crafting timeless spaces.",
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export function generatePageMetadata(
  title: string,
  description: string,
  path: string = ''
): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://luxeinteriors.com${path}`,
    },
    twitter: {
      title,
      description,
    },
  };
}
