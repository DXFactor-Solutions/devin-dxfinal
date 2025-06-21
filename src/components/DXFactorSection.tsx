import React, { useState } from 'react';
import { Brain, Database, Smartphone, Link2, Users, BarChart3, ChevronRight, Quote, TrendingUp, Zap, Star, ArrowRight } from 'lucide-react';

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

const DXFactorSection = () => {
  const [selectedService, setSelectedService] = useState(0);
  const [flippedService, setFlippedService] = useState(false);

  const handleLearnMoreClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFlippedService(!flippedService);
  };

  const services = [
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Development",
      description: "Engaging mobile experiences with AI-powered features that drive member engagement and retention.",
      impact: "3 Month Delivery",
      testimonial: {
        quote: "DXFactor was critical in delivering a reliable and scalable streaming platform for CRUNCH+ on time and within budget, transforming our digital content delivery.",
        author: "Mike Neff",
        role: "Executive Vice President, Member Services",
        company: "Crunch"
      },
      backContent: "Delivering mobile-first experiences that boost retention and member satisfaction—with fully native iOS and Android apps, UI/UX built for engagement and in-app automation features."
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Warehousing & BI",
      description: "Scalable data infrastructure that powers intelligent decision-making and real-time business insights.",
      impact: "2x Data Lake Growth",
      testimonial: {
        quote: "The technology integration has streamlined our operations, giving us a unified view of our data and enabling faster, more informed decisions.",
        author: "Rob Koehler",
        role: "Director of Technology Development",
        company: "Wisconsin Athletic Club"
      },
      backContent: "Unify member, operations, and marketing data into one source of truth—empowering leaders with dashboard-ready insights and faster decision-making."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Dedicated Engineering Teams",
      description: "On-demand access to specialized engineering talent, augmented with AI tools for faster delivery.",
      impact: "50% Faster Delivery",
      testimonial: {
        quote: "Not just code—DXFactor brought collaboration, speed, and structure to help us scale our digital platform with confidence.",
        author: "Jeremy Brutus",
        role: "Co-Founder and CEO",
        company: "URBN Playground"
      },
      backContent: "Scale your technology with our on-demand, fully managed development squads—experts in fitness tech with rapid ramp-up and performance you can count on."
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Development",
      description: "Custom AI agents tailored to your specific business needs, integrated seamlessly with existing systems.",
      impact: "3x Faster Operations",
      testimonial: {
        quote: "With AI Agents, we have an opportunity to have a conversation with every prospect to guide them to the correct membership type, to try to upsell them with personal training, and discuss other things like goals as they come into the club. We saved 4000 man hours in 12 months due to DxFactor's Concierge Agent mainly from answering phone calls and front desk questions.",
        author: "Don Dickerson",
        role: "President, Fitness SF",
        company: "Fitness SF"
      },
      backContent: "Build customized AI solutions—chatbots, predictive models, and automations—that accelerate workflows, reduce friction, and deliver measurable ROI."
    },
    {
      icon: <Link2 className="w-6 h-6" />,
      title: "System Integrations",
      description: "Seamless connections between your MRM, ERP, marketing, and operational systems for unified data flow.",
      impact: "24/7 Workers",
      testimonial: {
        quote: "Partnering with DXFactor enhances our ability to offer comprehensive, personalized solutions that drive both member satisfaction and operational efficiency.",
        author: "John Ford",
        role: "Chief Product Officer",
        company: "EGYM"
      },
      backContent: "Connect your tech stack—CRM, billing, scheduling, and more—into one seamless ecosystem that eliminates manual entry and syncs in real time."
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Science & Analytics",
      description: "Advanced analytics and predictive modeling to unlock hidden insights in your business data.",
      impact: "35% Churn Reduction",
      testimonial: {
        quote: "The technology integration has streamlined our operations, giving us a unified view of our data and enabling faster, more informed decisions.",
        author: "Rob Koehler",
        role: "Director of Technology Development",
        company: "Wisconsin Athletic Club"
      },
      backContent: "Transform raw data into actionable strategies—predict member churn, optimize pricing, and uncover growth opportunities using advanced analytics."
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-8 sm:pt-16 pb-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <SimpleReveal delay={1}>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-black text-black mb-4 animate-on-scroll fade-up">
          Full-Service Partner
            <span className="block bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
            AI Powered Advantage
            </span>
          </h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-4xl mx-auto animate-on-scroll fade-up delay-100">
            While others offer basic digital services, we
deliver complete fitness & wellness
transformation. Custom apps, data solutions,
strategic consulting – everything that's
generated $2B+ in outcomes.

The difference? AI now powers everything we
do.
          </p>
        </div>
        </SimpleReveal>

        {/* Service Cards Grid - Optimized layout */}
        <SimpleReveal delay={2}>
          <div className="pt-4 sm:pt-6 grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 mb-8 sm:mb-12 animate-on-scroll fade-up delay-200">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedService(index);
                setFlippedService(false); // Reset flip state when changing service
              }}
                className={`group relative p-2 sm:p-3 rounded-xl border-2 transition-all duration-300 ${
                selectedService === index
                  ? 'border-green-500 bg-green-50 scale-105 shadow-xl'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg'
              }`}
            >
              {/* Icon */}
                <div className={`inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-xl mb-2 transition-all duration-300 ${
                selectedService === index 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 text-gray-700 group-hover:bg-gray-200'
              }`}>
                  {React.cloneElement(service.icon, { className: "w-3 h-3 sm:w-4 sm:h-4" })}
              </div>
              
              {/* Title */}
                <h3 className={`font-bold text-xs sm:text-sm mb-1 leading-tight transition-colors duration-300 ${
                selectedService === index ? 'text-black' : 'text-gray-800'
              }`}>
                {service.title}
              </h3>

              {/* Active Indicator */}
              {selectedService === index && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-green-500 rounded-full"></div>
              )}
            </button>
          ))}
        </div>
        </SimpleReveal>

        {/* Service & Testimonial Display - With Flip Functionality */}
        <div className="bg-gray-50 rounded-2xl sm:rounded-3xl p-1 sm:p-2 animate-on-scroll scale-in delay-300 mb-6 sm:mb-8">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <style dangerouslySetInnerHTML={{ __html: `
              .service-flip-card {
                perspective: 1000px;
                width: 100%;
                height: 100%;
              }
              .service-flip-card-inner {
                position: relative;
                width: 100%;
                height: 100%;
                text-align: left;
                transition: transform 0.6s;
                transform-style: preserve-3d;
              }
              .service-flip-card.flipped .service-flip-card-inner {
                transform: rotateY(180deg);
              }
              .service-flip-card-front, .service-flip-card-back {
                position: absolute;
                width: 100%;
                height: 100%;
                -webkit-backface-visibility: hidden;
                backface-visibility: hidden;
                top: 0;
                left: 0;
              }
              .service-flip-card-back {
                transform: rotateY(180deg);
              }
            `}} />
            
            <div className={`service-flip-card ${flippedService ? 'flipped' : ''}`} style={{ minHeight: '500px' }}>
              <div className="service-flip-card-inner">
                {/* Front Side */}
                <div className="service-flip-card-front">
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full min-h-[500px]">
                    {/* Service Details */}
                    <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-between min-h-[250px] md:min-h-[500px]">
                      <div>
                        <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-2xl mb-6">
                          <div className="text-green-600">
                            {React.cloneElement(services[selectedService].icon, { className: "w-6 h-6 sm:w-7 sm:h-7" })}
                          </div>
                        </div>
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-black mb-4 leading-tight">
                          {services[selectedService].title}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
                          {services[selectedService].description}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-auto">
                        <button 
                          onClick={handleLearnMoreClick}
                          className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900 transition-all text-sm"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <div className="flex items-center gap-2 text-green-600 font-semibold text-sm">
                          <Zap className="w-4 h-4" />
                          {services[selectedService].impact}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-green-50 p-6 sm:p-8 md:p-10 relative flex flex-col justify-between min-h-[250px] md:min-h-[500px]">
                      <Quote className="absolute top-6 right-6 w-8 h-8 sm:w-10 sm:h-10 text-green-100" />
                      
                      <div className="relative">
                        <div className="flex gap-1 mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-green-500 text-green-500" />
                          ))}
                        </div>
                        
                        <p className="text-gray-700 text-sm sm:text-base md:text-lg mb-6 italic leading-relaxed">
                          "{services[selectedService].testimonial.quote}"
                        </p>
                      </div>
                      
                      <div className="mt-auto">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-full flex items-center justify-center text-white font-bold text-sm">
                            {services[selectedService].testimonial.author.charAt(0)}
                          </div>
                          <div>
                            <p className="font-bold text-black text-sm sm:text-base">
                              {services[selectedService].testimonial.author}
                            </p>
                            <p className="text-gray-600 text-xs sm:text-sm">
                              {services[selectedService].testimonial.role}
                            </p>
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t border-green-200">
                          <p className="text-xs sm:text-sm text-gray-500 font-medium">
                            Success Story • {services[selectedService].testimonial.company}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Back Side - Simple paragraph content */}
                <div className="service-flip-card-back">
                  <div className="h-full bg-gradient-to-br from-gray-900 to-gray-800 text-white p-6 sm:p-8 md:p-12 flex flex-col justify-center min-h-[500px]">
                    <div className="max-w-4xl mx-auto text-center">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-2xl mb-6">
                        {React.cloneElement(services[selectedService].icon, { className: "w-8 h-8 text-white" })}
                      </div>
                      
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-6">
                        {services[selectedService].title}
                      </h3>
                      
                      <div className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                        {services[selectedService].backContent || "Content to be added..."}
                      </div>

                      <button 
                        onClick={handleLearnMoreClick}
                        className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-all text-sm"
                      >
                        Flip Back
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform rotate-180" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Compact CTA Section */}
        <SimpleReveal delay={3}>
          <div className="text-center mt-4 sm:mt-6">
            <div className="bg-white border border-gray-200 rounded-lg p-4 sm:p-6 text-gray-900 relative overflow-hidden shadow-sm">
              <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 to-emerald-50/50"></div>
              <div className="relative z-10">
                <h3 className="text-sm sm:text-base font-bold mb-2">Need More Than Agents?</h3>
                <div className="flex flex-col sm:flex-row gap-2 justify-center items-center">
                  <button type="button" className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium shadow transition-all duration-300 inline-flex items-center justify-center text-xs sm:text-sm">
                    Schedule Strategy Call
                    <ArrowRight className="ml-1 w-3 h-3" />
                  </button>
                  <button type="button" className="w-full sm:w-auto border border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-4 py-2 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center text-xs sm:text-sm">
                    <TrendingUp className="mr-1 w-3 h-3" />
                    View Success Stories
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SimpleReveal>
      </div>
    </div>
  );
};

export default DXFactorSection; 