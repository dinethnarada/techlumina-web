'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className="fixed w-full bg-navy shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-light-gray">Tech Lumina</span>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className={`nav-link ${pathname === '/' ? 'bg-medium-blue/20 text-light-gray' : 'text-light-gray/80 hover:text-light-gray hover:bg-medium-blue/10'}`}>
              Home
            </Link>
            <Link href="/about" className={`nav-link ${pathname === '/about' ? 'bg-medium-blue/20 text-light-gray' : 'text-light-gray/80 hover:text-light-gray hover:bg-medium-blue/10'}`}>
              About
            </Link>
            {/* <Link href="/projects" className={`hidden nav-link ${pathname === '/projects' ? 'bg-medium-blue/20 text-light-gray' : ''}`}>
              Projects
            </Link> */}
            <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'bg-medium-blue/20 text-light-gray' : ''}`}>
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-light-gray hover:bg-medium-blue/20 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`mobile-nav-link ${pathname === '/' ? 'bg-medium-blue/20 text-light-gray' : 'text-light-gray/80 hover:text-light-gray hover:bg-medium-blue/10'}`}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`mobile-nav-link ${pathname === '/about' ? 'bg-medium-blue/20 text-light-gray' : 'text-light-gray/80 hover:text-light-gray hover:bg-medium-blue/10'}`}
              >
                About
              </Link>
              {/* <Link
                href="/projects"
                onClick={() => setIsMenuOpen(false)}
                className={`hidden mobile-nav-link ${pathname === '/projects' ? 'bg-medium-blue/20 text-light-gray' : 'text-light-gray/80 hover:text-light-gray hover:bg-medium-blue/10'}`}
              >
                Projects
              </Link> */}
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`mobile-nav-link ${pathname === '/contact' ? 'bg-medium-blue/20 text-light-gray' : 'text-light-gray/80 hover:text-light-gray hover:bg-medium-blue/10'}`}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
