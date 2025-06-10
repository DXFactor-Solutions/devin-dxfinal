import React, { useState, useRef, useEffect } from 'react';
import { Play, Calendar, Clock, User, TrendingUp, Search, ExternalLink, Video } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
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

const WebinarsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const webinars = [
    {
      title: "Leveraging Generative AI to Enhance Member and Operational Experiences",
      description: "Explore how generative AI can transform both member experiences and operational efficiency in fitness businesses. Learn practical applications and implementation strategies.",
      host: "DXFactor Team",
      date: "August 14, 2024",
      time: "12:00 AM ET | 11:00 PM CT",
      duration: "60 min",
      attendees: "1.2K+",
      type: "recorded",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      featured: true,
      url: "https://staging.dxfactor.com/webinars/"
    },
    {
      title: "Operationalizing Generative AI – The future of the Member Experience (MX)",
      description: "Deep dive into how generative AI is reshaping member experiences in the fitness industry. Learn how to operationalize AI for maximum impact on member satisfaction and retention.",
      host: "DXFactor Experts",
      date: "August 30, 2023",
      time: "12:00 AM ET | 11:00 PM CT",
      duration: "55 min",
      attendees: "1.5K",
      type: "recorded",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      featured: true,
      url: "https://staging.dxfactor.com/webinars/"
    },
    {
      title: "The Top Three Ways That Generative AI Will Impact the Fitness Industry",
      description: "Discover the three most significant ways generative AI is transforming the fitness industry, with real-world examples and practical insights for fitness operators.",
      host: "DXFactor AI Team",
      date: "June 14, 2023",
      time: "12:00 AM ET | 11:00 PM CT",
      duration: "45 min",
      attendees: "1.8K",
      type: "recorded",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      url: "https://staging.dxfactor.com/webinars/"
    },
    {
      title: "Efficient Payment Processing and Contract Management",
      description: "Learn best practices for streamlining payment processing and contract management in fitness businesses. Discover tools and strategies to improve operational efficiency.",
      host: "DXFactor Operations Team",
      date: "May 10, 2023",
      time: "12:00 AM ET | 11:00 PM CT",
      duration: "50 min",
      attendees: "1.1K",
      type: "recorded",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      url: "https://staging.dxfactor.com/webinars/"
    },
    {
      title: "How Data is Transforming the Fitness Industry",
      description: "Explore the revolutionary impact of data analytics on fitness business operations, member engagement, and revenue optimization. Learn how to leverage data for competitive advantage.",
      host: "DXFactor Analytics Team",
      date: "April 15, 2023",
      time: "12:00 AM ET | 11:00 PM CT",
      duration: "60 min",
      attendees: "1.6K",
      type: "recorded",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      url: "https://staging.dxfactor.com/webinars/"
    }
  ];

  // Enhanced filtering with search
  const filteredWebinars = webinars.filter(webinar => 
    searchTerm === '' || 
    webinar.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    webinar.host.toLowerCase().includes(searchTerm.toLowerCase()) ||
    webinar.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const upcomingWebinars = filteredWebinars.filter(w => w.type === 'upcoming');
  const recordedWebinars = filteredWebinars.filter(w => w.type === 'recorded');

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Enhanced Header Section */}
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
                <Video className="w-3 h-3 mr-1" />
                WEBINARS
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                Expert-led sessions on<br />
                <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                  fitness technology
                </span>
              </h1>
              <p className="text-base text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Join our expert-led webinars and learn from industry leaders about AI implementation, 
                business optimization, and the latest trends in fitness technology.
              </p>
            </div>
          </SpiralReveal>

          {/* Search */}
          <SpiralReveal delay={0.3} index={1}>
            <div className="flex justify-center mb-6">
              {/* Search Bar */}
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search webinars..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white shadow-sm text-sm"
                />
              </div>
            </div>
          </SpiralReveal>
        </div>
      </div>

      {/* Featured Webinars Section */}
      {filteredWebinars.filter(w => w.featured).length > 0 && (
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SpiralReveal delay={0.1} index={0}>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured Webinars</h2>
                <p className="text-gray-600">Our most popular sessions on AI and fitness technology</p>
              </div>
            </SpiralReveal>

            <div className="grid gap-6">
              {filteredWebinars.filter(w => w.featured).map((webinar, index) => (
                <SpiralReveal key={index} delay={0.2 + index * 0.1} index={index}>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={webinar.image}
                          alt={webinar.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            {webinar.featured && (
                              <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded mb-2">
                                Featured
                              </span>
                            )}
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{webinar.title}</h3>
                            <p className="text-gray-600 mb-4">{webinar.description}</p>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center text-sm text-gray-600">
                            <User className="w-4 h-4 mr-2" />
                            <span>{webinar.host}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{webinar.date}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{webinar.time}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <TrendingUp className="w-4 h-4 mr-2" />
                            <span>{webinar.attendees} registered</span>
                          </div>
                        </div>
                        
                        <button 
                          onClick={() => webinar.url && window.open(webinar.url, '_blank')}
                          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors inline-flex items-center"
                        >
                          Watch Recording
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </button>
                      </div>
                    </div>
                  </div>
                </SpiralReveal>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Recorded Webinars Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SpiralReveal delay={0.1} index={0}>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">All Webinar Sessions</h2>
              <p className="text-gray-600">Watch our complete library of expert sessions</p>
            </div>
          </SpiralReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWebinars.filter(w => !w.featured).map((webinar, index) => (
              <SpiralReveal key={index} delay={0.2 + index * 0.1} index={index}>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group">
                  <div className="relative">
                    <img
                      src={webinar.image}
                      alt={webinar.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white bg-opacity-90 rounded-full p-3">
                        <Play className="w-6 h-6 text-gray-900" />
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {webinar.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{webinar.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-xs text-gray-500">
                        <User className="w-3 h-3 mr-1" />
                        <span>{webinar.host}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{webinar.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          <span>{webinar.attendees} views</span>
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => webinar.url && window.open(webinar.url, '_blank')}
                      className="w-full bg-gray-100 hover:bg-green-50 text-gray-900 hover:text-green-700 px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                    >
                      Watch Recording
                    </button>
                  </div>
                </div>
              </SpiralReveal>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SpiralReveal delay={0.1} index={0}>
            <h2 className="text-3xl font-bold text-white mb-4">
              Never Miss a Session
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to get notified about upcoming webinars and exclusive content
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Subscribe to Updates
            </button>
          </SpiralReveal>
        </div>
      </div>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default WebinarsPage;