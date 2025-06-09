import React, { useState, useEffect } from 'react';
import { Brain, Database, Smartphone, Link2, Users, BarChart3, ChevronRight, Quote, TrendingUp, Zap, Star, ArrowRight } from 'lucide-react';

const DXFactorSection = () => {
  const [selectedService, setSelectedService] = useState(0);

  const services = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Agentic AI Development",
      description: "Custom AI agents tailored to your specific business needs, integrated seamlessly with existing systems.",
      impact: "3x Faster Operations",
      testimonial: {
        quote: "With AI Agents, we have an opportunity to have a conversation with every prospect to guide them to the correct membership type, to try to upsell them with personal training, and discuss other things like goals as they come into the club. We saved 4000 man hours in 12 months due to DxFactor's Concierge Agent mainly from answering phone calls and front desk questions.",
        author: "Don Dickerson",
        role: "President, Fitness SF",
        company: "Fitness SF"
      }
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
      }
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile App Development",
      description: "Engaging mobile experiences with AI-powered features that drive member engagement and retention.",
      impact: "3 Week Delivery",
      testimonial: {
        quote: "DXFactor was critical in delivering a reliable and scalable streaming platform for CRUNCH+ on time and within budget, transforming our digital content delivery.",
        author: "Mike Neff",
        role: "Executive Vice President, Member Services",
        company: "Crunch"
      }
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
      }
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
      }
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data Science & Analytics",
      description: "Advanced analytics and predictive modeling to unlock hidden insights in your business data.",
      impact: "35% Churn Reduction",
      testimonial: {
        quote: "Method Gym saved 7% of cancellations & $1.8K in dues in 30 days—thanks to DXFactor's Click to Save. Fast setup, real ROI, better member experience.",
        author: "Al Noshirvani",
        role: "Founder",
        company: "Method Gym"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-4 animate-on-scroll fade-up">
           Beyond Agents: 
            <span className="block bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent">
             Your AI-First Partner
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-on-scroll fade-up delay-100">
            Think beyond chatbots. With AI woven into our DNA, we deliver transformative solutions that are faster, smarter, and more efficient than traditional approaches.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16 animate-on-scroll fade-up delay-200">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setSelectedService(index)}
              className={`group relative p-4 rounded-xl border-2 transition-all duration-300 ${
                selectedService === index
                  ? 'border-green-500 bg-green-50 scale-105 shadow-xl'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-lg'
              }`}
            >
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl mb-3 transition-all duration-300 ${
                selectedService === index 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-100 text-gray-700 group-hover:bg-gray-200'
              }`}>
                {service.icon}
              </div>
              
              {/* Title */}
              <h3 className={`font-bold text-base mb-1 transition-colors duration-300 ${
                selectedService === index ? 'text-black' : 'text-gray-800'
              }`}>
                {service.title}
              </h3>
              
              {/* Impact Metric */}
              <div className={`flex items-center justify-center gap-1 text-sm font-semibold ${
                selectedService === index ? 'text-green-700' : 'text-gray-500'
              }`}>
                <TrendingUp className="w-3 h-3" />
                {service.impact}
              </div>

              {/* Active Indicator */}
              {selectedService === index && (
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 h-1 bg-green-500 rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Service & Testimonial Display */}
        <div className="bg-gray-50 rounded-3xl p-2 animate-on-scroll scale-in delay-300 mb-10">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              {/* Service Details */}
              <div className="p-6 md:p-10">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-green-100 rounded-2xl mb-5">
                  <div className="text-green-600">
                    {React.cloneElement(services[selectedService].icon, { className: "w-7 h-7" })}
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-black mb-3">
                  {services[selectedService].title}
                </h3>
                <p className="text-base md:text-lg text-gray-600 mb-5 leading-relaxed">
                  {services[selectedService].description}
                </p>
                <div className="flex items-center gap-3 flex-wrap">
                  <button className="group inline-flex items-center gap-2 bg-black text-white px-5 py-2 rounded-full font-semibold hover:bg-gray-900 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <div className="flex items-center gap-2 text-green-600 font-semibold">
                    <Zap className="w-4 h-4" />
                    {services[selectedService].impact}
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-green-50 p-6 md:p-10 relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-green-100" />
                
                <div className="relative">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 text-base md:text-lg mb-5 italic leading-relaxed">
                    "{services[selectedService].testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white font-bold">
                      {services[selectedService].testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-black">
                        {services[selectedService].testimonial.author}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {services[selectedService].testimonial.role}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-5 pt-5 border-t border-green-200">
                    <p className="text-sm text-gray-500 font-medium">
                      Success Story • {services[selectedService].testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DXFactorSection; 