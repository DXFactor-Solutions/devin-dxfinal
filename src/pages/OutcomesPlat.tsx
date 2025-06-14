import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import FeaturedSuccessStories from '@/components/FeaturedSuccessStories';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, Zap, Star, Play, ArrowRight, CheckCircle, 
  Calculator, Users, Clock, Target, BarChart3, Sparkles
} from 'lucide-react';

const OutcomesPlat = () => {
  const [selectedOutcome, setSelectedOutcome] = useState('all');

  const outcomes = [
    {
      id: 'growth',
      title: 'Growth',
      description: 'Drive revenue, capture more leads, and maximize retention with AI agents that convert prospects, recover payments, and save at-risk members.'
    },
    {
      id: 'efficiency',
      title: 'Efficiency',
      description: 'Automate operations 24/7, reduce costs by 70%, and let AI agents do the work of 5+ employees while your staff focuses on what matters most - your members.'
    },
    {
      id: 'experience',
      title: 'Experience',
      description: 'Delight members at every touchpoint with AI that understands their needs and delivers personalized service.'
    }
  ];

  const featuredAgents = [
    {
      category: 'EXPERIENCE',
      name: 'Concierge',
      description: 'Deliver instant answers, book appointments, and support members around the clock. Concierge handles routine inquiries so your staff can focus on high-value interactions.',
      metric: '30%',
      metricLabel: 'WINS FROM SERVICE ANNUALLY',
      subMetric: '25% faster response times',
      hasCalculator: true,
      color: 'bg-white border border-gray-200'
    },
    {
      category: 'GROWTH',
      name: 'Click2Save',
      description: 'Stop cancellations from walking out the door with Click2Save\'s proven 3-step up to 15% of cancellation attempts with personalized retention strategies.',
      metric: '12%',
      metricLabel: 'HIGHER SAVES',
      subMetric: '$2,000/month revenue retained',
      hasCalculator: true,
      color: 'bg-white border border-gray-200'
    },
    {
      category: 'GROWTH',
      name: 'Learning & Development',
      description: 'Cut onboarding time in half with AI-guided training that saves hours and gets staff productive faster than ever before.',
      metric: '40%',
      metricLabel: 'FASTER STAFF ONBOARDING',
      subMetric: '50% standardization of process and procedures',
      hasCalculator: true,
      color: 'bg-white border border-gray-200'
    },
    {
      category: 'EFFICIENCY',
      name: 'Collections',
      description: 'Recover up to 30% of outstanding balances while eliminating staff time spent chasing payments.',
      metric: '10%',
      metricLabel: 'MINIMUM REDUCTION IN COLLECTION FEES',
      subMetric: 'Reduction in staff hours calling members',
      hasCalculator: true,
      color: 'bg-white border border-gray-200'
    },
    {
      category: 'EFFICIENCY',
      name: 'Configurator',
      description: 'Enable non-technical users to customize workflows, branding, and integrations through an easy-to-use interface.',
      metric: '70%',
      metricLabel: 'FASTER SETUP',
      subMetric: '100% user self-service',
      hasCalculator: true,
      color: 'bg-white border border-gray-200'
    },
    {
      category: 'EXPERIENCE',
      name: 'Prompt Analytics',
      description: 'Ask data questions in plain English and get instant, accurate reports without SQL or technical skills.',
      metric: '95%+',
      metricLabel: 'ANSWER ACCURACY',
      subMetric: 'Increased data democracy and ability to generate insights',
      hasCalculator: true,
      color: 'bg-white border border-gray-200'
    }
  ];

  const filteredAgents = selectedOutcome === 'all' 
    ? featuredAgents 
    : featuredAgents.filter(agent => 
        agent.category.toLowerCase() === selectedOutcome.toLowerCase()
      );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 min-h-[50vh] flex items-center overflow-hidden">
        {/* Futuristic City Video Background */}
        <div className="absolute inset-0 z-0">
          {/* Video background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => console.error('Video failed to load:', e)}
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
          >
            <source src="/videos/futurecityh.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          {/* Gradient overlays for depth and readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-900/5 to-transparent"></div>
          
          {/* Animated grid overlay */}
          <div className="absolute inset-0 opacity-10">
            <div 
              className="absolute inset-0 animate-pulse"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
            ></div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-green-500 rounded-full opacity-40 animate-pulse"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center">
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-3 py-1 bg-green-600/90 backdrop-blur-sm border border-green-500 rounded-full mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
              <span className="text-white text-xs font-bold uppercase tracking-wider">
                Next-Gen AI Platform
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-white">The </span>
              <span className="text-green-500 font-black">
                DX Outcomes
              </span>
              <br />
              <span className="text-white">Agent </span>
              <span className="text-green-500 font-black">
                Platform
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              className="text-base md:text-lg text-green-500 font-bold mb-2 leading-relaxed max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Deploy from our growing library of specialized agents.
              <br />
              <span className="text-white font-semibold">Each one battle-tested, ROI-proven, and ready to work.</span>
            </motion.p>

            {/* Description */}
            <motion.p 
              className="text-sm text-white/90 mb-6 leading-relaxed max-w-xl mx-auto font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Start with one agent or deploy dozens. Our platform orchestrates unlimited agents that work together to transform every aspect of your operation.
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 justify-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <button className="group relative bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg font-bold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-green-600/30 transform hover:scale-105 justify-center border-2 border-green-500">
                <span>Start Free with Concierge Agent</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group relative border-2 border-white/80 hover:border-green-500 text-white hover:text-green-500 px-6 py-2.5 rounded-lg font-bold transition-all duration-300 flex items-center gap-2 backdrop-blur-sm bg-black/20 hover:bg-black/30 justify-center">
                <Play className="w-4 h-4" />
                <span>See Platform in Action</span>
              </button>
            </motion.div>

            {/* Compact Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 max-w-lg mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { value: '20+', label: 'AI Agents' },
                { value: '100+', label: 'Deployments' },
                { value: '24/7', label: 'Always Working' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-black text-green-500 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-white text-xs font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outcomes Selection Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-green-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-green-600 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Built on Experience, Driven by Outcomes
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Every agent in our platform was born from real challenges faced in 100s of fitness & wellness operations. We've categorized them into three outcome-focused buckets to help you find exactly what you need.
            </motion.p>
          </div>

          <div className="mb-16">
            <motion.h3 
              className="text-3xl font-bold text-gray-900 text-center mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Choose Your Outcome
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-600 text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Deploy agents that align with your business goals
            </motion.p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {outcomes.map((outcome, index) => (
                <motion.div
                  key={outcome.id}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-gray-100 hover:border-green-500 overflow-hidden"
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  {/* Enhanced background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Animated border with green theme */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]">
                    <div className="w-full h-full bg-white rounded-2xl"></div>
                  </div>
                  
                  <div className="relative z-10">
                    {/* Enhanced title with green accent */}
                    <div className="mb-6">
                      <div className="w-full h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      <h4 className="text-3xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                        {outcome.title}
                      </h4>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                      {outcome.description}
                    </p>
                  </div>
                  
                  {/* Enhanced hover glow effect with green colors */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"></div>
                  
                  {/* Floating elements for visual interest */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Agents Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Agents</h2>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-8">
              <button
                onClick={() => setSelectedOutcome('all')}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedOutcome === 'all'
                    ? 'bg-green-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                All Agents
              </button>
              {outcomes.map((outcome) => (
                <button
                  key={outcome.id}
                  onClick={() => setSelectedOutcome(outcome.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    selectedOutcome === outcome.id
                      ? 'bg-green-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {outcome.title}
                </button>
              ))}
            </div>
          </div>

          {/* Agents Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredAgents.map((agent, index) => (
              <motion.div
                key={agent.name}
                className={`${agent.color} rounded-xl p-6 hover:shadow-lg transition-shadow`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                    {agent.category}
                  </span>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{agent.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{agent.description}</p>
                
                <div className="mb-4">
                  <div className="text-2xl font-bold text-green-600 mb-1">{agent.metric}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                    {agent.metricLabel}
                  </div>
                  <div className="text-sm text-gray-600">{agent.subMetric}</div>
                </div>

                {agent.hasCalculator && (
                  <button className="flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm">
                    <Calculator className="w-4 h-4" />
                    ROI Calculator
                  </button>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View All Agents →
            </button>
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <FeaturedSuccessStories />

      {/* CTA Section with Contact Form */}
      <section className="py-16 bg-white">
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
};

export default OutcomesPlat; 