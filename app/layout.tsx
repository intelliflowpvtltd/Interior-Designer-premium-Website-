import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://treatinterio.com'),
  title: {
    default: "Treat Interio - Elevate Your Space | Premium Interior Design",
    template: "%s | Treat Interio"
  },
  description: "Treat Interio - Premium interior design firm elevating spaces across India. Crafting timeless, personalized interiors for discerning clients in Mumbai, Bangalore, Delhi, and beyond.",
  keywords: ["luxury interior design India", "premium interiors Mumbai", "luxury home design Bangalore", "bespoke interiors Delhi", "high-end interior designer", "luxury villa design", "commercial interior design", "treat interio", "elevate your space"],
  authors: [{ name: "Treat Interio" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://treatinterio.com",
    siteName: "Treat Interio",
    title: "Treat Interio - Elevate Your Space | Premium Interior Design",
    description: "Premium interior design firm elevating spaces across India with timeless, personalized designs.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Treat Interio - Elevate Your Space",
    description: "Premium interior design firm elevating spaces across India with timeless, personalized designs.",
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
