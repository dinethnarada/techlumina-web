'use client';
import TypewriterText from '@/components/TypewriterText';import LogoText from '@/components/LogoText';
import MatrixRain from '@/components/MatrixRain';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import GlassImage from '@/components/GlassImage';
import { FaCode, FaPencilRuler, FaChartLine, FaUserCog, FaLaptopCode, FaHeadset, FaSearch } from 'react-icons/fa';

// JSON-LD structured data for better SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Tech Lumina',
  description: "Crafting Tomorrow's Websites, Today",
  url: 'https://techlumina.com',
  potentialAction: {
    '@type': 'SearchAction',
    'target': 'https://techlumina.com/search?q={search_term_string}',
    'query-input': 'required name=search_term_string'
  },
  provider: {
    '@type': 'Organization',
    name: 'Tech Lumina',
    description: 'Your trusted partner for innovative digital solutions, SEO optimization, and technology services. We deliver comprehensive web development, UI/UX design, and search engine optimization solutions.',
    image: '/images/modern-workspace.jpg',
    url: 'https://techlumina.com',
    sameAs: [
      'https://twitter.com/techlumina',
      'https://linkedin.com/company/techlumina',
      'https://github.com/techlumina'
    ],
    areaServed: 'Worldwide',
    serviceType: ['Digital Solutions', 'Technology Services', 'Tech Consulting', 'SEO Optimization', 'Web Development', 'UI/UX Design']
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
          <h2 className="text-6xl md:text-7xl font-bold mb-4 font-norwester text-light-gray">
            <LogoText />
          </h2>
          <p className="text-2xl md:text-3xl mb-8 font-norwester tracking-wide text-light-gray/80">
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
            <h1 className="text-4xl font-bold mb-4 text-navy">Digital Solutions & Tech Services</h1>
            <p className="text-xl text-blue-gray max-w-2xl mx-auto">
              Transforming businesses with innovative technology solutions and digital excellence
            </p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
              <ServiceCard
                icon={<FaSearch className="w-full h-full" />}
                title="SEO Optimization"
                description="Boost your online visibility with advanced SEO strategies and performance optimization."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-4 md:px-8 bg-navy">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-light-gray">Tech Lumina Solutions</h2>
            <p className="text-xl text-light-gray/80 max-w-2xl mx-auto">
              We combine technical expertise with innovative digital solutions to deliver exceptional results
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
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 bg-light-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-navy">Contact Tech Lumina Today</h2>
          <p className="text-xl text-blue-gray mb-8">Let&apos;s create innovative digital solutions together.</p>
          <Button variant="light" href="/contact">
            Contact Us
          </Button>
        </div>
      </section>
    </main>
    </>
  );
}
