import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tech Lumina | Modern Web Development Agency',
  description: "Tech Lumina is a cutting-edge web development agency specializing in creating powerful, scalable, and innovative web applications. We're dedicated to Crafting Tomorrow's Websites, Today.",
  keywords: ['web development', 'modern websites', 'react development', 'next.js', 'UI/UX design', 'digital strategy', 'web solutions'],
  openGraph: {
    title: 'Tech Lumina | Modern Web Development Agency',
    description: "Tech Lumina is a cutting-edge web development agency specializing in creating powerful, scalable, and innovative web applications. We're dedicated to Crafting Tomorrow's Websites, Today.",
    type: 'website',
    url: 'https://techlumina.com',
    siteName: 'Tech Lumina',
    locale: 'en_US',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tech Lumina - Modern Web Development Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Lumina | Modern Web Development Agency',
    description: "Tech Lumina is a cutting-edge web development agency specializing in creating powerful, scalable, and innovative web applications. We're dedicated to Crafting Tomorrow's Websites, Today.",
    images: ['/images/twitter-image.jpg'],
    creator: '@techlumina',
  },
};
