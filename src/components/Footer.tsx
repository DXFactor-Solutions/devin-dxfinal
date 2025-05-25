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
    <footer className="pt-16 pb-10 bg-white relative overflow-hidden">
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
      
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <div className="flex items-center mb-6">
              <img src="/factor.svg" alt="DX FACTOR Logo" className="h-8" />
            </div>
            <p className="text-gray-600 mb-6 max-w-xs">
              The first Agentic Platform built specifically for Fitness & Wellness. Deploy agents that deliver measurable outcomes at scale.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-green-50 hover:text-green-600 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-['Open_Sans']">Platform</h3>
            <ul className="space-y-3">
              <li>
                <a href="#platform" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>Platform Overview</span>
                </a>
              </li>
              <li>
                <a href="#agents" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>AI Micro Agents</span>
                </a>
              </li>
              <li>
                <a href="#results" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>Results</span>
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>Pricing</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-['Open_Sans']">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>About Us</span>
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>Testimonials</span>
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-600 hover:text-green-600 flex items-center group">
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-all" />
                  <span>Careers</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4 font-['Open_Sans']">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-600">123 Innovation Drive<br/>San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center">
                <PhoneCall className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-600 hover:text-green-600">+1 (234) 567-890</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-green-600 mr-2 flex-shrink-0" />
                <a href="mailto:contact@dxfactor.com" className="text-gray-600 hover:text-green-600">contact@dxfactor.com</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter Section */}
        <div className="border-t border-gray-200 pt-10 pb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-1 font-['Open_Sans']">Stay Updated</h3>
              <p className="text-gray-600 text-sm">Subscribe to our newsletter for the latest updates</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <Button className="bg-green-600 hover:bg-green-700 text-white border-none shadow-md hover:shadow-lg transition-all duration-300 px-6 py-2">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
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
