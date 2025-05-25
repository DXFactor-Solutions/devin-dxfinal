import React, { useState } from 'react';
import { 
  ShieldAlert, Bot, Target, PieChart, Activity, Settings, Info, ArrowLeft, TrendingUp, 
  Crosshair, MessageSquare, Gauge, Clock, RefreshCw, User, Globe, Users, MapPin, 
  Calendar, Handshake, Search, Tags, Percent, Rocket, Dumbbell, Apple, Heart, Trophy,
  CalendarCheck, Wrench, Lightbulb, FileText, Plus, ChevronRight
} from 'lucide-react';

// Define agent categories
type AgentCategory = 'all' | 'growth' | 'retention' | 'experience' | 'operations';

// Define agent interface
interface Agent {
  id: string;
  name: string;
  description: string;
  category: Exclude<AgentCategory, 'all'>;
  icon: React.ElementType;
  impact: {
    value: string;
    label: string;
  };
  features: {
    icon: React.ElementType;
    text: string;
  }[];
}

const AgentsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<AgentCategory>('all');
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  // Agents data
  const agents: Agent[] = [
    {
      id: 'click2save',
      name: 'Click2Save',
      description: 'Proactively identifies at-risk members and deploys targeted retention strategies before they cancel.',
      category: 'retention',
      icon: ShieldAlert,
      impact: {
        value: '85%',
        label: 'reduction in churn rate'
      },
      features: [
        {
          icon: TrendingUp,
          text: 'Analyzes 50+ behavior signals to predict cancellation risk'
        },
        {
          icon: Crosshair,
          text: 'Creates personalized retention offers based on member history'
        },
        {
          icon: MessageSquare,
          text: 'Engages via preferred channel (email, SMS, app) at optimal time'
        },
        {
          icon: Gauge,
          text: 'Continuously optimizes strategies based on results'
        }
      ]
    },
    {
      id: 'member-concierge',
      name: 'Member Concierge',
      description: '24/7 AI-powered member support that handles inquiries, bookings, and personalized recommendations.',
      category: 'experience',
      icon: Bot,
      impact: {
        value: '90%',
        label: 'query resolution rate'
      },
      features: [
        {
          icon: Clock,
          text: 'Available 24/7 across all digital channels'
        },
        {
          icon: RefreshCw,
          text: 'Integrates with your booking and membership systems'
        },
        {
          icon: User,
          text: 'Remembers preferences and history for personalized service'
        },
        {
          icon: Globe,
          text: 'Supports multiple languages and escalates to human when needed'
        }
      ]
    },
    {
      id: 'lead-converter',
      name: 'Lead Converter',
      description: 'Intelligently nurtures prospects through personalized journeys, optimizing conversion at every touchpoint.',
      category: 'growth',
      icon: Target,
      impact: {
        value: '40%',
        label: 'increase in lead conversion'
      },
      features: [
        {
          icon: Users,
          text: 'Creates unique buyer personas based on behavioral data'
        },
        {
          icon: MapPin,
          text: 'Designs optimal conversion paths for each prospect type'
        },
        {
          icon: Calendar,
          text: 'Schedules perfectly timed multi-channel touchpoints'
        },
        {
          icon: Handshake,
          text: 'Identifies ideal moment to involve human sales team'
        }
      ]
    },
    {
      id: 'revenue-optimizer',
      name: 'Revenue Optimizer',
      description: 'Analyzes member behavior and market trends to identify upselling and cross-selling opportunities.',
      category: 'growth',
      icon: PieChart,
      impact: {
        value: '25%',
        label: 'boost in revenue per member'
      },
      features: [
        {
          icon: Search,
          text: 'Identifies spending patterns and service gaps'
        },
        {
          icon: Tags,
          text: 'Creates personalized upsell and cross-sell bundles'
        },
        {
          icon: Percent,
          text: 'Optimizes pricing based on willingness to pay'
        },
        {
          icon: Rocket,
          text: 'Deploys offers through email, app, and in-person staff'
        }
      ]
    },
    {
      id: 'fitness-coach',
      name: 'Fitness Coach AI',
      description: 'Delivers personalized workout plans and nutrition guidance based on individual goals and progress.',
      category: 'experience',
      icon: Activity,
      impact: {
        value: '60%',
        label: 'improvement in member engagement'
      },
      features: [
        {
          icon: Dumbbell,
          text: 'Creates adaptive workout plans based on fitness level'
        },
        {
          icon: Apple,
          text: 'Provides nutrition guidance aligned with fitness goals'
        },
        {
          icon: Heart,
          text: 'Adjusts plans based on progress and lifestyle changes'
        },
        {
          icon: Trophy,
          text: 'Celebrates achievements and maintains motivation'
        }
      ]
    },
    {
      id: 'operations-manager',
      name: 'Operations Manager',
      description: 'Optimizes facility usage, manages equipment maintenance, and automates administrative tasks.',
      category: 'operations',
      icon: Settings,
      impact: {
        value: '50%',
        label: 'reduction in operational costs'
      },
      features: [
        {
          icon: CalendarCheck,
          text: 'Optimizes staff scheduling based on demand patterns'
        },
        {
          icon: Wrench,
          text: 'Predicts maintenance needs before equipment fails'
        },
        {
          icon: Lightbulb,
          text: 'Manages energy usage to reduce utility costs'
        },
        {
          icon: FileText,
          text: 'Automates invoicing, payroll, and inventory management'
        }
      ]
    }
  ];

  // Filter agents by category
  const filteredAgents = activeCategory === 'all' 
    ? agents 
    : agents.filter(agent => agent.category === activeCategory);

  const handleCardFlip = (id: string) => {
    if (flippedCard === id) {
      setFlippedCard(null);
    } else {
      setFlippedCard(id);
    }
  };

  return (
    <section className="pt-16 pb-16 bg-gray-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg className="relative block w-full h-8 transform rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
      
      {/* Bottom divider - enhances separation from PreacherSection */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg className="relative block w-full h-8" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-green-50"></path>
        </svg>
      </div>
      
      {/* Thin gray border to visually separate sections */}
      <div className="absolute top-8 left-0 w-full h-px bg-gray-200"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-on-scroll fade-up">
          <div className="inline-block mb-3 px-4 py-1 bg-black/5 rounded-full shadow-sm">
            <span className="text-sm font-medium text-gray-700 flex items-center gap-1">
              <Bot size={14} className="text-green-500" />
              Our AI Technology
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="relative inline-block">
              <span className="relative z-10">AI Micro Agents</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-green-200 opacity-50 z-0"></span>
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            Specialized AI agents built to solve specific challenges and drive measurable results
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center flex-wrap gap-2 mb-12 animate-on-scroll scale-in delay-200">
          {(['all', 'growth', 'retention', 'experience', 'operations'] as const).map(category => (
            <button
              key={category}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200
                ${activeCategory === category 
                  ? 'bg-black text-white shadow-lg' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)} {category === 'all' ? 'Agents' : ''}
            </button>
          ))}
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAgents.map((agent, index) => {
            const isFlipped = flippedCard === agent.id;
            
            return (
              <div key={agent.id} className={`h-[420px] perspective-1000 animate-on-scroll fade-up delay-${(index % 3) * 100 + 300}`}>
                <div
                  className={`relative h-full w-full transition-transform duration-700 transform-style-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Card Front */}
                  <div 
                    className={`absolute inset-0 bg-white rounded-xl overflow-hidden border-0 shadow-lg backface-hidden`}
                  >
                    {/* Card Header */}
                    <div className="h-24 bg-black p-6 relative">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                      
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center border border-white/20">
                            <agent.icon className="w-5 h-5 text-white" />
                          </div>
                          <h3 className="text-lg font-semibold tracking-tight text-white">{agent.name}</h3>
                        </div>
                        <span className="text-xs font-medium text-white px-3 py-1 rounded-full border border-white/30">
                          {agent.category.charAt(0).toUpperCase() + agent.category.slice(1)}
                        </span>
                      </div>
                    </div>
                    
                    {/* Card Body */}
                    <div className="p-6 flex flex-col h-[calc(100%-6rem)]">
                      <p className="text-gray-600 text-sm leading-relaxed font-normal">{agent.description}</p>
                      
                      {/* Impact Stats */}
                      <div className="mt-auto mb-6">
                        <div className="flex items-end gap-3">
                          <span className="text-4xl font-bold text-black leading-none">{agent.impact.value}</span>
                          <div className="text-sm text-gray-500 font-normal pb-1">
                            {agent.impact.label}
                          </div>
                        </div>
                      </div>
                      
                      {/* Flip Button */}
                      <button
                        onClick={() => handleCardFlip(agent.id)}
                        className="w-full py-3 px-4 bg-green-600 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-green-700"
                      >
                        View Features
                        <ChevronRight size={16} className="text-white" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Card Back */}
                  <div 
                    className={`absolute inset-0 bg-white rounded-xl overflow-hidden border-0 shadow-lg backface-hidden rotate-y-180`}
                  >
                    {/* Back Header */}
                    <div className="h-24 bg-black p-6 relative">
                      <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
                      
                      <div className="flex flex-col justify-center h-full">
                        <div className="flex items-center gap-2 mb-1">
                          <agent.icon className="w-4 h-4 text-white" />
                          <h3 className="text-lg font-semibold tracking-tight text-white">{agent.name}</h3>
                        </div>
                        <p className="text-xs text-white/80 font-normal">Key Features & Capabilities</p>
                      </div>
                    </div>
                    
                    {/* Features List */}
                    <div className="p-6 flex flex-col h-[calc(100%-6rem)]">
                      <ul className="space-y-4 mb-6 overflow-auto flex-grow">
                        {agent.features.map((feature, idx) => (
                          <li key={idx} className="flex gap-3 items-start">
                            <div className="w-6 h-6 rounded-full bg-green-50 flex items-center justify-center text-green-500 flex-shrink-0 mt-0.5">
                              <feature.icon className="w-3.5 h-3.5" />
                            </div>
                            <p className="text-sm text-gray-700 leading-tight">{feature.text}</p>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Back Button */}
                      <button
                        onClick={() => handleCardFlip(agent.id)}
                        className="w-full py-3 px-4 bg-green-600 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-green-700"
                      >
                        <ArrowLeft size={16} />
                        Back to Overview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgentsSection; 