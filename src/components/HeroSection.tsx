import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import TrustedByBelt from './TrustedByBelt';
import TrillionDollarBackground from './TrillionDollarBackground';

const RevenueCountUp = ({ duration = 2500, delay = 0 }: { 
  duration?: number; 
  delay?: number; 
}) => {
  const [currentValue, setCurrentValue] = useState(100); // Start at 100M
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    // Target is 2000M (2B), starting from 100M, incrementing by 100M
    const startValue = 100;
    const endValue = 2000;
    const increment = 100;
    const steps = (endValue - startValue) / increment;
    const stepDuration = duration / steps;

    let currentStep = 0;
    
    const interval = setInterval(() => {
      currentStep++;
      const newValue = startValue + (currentStep * increment);
      setCurrentValue(newValue);
      
      if (newValue >= endValue) {
        clearInterval(interval);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [started, duration]);

  const formatValue = (value: number) => {
    if (value >= 1000) {
      const billions = value / 1000;
      return `$${billions}B${value >= 2000 ? '+' : ''}`;
    }
    return `$${value}M`;
  };

  return <span>{formatValue(currentValue)}</span>;
};

const CountUp = ({ end, duration = 2000, delay = 0, suffix = '', prefix = '' }: { 
  end: number; 
  duration?: number; 
  delay?: number; 
  suffix?: string; 
  prefix?: string; 
}) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let startTimestamp: number;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutCubic * end));

      if (progress < 1) {
        requestAnimationFrame(step);
            }
    };

    requestAnimationFrame(step);
  }, [started, end, duration]);

  return <span>{prefix}{count}{suffix}</span>;
};

const TypingAnimation = ({ text, speed = 100, delay = 0 }: { text: string; speed?: number; delay?: number }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, started]);

    return (
    <span>
      {displayedText}
    </span>
    );
  };

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

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col">
      {/* Trillion Dollar Background */}
      <div className="absolute inset-0 z-10">
        <TrillionDollarBackground />
      </div>

      {/* Content Overlay - z-20 with pointer-events-none on container, auto on interactive elements */}
      <div className="relative z-20 flex flex-col min-h-screen pointer-events-none">
        {/* Main content - takes available space but not all */}
        <div className="flex-1 flex flex-col justify-center items-center text-center px-4 pt-16 sm:pt-20 pb-4 sm:pb-6">
          <div className="max-w-6xl mx-auto pointer-events-auto">
            {/* Header with typing animation */}
            <SimpleReveal delay={1}>
              <div className="mb-4 sm:mb-6 md:mb-8">
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
                  <span className="block mb-2">
                    <TypingAnimation 
                      text="We Don't Build " 
                      speed={80} 
                      delay={500}
                    />
                    <span className="relative">
                      <TypingAnimation 
                        text="Software" 
                        speed={80} 
                        delay={1700}
                      />
                      <span className="absolute left-0 right-0 top-1/2 h-[2px] sm:h-[3px] bg-red-500 opacity-90 transform -translate-y-1/2 z-20 animate-in fade-in duration-500 delay-[2500ms]"></span>
                    </span>
                  </span>
                  <span className="block text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
                    <TypingAnimation 
                      text="We Build " 
                      speed={80} 
                      delay={3000}
                    />
                    <span className="text-green-600">
                      <TypingAnimation 
                        text="Revenue Machines" 
                        speed={80} 
                        delay={3800}
                      />
                    </span>
                  </span>
                </h1>
              </div>
            </SimpleReveal>
            
            {/* Tagline */}
            <SimpleReveal delay={1.5}>
              <div className="mb-4 sm:mb-6">
                <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-[4500ms]">
                  Built for Fitness & Wellness. Powered by Outcomes.
                </p>
              </div>
            </SimpleReveal>
            
            {/* Subtitle - 3 lines */}
            <SimpleReveal delay={2}>
              <div className="mb-6 sm:mb-8 md:mb-16">
                <p className="max-w-3xl mx-auto text-xs sm:text-sm md:text-lg text-gray-700 leading-relaxed font-light animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-[1000ms] px-4 sm:px-0">
                  <strong>DXOutcomes Micro Agent Platform</strong> — proven across <strong>100s of fitness operators</strong>.<br />
                  Each Agent delivers <strong>measurable results</strong> for your biggest challenges:<br />
                  <strong>revenue growth, operations efficiency, and customer experience</strong>.
                </p>
              </div>
            </SimpleReveal>
            
            {/* CTA Buttons */}
            <SimpleReveal delay={3}>
              <div className="mb-8 sm:mb-12 md:mb-24">
                <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-[1500ms]">
              <Button 
                    className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white border-none rounded-md px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 h-auto"
              >
                    Start Free with Concierge Agent
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                    className="w-full sm:w-auto border-green-600 hover:border-green-700 text-green-600 hover:text-white bg-white/80 hover:bg-green-600 rounded-md px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-300 h-auto"
              >
                    <Play className="mr-2 w-4 sm:w-5 h-4 sm:h-5" />
                    <span className="hidden sm:inline">See the Outcomes Micro Agent
                    Platform (OMAP) in Action</span>
                    <span className="sm:hidden">Watch Demo</span>
              </Button>
                </div>
              </div>
            </SimpleReveal>

            {/* Stats section */}
            <SimpleReveal delay={4}>
              <div className="mb-6 sm:mb-8 md:mb-12">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-[2000ms]">
                  <div className="p-3 sm:p-4 md:p-6 bg-green-50/40 backdrop-blur-md rounded-xl border border-green-100/50 shadow-sm pointer-events-auto hover:shadow-lg hover:bg-green-50/60 transition-all duration-300">
                    <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                      <RevenueCountUp duration={2500} delay={2000} />
                    </h3>
                    <p className="text-xs sm:text-xs text-gray-600 uppercase tracking-wider font-medium">Revenue Generated</p>
                  </div>
                  <div className="p-3 sm:p-4 md:p-6 bg-green-50/40 backdrop-blur-md rounded-xl border border-green-100/50 shadow-sm pointer-events-auto hover:shadow-lg hover:bg-green-50/60 transition-all duration-300">
                    <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                      <CountUp end={120} duration={2500} delay={2200} suffix="%" />
                    </h3>
                    <p className="text-xs sm:text-xs text-gray-600 uppercase tracking-wider font-medium">Net Revenue Retention</p>
                  </div>
                  <div className="p-3 sm:p-4 md:p-6 bg-green-50/40 backdrop-blur-md rounded-xl border border-green-100/50 shadow-sm pointer-events-auto hover:shadow-lg hover:bg-green-50/60 transition-all duration-300">
                    <h3 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900 mb-1 sm:mb-2">
                      <CountUp end={96} duration={2500} delay={2400} />
                    </h3>
                    <p className="text-xs sm:text-xs text-gray-600 uppercase tracking-wider font-medium">Net Promoter Score</p>
                  </div>
                </div>
              </div>
            </SimpleReveal>
          </div>
        </div>
        
        {/* Trusted By section - fixed at bottom with proper spacing */}
        <SimpleReveal delay={5}>
          <div className="pb-2 sm:pb-4 md:pb-8 w-full animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-[2500ms]">
            <TrustedByBelt />
          </div>
        </SimpleReveal>
      </div>
    </section>
  );
};

export default HeroSection;