import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tech Lumina | Digital Solutions & Technology Services',
  description: "Tech Lumina is a cutting-edge web development agency specializing in creating powerful, scalable, and innovative web applications. We're dedicated to Crafting Tomorrow's Websites, Today.",
  keywords: [
    'web development', 'modern websites', 'UI/UX design', 'digital strategy', 'web solutions',
    'custom web development', 'responsive web design', 'website development company',
    'professional web services', 'web application development', 'frontend development',
    'backend development', 'full stack development', 'mobile-friendly websites',
    'enterprise web solutions', 'ecommerce development', 'web optimization',
    'website maintenance', 'website security', 'performance optimization',
    'SEO friendly websites', 'modern web technologies', 'scalable web applications',
    'tech lumina startup', 'digital solutions', 'technology services', 'web consulting',
    'website analytics', 'user experience design', 'digital transformation'
  ],
  openGraph: {
    title: 'Tech Lumina | Digital Solutions & Technology Services',
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
        alt: 'Tech Lumina - Digital Solutions & Technology Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tech Lumina | Digital Solutions & Technology Services',
    description: "Tech Lumina is a cutting-edge web development agency specializing in creating powerful, scalable, and innovative web applications. We're dedicated to Crafting Tomorrow's Websites, Today.",
    images: ['/images/twitter-image.jpg'],
    creator: '@techlumina',
  },
};