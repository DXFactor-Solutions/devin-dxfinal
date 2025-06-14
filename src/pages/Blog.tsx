import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Video, FileText, Newspaper, Calendar, User, Clock, ExternalLink, Search, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import FeaturedSuccessStories from '@/components/FeaturedSuccessStories';
import { motion, useAnimation, useInView } from 'framer-motion';
import { blogPosts } from '../lib/blog-data';

// Animation component for spiral effect - same as other pages
const SpiralReveal = ({ children, delay = 0, index = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Calculate spiral position based on index
  const angle = index * 30; // Degrees between each element
  const radius = index * 5; // Spiral radius increases with index
  const startX = Math.cos(angle * Math.PI / 180) * radius;
  const startY = Math.sin(angle * Math.PI / 180) * radius;
  
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
        hidden: { 
          opacity: 0,
          x: startX,
          y: startY,
          scale: 0.8,
          rotate: -5 + (index % 3) * 5 // Slight varied rotation
        },
        visible: { 
          opacity: 1, 
          x: 0, 
          y: 0, 
          scale: 1,
          rotate: 0,
          transition: { 
            duration: 0.8, 
            delay: delay + index * 0.1,
            type: "spring",
            stiffness: 100,
            damping: 15
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState('ALL POST');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['ALL POST', 'FITNESS'];

  const filteredPosts = blogPosts.filter(post => 
    searchTerm === '' || 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Enhanced Header Section - Compact */}
      <div className="relative bg-gray-900 border-b border-gray-200 pt-24 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
            style={{ 
              filter: 'brightness(0.7)',
              mixBlendMode: 'normal'
            }}
          >
            <source src="/videos/futurecityh.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/50 mix-blend-multiply"></div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-16 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SpiralReveal delay={0.1} index={0}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium mb-4">
                <TrendingUp className="w-3 h-3 mr-1" />
                BLOGS & NEWS
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                Explore insights, updates, and<br />
                <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                  DXFactor stories
                </span>
              </h1>
              <p className="text-base text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Stay ahead with industry insights, expert perspectives, and the latest innovations 
                in fitness technology and business transformation.
              </p>
            </div>
          </SpiralReveal>

          {/* Enhanced Search - Compact */}
          <SpiralReveal delay={0.3} index={1}>
            <div className="flex justify-center mb-6">
              {/* Search Bar */}
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search articles..."
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
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <SpiralReveal key={index} delay={0.1 * (index % 3)} index={index}>
              <Link to={`/blog/${post.slug}`} className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{post.description}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <ArrowRight className="w-4 h-4 ml-auto text-green-500" />
                  </div>
                </div>
              </Link>
            </SpiralReveal>
          ))}
        </div>
      </div>
      
      {/* Featured Success Stories */}
      <FeaturedSuccessStories />
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default BlogPage; 