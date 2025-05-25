import React, { useState, useEffect } from 'react';
import { Home, Bot, BarChart3, Users, Settings, Plus, TrendingUp, TrendingDown, Activity, Zap, RefreshCw, MessageSquare, CheckCircle, Clock, ArrowUpRight } from 'lucide-react';

const AIMapDashboard = () => {
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
    <section className="py-10 pb-20 bg-white relative">
      {/* Header with divider line */}
      <div className="container mx-auto px-4 mb-8">
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center pt-6 animate-on-scroll fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Inside AI MAP: Your Micro Agent Platform
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
              AI MAP isn't just software—it's an ecosystem of intelligent micro-agents that work 24/7 to grow your business. Each agent is purpose-built for fitness & wellness, delivering measurable results from day one.
            </p>
          </div>
        </div>
      </div>
      
      {/* Dashboard Preview Container */}
      <div className="container mx-auto px-4">
        <div className="w-[70%] mx-auto transform origin-top relative animate-on-scroll scale-in">
          {/* Shadow effect for depth */}
          <div className="absolute -inset-4 bg-gradient-to-b from-gray-900/5 to-gray-900/10 rounded-3xl blur-xl -z-10"></div>
          
          {/* Browser Window */}
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Browser Header */}
            <div className="bg-gray-100 border-b border-gray-200 px-5 py-3 flex items-center">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400 hover:bg-red-500 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 hover:bg-yellow-500 transition-colors cursor-pointer"></div>
                <div className="w-3 h-3 rounded-full bg-green-400 hover:bg-green-500 transition-colors cursor-pointer"></div>
              </div>
              <div className="flex-1"></div>
            </div>

            {/* Dashboard Container */}
            <div className="flex h-[500px]">
              {/* Sidebar */}
              <aside className="w-52 bg-gradient-to-b from-gray-50 to-gray-100 border-r border-gray-200 animate-on-scroll slide-left">
                <div className="p-4">
                  <h1 className="text-xl font-bold text-gray-900 mb-6">DXFactor</h1>
                  
                  <nav className="space-y-1">
                    {menuItems.map(item => {
                      const Icon = item.icon;
                  return (
                        <button
                          key={item.id}
                          onClick={() => setActiveMenuItem(item.id)}
                          className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold transition-all duration-200 ${
                            activeMenuItem === item.id
                              ? 'bg-gray-900 text-white shadow-md transform scale-105'
                              : 'text-gray-600 hover:bg-white hover:shadow-sm hover:text-gray-900'
                          }`}
                        >
                          <Icon size={14} className={activeMenuItem === item.id ? 'text-white' : 'text-gray-500'} />
                          {item.label}
                        </button>
                );
              })}
                  </nav>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <button className="w-full flex items-center justify-center gap-1 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-3 py-2 rounded-lg text-xs font-semibold shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200">
                      <Plus size={14} />
                      Create Agent
                    </button>
                  </div>
                </div>
              </aside>

              {/* Main Content */}
              <main className="flex-1 overflow-y-auto bg-white animate-on-scroll slide-right">
                <div className="p-6 max-w-7xl mx-auto">
                  {/* Dashboard Header */}
                  <div className="mb-6">
                    <h1 className="text-2xl font-bold text-gray-900 mb-1">
                      Welcome back, Sarah!
                    </h1>
                    <p className="text-sm text-gray-600">
                      Your AI agents are performing exceptionally well today
                    </p>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {stats.map((stat, index) => {
                      const Icon = stat.icon;
                return (
                        <div
                          key={index}
                          className={`relative bg-white rounded-xl p-4 border border-gray-100 hover:border-gray-300 transition-all duration-500 hover:shadow-md group cursor-pointer animate-on-scroll fade-up delay-${index * 100}`}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <div className="text-xl font-bold text-gray-900 mb-0.5">
                                {stat.value}
                              </div>
                              <div className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                                {stat.label}
                              </div>
                            </div>
                            <div className={`p-2 rounded-lg ${
                              stat.trend === 'up' ? 'bg-emerald-100' : 
                              stat.trend === 'down' ? 'bg-rose-100' : 'bg-blue-100'
                            } group-hover:scale-110 transition-transform`}>
                              <Icon size={16} className={
                                stat.trend === 'up' ? 'text-emerald-600' : 
                                stat.trend === 'down' ? 'text-rose-600' : 'text-blue-600'
                              } />
                            </div>
                      </div>
                          <p className="text-xs text-gray-500">{stat.change}</p>
                        </div>
                      );
                    })}
                      </div>
                      
                  {/* Active Agents Section */}
                  <section className="mb-6 animate-on-scroll fade-up delay-200">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-bold text-gray-900">Active Agents</h2>
                      <button className="text-xs font-semibold text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-colors">
                        View all
                        <ArrowUpRight size={12} />
                      </button>
                        </div>
                    
                    <div className="space-y-3">
                      {agents.map((agent, index) => {
                        return (
                          <div
                            key={agent.id}
                            className={`group relative bg-gradient-to-br from-gray-50 to-white rounded-xl p-3 border border-gray-100 hover:border-gray-900 transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-[1.01] animate-on-scroll slide-right delay-${index * 100}`}
                            onMouseEnter={() => setHoveredAgent(agent.id)}
                            onMouseLeave={() => setHoveredAgent(null)}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                  <h3 className="text-sm font-bold text-gray-900">{agent.name}</h3>
                                  <span className={`text-xs font-bold ${
                                    agent.performance.startsWith('+') ? 'text-emerald-600' : 'text-rose-600'
                                  }`}>
                                    {agent.performance}
                                  </span>
                        </div>
                                <p className="text-xs text-gray-600">{agent.description}</p>
                      </div>
                      
                              <div className="flex gap-4 ml-4">
                                <div className="text-center">
                                  <p className="text-sm font-bold text-gray-900">{agent.metrics.active}</p>
                                  <p className="text-[10px] text-gray-500 uppercase">Active</p>
                                </div>
                                <div className="text-center">
                                  <p className="text-sm font-bold text-gray-900">{agent.metrics.processed}</p>
                                  <p className="text-[10px] text-gray-500 uppercase">Processed</p>
                      </div>
                                <div className="text-center">
                                  <p className="text-sm font-bold text-gray-900">{agent.metrics.success}</p>
                                  <p className="text-[10px] text-gray-500 uppercase">Success</p>
            </div>
          </div>
        </div>

                            <div className={`absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                      </div>
                        );
                      })}
                    </div>
                  </section>

                  {/* Recent Activity */}
                  <section className="animate-on-scroll fade-up delay-300">
                    <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h2>
                    <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100">
                      <div className="space-y-2">
                        {activities.map((activity, index) => {
                          const Icon = activity.icon;
                          return (
                            <div 
                              key={activity.id} 
                              className={`flex items-center gap-3 p-2 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 cursor-pointer group animate-on-scroll fade-in delay-${index * 100 + 300}`}
                            >
                              <div className={`p-1.5 rounded-md ${getActivityColor(activity.type)} bg-opacity-10 group-hover:scale-110 transition-transform`}>
                                <Icon size={14} className={getActivityColor(activity.type).replace('bg-', 'text-')} />
                    </div>
                              <div className="flex-1">
                                <p className="font-medium text-xs text-gray-900">{activity.title}</p>
                                <p className="text-[10px] text-gray-500 flex items-center gap-1 mt-0.5">
                                  <Clock size={10} />
                                  {activity.time}
                                </p>
                    </div>
                  </div>
                );
              })}
            </div>
                    </div>
                  </section>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced section divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-0 h-8">
        <svg className="relative block w-full h-8" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-green-100 opacity-40"></path>
        </svg>
      </div>
    </section>
  );
};

export default AIMapDashboard; 