import React, { useState } from 'react';
import { 
  ShieldAlert, Bot, Target, PieChart, Activity, Settings,
  Calculator, ArrowRight
} from 'lucide-react';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';
import DXFactorBackground from './DXFactorBackground';

const AgentsSection: React.FC = () => {
  // Agent data structure with unified green aesthetic
  const agents = [
    {
      id: 'click2save',
      name: 'Click2Save',
      shortName: 'C2S',
      description: 'Save Thousands of Dollars Click2Save helps you stop cancellations from walking out the door.',
      category: 'Retention',
      icon: ShieldAlert,
      stats: {
        value: '15%',
        label: 'Higher Retention'
      },
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'member-concierge',
      name: 'Member Concierge',
      shortName: 'MC',
      description: '24/7 AI-powered member support that handles inquiries, bookings, and personalized recommendations.',
      category: 'Experience',
      icon: Bot,
      stats: {
        value: '90%',
        label: 'Resolution Rate'
      },
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'lead-converter',
      name: 'Lead Converter',
      shortName: 'LC',
      description: 'Intelligently nurtures prospects through personalized journeys, optimizing conversion at every touchpoint.',
      category: 'Growth',
      icon: Target,
      stats: {
        value: '40%',
        label: 'Lead Conversion'
      },
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'revenue-optimizer',
      name: 'Revenue Optimizer',
      shortName: 'RO',
      description: 'Analyzes member behavior and market trends to identify upselling and cross-selling opportunities.',
      category: 'Growth',
      icon: PieChart,
      stats: {
        value: '25%',
        label: 'Revenue Boost'
      },
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'fitness-coach',
      name: 'Fitness Coach AI',
      shortName: 'FC',
      description: 'Delivers personalized workout plans and nutrition guidance based on individual goals and progress.',
      category: 'Experience',
      icon: Activity,
      stats: {
        value: '60%',
        label: 'Engagement Lift'
      },
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      id: 'operations-manager',
      name: 'Operations Manager',
      shortName: 'OM',
      description: 'Optimizes facility usage, manages equipment maintenance, and automates administrative tasks.',
      category: 'Operations',
      icon: Settings,
      stats: {
        value: '50%',
        label: 'Cost Reduction'
      },
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden py-10" id="agents">
      {/* Modern Grid Background */}
      <div className="absolute inset-0 z-0">
        <DXFactorBackground />
      </div>
      
      <div className="max-w-[1500px] mx-auto px-6 w-full relative z-10 flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-center justify-center">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-5 tracking-tight leading-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text">
              Meet the DX Outcomes Agent Platform
            </h2>
            <h3 className="text-xl md:text-2xl font-medium bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-6">
              Not Just Another AI Tool. This Is the Operator's Edge.
            </h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-gray-700 font-light leading-relaxed mb-5">
                DXFactor has been in the trenches of Fitness & Wellness for years – working side-by-side with operators to solve real challenges.
              </p>
              <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
                From cancellations to collections, onboarding to member experience, we've seen the real problems. That's why we built <span className="font-semibold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Outcome Agents</span> – AI modules that work 24/7 to grow your business, save staff time, and delight members.
              </p>
            </div>
          </div>

          {/* Cards Arranged Horizontally with Staggered Heights */}
          <div className="relative w-full max-w-[1400px]">
            {/* Horizontal Layout Container with Staggered Positioning */}
            <div className="flex items-center justify-center gap-4 relative h-[350px]">
              {/* Left Side Cards (first 3) - Staggered Heights */}
              <div className="flex gap-4 items-center">
                {/* Card 1 - Higher */}
                <div className="transform -translate-y-10 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-12 cursor-pointer group">
                  <div className="w-60 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-md rounded-3xl shadow-xl shadow-green-100/50 border border-white/50 p-5 hover:shadow-2xl hover:shadow-green-200/60 transition-all duration-500 group-hover:border-green-200/70">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-green-100/50 transition-all duration-300 group-hover:shadow-green-200/70", "bg-gradient-to-br from-green-50 to-green-100 border border-green-200/50")}>
                          {React.createElement(agents[0].icon, { className: "w-5 h-5 text-green-600", strokeWidth: 1.5 })}
                        </div>
                        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{agents[0].name}</h3>
                      </div>
                      <div className="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-green-100 to-green-200 text-green-700 border border-green-200/50 shadow-sm">
                        {agents[0].category}
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed mb-5 group-hover:text-gray-700 transition-colors duration-300">{agents[0].description}</p>
                    <div className="flex items-center justify-between">
                      <div className="group-hover:transform group-hover:scale-105 transition-transform duration-300">
                        <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">{agents[0].stats.value}</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">{agents[0].stats.label}</div>
                      </div>
                      <Button variant="outline" size="sm" className="border-2 border-green-300/70 text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:border-green-400 text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-green-100/50 hover:shadow-green-200/70 transition-all duration-300">
                        <Calculator className="w-3.5 h-3.5" />
                        ROI
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Center */}
                <div className="transition-all duration-500 hover:scale-[1.02] cursor-pointer group">
                  <div className="w-64 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-md rounded-3xl shadow-xl shadow-green-100/50 border border-white/50 p-5 hover:shadow-2xl hover:shadow-green-200/60 transition-all duration-500 group-hover:border-green-200/70">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-green-100/50 transition-all duration-300 group-hover:shadow-green-200/70", "bg-gradient-to-br from-green-50 to-green-100 border border-green-200/50")}>
                          {React.createElement(agents[1].icon, { className: "w-5 h-5 text-green-600", strokeWidth: 1.5 })}
                        </div>
                        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{agents[1].name}</h3>
                      </div>
                      <div className="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-green-100 to-green-200 text-green-700 border border-green-200/50 shadow-sm">
                        {agents[1].category}
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed mb-5 group-hover:text-gray-700 transition-colors duration-300">{agents[1].description}</p>
                    <div className="flex items-center justify-between">
                      <div className="group-hover:transform group-hover:scale-105 transition-transform duration-300">
                        <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">{agents[1].stats.value}</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">{agents[1].stats.label}</div>
                      </div>
                      <Button variant="outline" size="sm" className="border-2 border-green-300/70 text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:border-green-400 text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-green-100/50 hover:shadow-green-200/70 transition-all duration-300">
                        <Calculator className="w-3.5 h-3.5" />
                        ROI
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Lower */}
                <div className="transform translate-y-12 transition-all duration-500 hover:scale-[1.02] hover:translate-y-14 cursor-pointer group">
                  <div className="w-64 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-md rounded-3xl shadow-xl shadow-green-100/50 border border-white/50 p-5 hover:shadow-2xl hover:shadow-green-200/60 transition-all duration-500 group-hover:border-green-200/70">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-green-100/50 transition-all duration-300 group-hover:shadow-green-200/70", "bg-gradient-to-br from-green-50 to-green-100 border border-green-200/50")}>
                          {React.createElement(agents[2].icon, { className: "w-5 h-5 text-green-600", strokeWidth: 1.5 })}
                        </div>
                        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{agents[2].name}</h3>
                      </div>
                      <div className="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-green-100 to-green-200 text-green-700 border border-green-200/50 shadow-sm">
                        {agents[2].category}
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed mb-5 group-hover:text-gray-700 transition-colors duration-300">{agents[2].description}</p>
                    <div className="flex items-center justify-between">
                      <div className="group-hover:transform group-hover:scale-105 transition-transform duration-300">
                        <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">{agents[2].stats.value}</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">{agents[2].stats.label}</div>
                      </div>
                      <Button variant="outline" size="sm" className="border-2 border-green-300/70 text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:border-green-400 text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-green-100/50 hover:shadow-green-200/70 transition-all duration-300">
                        <Calculator className="w-3.5 h-3.5" />
                        ROI
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Central DX Core - adjusted size */}
              <div className="flex-shrink-0 mx-5">
                <div className="w-36 h-36 bg-gradient-to-br from-white/30 via-white/20 to-white/10 backdrop-blur-xl rounded-full flex items-center justify-center shadow-2xl shadow-green-200/30 border-2 border-green-300/60 hover:shadow-green-300/40 hover:scale-105 hover:border-green-400/70 transition-all duration-500 cursor-pointer group relative">
                  {/* Inner border ring for extra definition */}
                  <div className="absolute inset-1 rounded-full border border-white/40 pointer-events-none"></div>
                  <div className="text-center text-gray-900 group-hover:scale-110 transition-transform duration-500">
                    <div className="text-2xl font-light mb-1 bg-gradient-to-r from-gray-800 to-gray-900 bg-clip-text text-transparent">DX</div>
                    <div className="text-xs font-medium opacity-80 tracking-wider bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">Outcomes</div>
                  </div>
                          </div>
                          </div>

              {/* Right Side Cards (last 3) - with spacing adjustments */}
              <div className="flex gap-5 items-center">
                {/* Card 4 - Lower (mirrors card 3) */}
                <div className="transform translate-y-12 transition-all duration-500 hover:scale-[1.02] hover:translate-y-14 cursor-pointer group">
                  <div className="w-64 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-md rounded-3xl shadow-xl shadow-green-100/50 border border-white/50 p-5 hover:shadow-2xl hover:shadow-green-200/60 transition-all duration-500 group-hover:border-green-200/70">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-green-100/50 transition-all duration-300 group-hover:shadow-green-200/70", "bg-gradient-to-br from-green-50 to-green-100 border border-green-200/50")}>
                          {React.createElement(agents[3].icon, { className: "w-5 h-5 text-green-600", strokeWidth: 1.5 })}
                        </div>
                        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{agents[3].name}</h3>
                      </div>
                      <div className="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-green-100 to-green-200 text-green-700 border border-green-200/50 shadow-sm">
                        {agents[3].category}
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed mb-5 group-hover:text-gray-700 transition-colors duration-300">{agents[3].description}</p>
                    <div className="flex items-center justify-between">
                      <div className="group-hover:transform group-hover:scale-105 transition-transform duration-300">
                        <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">{agents[3].stats.value}</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">{agents[3].stats.label}</div>
                          </div>
                      <Button variant="outline" size="sm" className="border-2 border-green-300/70 text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:border-green-400 text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-green-100/50 hover:shadow-green-200/70 transition-all duration-300">
                            <Calculator className="w-3.5 h-3.5" />
                        ROI
                          </Button>
                    </div>
                  </div>
                </div>

                {/* Card 5 - Center (mirrors card 2) */}
                <div className="transition-all duration-500 hover:scale-[1.02] cursor-pointer group">
                  <div className="w-64 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-md rounded-3xl shadow-xl shadow-green-100/50 border border-white/50 p-5 hover:shadow-2xl hover:shadow-green-200/60 transition-all duration-500 group-hover:border-green-200/70">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-green-100/50 transition-all duration-300 group-hover:shadow-green-200/70", "bg-gradient-to-br from-green-50 to-green-100 border border-green-200/50")}>
                          {React.createElement(agents[4].icon, { className: "w-5 h-5 text-green-600", strokeWidth: 1.5 })}
                        </div>
                        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{agents[4].name}</h3>
                      </div>
                      <div className="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-green-100 to-green-200 text-green-700 border border-green-200/50 shadow-sm">
                        {agents[4].category}
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed mb-5 group-hover:text-gray-700 transition-colors duration-300">{agents[4].description}</p>
                    <div className="flex items-center justify-between">
                      <div className="group-hover:transform group-hover:scale-105 transition-transform duration-300">
                        <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">{agents[4].stats.value}</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">{agents[4].stats.label}</div>
                      </div>
                      <Button variant="outline" size="sm" className="border-2 border-green-300/70 text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:border-green-400 text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-green-100/50 hover:shadow-green-200/70 transition-all duration-300">
                        <Calculator className="w-3.5 h-3.5" />
                        ROI
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Card 6 - Higher (mirrors card 1) */}
                <div className="transform -translate-y-12 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-14 cursor-pointer group">
                  <div className="w-64 bg-gradient-to-br from-white/95 to-white/90 backdrop-blur-md rounded-3xl shadow-xl shadow-green-100/50 border border-white/50 p-5 hover:shadow-2xl hover:shadow-green-200/60 transition-all duration-500 group-hover:border-green-200/70">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center mr-3 shadow-lg shadow-green-100/50 transition-all duration-300 group-hover:shadow-green-200/70", "bg-gradient-to-br from-green-50 to-green-100 border border-green-200/50")}>
                          {React.createElement(agents[5].icon, { className: "w-5 h-5 text-green-600", strokeWidth: 1.5 })}
                        </div>
                        <h3 className="text-sm font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">{agents[5].name}</h3>
                      </div>
                      <div className="px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-green-100 to-green-200 text-green-700 border border-green-200/50 shadow-sm">
                        {agents[5].category}
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs leading-relaxed mb-5 group-hover:text-gray-700 transition-colors duration-300">{agents[5].description}</p>
                    <div className="flex items-center justify-between">
                      <div className="group-hover:transform group-hover:scale-105 transition-transform duration-300">
                        <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">{agents[5].stats.value}</div>
                        <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">{agents[5].stats.label}</div>
                      </div>
                      <Button variant="outline" size="sm" className="border-2 border-green-300/70 text-green-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:border-green-400 text-xs font-semibold flex items-center gap-1.5 shadow-lg shadow-green-100/50 hover:shadow-green-200/70 transition-all duration-300">
                        <Calculator className="w-3.5 h-3.5" />
                        ROI
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Connection Lines with Gradients */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: 'rgba(34, 197, 94, 0.1)', stopOpacity: 1 }} />
                  <stop offset="50%" style={{ stopColor: 'rgba(34, 197, 94, 0.3)', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: 'rgba(34, 197, 94, 0.1)', stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              {/* Line from left group to center */}
              <line x1="30%" y1="50%" x2="50%" y2="50%" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="6,6" />
              {/* Line from center to right group */}
              <line x1="50%" y1="50%" x2="70%" y2="50%" stroke="url(#connectionGradient)" strokeWidth="2" strokeDasharray="6,6" />
              </svg>
                    </div>
        </div>
      </div>
    </section>
  );
};

export default AgentsSection; 