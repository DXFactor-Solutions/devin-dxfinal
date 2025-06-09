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
  ChevronRight
} from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-10 bg-white relative overflow-hidden w-full">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg className="relative block w-full h-10 transform rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
        </svg>
      </div>
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Background gradient elements */}
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-green-200/10 rounded-full blur-[120px] opacity-70"></div>
      
      <div className="px-8 sm:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-6">
              <img src="/factor.svg" alt="DX FACTOR Logo" className="h-8" />
            </div>
            <p className="text-gray-600 mb-6 max-w-xs">
              Stay up to date with insights from DXFactor
            </p>
            <p className="text-gray-500 text-sm uppercase mb-4">Stay Connected</p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-['Open_Sans']">SOLUTIONS</h3>
            <ul className="space-y-3">
              <li>
                <a href="#ai-agents" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>AI Agents</span>
                </a>
              </li>
              <li>
                <a href="#click2save" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>Click2Save</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Core Digital Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-['Open_Sans']">CORE DIGITAL SERVICES</h3>
            <ul className="space-y-3">
              <li>
                <a href="#agentic-ai-development" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>Agentic AI Development</span>
                </a>
              </li>
              <li>
                <a href="#data-warehouse" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>Data Warehouse</span>
                </a>
              </li>
              <li>
                <a href="#business-intelligence" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>Business Intelligence</span>
                </a>
              </li>
              <li>
                <a href="#mobile-application" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>Mobile Application Development</span>
                </a>
              </li>
              <li>
                <a href="#custom-software" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>Custom Software Development & Integrations</span>
                </a>
              </li>
              <li>
                <a href="#ui-ux" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>UI / UX</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-['Open_Sans']">COMPANY</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about-us" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>About us</span>
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>Why us</span>
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>Careers</span>
                </a>
              </li>
              <li>
                <a href="#contact-us" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>Contact us</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-['Open_Sans']">RESOURCES</h3>
            <ul className="space-y-3">
              <li>
                <a href="#blog" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>Blog</span>
                </a>
              </li>
              <li>
                <a href="#case-studies" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>Case Studies</span>
                </a>
              </li>
              <li>
                <a href="#news" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>News</span>
                </a>
              </li>
              <li>
                <a href="#webinars" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>Webinars</span>
                </a>
              </li>
              <li>
                <a href="#ebooks" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>Ebooks</span>
                </a>
              </li>
              <li>
                <a href="#videos" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>Videos</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Certification Section */}
        <div className="border-t border-gray-200 pt-10 pb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 font-['Open_Sans']">CERTIFICATION</h3>
              <div className="flex flex-wrap gap-6">
                <img src="/logos/iso-certification.png" alt="ISO 27001:2013" className="h-16 object-contain" />
                <img src="/logos/great-place-to-work.png" alt="Great Place to Work Certified" className="h-16 object-contain" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} DX Factor. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#privacy" className="text-gray-500 hover:text-green-600 text-sm">Privacy Policy</a>
            <a href="#terms" className="text-gray-500 hover:text-green-600 text-sm">Terms of Service</a>
            <a href="#cookies" className="text-gray-500 hover:text-green-600 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
