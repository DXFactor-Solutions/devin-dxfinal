import React from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Mail, 
  MapPin, 
  PhoneCall,
  ArrowRight,
  Bot,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Animated background elements - optional, can be removed for more compactness */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-400/5 rounded-full blur-[80px] animate-pulse" style={{animationDelay: '4s'}}></div>
      </div> */}

      {/* Top wave divider */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg className="relative block w-full h-4 transform" viewBox="0 0 1200 90" preserveAspectRatio="none">
          <path d="M321.39,42.33c58-8.09,114.16-22.6,172-31.39,82.39-12.54,168.19-13.28,250.45-.29C823.78,23.5,906.67,54,985.66,69.62c70.05,13.86,146.53,19.59,214.34,2.25V0H0V20.51A600.21,600.21,0,0,0,321.39,42.33Z" className="fill-white"></path>
        </svg>
      </div>
      
      <div className="relative z-10 px-6 lg:px-12 pt-8 pb-6">
        {/* Main footer content */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6 mb-6">
          
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <img src="/factor.svg" alt="DXFactor Logo" className="h-8 w-auto mb-3" style={{filter: 'brightness(0) invert(1)'}} />
              <p className="text-gray-300 leading-relaxed max-w-sm text-sm mb-4">
                DXFactor delivers the industry's only Outcomes Agent Platform built from $2B+ in proven results for Fitness & Wellness operators.
              </p>
              
              {/* Social links */}
              <div>
                <p className="text-green-400 text-xs uppercase tracking-wider mb-2 font-medium">Stay Connected</p>
                <div className="flex space-x-2">
                  <a href="#" className="group relative w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-green-500/20 hover:border-green-400/50 transition-all duration-300">
                    <Linkedin className="h-4 w-4 text-gray-300 group-hover:text-green-400 transition-colors" />
                  </a>
                  <a href="#" className="group relative w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-green-500/20 hover:border-green-400/50 transition-all duration-300">
                    <Instagram className="h-4 w-4 text-gray-300 group-hover:text-green-400 transition-colors" />
                  </a>
                  <a href="#" className="group relative w-9 h-9 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-green-500/20 hover:border-green-400/50 transition-all duration-300">
                    <Twitter className="h-4 w-4 text-gray-300 group-hover:text-green-400 transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="text-green-400 text-sm font-bold uppercase tracking-wider mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li>
                <a href="/outcomes-platform" className="text-gray-300 hover:text-white flex items-center group text-sm transition-colors">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>Outcome Agents Platform</span>
                </a>
              </li>
              <li>
                <a href="/solutions" className="text-gray-300 hover:text-white flex items-center group text-sm transition-colors">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>Solutions</span>
                </a>
              </li>
              <li>
                <a href="/testimonials" className="text-gray-300 hover:text-white flex items-center group text-sm transition-colors">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>Testimonials</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-green-400 text-sm font-bold uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-gray-300 hover:text-white flex items-center group text-sm transition-colors">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a href="/ebook" className="text-gray-300 hover:text-white flex items-center group text-sm transition-colors">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>Ebook</span>
                </a>
              </li>
              <li>
                <a href="/webinars" className="text-gray-300 hover:text-white flex items-center group text-sm transition-colors">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>Webinars</span>
                </a>
              </li>
              <li>
                <a href="/news" className="text-gray-300 hover:text-white flex items-center group text-sm transition-colors">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>News</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* About */}
          <div>
            <h3 className="text-green-400 text-sm font-bold uppercase tracking-wider mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white flex items-center group text-sm transition-colors">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="/why-us" className="text-gray-300 hover:text-white flex items-center group text-sm transition-colors">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>Why Us</span>
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-300 hover:text-white flex items-center group text-sm transition-colors">
                  <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  <span>Careers</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-green-400 text-sm font-bold uppercase tracking-wider mb-4">Certifications</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center">
                <Link to="/iso-certification" className="transition-transform hover:scale-105">
                  <img src="/logos/isocertif.png" alt="ISO 27001:2013 Certification" className="h-12 w-auto object-contain" />
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <img src="/logos/greatcertif.png" alt="Great Place to Work Certification" className="h-10 w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-white/10 pt-3 flex flex-col md:flex-row justify-between items-center text-xs">
          <div className="flex items-center mb-3 md:mb-0">
            <p className="text-gray-400">
              &copy; {currentYear} DX Factor. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="text-gray-400 hover:text-green-400 transition-colors">Privacy</a>
            <span className="text-gray-600">•</span>
            <a href="#terms" className="text-gray-400 hover:text-green-400 transition-colors">Terms</a>
            <span className="text-gray-600">•</span>
            <a href="#cookies" className="text-gray-400 hover:text-green-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
