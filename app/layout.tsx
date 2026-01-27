import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://luxeinteriors.com'),
  title: {
    default: "Luxe Interiors - Ultra-Premium Interior Design in India",
    template: "%s | Luxe Interiors"
  },
  description: "India's premier luxury interior design firm. Crafting timeless spaces that elevate daily life for discerning clients across Mumbai, Bangalore, Delhi, and beyond.",
  keywords: ["luxury interior design India", "premium interiors Mumbai", "luxury home design Bangalore", "bespoke interiors Delhi", "high-end interior designer", "luxury villa design", "commercial interior design"],
  authors: [{ name: "Luxe Interiors" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://luxeinteriors.com",
    siteName: "Luxe Interiors",
    title: "Luxe Interiors - Ultra-Premium Interior Design in India",
    description: "India's premier luxury interior design firm crafting timeless spaces.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxe Interiors - Ultra-Premium Interior Design",
    description: "India's premier luxury interior design firm crafting timeless spaces.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Lato:wght@300;400;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
