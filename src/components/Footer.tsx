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
            <p className="text-light-gray/80">Crafting Tomorrow's Websites, Today</p>
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
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact</h3>
            <ul className="space-y-2 text-light-gray/80">
              <li>Tech Lumina</li>
              <li>Silicon Valley, SriLanka</li>
              <li>techlumina25@gmail.com</li>
              <li>+94 (078) 869-286</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-medium-blue/20 text-center text-light-gray/60">
          <p>&copy; {new Date().getFullYear()} Tech Lumina. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
