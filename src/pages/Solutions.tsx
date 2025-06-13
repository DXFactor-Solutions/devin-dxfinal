import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
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

  const videoTestimonials = [
    {
      video: "/testimonialvideo/crunch.mp4",
      duration: "2:30",
      title: "Mobile App Success",
      subtitle: "Custom Crunch Fitness App",
      author: "Mike Neff",
      company: "Crunch",
      avatar: "/headshots/Mike-Neff-Crunch.jpeg"
    },
    {
      video: "/testimonialvideo/urbn.mp4",
      duration: "2:50",
      title: "Data Transformation",
      subtitle: "URBN Business Intelligence",
      author: "Jeremy Brutus",
      company: "URBN Playground",
      avatar: "/headshots/Jeremy-Brutus-URBN.jpeg"
    },
    {
      video: "/testimonialvideo/Fitness SF _ Dharmesh  Industry Understanding.mp4",
      duration: "2:00",
      title: "Industry Understanding",
      subtitle: "Why DXFactor Gets Fitness",
      author: "Don Dickerson",
      company: "Fitness SF",
      avatar: "/headshots/Don-Dickerson-Fitness-SF.png"
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

      {/* Video Testimonials Section */}
      <section id="video-testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Operators. Real Solutions.
            </h2>
            <p className="text-xl text-gray-600">
              See how we've transformed operations with custom mobile apps, data warehouses, and AI solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoTestimonials.map((testimonial, index) => (
              <div key={index} className="relative bg-black rounded-xl overflow-hidden group aspect-video">
                <video
                  className="w-full h-full object-cover"
                  controls
                  preload="metadata"
                >
                  <source src={testimonial.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 text-white pointer-events-none">
                  <h3 className="font-semibold mb-1">{testimonial.title}</h3>
                  <p className="text-sm opacity-80 mb-3">{testimonial.subtitle}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <img src={testimonial.avatar} alt={testimonial.author} className="w-6 h-6 rounded-full" />
                    <span>{testimonial.author} • {testimonial.company}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-green-50 to-green-100/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions; 