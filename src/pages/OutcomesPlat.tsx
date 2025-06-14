import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';
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
      description: 'Drive revenue, capture more leads, and expand your member base with agents that work 24/7 to grow your business.',
      agentsCount: '5 agents available',
      gradient: 'from-red-500 to-pink-600',
      bgGradient: 'from-red-50 to-pink-50'
    },
    {
      id: 'efficiency',
      title: 'Efficiency',
      description: 'Automate operations, reduce costs, and free your staff to focus on what matters most - your members.',
      agentsCount: '7 agents available',
      gradient: 'from-yellow-500 to-orange-600',
      bgGradient: 'from-yellow-50 to-orange-50'
    },
    {
      id: 'experience',
      title: 'Experience',
      description: 'Delight members at every touchpoint with AI that understands their needs and delivers personalized service.',
      agentsCount: '6 agents available',
      gradient: 'from-purple-500 to-indigo-600',
      bgGradient: 'from-purple-50 to-indigo-50'
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
      name: 'MRM Configuration',
      description: 'Enable non-technical users to customize workflows, branding, and integrations through an easy-to-use interface.',
      metric: '70%',
      metricLabel: 'FASTER SETUP',
      subMetric: '100% user self-service',
      hasCalculator: true,
      color: 'bg-white border border-gray-200'
    },
    {
      category: 'EXPERIENCE',
      name: 'Fitness LLM',
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The DX Outcomes Agent Platform
            </h1>
            <p className="text-xl text-green-600 font-semibold mb-4">
              Deploy from our growing library of specialized agents. Each one battle-tested, ROI-proven, and ready to work.
            </p>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
              Start with one agent or deploy dozens. Our platform orchestrates unlimited agents that work together to transform every aspect of your operation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                Start Free with Concierge Agent
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <Play className="w-5 h-5" />
                See the Outcomes Agent Platform in Action
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">20+</div>
                <div className="text-sm text-gray-600">Agents Available</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">100+</div>
                <div className="text-sm text-gray-600">Deployments</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Always Working</div>
              </div>
            </div>
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
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-green-200 overflow-hidden"
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  {/* Enhanced gradient background overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${outcome.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Animated border with outcome-specific gradient */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${outcome.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]`}>
                    <div className="w-full h-full bg-white rounded-2xl"></div>
                  </div>
                  
                  <div className="relative z-10">
                    {/* Enhanced title with gradient text effect */}
                    <div className="mb-6">
                      <div className={`w-full h-1 bg-gradient-to-r ${outcome.gradient} rounded-full mb-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                      <h4 className={`text-3xl font-bold bg-gradient-to-r ${outcome.gradient} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                        {outcome.title}
                      </h4>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed text-base group-hover:text-gray-700 transition-colors duration-300">
                      {outcome.description}
                    </p>
                    
                    {/* Enhanced agent count badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-green-100 rounded-full border border-green-200 group-hover:from-green-100 group-hover:to-green-200 transition-all duration-300">
                      <div className={`w-2 h-2 bg-gradient-to-r ${outcome.gradient} rounded-full animate-pulse`}></div>
                      <span className="text-sm font-semibold text-green-700">{outcome.agentsCount}</span>
                    </div>
                  </div>
                  
                  {/* Enhanced hover glow effect with outcome-specific colors */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${outcome.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}></div>
                  
                  {/* Floating elements for visual interest */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`w-3 h-3 bg-gradient-to-r ${outcome.gradient} rounded-full animate-bounce`} style={{ animationDelay: '0.5s' }}></div>
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`w-2 h-2 bg-gradient-to-r ${outcome.gradient} rounded-full animate-pulse`} style={{ animationDelay: '1s' }}></div>
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

      {/* CTA Section with Contact Form */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-green-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Transform Your Business with the DX Outcomes Agent Platform
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join 100+ fitness operations already seeing results. Deploy AI agents that deliver 24/7 to automate, optimize, and accelerate your business goals.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Free with Concierge Agent
              </button>
              <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                <Play className="w-5 h-5" />
                See the Outcomes Agent Platform in Action
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>120% Net Revenue Retention</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>100+ Deployments</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>24/7 Operation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>ROI from Day One</span>
              </div>
            </div>
          </div>
          
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OutcomesPlat; 