import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Search, TrendingUp, Briefcase } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import FeaturedSuccessStories from '@/components/FeaturedSuccessStories';
import { motion, useAnimation, useInView } from 'framer-motion';
import { caseStudies } from '../lib/case-studies-data';

// Reusable animation component
const SpiralReveal = ({ children, delay = 0, index = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: { 
          opacity: 1, 
          y: 0, 
          scale: 1,
          transition: { 
            duration: 0.8, 
            delay: delay + index * 0.1,
            type: "spring",
            stiffness: 100
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

const CaseStudiesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredStudies = caseStudies.filter(study => 
    searchTerm === '' || 
    study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    study.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <div className="relative bg-gray-900 border-b border-gray-200 pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <video 
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay muted loop playsInline
            style={{ filter: 'brightness(0.7)', mixBlendMode: 'normal' }}
          >
            <source src="/videos/futurecityh.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/50 mix-blend-multiply"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SpiralReveal delay={0.1} index={0}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium mb-4">
                <Briefcase className="w-3 h-3 mr-1" />
                CASE STUDIES
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                Real-World Results & Success Stories
              </h1>
              <p className="text-base text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Explore how we've helped leading fitness and wellness brands achieve measurable outcomes with our AI-powered solutions.
              </p>
            </div>
          </SpiralReveal>

          {/* Search Bar */}
          <SpiralReveal delay={0.3} index={1}>
            <div className="flex justify-center mb-6">
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-gray-500 rounded-full focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-300"
                />
              </div>
            </div>
          </SpiralReveal>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStudies.map((study, index) => (
            <SpiralReveal key={index} delay={0.1 * (index % 3)} index={index}>
              <Link to={`/case-studies/${study.slug}`} className="flex flex-col bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full p-6">
                <div className="mb-3">
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full">{study.category}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 flex-grow">{study.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{study.description}</p>
                <div className="flex items-center text-xs text-green-600 font-bold mt-auto">
                  Read Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </Link>
            </SpiralReveal>
          ))}
        </div>
      </div>
      
      <FeaturedSuccessStories />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default CaseStudiesPage; 