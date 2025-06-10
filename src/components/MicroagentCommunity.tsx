import React, { useState, useEffect } from 'react';
import { Home, Bot, BarChart3, Users, Settings, Plus, TrendingUp, TrendingDown, Activity, Zap, RefreshCw, MessageSquare, CheckCircle, Clock, ArrowUpRight, Eye, Link } from 'lucide-react';

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

const MicroagentCommunity = () => {
  const [activeMenuItem, setActiveMenuItem] = useState('overview');
  const [statsVisible, setStatsVisible] = useState(false);
  const [hoveredAgent, setHoveredAgent] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { 
      label: 'Revenue Growth', 
      value: '+24%', 
      trend: 'up',
      icon: TrendingUp,
      change: '+12% from last month'
    },
    { 
      label: 'Churn Rate', 
      value: '-18%', 
      trend: 'down',
      icon: TrendingDown,
      change: '5% improvement'
    },
    { 
      label: 'Member Satisfaction', 
      value: '93%', 
      trend: 'stable',
      icon: Activity,
      change: 'Industry leading'
    },
    { 
      label: 'Active Agents', 
      value: '15', 
      trend: 'stable',
      icon: Bot,
      change: '3 deployed today'
    }
  ];

  const agents = [
    { 
      id: 1,
      name: 'Click2Save',
      icon: Zap,
      description: 'Lead conversion optimizer',
      metrics: {
        active: 12,
        processed: '2.4k',
        success: '94%'
      },
      status: 'active',
      performance: '+15%'
    },
    {
      id: 2,
      name: 'Lead Converter',
      icon: RefreshCw,
      description: 'Smart qualification engine',
      metrics: {
        active: 16,
        processed: '1.8k',
        success: '87%'
      },
      status: 'active',
      performance: '+8%'
    },
    {
      id: 3,
      name: 'Member Concierge',
      icon: MessageSquare,
      description: 'Personalized support AI',
      metrics: {
        active: 8,
        processed: '956',
        success: '96%'
      },
      status: 'active',
      performance: '+22%'
    }
  ];

  const activities = [
    {
      id: 1,
      title: 'New member onboarded via Click2Save',
      time: '2 minutes ago',
      icon: CheckCircle,
      type: 'success'
    },
    {
      id: 2,
      title: 'Lead Converter processed batch of 25 leads',
      time: '15 minutes ago',
      icon: RefreshCw,
      type: 'info'
    },
    {
      id: 3,
      title: 'System optimization completed',
      time: '1 hour ago',
      icon: Activity,
      type: 'warning'
    }
  ];

  const menuItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'agents', label: 'Agents', icon: Bot },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'members', label: 'Members', icon: Users },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const getActivityColor = (type) => {
    switch(type) {
      case 'success': return 'bg-emerald-500';
      case 'info': return 'bg-blue-500';
      case 'warning': return 'bg-amber-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <section id="microagentcommunity" className="min-h-screen py-6 sm:py-8 lg:py-16 bg-green-50 flex flex-col justify-center items-center">
      {/* Elegant header section */}
      <SimpleReveal delay={1}>
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 lg:mb-20">
          <div className="text-center">
            {/* Clean, simple heading */}
            <div className="mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-2 sm:mb-3">
                DX Outcomes Agent Platform
              </h2>
              <p className="text-sm sm:text-base lg:text-lg font-medium text-green-600">$2B+ in Outcomes. One Platform.</p>
            </div>
            
            {/* Simplified description */}
            <div className="max-w-3xl mx-auto">
              <p className="text-sm sm:text-base lg:text-xl text-gray-700 leading-relaxed mb-3 sm:mb-4">
                <span className="font-semibold text-gray-900">Built by operators, for operators.</span>
              </p>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                DXFactor has been in the fitness trenches for years, solving real challenges from 
                <span className="font-medium text-green-600"> cancellations to collections</span>, 
                <span className="font-medium text-green-600"> onboarding to member experience</span>. 
                That's why we built Outcome Agents – AI modules that work 24/7 to grow your business.
              </p>
            </div>
          </div>
        </div>
      </SimpleReveal>
      
      {/* Dashboard Preview Container */}
      <SimpleReveal delay={2}>
        <div className="container mx-auto px-4 flex-grow flex items-center justify-center">
          {/* Three column layout: Real-Time | Dashboard | Integrated */}
          <div className="w-full max-w-[100rem] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-4 sm:gap-6">
            
            {/* Real-Time Card - Left Side */}
            <SimpleReveal delay={3}>
              <div className="w-full max-w-sm lg:w-56 bg-white rounded-xl p-4 sm:p-5 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 lg:mt-16 order-1 lg:order-none">
                <div className="text-center mb-3 sm:mb-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Eye className="w-5 sm:w-6 h-5 sm:h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600 mb-1 sm:mb-2">Real-Time</h3>
                </div>
                <p className="text-gray-600 text-center text-xs sm:text-sm leading-relaxed">
                  Monitor agent performance and business metrics live
                </p>
              </div>
            </SimpleReveal>

            {/* Dashboard Container - Center */}
            <div className="w-full lg:flex-[2] max-w-none transform origin-top relative animate-on-scroll scale-in order-2 lg:order-none">
              {/* Shadow effect for depth */}
              <div className="absolute -inset-4 bg-gradient-to-b from-gray-900/5 to-gray-900/10 rounded-3xl blur-xl -z-10 hidden sm:block"></div>
              
              {/* Browser Window */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl overflow-hidden border border-gray-200">
                {/* Browser Header */}
                <div className="bg-gray-100 border-b border-gray-200 px-3 sm:px-5 py-2 sm:py-3 flex items-center">
                  <div className="flex gap-1.5 sm:gap-2">
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors cursor-pointer"></div>
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
                    <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors cursor-pointer"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs sm:text-sm font-medium text-gray-600">DXFactor</span>
                  </div>
                  <div className="w-16 sm:w-24"></div>
                </div>

                {/* Dashboard Container */}
                <div className="flex h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px]">
                  {/* Sidebar - Hidden on mobile, shown on tablet and up */}
                  <aside className="hidden sm:block w-36 md:w-48 lg:w-52 bg-gradient-to-b from-gray-50 to-gray-100 border-r border-gray-200 animate-on-scroll slide-left">
                    <div className="p-2 sm:p-3 lg:p-4">
                      <h1 className="text-sm sm:text-base lg:text-xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">DXFactor</h1>
                      
                      <nav className="space-y-1">
                        {menuItems.map(item => {
                          const Icon = item.icon;
                          return (
                            <button
                              key={item.id}
                              onClick={() => setActiveMenuItem(item.id)}
                              className={`w-full flex items-center gap-1.5 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                                activeMenuItem === item.id
                                  ? 'bg-gray-900 text-white shadow-md transform scale-105'
                                  : 'text-gray-600 hover:bg-white hover:shadow-sm hover:text-gray-900'
                              }`}
                            >
                              <Icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${activeMenuItem === item.id ? 'text-white' : 'text-gray-500'}`} />
                              <span className="hidden md:inline">{item.label}</span>
                              <span className="md:hidden">{item.label.slice(0, 3)}</span>
                            </button>
                          );
                        })}
                      </nav>

                      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-gray-200">
                        <button className="w-full flex items-center justify-center gap-1 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                          <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                          <span className="hidden lg:inline">Create Agent</span>
                          <span className="lg:hidden">New</span>
                        </button>
                      </div>
                    </div>
                  </aside>

                  {/* Main Content */}
                  <main className="flex-1 overflow-y-auto bg-white animate-on-scroll slide-right">
                    <div className="p-3 sm:p-4 lg:p-6 max-w-7xl mx-auto">
                      {/* Dashboard Header */}
                      <div className="mb-4 sm:mb-6">
                        <h1 className="text-base sm:text-lg lg:text-2xl font-bold text-gray-900 mb-0.5 sm:mb-1">
                          Welcome back, Sarah!
                        </h1>
                        <p className="text-xs sm:text-sm text-gray-600">
                          Your AI agents are performing exceptionally well today
                        </p>
                      </div>

                      {/* Stats Grid - Mobile optimized */}
                      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6">
                        {stats.map((stat, index) => {
                          const Icon = stat.icon;
                          return (
                            <div
                              key={index}
                              className={`relative bg-white rounded-lg sm:rounded-xl p-2.5 sm:p-3 lg:p-4 border border-gray-100 hover:border-gray-300 transition-all duration-500 hover:shadow-md group cursor-pointer animate-on-scroll fade-up delay-${index * 100}`}
                            >
                              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                                <div className="mb-1 sm:mb-0">
                                  <div className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-0.5">
                                    {stat.value}
                                  </div>
                                  <div className="text-[10px] sm:text-xs font-medium text-gray-500 uppercase tracking-wide">
                                    {stat.label}
                                  </div>
                                </div>
                                <div className={`p-1 sm:p-1.5 lg:p-2 rounded-lg ${
                                  stat.trend === 'up' ? 'bg-emerald-100' : 
                                  stat.trend === 'down' ? 'bg-rose-100' : 'bg-blue-100'
                                } group-hover:scale-110 transition-transform hidden sm:block`}>
                                  <Icon className={`w-3 h-3 sm:w-3.5 sm:h-3.5 ${
                                    stat.trend === 'up' ? 'text-emerald-600' : 
                                    stat.trend === 'down' ? 'text-rose-600' : 'text-blue-600'
                                  }`} />
                                </div>
                              </div>
                              <p className="text-[10px] sm:text-xs text-gray-500 mt-1 hidden sm:block">{stat.change}</p>
                            </div>
                          );
                        })}
                      </div>
                      
                      {/* Active Agents Section - Mobile optimized */}
                      <section className="mb-4 sm:mb-6 animate-on-scroll fade-up delay-200">
                        <div className="flex justify-between items-center mb-3 sm:mb-4">
                          <h2 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">Active Agents</h2>
                          <button className="text-[10px] sm:text-xs font-semibold text-gray-600 hover:text-gray-900 flex items-center gap-0.5 sm:gap-1 transition-colors">
                            View all <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          </button>
                        </div>
                        
                        <div className="space-y-2 sm:space-y-3">
                          {agents.map((agent, index) => {
                            const Icon = agent.icon;
                            return (
                              <div
                                key={agent.id}
                                className="relative bg-green-50 rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-green-100 transition-colors border border-green-100 cursor-pointer animate-on-scroll fade-up delay-300"
                                onMouseEnter={() => setHoveredAgent(agent.id)}
                                onMouseLeave={() => setHoveredAgent(null)}
                              >
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                                  <div className="flex items-start gap-2 sm:gap-3">
                                    <div className="flex-shrink-0 bg-green-100 p-1.5 sm:p-2 rounded-lg">
                                      <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-green-600" />
                                    </div>
                                    <div className="flex-1">
                                      <div className="flex items-center gap-1.5 sm:gap-2">
                                        <h3 className="text-sm sm:text-base font-semibold text-gray-900">{agent.name}</h3>
                                        <span className="text-[10px] sm:text-xs font-medium text-green-600">{agent.performance}</span>
                                      </div>
                                      <p className="text-[10px] sm:text-xs text-gray-600">{agent.description}</p>
                                    </div>
                                  </div>
                                  
                                  <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 ml-6 sm:ml-0">
                                    <div className="text-center">
                                      <div className="text-xs sm:text-sm font-semibold">{agent.metrics.active}</div>
                                      <div className="text-[9px] sm:text-xs text-gray-500">ACTIVE</div>
                                    </div>
                                    <div className="text-center">
                                      <div className="text-xs sm:text-sm font-semibold">{agent.metrics.processed}</div>
                                      <div className="text-[9px] sm:text-xs text-gray-500">PROCESSED</div>
                                    </div>
                                    <div className="text-center">
                                      <div className="text-xs sm:text-sm font-semibold">{agent.metrics.success}</div>
                                      <div className="text-[9px] sm:text-xs text-gray-500">SUCCESS</div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </section>

                      {/* Recent Activity Section - Mobile optimized */}
                      <section className="animate-on-scroll fade-up delay-400">
                        <div className="flex justify-between items-center mb-3 sm:mb-4">
                          <h2 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900">Recent Activity</h2>
                          <button className="text-[10px] sm:text-xs font-semibold text-gray-600 hover:text-gray-900 flex items-center gap-0.5 sm:gap-1 transition-colors">
                            View all <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                          </button>
                        </div>
                        
                        <div className="space-y-2 sm:space-y-3">
                          {activities.map((activity) => {
                            const Icon = activity.icon;
                            return (
                              <div key={activity.id} className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                <div className={`p-1.5 sm:p-2 rounded-full ${getActivityColor(activity.type)}`}>
                                  <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-xs sm:text-sm text-gray-800 font-medium truncate">{activity.title}</p>
                                  <div className="flex items-center gap-0.5 sm:gap-1 mt-0.5 sm:mt-1">
                                    <Clock className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-gray-400" />
                                    <span className="text-[10px] sm:text-xs text-gray-500">{activity.time}</span>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </section>
                    </div>
                  </main>
                </div>
              </div>
            </div>

            {/* Integrated Card - Right Side */}
            <SimpleReveal delay={4}>
              <div className="w-full max-w-sm lg:w-56 bg-white rounded-xl p-4 sm:p-5 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 lg:mt-16 order-3 lg:order-none">
                <div className="text-center mb-3 sm:mb-4">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                    <Link className="w-5 sm:w-6 h-5 sm:h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600 mb-1 sm:mb-2">Integrated</h3>
                </div>
                <p className="text-gray-600 text-center text-xs sm:text-sm leading-relaxed">
                  Seamlessly connects with your existing systems like ABC, DAXCO, Jonas, Hubspot, and many more!
                </p>
              </div>
            </SimpleReveal>

          </div>
        </div>
      </SimpleReveal>
    </section>
  );
};

export default MicroagentCommunity; 