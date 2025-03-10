import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { eightgon } from './fonts';
import PageTransition from '@/components/PageTransition';
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico'
  },
  title: `Tech Lumina | Digital Solutions & Technology Services`,
  description: "Tech Lumina is a cutting-edge web development agency specializing in creating powerful, scalable, and innovative web applications. We're dedicated to Crafting Tomorrow's Websites, Today.",
  metadataBase: new URL('https://techlumina.com'),
  keywords: ['tech lumina', 'digital solutions', 'technology services', 'tech solutions', 'digital technology', 'tech services', 'contact tech lumina', 'innovative solutions'],
  authors: [{ name: 'Tech Lumina Team' }],
  creator: 'Tech Lumina',
  publisher: 'Tech Lumina',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://techlumina.com',
    title: 'Tech Lumina | Modern Web Development Agency - Home',
    description: "Tech Lumina is a cutting-edge web development agency specializing in creating powerful, scalable, and innovative web applications. We're dedicated to Crafting Tomorrow's Websites, Today.",
    siteName: 'Tech Lumina',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Tech Lumina - Modern Web Development Agency'
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Lumina | Digital Solutions & Technology Services',
    description: "Tech Lumina - Your partner for innovative digital solutions and technology services. Contact us for transformative tech solutions.",
    images: ['/og-image.jpg'],
    creator: '@techlumina',
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
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${eightgon.variable}`}>
      <head>
      <meta name="google-site-verification" content="uLtKm0rtFybjBOrF31A5JCP2jnVwVBX8UsjxY7ZcBm4" />
    <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-eightgon antialiased bg-navy text-light-gray">
        <Navbar />
        <main className="min-h-screen pt-16">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
