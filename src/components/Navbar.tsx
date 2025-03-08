'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <nav className="fixed w-full bg-deep-blue/30 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-electric-teal">Tech Lumina</span>
          </Link>
          
          <div className="flex space-x-4">
            <Link href="/" className={`nav-link ${pathname === '/' ? 'bg-white/10' : ''}`}>
              Home
            </Link>
            <Link href="/about" className={`nav-link ${pathname === '/about' ? 'bg-white/10' : ''}`}>
              About
            </Link>
            <Link href="/projects" className={`nav-link ${pathname === '/projects' ? 'bg-white/10' : ''}`}>
              Projects
            </Link>
            <Link href="/contact" className={`nav-link ${pathname === '/contact' ? 'bg-white/10' : ''}`}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
