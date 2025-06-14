import React, { useState, useRef, useEffect } from 'react';
import { Calendar, Clock, User, TrendingUp, Search, ExternalLink, Newspaper, ArrowRight } from 'lucide-react';
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

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const news = [
    {
      title: "DXFactor's Click2Save Agent Skyrockets at HFA Show",
      description: "DXFactor's innovative Click2Save Agent demonstrates remarkable performance at the Health & Fitness Alliance show, showcasing AI-powered member retention solutions.",
      author: "DXFactor Team",
      date: "November 15, 2024",
      category: "Product Launch",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&h=400&fit=crop",
      featured: true,
      url: "https://staging.dxfactor.com/news/dxfactors-click2save-agent-skyrockets-at-hfa-show/"
    },
    {
      title: "DXFactor and EGYM Partner to Innovate Fitness with AI Solutions, Unveiled at the Fitness Tech Summit",
      description: "A strategic partnership between DXFactor and EGYM to transform fitness technology through AI-driven digital solutions, enhancing member experiences and business growth.",
      author: "Ron Benamor",
      date: "October 22, 2024",
      category: "Partnerships",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      featured: true,
      url: "https://staging.dxfactor.com/news/dxfactor-and-egym-partner-to-innovate-fitness-with-ai-solutions-unveiled-at-the-fitness-tech-summit/"
    },
    {
      title: "DXFactor Launches FitGenAI: Elevating Member Experience Using Generative AI",
      description: "Tailoring Tomorrow's Gym: FitGenAI Revolutionizes Member Engagement Through Precision and Personalization. When a third of online sales seldom translate to footfalls, even a 50% enhancement via FitGenAI can catalyze monumental member experience and growth.",
      author: "DXFactor Team",
      date: "October 24, 2023",
      category: "Product Launch",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      url: "https://staging.dxfactor.com/news/dxfactor-launches-fitgenai-elevating-member-experience-using-generative-ai/"
    },
    {
      title: "DXFactor and ABC Fitness: Revolutionizing the Fitness Industry Through Strategic Partnership",
      description: "Strategic partnership announced at IHRSA 2024 to revolutionize fitness technology with AI and generative AI, focusing on member engagement and operational efficiency.",
      author: "DXFactor Team",
      date: "March 8, 2024",
      category: "Partnerships",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?w=600&h=400&fit=crop",
      url: "https://staging.dxfactor.com/news/dxfactor-and-abc-fitness-revolutionizing-the-fitness-industry-through-strategic-partnership/"
    },
    {
      title: "Fitness Technology Summit Celebrates 10th Year of Sold Out Event Discussing Digital Transformation in Health and Fitness",
      description: "The Whitley Hotel in Atlanta, GA, hosted fitness industry executives for the 10th Annual Fitness Technology Summit, featuring an all-female industry advisory panel and a $125,000 donation to the National Health and Fitness Alliance.",
      author: "Rohan Shroff",
      date: "October 20, 2022",
      category: "Industry Events",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      url: "https://staging.dxfactor.com/news/fitness-technology-summit-celebrates-10th-year-of-sold-out-event-discussing-digital-transformation-in-health-and-fitness/"
    }
  ];

  // Enhanced filtering with search
  const filteredNews = news.filter(article => {
    const matchesSearch = searchTerm === '' || 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesSearch;
  });

  const featuredNews = filteredNews.filter(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

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
                <Newspaper className="w-3 h-3 mr-1" />
                NEWS & UPDATES
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                Latest news and<br />
                <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                  company updates
                </span>
              </h1>
              <p className="text-base text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Stay informed about DXFactor's latest developments, partnerships, product releases, 
                and industry insights.
              </p>
            </div>
          </SpiralReveal>

          {/* Search Controls */}
          <SpiralReveal delay={0.3} index={1}>
            <div className="flex justify-center mb-6">
              {/* Search Bar */}
              <div className="relative max-w-md w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search news..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white shadow-sm text-sm"
                />
              </div>
            </div>
          </SpiralReveal>

        </div>
      </div>

      {/* Featured News Section */}
      {featuredNews.length > 0 && (
        <div className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SpiralReveal delay={0.1} index={0}>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Featured News</h2>
                <p className="text-gray-600">Our top stories and announcements</p>
              </div>
            </SpiralReveal>

            <div className="grid gap-6">
              {featuredNews.map((article, index) => (
                <SpiralReveal key={index} delay={0.2 + index * 0.1} index={index}>
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <img
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 md:h-full object-cover"
                        />
                      </div>
                      <div className="md:w-2/3 p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded mb-2">
                              Featured
                            </span>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{article.title}</h3>
                            <p className="text-gray-600 mb-4">{article.description}</p>
                          </div>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                          <div className="flex items-center text-sm text-gray-600">
                            <User className="w-4 h-4 mr-2" />
                            <span>{article.author}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{article.date}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{article.readTime}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-600">
                            <TrendingUp className="w-4 h-4 mr-2" />
                            <span>{article.category}</span>
                          </div>
                        </div>
                        
                        <button 
                          onClick={() => article.url && window.open(article.url, '_blank')}
                          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-medium transition-colors inline-flex items-center"
                        >
                          Read Full Article
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

      {/* Regular News Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SpiralReveal delay={0.1} index={0}>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Latest Updates</h2>
              <p className="text-gray-600">Recent news and announcements</p>
            </div>
          </SpiralReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularNews.map((article, index) => (
              <SpiralReveal key={index} delay={0.2 + index * 0.1} index={index}>
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow group">
                  <div className="relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-2 py-1 bg-white bg-opacity-90 text-gray-800 text-xs font-medium rounded">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-xs text-gray-500">
                        <User className="w-3 h-3 mr-1" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => article.url && window.open(article.url, '_blank')}
                      className="w-full bg-gray-100 hover:bg-green-50 text-gray-900 hover:text-green-700 px-4 py-2 rounded-lg font-medium transition-colors text-sm"
                    >
                      Read Article
                    </button>
                  </div>
                </div>
              </SpiralReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Signup Section */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SpiralReveal delay={0.1} index={0}>
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter and never miss important updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </div>
          </SpiralReveal>
        </div>
      </div>

      {/* Featured Success Stories */}
      <FeaturedSuccessStories />

      <ContactForm />
      <Footer />
    </div>
  );
};

export default NewsPage;