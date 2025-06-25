import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import MicroagentCommunity from '../components/MicroagentCommunity';
import AgentsSection from '../components/AgentsSection';
import DXFactorSection from '../components/DXFactorSection';
import ContactForm from '../components/ContactForm';
import FeaturedSuccessStories from '../components/FeaturedSuccessStories';
import TrustedByBelt from '../components/TrustedByBelt';
// import AIMapSection from '../components/AIMapSection'; 
// import CTASection from '../components/CTASection';
import Footer from '../components/Footer';
import { ArrowRight, CheckCircle, Star, Users, TrendingUp, Zap } from 'lucide-react';
import SEOHead from '../components/SEO/SEOHead';
import { LocalBusinessStructuredData, ServiceStructuredData } from '../components/SEO/StructuredData';

// CSS for scroll animations
const scrollAnimationStyles = `
  /* Base animations for scroll reveal */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(50px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }
  
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-100px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(100px); }
    to { opacity: 1; transform: translateX(0); }
  }
  
  /* Animation classes */
  .animate-on-scroll {
    opacity: 0;
  }
  
  .animate-on-scroll.is-visible {
    animation-fill-mode: both;
  }
  
  .animate-on-scroll.fade-up.is-visible {
    animation: fadeUp 0.8s ease forwards;
  }
  
  .animate-on-scroll.fade-in.is-visible {
    animation: fadeIn 0.8s ease forwards;
  }
  
  .animate-on-scroll.scale-in.is-visible {
    animation: scaleIn 0.8s ease forwards;
  }
  
  .animate-on-scroll.slide-left.is-visible {
    animation: slideInLeft 0.8s ease forwards;
  }
  
  .animate-on-scroll.slide-right.is-visible {
    animation: slideInRight 0.8s ease forwards;
  }
  
  /* Delay classes */
  .delay-100 { animation-delay: 100ms; }
  .delay-200 { animation-delay: 200ms; }
  .delay-300 { animation-delay: 300ms; }
  .delay-400 { animation-delay: 400ms; }
  .delay-500 { animation-delay: 500ms; }
`;

// Floating background elements (keep this for the hero section)
const FloatingElement = ({ top, left, size, color, delay = 0 }) => {
  const elementRef = useRef(null);
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setOffset(scrollY * 0.05);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div 
      ref={elementRef}
      className="absolute pointer-events-none"
      style={{ 
        top: `${top}%`, 
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
        transform: `translateY(${-offset * (1 + delay)}px)`,
        transition: 'transform 0.2s ease-out'
      }}
    >
      <div 
        className={`w-full h-full rounded-full ${color} blur-3xl`}
        style={{ opacity: 0.5 }}
      ></div>
    </div>
  );
};

const Index = () => {
  // Set up intersection observer for scroll animations
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Once the animation has played, we can stop observing the element
          observer.unobserve(entry.target);
        }
      });
    }, { 
      threshold: 0.15, // Trigger when at least 15% of the element is visible
      rootMargin: '0px 0px -100px 0px' // Adjust trigger point (triggers 100px before element enters viewport)
    });
    
    animatedElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      animatedElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="DX Web2 – AI-Powered Genesis Deck | The First Agentic Platform for Fitness & Wellness"
        description="Transform your fitness business with DXFactor's AI-powered microagents. Generate $2B+ in outcomes with our Concierge, Click2Save, and Learning & Development agents. 120% net revenue retention guaranteed."
        keywords="fitness AI, wellness technology, gym management software, member retention, fitness analytics, AI microagents, fitness business solutions, DXFactor, revenue retention, fitness automation"
        url="/"
        type="website"
      />
      
      <LocalBusinessStructuredData />
      
      <ServiceStructuredData
        name="AI Concierge Agent"
        description="24/7 automated member support and appointment booking system that saves 30% on man hours while improving member satisfaction."
        serviceType="AI Customer Service"
        url="/solutions"
      />
      
      <ServiceStructuredData
        name="Click2Save Agent"
        description="Automated cancellation prevention system that achieves 12% higher save rates and retains $2000+ monthly revenue per location."
        serviceType="AI Retention Technology"
        url="/solutions"
      />
      
      {/* Inject scroll animation styles */}
      <style dangerouslySetInnerHTML={{ __html: scrollAnimationStyles }} />
      
      {/* Fixed elements that don't scroll with parallax */}
      <Navbar />
      
      {/* Background elements that float as you scroll with enhanced parallax - only for hero */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <FloatingElement top={20} left={15} size={300} color="bg-white" delay={0.2} />
        <FloatingElement top={60} left={70} size={350} color="bg-white" delay={0.3} />
        <FloatingElement top={80} left={30} size={320} color="bg-white" delay={0.1} />
      </div>
      
      {/* Hero Section - keep original animation */}
      <div className="relative z-10">
        <HeroSection />
      </div>
      
      {/* Agents Section - now positioned first (swapped with MicroagentCommunity) */}
      <div className="relative z-10">
        <AgentsSection />
      </div>
      
      {/* AI MAP Section (formerly MicroagentCommunity) - now positioned second */}
      <div className="relative z-10">
        <MicroagentCommunity />
      </div>
      
      <div className="relative z-10">
        <DXFactorSection />
      </div>
      
      <div className="relative z-10">
        <FeaturedSuccessStories />
      </div>
      
      <div className="relative z-10">
        <ContactForm />
      </div>
    
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
};

export default Index;
