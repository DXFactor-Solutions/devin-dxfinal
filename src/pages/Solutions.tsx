import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import FeaturedSuccessStories from '@/components/FeaturedSuccessStories';
import DXFactorSection from '@/components/DXFactorSection';
import { motion } from 'framer-motion';
import { 
  Cpu, Database, BarChart3, Smartphone, Wrench, Palette,
  Search, ClipboardList, Bot, Handshake, Rocket, RefreshCw,
  Play, Check, Lock, Zap, Pause
} from 'lucide-react';

const Solutions = () => {
  // Animation for infinity loop - removed scroll dependency

  const processSteps = [
    {
      number: "1",
      icon: <Search className="w-10 h-10" />,
      title: "Discovery",
      description: "Understanding your business goals and challenges"
    },
    {
      number: "2",
      icon: <ClipboardList className="w-10 h-10" />,
      title: "Strategic Planning",
      description: "Developing a roadmap for measurable success"
    },
    {
      number: "3",
      icon: <Bot className="w-10 h-10" />,
      title: "AI Optimization",
      description: "Identifying AI opportunities for smarter solutions"
    },
    {
      number: "4",
      icon: <Handshake className="w-10 h-10" />,
      title: "Collaborative Execution",
      description: "Implementing with your continuous input"
    },
    {
      number: "5",
      icon: <Rocket className="w-10 h-10" />,
      title: "Deployment",
      description: "Smooth launch with comprehensive training"
    },
    {
      number: "∞",
      icon: <RefreshCw className="w-10 h-10" />,
      title: "Ongoing AI Audit",
      description: "Continuous monitoring for new AI efficiencies",
      special: true
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @keyframes infinityDash {
          to {
            stroke-dashoffset: -1500;
          }
        }
        .infinity-animated {
          animation: infinityDash 20s linear infinite;
        }
      `}</style>
      <Navbar />

      {/* DXFactor Section - Replaces Hero and Solutions Grid */}
      <div className="mt-20">
        <DXFactorSection />
      </div>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Working Process</h2>
          <p className="text-xl text-green-600 font-semibold">A Continuous Cycle of Innovation and Optimization</p>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative h-[500px] hidden lg:block">
          {/* Infinity SVG */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 500">
            <path
              d="M 250,250 C 250,150 350,150 450,250 C 550,350 650,350 750,250 C 850,150 850,350 750,250 C 650,150 550,150 450,250 C 350,350 250,350 250,250 Z"
              fill="none"
              stroke="#e8f5e9"
              strokeWidth="80"
              strokeLinecap="round"
            />
            <path
              d="M 250,250 C 250,150 350,150 450,250 C 550,350 650,350 750,250 C 850,150 850,350 750,250 C 650,150 550,150 450,250 C 350,350 250,350 250,250 Z"
              fill="none"
              stroke="#22c55e"
              strokeWidth="3"
              strokeLinecap="round"
              strokeDasharray="10, 5"
              opacity="0.5"
            />
            <path
              className="infinity-animated"
              d="M 250,250 C 250,150 350,150 450,250 C 550,350 650,350 750,250 C 850,150 850,350 750,250 C 650,150 550,150 450,250 C 350,350 250,350 250,250 Z"
              fill="none"
              stroke="#22c55e"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="20, 1480"
              strokeDashoffset="0"
            />
          </svg>

          {/* Process Steps */}
          <div className="absolute inset-0">
            {processSteps.map((step, index) => {
              const positions = [
                { top: '50%', left: '15%' },
                { top: '25%', left: '30%' },
                { top: '25%', left: '50%' },
                { top: '25%', left: '70%' },
                { top: '50%', left: '85%' },
                { top: '75%', left: '50%' }
              ];
              
              return (
                <div
                  key={index}
                  className="absolute w-48 -translate-x-1/2 -translate-y-1/2 text-center"
                  style={positions[index]}
                >
                  <div className={`w-20 h-20 mx-auto mb-3 rounded-full flex items-center justify-center relative cursor-pointer transition-all duration-300 hover:scale-110 ${
                    step.special 
                      ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg' 
                      : 'bg-white border-4 border-green-500 text-green-600 shadow-lg hover:bg-gradient-to-br hover:from-green-500 hover:to-green-600 hover:text-white'
                  }`}>
                    <span className="absolute top-1 right-1 text-sm font-bold">{step.number}</span>
                    {step.icon}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600 max-w-[180px] mx-auto">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Process Steps */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-4">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className={`w-20 h-20 mx-auto mb-3 rounded-full flex items-center justify-center relative ${
                step.special 
                  ? 'bg-gradient-to-br from-green-500 to-green-600 text-white shadow-lg' 
                  : 'bg-white border-4 border-green-500 text-green-600 shadow-lg'
              }`}>
                <span className="absolute top-1 right-1 text-sm font-bold">{step.number}</span>
                {step.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Success Stories */}
      <FeaturedSuccessStories />

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-green-50 to-green-100/50">
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
};

export default Solutions; 