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
  // Agent data structure with unified green aesthetic
  const agents = [
    {
      id: 'click2save',
      name: 'Click2Save',
      description: 'Save Thousands of Dollars. Click2Save helps you stop cancellations from walking out the door.',
      category: 'RETENTION',
      icon: ShieldAlert,
      stats: {
        value: '15%',
        label: 'HIGHER RETENTION'
      }
    },
    {
      id: 'member-concierge',
      name: 'Member Concierge',
      description: '24/7 AI-powered member support that handles inquiries, bookings, and personalized recommendations.',
      category: 'EXPERIENCE',
      icon: Bot,
      stats: {
        value: '90%',
        label: 'QUERY RESOLUTION RATE'
      }
    },
    {
      id: 'lead-converter',
      name: 'Lead Converter',
      description: 'Intelligently nurtures prospects through personalized journeys, optimizing conversion at every touchpoint.',
      category: 'GROWTH',
      icon: Target,
      stats: {
        value: '40%',
        label: 'INCREASE IN LEAD CONVERSION'
      }
    },
    {
      id: 'revenue-optimizer',
      name: 'Revenue Optimizer',
      description: 'Analyzes member behavior and market trends to identify upselling and cross-selling opportunities.',
      category: 'GROWTH',
      icon: PieChart,
      stats: {
        value: '25%',
        label: 'BOOST IN REVENUE PER MEMBER'
      }
    },
    {
      id: 'fitness-coach',
      name: 'Fitness Coach AI',
      description: 'Delivers personalized workout plans and nutrition guidance based on individual goals and progress.',
      category: 'EXPERIENCE',
      icon: Activity,
      stats: {
        value: '60%',
        label: 'IMPROVEMENT IN MEMBER ENGAGEMENT'
      }
    },
    {
      id: 'operations-manager',
      name: 'Operations Manager',
      description: 'Optimizes facility usage, manages equipment maintenance, and automates administrative tasks.',
      category: 'OPERATIONS',
      icon: Settings,
      stats: {
        value: '50%',
        label: 'REDUCTION IN OPERATIONAL COSTS'
      }
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
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header Section - Enhanced with modern design elements */}
        <SpiralReveal delay={0.1} index={0}>
          <div className="relative text-center mb-16">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
              <div className="absolute top-16 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>
            
            {/* Main heading with enhanced typography */}
            <div className="relative z-10 mb-8">
              <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-6 leading-tight">
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
              <div className="flex justify-center items-center mb-6">
                <div className="w-12 h-px bg-gradient-to-r from-transparent to-green-500"></div>
                <div className="mx-4 w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-12 h-px bg-gradient-to-l from-transparent to-green-500"></div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-4">
                Not Just Another AI Tool.{" "}
                <span className="text-green-600 font-black">This Is the Operator's Edge.</span>
              </h3>
            </div>
          </div>
        </SpiralReveal>
        
        {/* Enhanced description section - Full width thin strip */}
        <SpiralReveal delay={0.3} index={1}>
          <div className="w-full bg-gradient-to-r from-green-50 via-gray-50 to-green-50 border-y border-green-100 py-6 mb-16 -mx-6 sm:-mx-8">
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
              <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-start gap-8">
                {/* Left side - Header with icon */}
                <div className="flex items-center flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">Built by Operators, For Operators</h4>
                    <p className="text-sm text-gray-600">Real solutions for real problems</p>
                  </div>
                </div>
                
                {/* Center - Description */}
                <div className="flex-1 text-center lg:text-left max-w-2xl">
                  <p className="text-base text-gray-700 leading-relaxed">
                    DXFactor has been in the fitness trenches for years, solving challenges from 
                    <span className="font-semibold text-green-600"> cancellations to collections</span>, 
                    <span className="font-semibold text-green-600"> onboarding to member experience</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SpiralReveal>

        {/* Agent cards grid - Display all agents without filtering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
          {agents.map((agent, index) => (
            <SpiralReveal key={agent.id} delay={0.5 + index * 0.1} index={index + 2}>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-start mb-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mr-3">
                      {React.createElement(agent.icon, { className: "w-5 h-5 text-green-600" })}
                    </div>
                    <div className="flex-1">
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded mb-2 ${getCategoryColor(agent.category)}`}>
                        {agent.category}
                      </span>
                      <h3 className="text-base font-bold text-gray-900">{agent.name}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-5 text-sm leading-relaxed">
                    {agent.description}
                  </p>
                  
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-2xl font-bold text-green-600">{agent.stats.value}</div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">
                        {agent.stats.label}
                      </div>
                    </div>
                    <button className="text-green-600 border border-green-300 rounded px-3 py-2 text-xs font-medium hover:bg-green-50 flex items-center gap-1">
                      <Calculator className="w-3 h-3" />
                      Calculate ROI
                    </button>
                  </div>
                </div>
              </div>
            </SpiralReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection;