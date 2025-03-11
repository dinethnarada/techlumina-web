'use client';

import Link from 'next/link';
import { norwester } from '@/app/fonts';

const Footer = () => {
  return (
    <footer className={`bg-navy text-light-gray ${norwester.variable}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Tech Lumina</h3>
            <p className="text-light-gray/80">Crafting Tomorrow&apos;s Websites, Today</p>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-medium-blue transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-medium-blue transition-colors">About</Link></li>
              {/* <li><Link href="/projects" className="hover:text-medium-blue transition-colors">Projects</Link></li> */}
              <li><Link href="/contact" className="hover:text-medium-blue transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Services</h3>
            <ul className="space-y-2">
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Mobile Apps</li>
              <li>Cloud Solutions</li>
              <li>Education Consultancy</li>
              <li>Internship Guidance</li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact</h3>
            <ul className="space-y-2 text-light-gray/80">
              <li>Tech Lumina</li>
              <li>Silicon Valley, SriLanka</li>
              <li>contact@tech-lumina.com</li>
              <li>+94 (078) 869-5286</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-medium-blue/20 flex flex-col items-center gap-2">
          <p className="text-light-gray/80 text-center">Looking for internship opportunities? Visit our education consultancy services to kickstart your career journey.</p>
          <div className="flex gap-6">
            <Link
              href="https://www.linkedin.com/company/tech-lumina/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-gray hover:text-medium-blue transition-colors"
            >
              LinkedIn
            </Link>
            <Link
              href="https://www.facebook.com/share/15sQydUqcC/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light-gray hover:text-medium-blue transition-colors"
            >
              Facebook
            </Link>
          </div>
          <p className="text-light-gray/60">&copy; {new Date().getFullYear()} Tech Lumina. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
