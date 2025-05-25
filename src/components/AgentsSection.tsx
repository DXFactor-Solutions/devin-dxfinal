import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, Bot, Target, PieChart, Activity, Settings, Info, ArrowLeft, TrendingUp, 
  Crosshair, MessageSquare, Gauge, Clock, RefreshCw, User, Globe, Users, MapPin, 
  Calendar, Handshake, Search, Tags, Percent, Rocket, Dumbbell, Apple, Heart, Trophy,
  CalendarCheck, Wrench, Lightbulb, FileText, Plus, ChevronRight, Check
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
  const [isAnimating, setIsAnimating] = useState(false);

  // Reset flipped cards when changing categories
  useEffect(() => {
    setFlippedCard(null);
  }, [activeCategory]);

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
    if (isAnimating) return;
    
    setIsAnimating(true);
    if (flippedCard === id) {
      setFlippedCard(null);
    } else {
      setFlippedCard(id);
    }
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 700); // Match to transition duration
  };

  return (
    <section className="pt-16 pb-20 bg-gray-50 relative overflow-hidden" id="agents">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden">
        <svg className="relative block w-full h-10 transform rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
      
      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
        <svg className="relative block w-full h-10" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Background gradient elements */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-green-200/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-green-200/10 rounded-full blur-[100px]"></div>
      
      {/* Green accent gradient */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-on-scroll fade-up">
          <div className="inline-block mb-3 px-4 py-1 bg-white/80 rounded-full shadow-sm">
            <span className="text-sm font-medium text-gray-600 flex items-center gap-1">
              <Bot size={14} className="text-green-600" />
              Our AI Technology
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-['Open_Sans']">
            <span className="relative inline-block">
              <span className="relative z-10">AI Micro Agents</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-green-200/50 z-0"></span>
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
                  ? 'bg-green-600 text-white shadow-md' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              onClick={() => setActiveCategory(category)}
            >
              {category === activeCategory && (
                <span className="inline-block mr-1">
                  <Check size={14} />
                </span>
              )}
              {category.charAt(0).toUpperCase() + category.slice(1)} {category === 'all' ? 'Agents' : ''}
            </button>
          ))}
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAgents.map((agent, index) => {
            const isFlipped = flippedCard === agent.id;
            
            return (
              <div key={agent.id} className={`perspective-1000 animate-on-scroll fade-up delay-${(index % 3) * 100 + 300}`}>
                <div
                  className={`relative h-[450px] w-full transition-transform duration-700 transform-style-3d ${
                    isFlipped ? 'rotate-y-180' : ''
                  }`}
                >
                  {/* Card Front */}
                  <div 
                    className="absolute inset-0 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 backface-hidden hover:shadow-xl transition-all duration-300"
                  >
                    {/* Colored accent line at top of card */}
                    <div className="h-1 w-full bg-gradient-to-r from-green-400 to-green-600"></div>
                    
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center">
                          <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mr-4 flex-shrink-0">
                            <agent.icon className="w-5 h-5 text-gray-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 font-['Open_Sans']">{agent.name}</h3>
                            <span className="text-xs font-medium text-green-600 mt-0.5 block">
                              {agent.category.charAt(0).toUpperCase() + agent.category.slice(1)}
                            </span>
                          </div>
                        </div>
                        <div className="text-xs font-medium text-white px-3 py-1 rounded-full bg-green-600">
                          AI Powered
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-6">{agent.description}</p>
                      
                      {/* Impact Stats */}
                      <div className="mt-auto mb-6">
                        <div className="flex items-center">
                          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-green-50 mr-4">
                            <span className="text-2xl font-bold text-green-600">{agent.impact.value}</span>
                          </div>
                          <div className="text-sm text-gray-700 font-medium">
                            {agent.impact.label}
                          </div>
                        </div>
                      </div>
                      
                      {/* Flip Button */}
                      <button
                        onClick={() => handleCardFlip(agent.id)}
                        className="w-full py-3 px-4 bg-green-600 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-green-700 hover:shadow-md"
                      >
                        View Capabilities
                        <ChevronRight size={16} className="text-white" />
                      </button>
                    </div>
                  </div>
                  
                  {/* Card Back */}
                  <div 
                    className="absolute inset-0 bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 backface-hidden rotate-y-180"
                  >
                    {/* Colored accent line at top of card */}
                    <div className="h-1 w-full bg-gradient-to-r from-green-400 to-green-600"></div>
                    
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center mr-3 flex-shrink-0">
                          <agent.icon className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{agent.name}</h3>
                          <p className="text-xs text-gray-500">Key Features & Capabilities</p>
                        </div>
                      </div>
                      
                      {/* Features List */}
                      <ul className="space-y-4 mb-6 h-[260px] overflow-auto">
                        {agent.features.map((feature, idx) => (
                          <li key={idx} className="flex gap-3 items-start">
                            <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5">
                              <feature.icon className="w-4 h-4" />
                            </div>
                            <p className="text-sm text-gray-700 leading-tight pt-1.5">{feature.text}</p>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Back Button */}
                      <button
                        onClick={() => handleCardFlip(agent.id)}
                        className="w-full py-3 px-4 bg-green-600 text-white text-sm font-medium rounded-lg flex items-center justify-center gap-2 transition-all duration-300 hover:bg-green-700 hover:shadow-md"
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