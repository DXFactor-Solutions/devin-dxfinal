import React, { useState } from 'react';
import { Bot, Database, Smartphone, Link2, Users, LineChart, ChevronRight } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className={`bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 animate-on-scroll fade-up delay-${delay} group hover:shadow-xl hover:border-green-200 hover:translate-y-[-4px]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Colored accent line at top of card */}
      <div className="h-1 w-full bg-gradient-to-r from-green-400 to-green-600"></div>
      
      <div className="p-6">
        <div className="flex flex-col">
          <div className="flex items-center mb-3">
            <div className={`w-11 h-11 rounded-lg flex items-center justify-center mr-4 flex-shrink-0 transition-all duration-300 ${isHovered ? 'bg-black text-white' : 'bg-gray-100 text-gray-600'}`}>
              <Icon className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 font-['Open_Sans']">{title}</h3>
          </div>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-3">{description}</p>
          
          <div className={`mt-auto self-end transform transition-all duration-300 opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0`}>
            <div className="flex items-center text-green-600 font-medium text-sm">
              <span>Learn more</span>
              <ChevronRight className="ml-1 w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PreacherSection: React.FC = () => {
  const services = [
    {
      icon: Bot,
      title: 'Agentic AI Development',
      description: 'Custom AI agents tailored to your specific business needs, integrated seamlessly with existing systems.'
    },
    {
      icon: Database,
      title: 'Data Warehousing & BI',
      description: 'Scalable data infrastructure that powers intelligent decision-making and real-time business insights.'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Engaging mobile experiences with AI-powered features that drive member engagement and retention.'
    },
    {
      icon: Link2,
      title: 'System Integrations',
      description: 'Seamless connections between your MRM, ERP, marketing, and operational systems for unified data flow.'
    },
    {
      icon: Users,
      title: 'Dedicated Engineering Teams',
      description: 'On-demand access to specialized engineering talent, augmented with AI tools for faster delivery.'
    },
    {
      icon: LineChart,
      title: 'Data Science & Analytics',
      description: 'Advanced analytics and predictive modeling to unlock hidden insights in your business data.'
    }
  ];

  const stats = [
    { value: '12+', label: 'Certified AI Engineers' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Available' },
    { value: '100+', label: 'Projects Delivered' }
  ];

  return (
    <section 
      className="min-h-screen flex flex-col justify-center py-16 bg-gray-50 relative overflow-hidden"
      style={{
        backgroundImage: `url('/videos/dxf1t back.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-white/60"></div>
      
      {/* Top divider for separation from AgentsSection */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden z-10">
        <svg className="relative block w-full h-10 transform rotate-180" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-gray-50"></path>
        </svg>
      </div>
      
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5 z-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2322c55e' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      {/* Background gradient elements */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-green-200/10 rounded-full blur-[120px] z-10"></div>
      <div className="absolute bottom-40 right-1/4 w-64 h-64 bg-green-200/10 rounded-full blur-[100px] z-10"></div>
      
      {/* Green accent gradient */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 flex-grow flex flex-col justify-center">
        {/* Section Header with improved styling */}
        <div className="text-center mb-10 animate-on-scroll fade-up">
          <div className="inline-block mb-3 px-4 py-1 bg-white/80 rounded-full shadow-sm">
            <span className="text-sm font-medium text-gray-600 flex items-center gap-1">
              <Bot size={14} className="text-green-600" />
              Our Services
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-['Open_Sans']">
            <span className="relative inline-block">
              <span className="relative z-10">We Practice What We Preach</span>
              <span className="absolute bottom-2 left-0 w-full h-3 bg-green-200/50 z-0"></span>
            </span>
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-black mb-5 font-['Open_Sans'] animate-on-scroll fade-up delay-100">AI-Accelerated Services</h3>
          <p className="max-w-3xl mx-auto text-base text-gray-600 leading-relaxed mb-8 animate-on-scroll fade-up delay-200">
            Every service we deliver is powered by our own AI agents. We transformed our operations 
            first—faster delivery, better results, lower costs. If it works for us, it'll work for you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={(index % 3) * 100 + 300}
            />
          ))}
        </div>
        
        {/* Stats Bar */}
        <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-10 animate-on-scroll scale-in delay-400">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-black mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Button with improved styling */}
        <div className="text-center animate-on-scroll scale-in delay-500 mb-8">
          <button className="inline-flex items-center px-7 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-all hover:shadow-lg group">
            <span>Learn More About Our Services</span>
            <ChevronRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
      
      {/* Bottom divider for separation from TestimonialsSection */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-0 h-10 mt-auto z-10">
        <svg className="relative block w-full h-10" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default PreacherSection; 