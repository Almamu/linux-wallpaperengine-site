import { Download, Github, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Link } from './ui/Link.tsx';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm'
          : 'bg-transparent'
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link
              href="#"
              className="flex items-center text-xl font-bold text-white">
              <span className="mr-1 text-primary-400">&gt;</span>
              <span className="mr-1">linux</span>
              <span className="text-primary-400">-</span>
              <span>wallpaperengine</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <Link href="#features" className="nav-link">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#status" className="nav-link">
                  Status
                </Link>
              </li>
              <li>
                <Link href="#installation" className="nav-link">
                  Installation
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/Almamu/linux-wallpaperengine"
                  className="nav-link flex items-center"
                  external>
                  <Github size={16} className="mr-1" />
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="#download"
                  className="flex items-center rounded-md bg-primary-500 px-4 py-2 text-white transition-colors duration-300 hover:bg-primary-600">
                  <Download size={16} className="mr-1" />
                  Download
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-300 hover:text-white"
              aria-label="Toggle menu">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="animate-fade-in-down bg-gray-900 shadow-xl md:hidden">
          <div className="space-y-1 px-2 pb-4 pt-2 sm:px-3">
            <Link
              href="#features"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}>
              Features
            </Link>
            <Link
              href="#status"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}>
              Status
            </Link>
            <Link
              href="#installation"
              className="mobile-nav-link"
              onClick={() => setMobileMenuOpen(false)}>
              Installation
            </Link>
            <Link
              href="https://github.com/Almamu/linux-wallpaperengine"
              className="mobile-nav-link flex items-center"
              external
              onClick={() => setMobileMenuOpen(false)}>
              <Github size={16} className="mr-2" />
              GitHub
            </Link>
            <Link
              href="#download"
              className="mobile-nav-link flex items-center justify-center bg-primary-500 hover:bg-primary-600"
              onClick={() => setMobileMenuOpen(false)}>
              <Download size={16} className="mr-2" />
              Download
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
