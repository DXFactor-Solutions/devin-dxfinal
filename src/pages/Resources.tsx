import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, BookOpen, Video, FileText, Newspaper, Calendar, User, Clock, ExternalLink, Search, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { motion, useAnimation, useInView } from 'framer-motion';

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

const ResourcesPage = () => {
  const [activeCategory, setActiveCategory] = useState('ALL POST');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['ALL POST', 'FITNESS', 'DIGITAL TRANSFORMATION', 'MEMBER RETENTION', 'MEMBER EXPERIENCE', 'OPERATIONAL EXCELLENCE'];

  const blogPosts = [
    {
      title: "Why Global Delivery Teams Are the Smartest Investment for Quality Talent and Superior ROI",
      url: "https://dxfactor.com/ai-roi-click2save-fitness/",
      author: "Rohan Shroff",
      date: "05 Dec 2024",
      category: "DIGITAL TRANSFORMATION",
      tags: ["Digital Transformation", "global delivery"],
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop",
      featured: true
    },
    {
      title: "Understanding Fitness Consumer Behavior in the AI Era",
      url: "https://dxfactor.com/ai-adoption-fitness-operations/",
      author: "DXFactor Team",
      date: "28 Nov 2024",
      category: "FITNESS",
      tags: ["Artificial Intelligence", "Digital Transformation"],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop"
    },
    {
      title: "Harnessing AI to Transform Fitness Businesses: One Algorithm at a Time",
      url: "https://dxfactor.com/ai-stopped-gym-cancellation/",
      author: "Sarah Chen",
      date: "22 Nov 2024",
      category: "FITNESS",
      tags: ["Digital Transformation", "Fitness"],
      image: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?w=600&h=400&fit=crop"
    },
    {
      title: "7 Signs You Need a Cancellation Save Solution",
      url: "https://dxfactor.com/how-ai-helps-fitness-clubs-fight-tariff-costs/",
      author: "Michael Rodriguez",
      date: "15 Nov 2024",
      category: "MEMBER RETENTION",
      tags: ["Digital Transformation", "Fitness"],
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=600&h=400&fit=crop"
    },
    {
      title: "The Compliance Trap: Click-to-Save vs Easy Cancel",
      url: "https://dxfactor.com/the-compliance-trap-click-to-save-vs-easy-cancel/",
      author: "Emily Watson",
      date: "10 Nov 2024",
      category: "MEMBER EXPERIENCE",
      tags: ["Compliance", "Member Experience"],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop"
    },
    {
      title: "FTC Click-to-Cancel Law: What Fitness Businesses Need to Know",
      url: "https://www.dxfactor.com//ftc-click-to-cancel-law-guide/",
      author: "Legal Team",
      date: "05 Nov 2024",
      category: "OPERATIONAL EXCELLENCE",
      tags: ["Legal", "Compliance"],
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop"
    }
  ];

  const filteredPosts = activeCategory === 'ALL POST' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Enhanced filtering with search
  const searchFilteredPosts = filteredPosts.filter(post => 
    searchTerm === '' || 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Enhanced Header Section - Compact */}
      <div className="relative bg-white border-b border-gray-200 pt-24 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-16 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <SpiralReveal delay={0.1} index={0}>
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium mb-4">
                <TrendingUp className="w-3 h-3 mr-1" />
                BLOGS & NEWS
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
                Explore insights, updates, and<br />
                <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                  DXFactor stories
                </span>
              </h1>
              <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Stay ahead with industry insights, expert perspectives, and the latest innovations 
                in fitness technology and business transformation.
              </p>
            </div>
          </SpiralReveal>

          {/* Enhanced Search and Stats - Compact */}
          <SpiralReveal delay={0.3} index={1}>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-6">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white shadow-sm text-sm"
                />
              </div>
              
              {/* Stats */}
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">50+</div>
                  <div className="text-xs text-gray-600">Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">12K+</div>
                  <div className="text-xs text-gray-600">Readers</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900">25+</div>
                  <div className="text-xs text-gray-600">Topics</div>
                </div>
              </div>
            </div>
          </SpiralReveal>
        </div>
      </div>

      {/* Enhanced Category Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-1 overflow-x-auto scrollbar-hide py-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`py-3 px-6 whitespace-nowrap font-medium text-sm rounded-lg transition-all duration-200 relative ${
                  activeCategory === category
                    ? 'bg-green-100 text-green-800 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Post - More Image, Less Text */}
        {searchFilteredPosts.filter(post => post.featured).map((post, index) => (
          <SpiralReveal key={index} delay={0.1} index={0}>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="lg:col-span-3 relative h-64 lg:h-80">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-2 p-6 lg:p-8 flex flex-col justify-center">
                  <div className="flex gap-2 mb-3">
                    {post.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-normal rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-3 leading-tight">
                    <a href={post.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </a>
                  </h2>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-3">
                    Discover how leading fitness companies are leveraging global delivery teams to access top-tier talent while achieving exceptional return on investment.
                  </p>
                  <div className="flex items-center text-gray-400 text-xs">
                    <span className="font-normal">By: {post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </SpiralReveal>
        ))}

        {/* Secondary Posts Grid - Simplified */}
        <SpiralReveal delay={0.3} index={1}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {searchFilteredPosts.filter(post => !post.featured).slice(0, 3).map((post, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="h-48">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex gap-2 mb-3">
                      {post.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <span className="font-medium">{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </SpiralReveal>

        {/* Rest of the content - Full Width */}
        <div className="w-full">
          {/* Remaining Posts - Full Width */}
          <SpiralReveal delay={0.5} index={2}>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">More Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchFilteredPosts.filter(post => !post.featured).slice(3).map((post, index) => (
                  <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                    <a href={post.url} target="_blank" rel="noopener noreferrer" className="block">
                      <div className="h-40">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-5">
                        <div className="flex gap-2 mb-3">
                          {post.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex}
                              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-base font-bold text-gray-900 mb-3 leading-tight hover:text-blue-600 transition-colors">
                          {post.title}
                        </h3>
                        <div className="flex items-center text-gray-500 text-sm">
                          <span className="font-medium">{post.author}</span>
                          <span className="mx-2">•</span>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </SpiralReveal>
        </div>
      </div>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ResourcesPage; 