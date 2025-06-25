'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Calendar, User, Clock, ArrowRight, TrendingUp, Zap, Target } from 'lucide-react'
import Link from 'next/link'

export default function NewsClient() {
  const newsArticles = [
    {
      id: 1,
      title: "DXFactor Announces $100M+ Revenue Generated Across 100+ Fitness Operators",
      excerpt: "Milestone achievement demonstrates the transformative power of AI microagents in the fitness industry, with operators seeing average revenue increases of 25-40%.",
      date: "2024-12-15",
      category: "Company News",
      image: "/images/news-revenue-milestone.jpg",
      featured: true
    },
    {
      id: 2,
      title: "New AI Concierge Features: 24/7 Member Support Now Available",
      excerpt: "Enhanced conversational AI capabilities enable fitness businesses to provide round-the-clock member support with human-like interactions.",
      date: "2024-12-10",
      category: "Product Update",
      image: "/images/news-concierge-update.jpg",
      featured: false
    },
    {
      id: 3,
      title: "Industry Report: AI Adoption in Fitness Reaches 40% Growth Rate",
      excerpt: "Latest industry analysis shows accelerating adoption of AI solutions in fitness and wellness, with DXFactor leading the transformation.",
      date: "2024-12-05",
      category: "Industry Insights",
      image: "/images/news-industry-report.jpg",
      featured: false
    },
    {
      id: 4,
      title: "Click2Save Microagent Reduces Member Churn by 35% on Average",
      excerpt: "New data reveals significant retention improvements across fitness operators using DXFactor's automated retention system.",
      date: "2024-11-28",
      category: "Product News",
      image: "/images/news-click2save-results.jpg",
      featured: false
    },
    {
      id: 5,
      title: "DXFactor Partners with Leading Fitness Franchise Networks",
      excerpt: "Strategic partnerships expand AI microagent availability to thousands of fitness locations nationwide.",
      date: "2024-11-20",
      category: "Partnerships",
      image: "/images/news-partnerships.jpg",
      featured: false
    },
    {
      id: 6,
      title: "Collections Microagent Achieves 90% Payment Recovery Rate",
      excerpt: "Advanced AI-powered payment recovery system maintains member relationships while maximizing collections efficiency.",
      date: "2024-11-15",
      category: "Product News",
      image: "/images/news-collections-success.jpg",
      featured: false
    }
  ]

  const featuredArticle = newsArticles.find(article => article.featured)
  const regularArticles = newsArticles.filter(article => !article.featured)

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              DXFactor <span className="text-green-600">News</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Stay updated with the latest developments in AI-powered fitness technology, industry insights, and DXFactor innovations
            </p>
          </header>
          
          {featuredArticle && (
            <div className="mb-16">
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full">
                        Featured
                      </span>
                      <span className="px-3 py-1 bg-white text-green-700 text-sm font-medium rounded-full">
                        {featuredArticle.category}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 leading-tight">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(featuredArticle.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>DXFactor Team</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>3 min read</span>
                      </div>
                    </div>
                    <button className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                      Read Full Article <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="aspect-video bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl overflow-hidden">
                    <img 
                      src={featuredArticle.image} 
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {regularArticles.map((article) => (
              <article key={article.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-video bg-gradient-to-br from-green-400 to-emerald-600 relative overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <button className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors">
                    Read More <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Stay Updated with DXFactor
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get the latest news, product updates, and industry insights delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
