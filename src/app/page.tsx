'use client';
import Image from 'next/image';
import TypewriterText from '@/components/TypewriterText';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-navy px-6 sm:px-8 md:px-12">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-medium-blue/20 to-navy"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold mb-4 font-norwester">
            <span className="text-light-gray">Tech Lumina</span>
            <br />
            <span className="text-light-gray">Web Solutions</span>
          </h1>
          <p className="text-2xl md:text-3xl mb-8 font-norwester tracking-wide">
            <TypewriterText 
              text="Crafting Tomorrow's Websites, Today"
              className="text-light-gray/80"
              delay={100}
            />
          </p>
          <a href="/contact" className="button mt-8 inline-block">
            Get Started
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 sm:px-8 md:px-12 bg-light-gray">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4 text-navy">Custom Web Apps</h3>
              <p className="text-blue-gray">Tailored solutions that perfectly match your business requirements and goals.</p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4 text-navy">Modern UI/UX</h3>
              <p className="text-blue-gray">Beautiful, intuitive interfaces that provide exceptional user experiences.</p>
            </div>
            <div className="card">
              <h3 className="text-2xl font-semibold mb-4 text-navy">Scalable Solutions</h3>
              <p className="text-blue-gray">Future-proof applications that grow with your business needs.</p>
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
          <a href="/contact" className="button">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
