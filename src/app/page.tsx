'use client';
import Image from 'next/image';
import TypewriterText from '@/components/TypewriterText';
import LogoText from '@/components/LogoText';
import MatrixRain from '@/components/MatrixRain';
import ServiceCard from '@/components/ServiceCard';
import { FaCode, FaMobileAlt, FaPalette, FaRocket } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="min-h-screen bg-navy">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <MatrixRain />
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 font-norwester text-light-gray">
            <LogoText />
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-norwester tracking-wide text-light-gray/80">
            <TypewriterText 
              text="Crafting Tomorrow's Websites, Today"
              delay={100}
            />
          </p>
          <a href="/contact" className="bg-medium-blue/20 hover:bg-medium-blue/30 text-light-gray border border-medium-blue/20 backdrop-blur-sm px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
            Get Started
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 md:px-8 bg-light-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-navy">Our Services</h2>
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
                icon={<FaPalette className="w-full h-full" />}
                title="UI/UX Design"
                description="User-centered design solutions that create engaging digital experiences."
              />
              <ServiceCard
                icon={<FaRocket className="w-full h-full" />}
                title="Digital Strategy"
                description="Strategic planning and consulting for your digital transformation journey."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-6 sm:px-8 md:px-12 bg-navy">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center text-light-gray !text-light-gray">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-medium-blue/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-navy text-xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-light-gray">Expert Team</h3>
                  <p className="text-light-gray/80">Skilled developers with years of experience in web technologies.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-medium-blue/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-navy text-xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-light-gray">Cutting-edge Tech</h3>
                  <p className="text-light-gray/80">Using the latest technologies to build modern web applications.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-full bg-medium-blue/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-navy text-xl">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-light-gray">Dedicated Support</h3>
                  <p className="text-light-gray/80">24/7 support and maintenance for your web applications.</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-xl overflow-hidden">
              <div className="absolute inset-0 tech-gradient opacity-30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-medium-blue/20 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 sm:px-8 md:px-12 bg-light-gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Ready to Transform Your Ideas?</h2>
          <p className="text-xl text-blue-gray mb-8">Let's build something amazing together.</p>
          <a href="/contact" className="bg-medium-blue/20 hover:bg-medium-blue/30 text-light-gray border border-medium-blue/20 backdrop-blur-sm px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105">
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
