import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import FeaturedSuccessStories from '@/components/FeaturedSuccessStories';
import TrillionDollarBackground from '@/components/TrillionDollarBackground';
import ROICalculator from '@/components/ROICalculator';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, Zap, Star, Play, ArrowRight, CheckCircle, 
  Calculator, Users, Clock, Target, BarChart3, Sparkles
} from 'lucide-react';

const OutcomesPlat = () => {
  const [selectedOutcome, setSelectedOutcome] = useState('all');
  const [expandedCards, setExpandedCards] = useState(new Set());
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<string>("");

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
      description: '24/7 AI-powered digital assistant that manages member and prospect interactions with instant query responses and automated onboarding flows',
      keyMetrics: [
        '20% increase in lead conversion',
        '50% faster query responses', 
        '30%+ reduction in manual workload'
      ],
      coreFeatures: [
        '24/7 chat support (web, mobile, API)',
        'Automated onboarding flows',
        'Appointment scheduling',
        'Custom branding',
        'AI-powered knowledge base',
        'Proactive follow-ups (lead)',
        'Multilingual support (beta)',
        'Analytics & logging'
      ],
      integrations: [
        'Salesforce', 'HubSpot', 'Zoho',
        'CRM Billing Systems',
        'Webhooks', 'Web Widget', 'API'
      ],
      color: 'bg-green-50 border-green-200',
      categoryColor: 'bg-green-100 text-green-700 border-green-200'
    },
    {
      category: 'EFFICIENCY', 
      name: 'Learning & Discovery',
      description: 'AI-powered training platform with instant access to all SOPs, guides, and materials for seamless onboarding and upskilling',
      keyMetrics: [
        '40% faster staff onboarding',
        '50% higher training completion',
        'Higher SOP compliance'
      ],  
      coreFeatures: [
        'Centralized content repository',
        'Instant searchQ&A',
        'Multi-format support (PDF, video)',
        'Customizable modules',
        'Progress tracking',
        'Quizzes & knowledge checks',
        'AI content summarization',
        'Advanced analytics'
      ],
      integrations: [
        'Talent MS', 'Docebo', 'SAP SuccessFactors',
        'Google Drive', 'SharePoint', 'Slack', 'MS Teams'
      ],
      color: 'bg-green-50 border-green-200', 
      categoryColor: 'bg-green-100 text-green-700 border-green-200'
    },
    {
      category: 'GROWTH',
      name: 'Collections',
      description: 'Automated billing reminders and payment follow-ups with real-time analytics and audit trails',
      keyMetrics: [
        '30% reduction in overdue payments',
        '20% less manual effort',
        '2x faster payment cycles'
      ],
      coreFeatures: [
        'Automated payment reminders',
        'Escalation workflows', 
        'Customizable templates',
        'Real-time dashboards',
        'Audit trails',
        'Self-service configuration',
        'Engagement reporting'
      ],
      integrations: [
        'Stripe', 'QuickBooks', 'Xero',
        'CRM', 'SMS/Email gateways'  
      ],
      color: 'bg-green-50 border-green-200',
      categoryColor: 'bg-green-100 text-green-700 border-green-200'
    },
    {
      category: 'EFFICIENCY',
      name: 'MemberAudit', 
      description: 'Automated compliance scanning that continuously monitors member activity for anomalies and policy violations',
      keyMetrics: [
        '90% automation of audits',
        '5x faster detection',
        '75% reduction in hours'
      ],
      coreFeatures: [
        'Real-time record scanning',
        'Customizable audit criteria', 
        'Anomaly flagging & alerts',
        'Automated reports',
        'Compliance trend analytics',
        'Exportable audit logs'
      ],
      integrations: [
        'CRM/ERP systems',
        'DocuSign/eSign', 'Compliance APIs'
      ],
      color: 'bg-green-50 border-green-200',
      categoryColor: 'bg-green-100 text-green-700 border-green-200'
    },
    {
      category: 'EFFICIENCY',
      name: 'Configurator',
      description: 'No-code platform customization tool enabling non-technical users to modify branding, workflows, and integrations',
      keyMetrics: [
        '70% faster go-live',
        '100% self-service setup'
      ],
      coreFeatures: [
        'No-code admin portal',
        'Custom branding options',
        'Drag-and-drop workflows', 
        'Integration management',
        'Real-time preview'
      ],
      integrations: [
        'Zapier', 'API/Webhooks', 'Slack',
        'MS Teams', 'CRM/Billing integrations'
      ],
      color: 'bg-green-50 border-green-200',
      categoryColor: 'bg-green-100 text-green-700 border-green-200'
    },
    {
      category: 'GROWTH',
      name: 'Click2Save',
      description: 'Stop cancellations with AI-powered retention strategies that convert departing members into loyal advocates',
      keyMetrics: [
        '12% higher save rates',
        '$2,000/month revenue retained',
        '85% member satisfaction'
      ],
      coreFeatures: [
        'Real-time cancellation detection',
        'Personalized retention offers',
        'Automated save workflows',
        'Member sentiment analysis',
        'Save rate tracking',
        'Custom retention campaigns'
      ],
      integrations: [
        'CRM Systems', 'Billing Platforms',
        'Email/SMS gateways', 'Analytics tools'
      ],
      color: 'bg-green-50 border-green-200',
      categoryColor: 'bg-green-100 text-green-700 border-green-200'
    },
    {
      category: 'EXPERIENCE',
      name: 'Prompt Analytics',
      description: 'Ask data questions in plain English and get instant, accurate reports without SQL or technical skills',
      keyMetrics: [
        '95%+ answer accuracy',
        '10x faster insights',
        'Increased data democracy'
      ],
      coreFeatures: [
        'Natural language queries',
        'Instant report generation',
        'Visual data dashboards',
        'Automated insights',
        'Export capabilities',
        'Custom metrics tracking'
      ],
      integrations: [
        'Data warehouses', 'CRM systems',
        'Business Intelligence tools', 'APIs'
      ],
      color: 'bg-green-50 border-green-200',
      categoryColor: 'bg-green-100 text-green-700 border-green-200'
    }
  ];

  const filteredAgents = selectedOutcome === 'all' 
    ? featuredAgents 
    : featuredAgents.filter(agent => 
        agent.category.toLowerCase() === selectedOutcome.toLowerCase()
      );

  const toggleCardDetails = (agentName) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(agentName)) {
      newExpanded.delete(agentName);
    } else {
      newExpanded.add(agentName);
    }
    setExpandedCards(newExpanded);
  };

  const handleROICalculator = (agentName: string) => {
    // Open the ROI Calculator modal
    setSelectedAgent(agentName);
    setCalculatorOpen(true);
    
    // Analytics tracking can be added later via external analytics script
    console.log(`ROI Calculator opened for: ${agentName}`);
  };

  const navigateToOMAP = (outcomeId: string) => {
    // Set the filter for the selected outcome
    setSelectedOutcome(outcomeId);
    
    // Scroll to the agent cards section
    const agentSection = document.querySelector('[data-agent-section]');
    if (agentSection) {
      agentSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

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
                DX Outcomes Micro-Agent Platform
              </span>
              <br />
              <span className="text-white"> </span>
              <span className="text-green-500 font-black">
                
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
                  onClick={() => navigateToOMAP(outcome.id)}
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

                    {/* Click to explore indicator */}
                    <div className="flex items-center gap-2 text-green-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm">Explore Agents</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
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

      {/* Featured Agents Section - Enhanced Card Layout with Collapsible Details */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden" data-agent-section>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Our AI Agent Suite
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Each agent is purpose-built for specific business outcomes, backed by real-world data from 500+ fitness & wellness operations.
            </motion.p>
            
            {/* Filter Tabs */}
            <div className="flex flex-wrap justify-center gap-3 mt-8 mb-8">
              <button
                onClick={() => setSelectedOutcome('all')}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedOutcome === 'all'
                    ? 'bg-green-600 text-white shadow-lg shadow-green-600/30'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200 hover:border-green-300'
                }`}
              >
                All Agents
              </button>
              {outcomes.map((outcome) => (
                <button
                  key={outcome.id}
                  onClick={() => setSelectedOutcome(outcome.id)}
                  className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                    selectedOutcome === outcome.id
                      ? 'bg-green-600 text-white shadow-lg shadow-green-600/30'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border-2 border-gray-200 hover:border-green-300'
                  }`}
                >
                  {outcome.title}
                </button>
              ))}
            </div>
          </div>

          {/* Agents Grid - Enhanced Card Layout with Collapsible Details */}
          <div className="space-y-4 mb-16">
            <AnimatePresence mode="wait">
              {filteredAgents.map((agent, index) => (
                <motion.div
                  key={agent.name}
                  className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <div className="p-6">
                    {/* Header Row */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-4">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{agent.name}</h3>
                          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${agent.categoryColor}`}>
                            {agent.category}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => handleROICalculator(agent.name)}
                          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-md hover:shadow-lg"
                        >
                          <Calculator className="w-4 h-4" />
                          ROI Calculator
                        </button>
                        <button 
                          onClick={() => toggleCardDetails(agent.name)}
                          className="flex items-center gap-2 text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg text-sm font-medium border border-gray-300 hover:border-gray-400 transition-colors"
                        >
                          Details
                          <motion.svg 
                            className="w-4 h-4" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                            animate={{ rotate: expandedCards.has(agent.name) ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </motion.svg>
                        </button>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-6 max-w-4xl leading-relaxed">
                      {agent.description}
                    </p>

                    {/* Metrics Row - Enhanced */}
                    <div className="flex items-center justify-center gap-12 mb-6 py-4 bg-gray-50 rounded-lg">
                      {agent.keyMetrics.map((metric, idx) => {
                        const [value, ...labelParts] = metric.split(' ');
                        const label = labelParts.join(' ').toUpperCase();
                        return (
                          <div key={idx} className="text-center">
                            <div className="text-3xl font-bold text-green-600 mb-2">{value}</div>
                            <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold max-w-[120px]">
                              {label}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Collapsible Details Section */}
                    <AnimatePresence>
                      {expandedCards.has(agent.name) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="border-t border-gray-200 pt-6 mt-6"
                        >
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Core Features */}
                            <div>
                              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                Core Features
                              </h4>
                              <div className="space-y-3">
                                {agent.coreFeatures.map((feature, idx) => (
                                  <div key={idx} className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition-colors">
                                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                    <span className="text-sm text-gray-700">{feature}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Integrations */}
                            <div>
                              <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                                <Zap className="w-4 h-4 text-blue-500" />
                                Integrations
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {agent.integrations.map((integration, idx) => (
                                  <span 
                                    key={idx}
                                    className="inline-flex px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-lg font-medium transition-colors cursor-default"
                                  >
                                    {integration}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div 
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px'
                }}
              ></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Start with our free Concierge agent or explore custom solutions tailored to your needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group bg-white text-green-600 px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:scale-105 justify-center">
                  <Sparkles className="w-5 h-5" />
                  <span>Start Free with Concierge</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="group border-2 border-white/80 hover:border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 rounded-xl font-bold transition-all duration-300 flex items-center gap-2 justify-center">
                  <Users className="w-5 h-5" />
                  <span>Book Strategy Call</span>
                </button>
              </div>
              
              <p className="text-sm text-green-100 mt-6 opacity-80">
                Join 500+ fitness & wellness businesses already using DX AI agents
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Success Stories */}
      <FeaturedSuccessStories />

      {/* CTA Section with Contact Form */}
      <section className="py-16 bg-white transition-all duration-1000" data-contact-form>
        <ContactForm />
      </section>

      <Footer />
      
      {/* ROI Calculator Modal */}
      {calculatorOpen && (
        <ROICalculator
          isOpen={calculatorOpen}
          onClose={() => setCalculatorOpen(false)}
          agentName={selectedAgent}
        />
      )}
      
      {/* Global CSS for highlight effect */}
      <style dangerouslySetInnerHTML={{
        __html: `
          .highlight-section {
            background: linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%) !important;
            box-shadow: 0 0 30px rgba(34, 197, 94, 0.2) !important;
            transform: scale(1.01);
            transition: all 1s ease;
          }
        `
      }} />
    </div>
  );
};

export default OutcomesPlat; 