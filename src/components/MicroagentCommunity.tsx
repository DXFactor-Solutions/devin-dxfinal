import React, { useState, useEffect } from 'react';
import { Home, Bot, BarChart3, Users, Settings, Plus, TrendingUp, TrendingDown, Activity, Zap, RefreshCw, MessageSquare, CheckCircle, Clock, ArrowUpRight } from 'lucide-react';

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
    <section className="min-h-screen py-16 bg-gray-50 flex flex-col justify-center items-center">
      {/* Header with divider line */}
      <div className="container mx-auto px-4 mb-8">
        <div className="max-w-5xl mx-auto relative">
          <div className="text-center pt-6 animate-on-scroll fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your Always-On Digital Staff
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Your agents are only as smart as the platform that powers them. DX Micro Agent Platform was built from 100s of AI projects with 1,000s of operators just like you. We know your business inside out - from member acquisition to retention, from operations to revenue. That's why our agents deliver from day one.
            </p>
          </div>
        </div>
      </div>
      
      {/* Dashboard Preview Container */}
      <div className="container mx-auto px-4 flex-grow flex items-center justify-center">
        <div className="w-full max-w-6xl mx-auto transform origin-top relative animate-on-scroll scale-in">
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
              <div className="flex-1 text-center">
                <span className="text-sm font-medium text-gray-600">DXFactor</span>
              </div>
              <div className="w-24"></div>
            </div>

            {/* Dashboard Container */}
            <div className="flex h-[600px] md:h-[650px]">
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
                        View all <ArrowUpRight size={12} />
                      </button>
                        </div>
                    
                    <div className="space-y-3">
                      {agents.map((agent, index) => {
                        const Icon = agent.icon;
                        return (
                          <div
                            key={agent.id}
                            className="relative bg-green-50 rounded-xl p-4 hover:bg-green-100 transition-colors border border-green-100 cursor-pointer animate-on-scroll fade-up delay-300"
                            onMouseEnter={() => setHoveredAgent(agent.id)}
                            onMouseLeave={() => setHoveredAgent(null)}
                          >
                            <div className="flex justify-between items-center">
                              <div className="flex items-start gap-3">
                                <div className="flex-shrink-0 bg-green-100 p-2 rounded-lg">
                                  <Icon size={18} className="text-green-600" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2">
                                    <h3 className="font-semibold text-gray-900">{agent.name}</h3>
                                    <span className="text-xs font-medium text-green-600">{agent.performance}</span>
                        </div>
                                <p className="text-xs text-gray-600">{agent.description}</p>
                                </div>
                      </div>
                      
                              <div className="flex items-center gap-6">
                                <div className="text-center">
                                  <div className="font-semibold">{agent.metrics.active}</div>
                                  <div className="text-xs text-gray-500">ACTIVE</div>
                                </div>
                                <div className="text-center">
                                  <div className="font-semibold">{agent.metrics.processed}</div>
                                  <div className="text-xs text-gray-500">PROCESSED</div>
                      </div>
                                <div className="text-center">
                                  <div className="font-semibold">{agent.metrics.success}</div>
                                  <div className="text-xs text-gray-500">SUCCESS</div>
            </div>
          </div>
        </div>
                      </div>
                        );
                      })}
                    </div>
                  </section>

                  {/* Recent Activity Section */}
                  <section className="animate-on-scroll fade-up delay-400">
                    <div className="flex justify-between items-center mb-4">
                      <h2 className="text-lg font-bold text-gray-900">Recent Activity</h2>
                      <button className="text-xs font-semibold text-gray-600 hover:text-gray-900 flex items-center gap-1 transition-colors">
                        View all <ArrowUpRight size={12} />
                      </button>
                    </div>
                    
                    <div className="space-y-3">
                      {activities.map((activity) => {
                          const Icon = activity.icon;
                          return (
                          <div key={activity.id} className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                            <div className={`p-2 rounded-full ${getActivityColor(activity.type)}`}>
                              <Icon size={14} className="text-white" />
                    </div>
                              <div className="flex-1">
                              <p className="text-sm text-gray-800 font-medium">{activity.title}</p>
                              <div className="flex items-center gap-1 mt-1">
                                <Clock size={12} className="text-gray-400" />
                                <span className="text-xs text-gray-500">{activity.time}</span>
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
      </div>
    </section>
  );
};

export default MicroagentCommunity; 