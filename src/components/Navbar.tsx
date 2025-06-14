import React, { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X, Home, Bot, Star, FileText, Info, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { TubelightNavBar } from './ui/tubelight-navbar';
import { useNavigate } from 'react-router-dom';

const navLinks = [
  { name: 'Outcome Agents Platform', url: '/outcomes-platform', icon: Home },
  { name: 'Solutions', url: '/solutions', icon: Bot },
  { name: 'Testimonials', url: '/testimonials', icon: Star },
  { 
    name: 'Resources', 
    url: '/blog', 
    icon: FileText,
    subPages: [
      { name: 'Blog', url: '/blog' },
      { name: 'Ebook', url: '/ebook' },
      { name: 'Webinars', url: '/webinars' },
      { name: 'News', url: '/news' }
    ]
  },
  { 
    name: 'About', 
    url: '/about', 
    icon: Info,
    subPages: [
      { name: 'About Us', url: '/about' },
      { name: 'Why Us', url: '/why-us' },
      { name: 'Careers', url: '/careers' }
    ]
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const navigate = useNavigate();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

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
    // Always close dropdown after navigation
    setOpenDropdown(null);
  };

  const handleDropdownToggle = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
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

        {/* Enhanced Desktop Navigation with Dropdowns */}
        <div className="hidden md:flex items-center space-x-1">
          <div className="flex items-center gap-3 bg-white/80 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg border border-gray-200">
            {navLinks.map((item) => (
              <div key={item.name} className="relative">
                {item.subPages ? (
                  // Dropdown Item
                  <div className="relative" ref={dropdownRef}>
                    <button
                      onClick={() => handleDropdownToggle(item.name)}
                      className="flex items-center gap-1 cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors text-gray-700 hover:text-black hover:bg-gray-50"
                    >
                      <span>{item.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-[60]"
                        >
                          {item.subPages.map((subPage) => (
                            <button
                              key={subPage.name}
                              onClick={() => handleNavigation(subPage.url)}
                              className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                              {subPage.name}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  // Regular Item
                  <button
                    onClick={() => handleNavigation(item.url)}
                    className="cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors text-gray-700 hover:text-black hover:bg-gray-50"
                  >
                    {item.name}
                  </button>
                )}
              </div>
            ))}
          </div>
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

      {/* Enhanced Mobile Menu with Dropdowns */}
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
                <div key={item.name}>
                  {item.subPages ? (
                    // Mobile Dropdown Item
                    <div>
                      <button
                        onClick={() => handleDropdownToggle(item.name)}
                        className="flex items-center justify-between w-full text-gray-800 font-medium text-base py-2 border-l-2 border-transparent hover:border-black pl-3 transition-colors duration-200 text-left"
                      >
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="ml-6 mt-2 space-y-2"
                          >
                            {item.subPages.map((subPage) => (
                              <button
                                key={subPage.name}
                                onClick={() => {
                                  handleNavigation(subPage.url);
                                  setIsMobileMenuOpen(false);
                                }}
                                className="block w-full text-left text-gray-600 font-normal text-sm py-1 hover:text-black transition-colors"
                              >
                                {subPage.name}
                              </button>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    // Regular Mobile Item
                <button
                  onClick={() => {
                    handleNavigation(item.url);
                    setIsMobileMenuOpen(false);
                  }}
                      className="text-gray-800 font-medium text-base py-2 border-l-2 border-transparent hover:border-black pl-3 transition-colors duration-200 text-left w-full"
                >
                  {item.name}
                </button>
                  )}
                </div>
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
