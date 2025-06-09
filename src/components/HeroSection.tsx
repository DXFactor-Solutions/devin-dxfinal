import React, { useState, useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Play } from 'lucide-react';
import TrustedByBelt from './TrustedByBelt';
import TrillionDollarBackground from './TrillionDollarBackground';
import { motion, useAnimation, useInView } from 'framer-motion';

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

// Animation component for spiral effect - same as AboutUs.tsx
const SpiralReveal = ({ children, delay = 0, index = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Calculate spiral position based on index
  const angle = index * 30; // Degrees between each element
  const radius = index * 5; // Spiral radius increases with index
  const startX = Math.cos(angle * Math.PI / 180) * radius;
  const startY = Math.sin(angle * Math.PI / 180) * radius;
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { 
          opacity: 0,
          x: startX,
          y: startY,
          scale: 0.8,
          rotate: -5 + (index % 3) * 5 // Slight varied rotation
        },
        visible: { 
          opacity: 1, 
          x: 0, 
          y: 0, 
          scale: 1,
          rotate: 0,
          transition: { 
            duration: 0.8, 
            delay: delay + index * 0.1,
            type: "spring",
            stiffness: 100,
            damping: 15
          }
        }
      }}
    >
      {children}
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-between">
      {/* Trillion Dollar Background */}
      <div className="absolute inset-0 z-10">
        <TrillionDollarBackground />
      </div>

      {/* Content Overlay - z-20 with pointer-events-none on container, auto on interactive elements */}
      <div className="relative z-20 flex flex-col h-screen pointer-events-none">
        {/* Main content - takes most of the screen */}
        <div className="flex-grow flex flex-col justify-center items-center text-center px-4 pt-20 pb-10">
          <div className="max-w-6xl mx-auto pointer-events-auto">
            {/* Header with typing animation */}
            <SpiralReveal delay={0.2} index={0}>
              <div className="mb-8">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 leading-[1.1]">
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
                      <span className="absolute left-0 right-0 top-1/2 h-[3px] bg-red-500 opacity-90 transform -translate-y-1/2 z-20 animate-in fade-in duration-500 delay-[2500ms]"></span>
                    </span>
                  </span>
                  <span className="block text-5xl md:text-6xl lg:text-7xl">
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
            </SpiralReveal>
            
            {/* Subtitle */}
            <SpiralReveal delay={0.5} index={1}>
              <div className="mb-16">
                <p className="max-w-2xl mx-auto text-base md:text-xl text-gray-700 leading-relaxed font-light animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-[1000ms]">
               Meet the DXAgent Outcomes Platform — the only AI system built from<br className="hidden md:block" />
               100s of real fitness operator deployment. Each Agent solves a specific revenue, operations, or experience challenge—with proven ROI, not promises.
                </p>
              </div>
            </SpiralReveal>
          
            {/* CTA Buttons */}
            <SpiralReveal delay={0.7} index={2}>
              <div className="mb-24">
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-[1500ms]">
              <Button 
                    className="bg-green-600 hover:bg-green-700 text-white border-none rounded-md px-8 py-3 text-base md:text-lg shadow-lg hover:shadow-xl transition-all duration-300 h-auto"
              >
                    Start Free with Concierge Agent
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                    className="border-green-600 hover:border-green-700 text-green-600 hover:text-white bg-white/80 hover:bg-green-600 rounded-md px-8 py-3 text-base md:text-lg shadow-md hover:shadow-lg transition-all duration-300 h-auto"
              >
                    <Play className="mr-2 w-5 h-5" />
                    Request a Demo
              </Button>
                </div>
              </div>
            </SpiralReveal>

            {/* Stats section */}
            <SpiralReveal delay={0.9} index={3}>
              <div className="mb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-[2000ms]">
                  <div className="p-6 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm pointer-events-auto hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      <RevenueCountUp duration={2500} delay={2000} />
                    </h3>
                    <p className="text-xs text-gray-600 uppercase tracking-wider font-medium">Revenue Generated</p>
                  </div>
                  <div className="p-6 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm pointer-events-auto hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      <CountUp end={120} duration={2500} delay={2200} suffix="%" />
                    </h3>
                    <p className="text-xs text-gray-600 uppercase tracking-wider font-medium">Net Revenue Retention</p>
                  </div>
                  <div className="p-6 bg-white/90 backdrop-blur-sm rounded-lg border border-gray-200 shadow-sm pointer-events-auto hover:shadow-md transition-shadow duration-300">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      <CountUp end={96} duration={2500} delay={2400} />
                    </h3>
                    <p className="text-xs text-gray-600 uppercase tracking-wider font-medium">Net Promoter Score</p>
                  </div>
                </div>
              </div>
            </SpiralReveal>
          </div>
        </div>
        
        {/* Trusted By section - clean belt at bottom */}
        <SpiralReveal delay={1.1} index={4}>
          <div className="pb-8 md:pb-12 w-full animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-[2500ms]">
            <TrustedByBelt />
          </div>
        </SpiralReveal>
      </div>
    </section>
  );
};

export default HeroSection;