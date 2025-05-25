import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full bg-white shadow-md`}
    >
      <nav className="w-full max-w-[2000px] mx-auto px-5 sm:px-8 lg:px-12 py-4">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src="/factor.svg" alt="DX FACTOR Logo" className="h-8" /> 
            </a>
          </div>

          <div className="hidden md:flex items-center justify-center flex-1 mx-10 space-x-8">
            <a href="#platform" className="text-gray-700 hover:text-black transition-colors relative group">
              Platform
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#agents" className="text-gray-700 hover:text-black transition-colors relative group">
              Agents
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#results" className="text-gray-700 hover:text-black transition-colors relative group">
              Results
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-gray-700 hover:text-black transition-colors relative group">
              Services
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-gray-700 hover:text-black transition-colors relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-black hover:bg-gray-800 text-white border-none shadow-md hover:shadow-lg transition-all duration-300 px-6 py-2">
              Book Demo
            </Button>
          </div>

          <button
            className="md:hidden text-gray-700 hover:text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 w-full"
            >
              <div className="flex flex-col space-y-4 pt-4 pb-6 bg-white rounded-lg p-4 w-full shadow-lg">
                <a
                  href="#platform"
                  className="text-gray-700 hover:text-black transition-colors py-2 border-l-2 border-transparent hover:border-green-500 pl-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Platform
                </a>
                <a
                  href="#agents"
                  className="text-gray-700 hover:text-black transition-colors py-2 border-l-2 border-transparent hover:border-green-500 pl-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Agents
                </a>
                <a
                  href="#results"
                  className="text-gray-700 hover:text-black transition-colors py-2 border-l-2 border-transparent hover:border-green-500 pl-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Results
                </a>
                <a
                  href="#services"
                  className="text-gray-700 hover:text-black transition-colors py-2 border-l-2 border-transparent hover:border-green-500 pl-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-black transition-colors py-2 border-l-2 border-transparent hover:border-green-500 pl-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About
                </a>
                <div className="pt-2 flex flex-col space-y-3">
                  <Button className="bg-black hover:bg-gray-800 text-white border-none shadow-md hover:shadow-lg transition-all duration-300 w-full py-2">
                    Book Demo
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
