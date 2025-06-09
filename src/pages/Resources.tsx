import React, { useState } from 'react';
import { ArrowRight, BookOpen, Video, FileText, Newspaper, Calendar, User, Clock, ExternalLink } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

const ResourcesPage = () => {
  const [activeCategory, setActiveCategory] = useState('ALL POST');

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

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-white border-b border-gray-200 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-green-600 font-semibold text-sm uppercase tracking-wider mb-4">BLOGS & NEWS</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Explore insights, updates, and<br />
            DXFactor stories.
          </h1>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`py-4 px-1 whitespace-nowrap font-semibold text-sm uppercase tracking-wider transition-all duration-200 relative ${
                  activeCategory === category
                    ? 'text-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {category}
                {activeCategory === category && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-green-600"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post - Full Width */}
        {filteredPosts.filter(post => post.featured).map((post, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex gap-2 mb-4">
                  {post.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-green-600 transition-colors cursor-pointer">
                  <a href={post.url} target="_blank" rel="noopener noreferrer">
                    {post.title}
                  </a>
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3">
                  Discover how leading fitness companies are leveraging global delivery teams to access top-tier talent while achieving exceptional return on investment. Learn the strategies that make this approach the smartest choice for modern businesses.
                </p>
                <div className="flex items-center text-gray-600 text-sm">
                  <span className="font-medium">By: {post.author}</span>
                  <span className="mx-3 text-gray-400">•</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Secondary Posts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {filteredPosts.filter(post => !post.featured).slice(0, 3).map((post, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
              <a href={post.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {post.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <div className="flex items-center text-gray-600 text-sm">
                    <span className="font-medium">{post.author}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Rest of the content with sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Remaining Posts */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPosts.filter(post => !post.featured).slice(3).map((post, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
                  <a href={post.url} target="_blank" rel="noopener noreferrer" className="block">
                    <div className="relative overflow-hidden h-48">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <div className="flex gap-2 mb-3">
                        {post.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <span className="font-medium">{post.author}</span>
                        <span className="mx-2 text-gray-400">•</span>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Resources Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Resources</h3>
              
              <div className="space-y-4">
                <a href="https://staging.dxfactor.com/ebooks/" target="_blank" rel="noopener noreferrer" 
                   className="flex items-center justify-between p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors group">
                  <div className="flex items-center">
                    <BookOpen className="w-5 h-5 text-green-600 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Ebooks</h4>
                      <p className="text-sm text-gray-600">Expert insights</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-600" />
                </a>

                <a href="https://staging.dxfactor.com/webinars/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                  <div className="flex items-center">
                    <Video className="w-5 h-5 text-gray-600 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Webinars</h4>
                      <p className="text-sm text-gray-600">Learn from leaders</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-600" />
                </a>

                <a href="https://staging.dxfactor.com/news/" target="_blank" rel="noopener noreferrer"
                   className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors group">
                  <div className="flex items-center">
                    <Newspaper className="w-5 h-5 text-gray-600 mr-3" />
                    <div>
                      <h4 className="font-semibold text-gray-900">News</h4>
                      <p className="text-sm text-gray-600">Latest updates</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-green-600" />
                </a>
              </div>
            </div>

            {/* Newsletter CTA */}
            <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl shadow-sm p-6 text-white">
              <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
              <p className="text-green-50 mb-6">Get the latest insights delivered to your inbox.</p>
              <button className="w-full bg-white text-green-600 font-semibold py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors">
                Subscribe Now
              </button>
            </div>

            {/* Popular Tags */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Popular Topics</h3>
              <div className="flex flex-wrap gap-2">
                {['AI', 'Fitness Tech', 'Member Retention', 'Digital Transformation', 'Compliance'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors cursor-pointer">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ResourcesPage; 