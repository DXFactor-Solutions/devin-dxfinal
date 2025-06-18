import React, { useState } from 'react';
import { 
  ShieldAlert, Bot, Target, PieChart, Activity, Settings,
  Calculator, ArrowRight, Brain, Database, Smartphone, Link2, Users, BarChart3, Play
} from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import ROICalculator from '@/components/ROICalculator';

// Simple CSS animation wrapper
const SimpleReveal = ({ children, delay = 0 }) => {
  return (
    <div 
      className="animate-in fade-in slide-in-from-bottom-4 duration-700 fill-mode-both"
      style={{ animationDelay: `${delay * 200}ms` }}
    >
      {children}
    </div>
  );
};

const AgentsSection: React.FC = () => {
const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set());
  const [calculatorOpen, setCalculatorOpen] = useState(false);
  const [selectedAgent, setSelectedAgent] = useState<string>("");
  
  const handleCardFlip = (agentId: string) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(agentId)) {
        newSet.delete(agentId);
      } else {
        newSet.add(agentId);
      }
      return newSet;
    });
  };

  const handleROIClick = (agentName: string) => {
    setSelectedAgent(agentName);
    setCalculatorOpen(true);
  };

    // Updated Agent data structure with one-liners
  const agents = [
    {
      id: 'concierge',
      name: 'Concierge',
      oneLiner: 'Deliver instant answers, book appointments, and support members around the clock—while cutting response times and front desk workload.',
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
      oneLiner: 'Stop cancellations from walking out the door—Click2Save is proven to save up to 15% of at-risk members and automates 100% of the cancellation process.',
      description: 'AI intercepts cancellations with automated retention offers, and incentive flows based on member profile. Outcome: More cancels saved, actionable churn insights, increased revenue & hundreds of hours save in manual effort to process cancellations.',
      category: 'GROWTH',
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
      oneLiner: 'Cut onboarding time in half with AI-guided training that saves hours and gets staff ramped up faster.',
      description: 'Centralizes SOPs, training videos, and guides with AI search and Q&A. Empowers staff to self-learn and reduces time spent on manual training. Outcome: Faster onboarding, higher compliance, consistent staff knowledge.',
      category: 'GROWTH',
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
      oneLiner: 'Recover up to 96% of outstanding balances—while eliminating staff time spent chasing payments.',
      description: 'Automates billing reminders, payment follow-ups, and escalations for overdue accounts. Tracks collections and provides actionable reports. Outcome: Improved cash flow, fewer missed payments, and less manual chasing.',
      category: 'EFFICIENCY',
      icon: BarChart3,
      stats: {
        value: '10%',
        label: 'MINIMUM REDUCTION IN COLLECTION FEES'
      },
      additionalStat: 'Reduction in staff hours calling members'
    },
    {
      id: 'Configurator ',
      name: 'Configurator ',
      oneLiner: 'Enable non-technical users to customize workflows, branding, and integrations through a no-code interface.',
      description: 'Enables non-technical users to customize workflows, branding, and integrations through a no-code interface. Outcome: Faster implementations & Go-Live, less IT dependency, and tailored platform experiences.',
      category: 'EFFICIENCY',
      icon: Settings,
      stats: {
        value: '70%',
        label: 'FASTER SETUP'
      },
      additionalStat: '100% user self-service'
    },
    {
      id: 'fitness-llm',
      name: 'Prompt Analytics',
oneLiner: 'Ask data questions in plain English and get instant, accurate reports without SQL or technical skills.',
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
      case 'EXPERIENCE': return 'bg-green-100 text-green-800';
      case 'GROWTH': return 'bg-green-100 text-green-800';
      case 'OPERATIONS': return 'bg-green-100 text-green-800';
      case 'EFFICIENCY': return 'bg-green-100 text-green-800';
      default: return 'bg-green-100 text-green-800';
    }
  };

  const filteredAgents = activeFilter === 'All Agents' 
    ? agents 
    : agents.filter(agent => agent.category.toLowerCase() === activeFilter.toLowerCase());

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white" id="agents">
      <style dangerouslySetInnerHTML={{ __html: `
        .flip-card {
          perspective: 1000px;
          width: 100%;
          height: 100%;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: left;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card.flipped .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          top: 0;
          left: 0;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}} />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section - Enhanced with modern design elements */}
        <SimpleReveal delay={1}>
          <div className="relative text-center mb-12 sm:mb-16 lg:mb-20">
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-green-500/5 rounded-full blur-3xl"></div>
              <div className="absolute top-16 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        
            {/* Main heading with enhanced typography */}
            <div className="relative z-10 mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-3 sm:mb-4 leading-tight">
              Meet the{" "}
<span className="relative">
              <span className="bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 bg-clip-text text-transparent">
                DX Outcomes Micro-Agent Platform
</span>
              </span>
              <br />
              Agent Platform
            </h2>
            
{/* Decorative elements */}
            <div className="flex justify-center items-center mb-3 sm:mb-4">
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-green-500"></div>
              <div className="mx-3 sm:mx-4 w-2 sm:w-3 h-2 sm:h-3 bg-green-500 rounded-full"></div>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-green-500"></div>
            </div>

            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-700 mb-3 sm:mb-4">
              Not Just Another AI Tool.{" "}
              <span className="text-green-600 font-black">This Is the Operator's Edge.</span>
            </h3>
</div>
          </div>
        </SimpleReveal>
            
{/* Enhanced description section - Centered text without box */}
        <SimpleReveal delay={2}>
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed max-w-4xl mx-auto">
              DXFactor has been in the trenches of Fitness & Wellness for years – working side-by-side with operators to solve real challenges. From{" "}
              <span className="font-semibold text-green-600">cancellations to collections</span>,{" "}
              <span className="font-semibold text-green-600">onboarding to member experience</span>, we've seen the real problems. That's why we built Outcome Agents – AI modules that work 24/7 to grow your business, save staff time, and delight members.
            </p>
          </div>
        </SimpleReveal>

        {/* Agent cards grid - Responsive layout with flip functionality */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-12">
          {agents.map((agent, index) => (
            <SimpleReveal key={agent.id} delay={3 + index}>
              <div 
                className={`flip-card ${flippedCards.has(agent.id) ? 'flipped' : ''}`}
                style={{ minHeight: '350px' }}
                onClick={() => handleCardFlip(agent.id)}
              >
                <div className="flip-card-inner h-full">
                  {/* Front of card */}
                  <div className="flip-card-front h-full">
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col cursor-pointer">
                                    <div className="p-4 flex-1 flex flex-col">
                      {/* Simple header */}
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          {React.createElement(agent.icon, { className: "w-5 h-5 text-green-600" })}
                        </div>
                                                    <span className="px-2 py-1 text-xs font-medium rounded-md bg-green-100 text-green-800">
                              {agent.category}
                            </span>
                          </div>

                        {/* Title */}
                        <h3 className="text-base font-semibold text-gray-900 mb-1">{agent.name}</h3>
                        
                        {/* Description */}
                        <div className="flex-1 mb-2">
                          <p className="text-xs text-gray-600 leading-relaxed">
{agent.oneLiner}
</p>
                                              </div>

                      {/* Bottom section - always at bottom */}
                      <div className="mt-auto">
                        {/* Simple stats */}
                          <div className="bg-gray-50 rounded-lg p-3 mb-2">
                          <div className="flex items-baseline gap-2 mb-1">
                            <span className="text-xl font-bold text-black">{agent.stats.value}</span>
                            <span className="text-[10px] text-black uppercase font-medium">
                              {agent.stats.label}
</span>
                            </div>
                          {agent.additionalStat && (
                              <p className="text-xs text-green-700 font-medium">
                                {agent.additionalStat}
                              </p>
)}
                      </div>

                      {/* Simple button */}
                                              <button
                                                    className="w-full bg-green-600 text-white rounded-lg py-2 text-xs font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleROIClick(agent.name);
                            }}
                        >
                          <Calculator className="w-4 h-4" />
                          ROI Calculator
                        </button>
                        
                        {/* Flip hint */}
                          <p className="text-[10px] text-gray-400 text-center mt-2">Click to flip</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                                      <div className="flip-card-back h-full">
                        <div className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col cursor-pointer">
                      <div className="p-4 flex-1 flex flex-col">
                              {/* Simple header */}
                                <div className="flex items-center justify-between mb-2">
                                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                            {React.createElement(agent.icon, { className: "w-5 h-5 text-green-600" })}
                                                      </div>
<span                                   className="px-2 py-1 text-xs font-medium rounded-md bg-green-100 text-green-800"                                >
                                  {agent.category}
                                </span>
                                                      </div>

                        {/* Title */}
                        <h3 className="text-base font-semibold text-gray-900 mb-1">{agent.name}</h3>
                        
                        {/* Detailed description */}
                        <p className="text-xs text-gray-600 leading-relaxed flex-1">
                          {agent.description}
                        </p>
                        
                        {/* Flip hint */}
                        <p className="text-[10px] text-gray-400 text-center mt-2">Click to flip back</p>
                      </div>
                    </div>
                  </div>
                </div>
                </div>
              </SimpleReveal>
            ))}
        </div>

        {/* CTA Section */}
        <SimpleReveal delay={9}>
          <div className="text-center mt-12 sm:mt-16 lg:mt-20">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 sm:p-6 border border-green-100 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-on-scroll scale-in delay-300">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                Ready to Transform Your Operations?
              </h3>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center items-center">
                <button type="button" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 hover:scale-105 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium shadow transition-all duration-300 inline-flex items-center justify-center text-xs sm:text-sm group">
                  Start Free with Concierge Agent
                  <ArrowRight className="ml-2 w-3 sm:w-4 h-3 sm:h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button type="button" className="w-full sm:w-auto border border-green-600 hover:border-green-700 text-green-600 hover:text-white hover:bg-green-600 hover:scale-105 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center text-xs sm:text-sm group">
                  <Play className="mr-2 w-3 sm:w-4 h-3 sm:h-4 group-hover:scale-110 transition-transform" />
                  <span className="hidden sm:inline">See the Outcomes Micro-Agent Platform in Action</span>
                  <span className="sm:hidden">Watch Demo</span>
                </button>
              </div>
            </div>
          </div>
        </SimpleReveal>
      </div>

      {calculatorOpen && (
        <ROICalculator
          isOpen={calculatorOpen}
          onClose={() => setCalculatorOpen(false)}
          agentName={selectedAgent}
        />
      )}
    </section>
  );
};

export default AgentsSection;