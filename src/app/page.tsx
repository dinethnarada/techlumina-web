'use client';


import Image from 'next/image';
import TypewriterText from '@/components/TypewriterText';
import LogoText from '@/components/LogoText';
import MatrixRain from '@/components/MatrixRain';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import GlassImage from '@/components/GlassImage';
import { FaCode, FaPencilRuler, FaChartLine, FaUserCog, FaLaptopCode, FaHeadset } from 'react-icons/fa';

// JSON-LD structured data for better SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Tech Lumina',
  description: "Tech Lumina is a cutting-edge web development agency specializing in creating powerful, scalable, and innovative web applications. We're dedicated to Crafting Tomorrow's Websites, Today.",
  url: 'https://techlumina.com',
  potentialAction: {
    '@type': 'SearchAction',
    'target': 'https://techlumina.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  },
  provider: {
    '@type': 'Organization',
    name: 'Tech Lumina',
    description: 'A modern web development agency specializing in cutting-edge web solutions.',
    image: '/images/modern-workspace.jpg',
    url: 'https://techlumina.com',
    sameAs: [
      'https://twitter.com/techlumina',
      'https://linkedin.com/company/techlumina',
      'https://github.com/techlumina'
    ],
    areaServed: 'Worldwide',
    serviceType: ['Web Development', 'UI/UX Design', 'Digital Strategy']
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    <main className="min-h-screen bg-navy" itemScope itemType="https://schema.org/WebPage">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <MatrixRain />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 font-norwester text-light-gray" itemProp="headline">
            <LogoText />
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-norwester tracking-wide text-light-gray/80" itemProp="description">
            <TypewriterText 
              text="Crafting Tomorrow's Websites, Today"
              delay={100}
            />
          </p>
          <Button variant="dark" href="/contact">
            Get Started
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 md:px-8 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-navy" itemProp="name">Our Services</h2>
            <p className="text-xl text-blue-gray max-w-2xl mx-auto">
              Transforming ideas into digital excellence with cutting-edge solutions
            </p>
          </div>
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <ServiceCard
                icon={<FaCode className="w-full h-full" />}
                title="Web Development"
                description="Custom web solutions using cutting-edge technologies and modern frameworks."
              />
              <ServiceCard
                icon={<FaPencilRuler className="w-full h-full" />}
                title="UI/UX Design"
                description="User-centered design solutions that create engaging digital experiences."
              />
              <ServiceCard
                icon={<FaChartLine className="w-full h-full" />}
                title="Digital Strategy"
                description="Strategic planning and consulting for your digital transformation journey."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 md:px-8 bg-navy">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-light-gray" itemProp="name">Why Choose Us</h2>
            <p className="text-xl text-light-gray/80 max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-medium-blue/20 flex items-center justify-center flex-shrink-0">
                  <FaUserCog className="w-6 h-6 text-light-gray" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-light-gray">Expert Team</h3>
                  <p className="text-light-gray/80">Skilled developers with years of experience in web technologies.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-medium-blue/20 flex items-center justify-center flex-shrink-0">
                  <FaLaptopCode className="w-6 h-6 text-light-gray" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-light-gray">Cutting-edge Tech</h3>
                  <p className="text-light-gray/80">Using the latest technologies to build modern web applications.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-medium-blue/20 flex items-center justify-center flex-shrink-0">
                  <FaHeadset className="w-6 h-6 text-light-gray" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-light-gray">Dedicated Support</h3>
                  <p className="text-light-gray/80">24/7 support and maintenance for your web applications.</p>
                </div>
              </div>
            </div>
            <div className="h-[400px]">
              <GlassImage
                src="/images/modern-workspace.jpg"
                alt="Modern workspace with developers collaborating"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 bg-light-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-navy">Ready to Transform Your Ideas?</h2>
          <p className="text-xl text-blue-gray mb-8">Let's build something amazing together.</p>
          <Button variant="light" href="/contact">
            Contact Us
          </Button>
        </div>
      </section>
    </main>
    </>
  );
}
