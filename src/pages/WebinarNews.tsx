import React, { useState, useRef, useEffect } from 'react';
import { Play, Calendar, Clock, User, TrendingUp, Search, ExternalLink, Video, Newspaper } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import FeaturedSuccessStories from '@/components/FeaturedSuccessStories';
import { motion, useAnimation, useInView } from 'framer-motion';

// Animation component for spiral effect
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

const WebinarNewsPage = () => {
  const [activeTab, setActiveTab] = useState('webinars');
  const [searchTerm, setSearchTerm] = useState('');

  const webinars = [
    {
      title: "AI Revolution in Fitness: What Every Operator Needs to Know",
      description: "Join industry experts as they discuss the latest AI trends and their practical applications in fitness business operations.",
      host: "DXFactor Team",
      date: "January 25, 2025",
      time: "2:00 PM EST",
      duration: "60 min",
      attendees: "850+",
      type: "upcoming",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      featured: true
    },
    {
      title: "Member Retention Strategies That Actually Work",
      description: "Learn proven techniques to reduce churn and increase member lifetime value using data-driven approaches.",
      host: "Sarah Chen",
      date: "December 15, 2024",
      time: "Recorded",
      duration: "45 min",
      attendees: "1.2K",
      type: "recorded",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
      title: "Compliance and Legal Updates for Fitness Businesses",
      description: "Stay updated on the latest FTC regulations and compliance requirements affecting the fitness industry.",
      host: "Legal Team",
      date: "November 30, 2024",
      time: "Recorded",
      duration: "40 min",
      attendees: "950",
      type: "recorded",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&h=400&fit=crop"
    },
    {
      title: "ROI Calculation Workshop: Measuring AI Success",
      description: "Hands-on workshop teaching you how to calculate and track ROI for your AI investments.",
      host: "Analytics Team",
      date: "February 8, 2025",
      time: "3:00 PM EST",
      duration: "90 min",
      attendees: "500+",
      type: "upcoming",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    }
  ];

  const news = [
    {
      title: "DXFactor Announces New AI-Powered Member Journey Platform",
      description: "Revolutionary platform promises to transform how fitness businesses engage with members throughout their entire lifecycle.",
      author: "Press Team",
      date: "December 20, 2024",
      category: "Product Launch",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1571019613914-85e2d6d97b3c?w=600&h=400&fit=crop",
      featured: true
    },
    {
      title: "Industry Report: 2024 Fitness Technology Adoption Trends",
      description: "New research reveals significant shifts in how fitness businesses are adopting and implementing AI technologies.",
      author: "Research Team",
      date: "December 18, 2024",
      category: "Research",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
    },
    {
      title: "Partnership Announcement: DXFactor Teams with Leading CRM Platform",
      description: "Strategic partnership will provide seamless integration capabilities for fitness businesses worldwide.",
      author: "Business Development",
      date: "December 15, 2024",
      category: "Partnership",
      readTime: "2 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop"
    },
    {
      title: "Q4 Customer Success Stories: Record-Breaking Results",
      description: "DXFactor clients report unprecedented improvements in member retention and revenue growth.",
      author: "Success Team",
      date: "December 12, 2024",
      category: "Success Stories",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
    },
    {
      title: "Upcoming Feature: Advanced Analytics Dashboard",
      description: "Get ready for enhanced reporting capabilities and deeper insights into your business performance.",
      author: "Product Team",
      date: "December 10, 2024",
      category: "Product Update",
      readTime: "3 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    }
  ];

  const currentContent = activeTab === 'webinars' ? webinars : news;

  // Enhanced filtering with search
  const searchFilteredContent = currentContent.filter(item => 
    searchTerm === '' || 
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.host && item.host.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (item.author && item.author.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Enhanced Header Section */}
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
                <Video className="w-3 h-3 mr-1" />
                WEBINARS & NEWS
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
                Stay informed with expert sessions and<br />
                <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                  industry updates
                </span>
              </h1>
              <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Join our expert-led webinars and stay updated with the latest news, product releases, 
                and industry insights from DXFactor.
              </p>
            </div>
          </SpiralReveal>

          {/* Tab Navigation */}
          <SpiralReveal delay={0.3} index={1}>
            <div className="flex justify-center mb-8">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab('webinars')}
                  className={`px-6 py-2 rounded-md font-medium text-sm transition-all ${
                    activeTab === 'webinars'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Webinars
                </button>
                <button
                  onClick={() => setActiveTab('news')}
                  className={`px-6 py-2 rounded-md font-medium text-sm transition-all ${
                    activeTab === 'news'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  News & Updates
                </button>
              </div>
            </div>

            {/* Search and Stats */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-6">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder={`Search ${activeTab}...`}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white shadow-sm text-sm"
                />
              </div>
              
              {/* Stats */}
              <div className="flex items-center gap-6">
                {activeTab === 'webinars' ? (
                  <>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">25+</div>
                      <div className="text-xs text-gray-600">Webinars</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">15K+</div>
                      <div className="text-xs text-gray-600">Attendees</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">4.9★</div>
                      <div className="text-xs text-gray-600">Avg Rating</div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">50+</div>
                      <div className="text-xs text-gray-600">Articles</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">30K+</div>
                      <div className="text-xs text-gray-600">Readers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-gray-900">Weekly</div>
                      <div className="text-xs text-gray-600">Updates</div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </SpiralReveal>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Content */}
        {searchFilteredContent.filter(item => item.featured).map((item, index) => (
          <SpiralReveal key={index} delay={0.1} index={0}>
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-12 shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="lg:col-span-2 relative h-64 lg:h-80">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                      FEATURED
                    </span>
                  </div>
                  {activeTab === 'webinars' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black bg-opacity-50 rounded-full p-4">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col justify-center">
                  {activeTab === 'webinars' ? (
                    <>
                      <div className="mb-4">
                        <span className={`px-2 py-1 text-xs font-medium rounded ${
                          item.type === 'upcoming' 
                            ? 'bg-green-50 text-green-600' 
                            : 'bg-blue-50 text-blue-600'
                        }`}>
                          {item.type === 'upcoming' ? 'UPCOMING' : 'RECORDED'}
                        </span>
                      </div>
                      <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                        {item.title}
                      </h2>
                      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                        <span>Host: {item.host}</span>
                        <span>•</span>
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.duration}</span>
                      </div>
                      <button className={`px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 w-fit ${
                        item.type === 'upcoming'
                          ? 'bg-green-600 hover:bg-green-700 text-white'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                      }`}>
                        {item.type === 'upcoming' ? (
                          <>
                            <Calendar className="w-4 h-4" />
                            Register Now
                          </>
                        ) : (
                          <>
                            <Play className="w-4 h-4" />
                            Watch Recording
                          </>
                        )}
                      </button>
                    </>
                  ) : (
                    <>
                      <div className="mb-4">
                        <span className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded">
                          {item.category}
                        </span>
                      </div>
                      <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                        {item.title}
                      </h2>
                      <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                        {item.description}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                        <span>By: {item.author}</span>
                        <span>•</span>
                        <span>{item.date}</span>
                        <span>•</span>
                        <span>{item.readTime}</span>
                      </div>
                      <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center gap-2 w-fit">
                        <ExternalLink className="w-4 h-4" />
                        Read More
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </SpiralReveal>
        ))}

        {/* Content Grid */}
        <SpiralReveal delay={0.3} index={1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchFilteredContent.filter(item => !item.featured).map((item, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  {activeTab === 'webinars' && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-black bg-opacity-50 rounded-full p-3">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="mb-3">
                    {activeTab === 'webinars' ? (
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        item.type === 'upcoming' 
                          ? 'bg-green-50 text-green-600' 
                          : 'bg-blue-50 text-blue-600'
                      }`}>
                        {item.type === 'upcoming' ? 'UPCOMING' : 'RECORDED'}
                      </span>
                    ) : (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded">
                        {item.category}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    {activeTab === 'webinars' ? (
                      <>
                        <span>Host: {item.host}</span>
                        <span>{item.duration}</span>
                      </>
                    ) : (
                      <>
                        <span>By: {item.author}</span>
                        <span>{item.readTime}</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      {activeTab === 'webinars' ? (
                        <span>{item.date} • {item.attendees} attendees</span>
                      ) : (
                        <span>{item.date}</span>
                      )}
                    </div>
                    <button className={`px-4 py-2 rounded text-sm font-medium transition-colors flex items-center gap-1 ${
                      activeTab === 'webinars'
                        ? item.type === 'upcoming'
                          ? 'bg-green-600 hover:bg-green-700 text-white'
                          : 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-green-600 hover:bg-green-700 text-white'
                    }`}>
                      {activeTab === 'webinars' ? (
                        item.type === 'upcoming' ? (
                          <>
                            <Calendar className="w-3 h-3" />
                            Register
                          </>
                        ) : (
                          <>
                            <Play className="w-3 h-3" />
                            Watch
                          </>
                        )
                      ) : (
                        <>
                          <ExternalLink className="w-3 h-3" />
                          Read
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SpiralReveal>
      </div>
      
      <FeaturedSuccessStories />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default WebinarNewsPage; 