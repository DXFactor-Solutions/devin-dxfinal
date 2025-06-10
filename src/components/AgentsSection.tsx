import React, { useState, useRef, useEffect } from 'react';
import { 
  ShieldAlert, Bot, Target, PieChart, Activity, Settings,
  Calculator, ArrowRight, Brain, Database, Smartphone, Link2, Users, BarChart3, Play
} from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import { motion, useAnimation, useInView } from 'framer-motion';

// Animation component for spiral effect - same as AboutUs.tsx
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

const AgentsSection: React.FC = () => {
  // Updated Agent data structure based on the second image
  const agents = [
    {
      id: 'concierge',
      name: 'Concierge',
      description: 'AI-powered assistant automates member queries, onboarding, and appointment bookings, ensuring prospects and members get instant, accurate answers. Outcome: Higher conversion, lower response SLAs, and improved satisfaction.',
      category: 'EXPERIENCE',
      icon: Bot,
      stats: {
        value: '30%',
        label: 'MAN HOUR SAVINGS ANNUALLY'
      },
      additionalStat: '75% faster response times'
    },
    {
      id: 'click2save',
      name: 'Click2Save',
      description: 'AI intercepts cancellations with automated retention offers, and incentive flows based on member profile. Outcome: More cancels saved, actionable churn insights, increased revenue & hundreds of hours save in manual effort to process cancellations.',
      category: 'RETENTION',
      icon: ShieldAlert,
      stats: {
        value: '12%',
        label: 'HIGHER SAVES'
      },
      additionalStat: '$2000/month revenue retained'
    },
    {
      id: 'learning-development',
      name: 'Learning & Development',
      description: 'Centralizes SOPs, training videos, and guides with AI search and Q&A. Empowers staff to self-learn and reduces time spent on manual training. Outcome: Faster onboarding, higher compliance, consistent staff knowledge.',
      category: 'OPERATIONS',
      icon: Brain,
      stats: {
        value: '40%',
        label: 'FASTER STAFF ONBOARDING'
      },
      additionalStat: '90% standardization of process and procedures'
    },
    {
      id: 'collections',
      name: 'Collections',
      description: 'Automates billing reminders, payment follow-ups, and escalations for overdue accounts. Tracks collections and provides actionable reports. Outcome: Improved cash flow, fewer missed payments, and less manual chasing.',
      category: 'OPERATIONS',
      icon: BarChart3,
      stats: {
        value: '10%',
        label: 'MINIMUM REDUCTION IN COLLECTION FEES'
      },
      additionalStat: 'Reduction in staff hours calling members'
    },
    {
      id: 'mrm-configuration',
      name: 'MRM Configuration',
      description: 'Enables non-technical users to customize workflows, branding, and integrations through a no-code interface. Outcome: Faster implementations & Go-Live, less IT dependency, and tailored platform experiences.',
      category: 'OPERATIONS',
      icon: Settings,
      stats: {
        value: '70%',
        label: 'FASTER SETUP'
      },
      additionalStat: '100% user self-service'
    },
    {
      id: 'fitness-llm',
      name: 'Fitness LLM',
      description: 'Allows any user to ask data questions in plain English and get instant, accurate reports without SQL or technical skills. Outcome: Democratized analytics, faster insights, and empowered teams.',
      category: 'EXPERIENCE',
      icon: Database,
      stats: {
        value: '95%+',
        label: 'ANSWER ACCURACY'
      },
      additionalStat: 'Increased data democracy and ability to generate insights'
    }
  ];

  const [activeFilter, setActiveFilter] = useState('All Agents');
  
  const filterCategories = [
    'All Agents',
    'Growth',
    'Retention',
    'Experience',
    'Operations'
  ];

  const getCategoryColor = (category: string) => {
    switch(category.toUpperCase()) {
      case 'RETENTION': return 'bg-green-100 text-green-800';
      case 'EXPERIENCE': return 'bg-blue-100 text-blue-800';
      case 'GROWTH': return 'bg-teal-100 text-teal-800';
      case 'OPERATIONS': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredAgents = activeFilter === 'All Agents' 
    ? agents 
    : agents.filter(agent => agent.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section className="py-12 bg-white" id="agents">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Enhanced with modern design elements */}
        <SpiralReveal delay={0.1} index={0}>
          <div className="relative text-center mb-12">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
              <div className="absolute top-16 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        
            {/* Main heading with enhanced typography */}
            <div className="relative z-10 mb-6">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-tight">
                Meet the{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 bg-clip-text text-transparent">
                    DX Outcomes
                  </span>
                  <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full"></div>
                </span>
                <br />
                Agent Platform
              </h2>
              
              {/* Decorative elements */}
              <div className="flex justify-center items-center mb-4">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-green-500"></div>
                <div className="mx-4 w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-green-500"></div>
        </div>

              <h3 className="text-lg md:text-xl font-bold text-gray-700 mb-4">
                Not Just Another AI Tool.{" "}
                <span className="text-green-600 font-black">This Is the Operator's Edge.</span>
              </h3>
            </div>
          </div>
        </SpiralReveal>

        {/* Enhanced description section - Full width thin strip */}
        <SpiralReveal delay={0.3} index={1}>
          <div className="w-full bg-gradient-to-r from-green-50 via-gray-50 to-green-50 border-y border-green-100 py-5 mb-12 -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-6">
                {/* Left side - Header with icon */}
                <div className="flex items-center flex-shrink-0">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Built by Operators, For Operators</h4>
                    <p className="text-sm text-gray-600">Real solutions for real problems</p>
                  </div>
                </div>
                
                {/* Center - Description */}
                <div className="flex-1 text-center lg:text-left max-w-xl">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    DXFactor has been in the fitness trenches for years, solving challenges from 
                    <span className="font-semibold text-green-600"> cancellations to collections</span>, 
                    <span className="font-semibold text-green-600"> onboarding to member experience</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SpiralReveal>

        {/* Agent cards grid - 3 columns layout for better fit */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {agents.map((agent, index) => (
            <SpiralReveal key={agent.id} delay={0.5 + index * 0.1} index={index + 2}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center mr-3 flex-shrink-0">
                      {React.createElement(agent.icon, { className: "w-5 h-5 text-green-600" })}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={`inline-block px-2 py-1 text-xs font-semibold rounded-md mb-2 ${getCategoryColor(agent.category)}`}>
                        {agent.category}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 leading-tight">{agent.name}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-1">
                    {agent.description}
                  </p>
                
                  <div className="flex justify-between items-end mt-auto">
                    <div className="flex-1 min-w-0 mr-3">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="text-xl font-bold text-green-600">{agent.stats.value}</span>
                        <span className="text-xs text-gray-500 uppercase tracking-wide font-semibold">
                          {agent.stats.label}
                        </span>
                      </div>
                      {agent.additionalStat && (
                        <div className="text-xs text-green-600 font-semibold leading-tight">
                          {agent.additionalStat}
                        </div>
                      )}
                    </div>
                    <button className="text-green-600 border border-green-300 rounded-lg px-3 py-2 text-sm font-semibold hover:bg-green-50 hover:border-green-400 transition-colors flex items-center gap-2 flex-shrink-0">
                      <Calculator className="w-4 h-4" />
                      <span>ROI</span>
                    </button>
                  </div>
                </div>
              </div>
            </SpiralReveal>
          ))}
        </div>

        {/* CTA Section */}
        <SpiralReveal delay={0.8} index={20}>
          <div className="text-center mt-8">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-6 border border-green-100 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-on-scroll scale-in delay-300">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Ready to Transform Your Operations?
              </h3>
              <p className="text-sm text-gray-600 mb-4 max-w-2xl mx-auto">
                Start with our most popular agent or schedule a demo to see how all 6 agents can work together for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <button type="button" className="bg-green-600 hover:bg-green-700 hover:scale-105 text-white px-6 py-3 rounded-lg font-medium shadow transition-all duration-300 inline-flex items-center text-sm group">
              Start Free with Concierge Agent
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button type="button" className="border border-green-600 hover:border-green-700 text-green-600 hover:text-white hover:bg-green-600 hover:scale-105 px-6 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center text-sm group">
                  <Play className="mr-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                  See the Outcomes Agent Platform in Action
                </button>
              </div>
            </div>
          </div>
        </SpiralReveal>
      </div>
    </section>
  );
};

export default AgentsSection;