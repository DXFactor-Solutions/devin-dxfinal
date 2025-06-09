import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X, Home, Bot, Star, FileText, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TubelightNavBar } from './ui/tubelight-navbar';
import { useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'Agent24', url: '#platform', icon: Home },
  { name: 'Solutions', url: '#agents', icon: Bot },
  { name: 'Testimonials', url: '#results', icon: Star },
  { name: 'Resources', url: '/resources', icon: FileText },
  { name: 'About', url: '/about', icon: Info },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (url: string) => {
    if (url.startsWith('/')) {
      // Router navigation for pages
      navigate(url);
    } else if (url.startsWith('#')) {
      // Anchor navigation for sections on home page
      if (window.location.pathname !== '/') {
        // If not on home page, go to home first then scroll
        navigate('/');
        setTimeout(() => {
          const element = document.querySelector(url);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(url);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      <nav className="w-full max-w-[1800px] mx-auto px-8 py-3 flex items-center justify-between">
        {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
            <img 
              src="/factor.svg" 
              alt="DX FACTOR Logo" 
              className="h-9 w-auto" 
              style={{ minWidth: 110 }}
            />
            </a>
          </div>

        {/* Tubelight Navbar - Desktop */}
        <div className="hidden md:block">
          <TubelightNavBar items={navLinks} onNavigate={handleNavigation} />
          </div>

        {/* Book Demo Button - Desktop */}
        <div className="hidden md:flex items-center">
          <Button className="bg-black hover:bg-gray-900 text-white shadow-md transition-all duration-300 px-6 py-2 h-auto rounded-md font-medium text-base">
              Book Demo
            </Button>
          </div>

        {/* Mobile Menu Button */}
          <button
          className="md:hidden text-gray-800 ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
          {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
      </nav>

      {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            className="md:hidden w-full bg-white shadow-lg border-t"
            >
            <div className="flex flex-col space-y-2 pt-4 pb-6 px-6">
              {navLinks.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => {
                    handleNavigation(item.url);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-gray-800 font-medium text-base py-2 border-l-2 border-transparent hover:border-black pl-3 transition-colors duration-200 text-left"
                >
                  {item.name}
                </button>
              ))}
              <Button className="bg-black hover:bg-gray-900 text-white border-none shadow-md transition-all duration-300 w-full py-3 text-base font-medium rounded-md mt-3">
                    Book Demo
                  </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </header>
  );
};

export default Navbar;
