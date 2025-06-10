import React, { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { motion, useAnimation, useInView, useScroll } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Animation component for spiral effect
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

// Logo Component for display in the marquee
const Logo = ({ src = "", name = "", width = "110px", isText = false }) => {
  return (
    <div className="mx-8 my-4 h-12 flex items-center justify-center">
      {isText ? (
        <span className="text-gray-700 font-medium px-4">{name}</span>
      ) : (
        <img 
          src={src} 
          alt={name} 
          className="max-h-full object-contain" 
          style={{ width }}
        />
      )}
    </div>
  );
};

// Simple slow-moving marquee component
const SlowMarquee = ({ children, direction = "left", speed = 20 }) => {
  const marqueeVariants = {
    animate: {
      x: direction === "left" ? [0, -2000] : [-2000, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 150 / (speed * 0.1),
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="overflow-hidden relative w-full flex">
      <motion.div
        className="flex whitespace-nowrap items-center"
        variants={marqueeVariants}
        animate="animate"
      >
        {children}
        {children} {/* Duplicate to ensure continuous flow */}
      </motion.div>
    </div>
  );
};

const AboutUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // All logos in a single array for the top row
  const allClientLogos = [
    { src: "/logos/xsport.png", name: "Xponential", width: "110px" },
    { src: "/logos/Golds-Gym.webp", name: "Gold's Gym", width: "110px" },
    { src: "/logos/choze_logo.webp", name: "Choze Fitness", width: "110px" },
    { src: "/logos/orangetheory.png", name: "Orange Theory", width: "110px" },
    { src: "/logos/wac.png", name: "WAC", width: "110px" },
    { src: "/logos/crunch.webp", name: "Crunch", width: "90px" },
    { src: "/logos/Chelsea-Piers-fitness.svg", name: "Chelsea Piers Fitness", width: "130px" },
    { src: "/logos/lifetime.png", name: "Lifetime", width: "120px" },
    { name: "burn boot camp", isText: true, width: "auto" },
    { name: "ebc", isText: true, width: "auto" }
  ];

  // Text-based client names
  const textClientNames = [
    { name: "5 Weeks Out", isText: true },
    { name: "NowSecure", isText: true },
    { name: "Fitness SF", isText: true },
    { name: "Method Gym", isText: true },
    { name: "Healthworks", isText: true },
    { name: "F45", isText: true }
  ];

  // Partner names
  const partnerNames = [
    { name: "A3 Fitness", isText: true },
    { name: "Health & Fitness Association", isText: true },
    { name: "daxko", isText: true },
    { name: "ALTA", isText: true },
    { name: "Sensigo", isText: true },
    { name: "AmericanEagle.com", isText: true },
    { name: "EGYM", isText: true }
  ];

  // Core values - condensed
  const values = [
    { letter: "V", word: "Virtuous" },
    { letter: "O", word: "Outcomes-Obsessed" }, 
    { letter: "I", word: "Innovation-Driven" },
    { letter: "C", word: "Committed" },
    { letter: "E", word: "Empathetic" }
  ];

  // Leadership team - only showing key members
  const leaders = [
    {
      name: "Dharmesh Trivedi",
      role: "Co-Founder & CEO",
      image: "/logos/dharmesh.webp",
      expertise: "Growth Strategy",
      bio: "CEO, Industry Insider, and AI Transformation Architect.",
      achievement: "Generated $500M+ in fitness revenue",
      quote: "Every gym has untapped potential. AI unlocks it."
    },
    {
      name: "Tejas Shah", 
      role: "Co-Founder & CTO",
      image: "/logos/tejas.webp",
      expertise: "AI & Engineering",
      bio: "CTO, agentic systems builder with global scale.",
      achievement: "Built AI systems serving 50M+ users",
      quote: "Code that doesn't deliver outcomes is just noise."
    },
    {
      name: "Harshil Shah",
      role: "Director of Product Management",
      image: "/logos/harshil.jpeg",
      expertise: "Product Strategy",
      bio: "Product visionary who turns complex AI into simple, powerful experiences. Led product teams at companies serving 50M+ users.",
      achievement: "Shipped 12 category-defining products",
      quote: "Great products feel like magic. Great AI feels invisible."
    },
    {
      name: "Ron Benamor",
      role: "Strategic Advisor",
      image: "/logos/ronben.jpeg",
      expertise: "Business Development",
      bio: "Strategic advisor with deep industry connections and proven track record in scaling fitness technology companies.",
      achievement: "Facilitated partnerships worth $100M+",
      quote: "Success in fitness tech comes from understanding both the business and the heart of the industry."
    },
    {
      name: "Al Noshirvani",
      role: "Board Member", 
      image: "/logos/alno.webp",
      expertise: "Industry Vision",
      bio: "Board Member, fitness visionary and GTM leader.",
      achievement: "Founded 3 fitness unicorns",
      quote: "The future of fitness is personal, powered, and profitable."
    }
  ];

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden" ref={containerRef}>
      <Navbar />
      
      {/* Fixed Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-400 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Hero Section - Immersive & Bold */}
      <section className="relative min-h-[60vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video 
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
            style={{ 
              filter: 'brightness(0.7)',
              mixBlendMode: 'normal'
            }}
          >
            <source src="/videos/futurecityh.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/50 mix-blend-multiply"></div>
        </div>
          
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-8">
          <SpiralReveal delay={0.2} index={0}>
            <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[95px] font-black tracking-tight leading-[0.9] mb-3 sm:mb-4 md:mb-6">
              <span className="text-white block">ABOUT</span>
              <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent inline-block">US</span>
            </h1>
          </SpiralReveal>
          
          <SpiralReveal delay={0.5} index={1}>
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-4xl font-black text-white mb-4 sm:mb-6 md:mb-8 tracking-tight px-2 sm:px-4 md:px-0 leading-tight">
              We Don't Build Software.<br className="sm:hidden" /> We Build Revenue Machines.
            </h2>
          </SpiralReveal>
          
          <SpiralReveal delay={0.7} index={2}>
            <div className="mb-4 sm:mb-8 md:mb-16 mt-4 sm:mt-6 md:mt-8">
              <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                <Button 
                  className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white border-none rounded-md px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg shadow-lg hover:shadow-xl transition-all duration-300 h-auto"
                >
                  Start Free with Concierge Agent
                  <ArrowRight className="ml-1.5 sm:ml-2 w-3 h-3 sm:w-4 sm:h-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full sm:w-auto border-green-600 hover:border-green-700 text-green-600 hover:text-white bg-white/80 hover:bg-green-600 rounded-md px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 text-xs sm:text-sm md:text-base lg:text-lg shadow-md hover:shadow-lg transition-all duration-300 h-auto"
                >
                  <Play className="mr-1.5 sm:mr-2 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  <span className="hidden sm:inline">Request a Demo</span>
                  <span className="sm:hidden">Demo</span>
                </Button>
              </div>
            </div>
          </SpiralReveal>
        </div>
      </section>

      {/* Clients & Partners Section - Using Testimonials Approach */}
      <section className="py-12 sm:py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SpiralReveal delay={0.1} index={0}>
            <div className="text-center mb-8 sm:mb-14">
              <p className="text-green-500 text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 font-medium"></p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-800 mb-4 sm:mb-6 tracking-tight">OUR CUSTOMERS & PARTNERS</h2>
            </div>
          </SpiralReveal>

          {/* Client logos - Conveyor belt animation */}
          <div className="overflow-hidden bg-white rounded-lg shadow-sm mb-12">
            <div className="logos-slide-track py-8">
              {/* First set of logos */}
              <div className="logo-slide">
                <img src="/logos/xsport.png" alt="XSport Fitness" />
              </div>
              <div className="logo-slide">
                <img src="/logos/Golds-Gym.webp" alt="Gold's Gym" />
              </div>
              <div className="logo-slide">
                <img src="/logos/chuze_logo.webp" alt="Chuze Fitness" />
              </div>
              <div className="logo-slide">
                <img src="/logos/orangetheory.png" alt="Orange Theory" />
              </div>
              <div className="logo-slide">
                <img src="/logos/wac.png" alt="WAC" />
              </div>
              <div className="logo-slide">
                <img src="/logos/chrunch.webp" alt="Crunch" />
              </div>
              <div className="logo-slide">
                <img src="/logos/Chelsea-Piers-fitness.svg" alt="Chelsea Piers Fitness" />
              </div>
              <div className="logo-slide">
                <img src="/logos/lifetime.png" alt="Lifetime" />
              </div>
              <div className="logo-slide">
                <img src="/logos/burn-new-logo.svg" alt="Burn Boot Camp" />
              </div>
              <div className="logo-slide">
                <img src="/logos/ebc.webp" alt="EBC" />
              </div>

              {/* Duplicate for seamless scrolling */}
              <div className="logo-slide">
                <img src="/logos/xsport.png" alt="XSport Fitness" />
              </div>
              <div className="logo-slide">
                <img src="/logos/Golds-Gym.webp" alt="Gold's Gym" />
              </div>
              <div className="logo-slide">
                <img src="/logos/chuze_logo.webp" alt="Chuze Fitness" />
              </div>
              <div className="logo-slide">
                <img src="/logos/orangetheory.png" alt="Orange Theory" />
              </div>
              <div className="logo-slide">
                <img src="/logos/wac.png" alt="WAC" />
              </div>
              <div className="logo-slide">
                <img src="/logos/chrunch.webp" alt="Crunch" />
              </div>
              <div className="logo-slide">
                <img src="/logos/Chelsea-Piers-fitness.svg" alt="Chelsea Piers Fitness" />
              </div>
              <div className="logo-slide">
                <img src="/logos/lifetime.png" alt="Lifetime" />
              </div>
              <div className="logo-slide">
                <img src="/logos/burn-new-logo.svg" alt="Burn Boot Camp" />
              </div>
              <div className="logo-slide">
                <img src="/logos/ebc.webp" alt="EBC" />
              </div>
            </div>
          </div>

          {/* Partners Section */}
          <div className="h-px bg-gray-100 w-full mb-6"></div>
          
          {/* Partner logos - Conveyor belt animation in opposite direction */}
          <div className="overflow-hidden bg-white rounded-lg shadow-sm mb-8">
            <div className="logos-slide-track-reverse py-6">
              {/* First set of partner logos */}
              <div className="logo-slide">
                <img src="/logos/Alta-1.png" alt="ALTA" />
              </div>
              <div className="logo-slide">
                <img src="/logos/health_and_fitness.webp" alt="Health & Fitness" />
              </div>
              <div className="logo-slide">
                <img src="/logos/american_eagle.webp" alt="American Eagle" />
              </div>
              <div className="logo-slide">
                <img src="/logos/egym.webp" alt="EGYM" />
              </div>
              <div className="logo-slide">
                <img src="/logos/sensigo.svg" alt="Sensigo" />
              </div>
              <div className="logo-slide">
                <img src="/logos/nowsecure.webp" alt="NowSecure" />
              </div>
              <div className="logo-slide">
                <img src="/logos/method.png" alt="Method" />
              </div>
              <div className="logo-slide">
                <img src="/logos/8weeks.webp" alt="8 Weeks" />
              </div>
              <div className="logo-slide">
                <img src="/logos/abcfitness.webp" alt="ABC Fitness" />
              </div>
              <div className="logo-slide">
                <img src="/logos/intaprise.svg" alt="Intaprise" />
              </div>

              {/* Duplicate for seamless scrolling */}
              <div className="logo-slide">
                <img src="/logos/Alta-1.png" alt="ALTA" />
              </div>
              <div className="logo-slide">
                <img src="/logos/health_and_fitness.webp" alt="Health & Fitness" />
              </div>
              <div className="logo-slide">
                <img src="/logos/american_eagle.webp" alt="American Eagle" />
              </div>
              <div className="logo-slide">
                <img src="/logos/egym.webp" alt="EGYM" />
              </div>
              <div className="logo-slide">
                <img src="/logos/sensigo.svg" alt="Sensigo" />
              </div>
              <div className="logo-slide">
                <img src="/logos/nowsecure.webp" alt="NowSecure" />
              </div>
              <div className="logo-slide">
                <img src="/logos/method.png" alt="Method" />
              </div>
              <div className="logo-slide">
                <img src="/logos/8weeks.webp" alt="8 Weeks" />
              </div>
              <div className="logo-slide">
                <img src="/logos/abcfitness.webp" alt="ABC Fitness" />
              </div>
              <div className="logo-slide">
                <img src="/logos/intaprise.svg" alt="Intaprise" />
              </div>
            </div>
          </div>

          {/* CSS for the conveyor belt animations */}
          <style dangerouslySetInnerHTML={{
            __html: `
            .logos-slide-track {
              display: flex;
              animation: scroll 45s linear infinite;
              width: calc(200px * 20);
            }
            
            .logos-slide-track-reverse {
              display: flex;
              animation: scroll-reverse 45s linear infinite;
              width: calc(200px * 20);
            }
            
            .logo-slide {
              width: 200px;
              padding: 0 30px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            
            .logo-slide img {
              max-width: 100%;
              max-height: 50px;
              object-fit: contain;
              filter: grayscale(0%);
              transition: all 0.3s ease;
            }
            
            .logo-slide img:hover {
              filter: grayscale(0%);
              transform: scale(1.05);
            }
            
            @keyframes scroll {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(calc(-200px * 10));
              }
            }
            
            @keyframes scroll-reverse {
              0% {
                transform: translateX(calc(-200px * 10));
              }
              100% {
                transform: translateX(0);
              }
            }

            @media (max-width: 768px) {
              .logo-slide {
                width: 150px;
                padding: 0 20px;
              }
              
              .logos-slide-track {
                width: calc(150px * 20);
              }
              
              .logos-slide-track-reverse {
                width: calc(150px * 20);
              }
              
              @keyframes scroll {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(calc(-150px * 10));
                }
              }
              
              @keyframes scroll-reverse {
                0% {
                  transform: translateX(calc(-150px * 10));
                }
                100% {
                  transform: translateX(0);
                }
              }
            }
          `}} />
        </div>
        
        {/* Add CSS to hide scrollbars */}
        <style>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </section>
      
      {/* Mission Section - Now full width */}
      <section className="py-16 sm:py-28 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 to-white opacity-60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <SpiralReveal delay={0.1} index={0}>
            <motion.div
              className="text-center mb-12 sm:mb-20"
              viewport={{ once: true }}
            >
              <div className="w-16 sm:w-20 h-1 bg-green-500 mx-auto mb-6 sm:mb-8"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Our Mission & Vision</h2>
            </motion.div>
          </SpiralReveal>
          
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {/* Left Text Column */}
            <SpiralReveal delay={0.2} index={1}>
              <div className="flex flex-col justify-center md:pr-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                  To help fitness and wellness organizations scale like never before
                </h3>
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                  — by deploying intelligent AI micro-agents that drive growth, retention, and operational excellence.
                </p>
                <p className="text-lg sm:text-xl font-bold text-green-600">
              We deliver more than software. We deliver outcomes.
            </p>
                
                <div className="mt-8 sm:mt-10 hidden md:flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="w-16 h-0.5 bg-green-100"></div>
                  <div className="w-3 h-3 border border-green-100 rounded-full"></div>
                </div>
              </div>
            </SpiralReveal>
            
            {/* Mission Card */}
            <SpiralReveal delay={0.3} index={2}>
              <div className="bg-white rounded-lg p-6 sm:p-10 shadow-md border border-gray-100 h-full">
                <div className="border-b border-green-500 w-16 pb-2 mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Mission</h3>
          </div>

                <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-10 leading-relaxed">
                  To transform our clients into market leaders and industry disruptors by building a balanced ecosystem of AI systems and human capital with the agility of a start-up and the power of Fortune 500 business experience.
                </p>
                
                <div className="inline-flex items-center bg-green-50 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-green-700 text-xs sm:text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>
                  Transforming fitness through intelligent automation
            </div>
              </div>
            </SpiralReveal>
            
            {/* Vision Card */}
            <SpiralReveal delay={0.4} index={3}>
              <div className="bg-white rounded-lg p-6 sm:p-10 shadow-md border border-gray-100 h-full">
                <div className="border-b border-green-500 w-16 pb-2 mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Vision</h3>
          </div>

                <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-10 leading-relaxed">
                  To build a future where businesses of all scales can confidently utilize data-driven innovation to grow sustainably, adapt fearlessly, and achieve lasting success in a constantly evolving world.
                </p>
                
                <div className="inline-flex items-center bg-green-50 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-green-700 text-xs sm:text-sm font-medium">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>
                  Purpose-built AI that solves real business problems
                </div>
              </div>
            </SpiralReveal>
          </div>
        </div>
      </section>

      {/* Leadership Team - Redesigned */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SpiralReveal delay={0.1} index={0}>
            <div className="text-center mb-8 sm:mb-12">
              <div className="w-12 sm:w-16 h-1 bg-green-500 mx-auto mb-4 sm:mb-6"></div>
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">Leadership</h2>
            </div>
          </SpiralReveal>
            
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {leaders.map((leader, index) => (
              <SpiralReveal key={index} delay={0.2} index={index}>
                <div className="border border-gray-200 rounded-lg p-4 sm:p-6 flex flex-col items-center">
                  <div className="mb-3 sm:mb-4">
                    <span className="bg-green-600 text-white text-xs px-2 sm:px-3 py-1 rounded-full font-medium">
                      {leader.expertise}
                    </span>
                  </div>
                  
                  <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-full overflow-hidden mb-3 sm:mb-4">
                  <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 text-center mb-1 sm:mb-2">{leader.name}</h3>
                  <p className="text-green-600 text-xs font-medium text-center mb-3 sm:mb-4">{leader.role}</p>
                  
                  <p className="text-gray-700 text-center mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
                    {leader.bio}
                  </p>
                  
                  <div className="border-l-4 border-green-500 pl-2 sm:pl-3 py-1 italic text-gray-600 mt-auto w-full text-xs sm:text-sm">
                    "{leader.quote}"
                  </div>
                </div>
              </SpiralReveal>
              ))}
            </div>
        </div>
      </section>
      
      {/* Why We Win Section */}
      <section className="py-12 sm:py-20 bg-green-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-white to-green-100/40 opacity-70"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <SpiralReveal delay={0.1} index={0}>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 sm:mb-6 tracking-tight">WHY WE WIN</h2>
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-green-600 mb-4 sm:mb-6">Deep Domain + Real Data + Proven Execution</p>
            </div>
          </SpiralReveal>
          
          <SpiralReveal delay={0.3} index={1}>
            <div className="max-w-3xl mx-auto mb-8 sm:mb-16 text-center">
              <p className="text-lg sm:text-xl font-medium text-gray-900 mb-4 sm:mb-6">We combine:</p>
          </div>
          </SpiralReveal>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 max-w-4xl mx-auto">
            <SpiralReveal delay={0.4} index={2}>
              <div className="bg-white rounded-xl p-6 sm:p-10 shadow-md border border-gray-100">
                <div className="w-10 sm:w-12 h-1 bg-green-500 mb-4 sm:mb-6"></div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  20+ years of fitness & wellness industry expertise
                </p>
              </div>
            </SpiralReveal>
            
            <SpiralReveal delay={0.5} index={3}>
              <div className="bg-white rounded-xl p-6 sm:p-10 shadow-md border border-gray-100">
                <div className="w-10 sm:w-12 h-1 bg-green-500 mb-4 sm:mb-6"></div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Proprietary language models trained on billions in outcomes
                </p>
            </div>
            </SpiralReveal>
            
            <SpiralReveal delay={0.6} index={4}>
              <div className="bg-white rounded-xl p-6 sm:p-10 shadow-md border border-gray-100 sm:col-span-2 md:col-span-1">
                <div className="w-10 sm:w-12 h-1 bg-green-500 mb-4 sm:mb-6"></div>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  A team of experts in AI, data, systems, and scale
            </p>
              </div>
            </SpiralReveal>
          </div>

          <SpiralReveal delay={0.7} index={5}>
            <div className="max-w-3xl mx-auto mt-8 sm:mt-16 text-center">
              <p className="text-lg sm:text-xl text-gray-700 italic">
                We're not just consultants or tech builders — we're co-executors embedded in your outcomes.
              </p>
            </div>
          </SpiralReveal>
        </div>
      </section>
      
      {/* Core Values Section - Based on Screenshot */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SpiralReveal delay={0.1} index={0}>
            <div className="text-center mb-8 sm:mb-16">
              <div className="text-green-600 uppercase text-xs sm:text-sm font-medium tracking-wider mb-2 sm:mb-3">
                CORE VALUES
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-2 sm:mb-3 tracking-tight">V.O.I.C.E</h2>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mb-4 sm:mb-8 tracking-tight">Matters</h3>
              <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-medium">
                Our core principles are the foundation for every decision we make and that all of our employees act on.
              </p>
            </div>
          </SpiralReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-16">
            {/* Be Virtuous */}
            <SpiralReveal delay={0.2} index={1}>
              <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-10">
                <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full border-2 border-gray-200 flex items-center justify-center mb-4 sm:mb-6">
                  <svg className="w-6 sm:w-8 h-6 sm:h-8 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16L12 12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">Be Virtuous</h3>
                <p className="text-sm sm:text-base text-gray-600">
                  We make a living by what we get, but we make a life by what we give
                </p>
              </div>
            </SpiralReveal>
            
            {/* Outcomes Obsessed */}
            <SpiralReveal delay={0.3} index={2}>
              <div className="bg-white border border-gray-200 rounded-lg p-10">
                <div className="w-16 h-16 rounded-full border-2 border-gray-200 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 22L12 12M22 2L12 12M12 12L18 18M12 12L6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Outcomes Obsessed</h3>
                <p className="text-gray-600">
                  Obsessed in delivering value to customers, shareholders, partners, and the environment
                </p>
          </div>
            </SpiralReveal>

            {/* Innovation */}
            <SpiralReveal delay={0.4} index={3}>
              <div className="bg-white border border-gray-200 rounded-lg p-10">
                <div className="w-16 h-16 rounded-full border-2 border-gray-200 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.66347 17H14.3364M11.9999 3V4M18.3639 5.63604L17.6568 6.34315M21 11.9999H20M4 11.9999H3M6.34309 6.34315L5.63599 5.63604M8.46441 15.5356C6.51179 13.5829 6.51179 10.4171 8.46441 8.46449C10.417 6.51187 13.5829 6.51187 15.5355 8.46449C17.4881 10.4171 17.4881 13.5829 15.5355 15.5356L14.9884 16.0827C14.3555 16.7155 13.9999 17.5739 13.9999 18.469V19C13.9999 20.1046 13.1045 21 11.9999 21C10.8954 21 9.99995 20.1046 9.99995 19V18.469C9.99995 17.5739 9.6444 16.7155 9.01151 16.0827L8.46441 15.5356Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovation</h3>
                <p className="text-gray-600">
                  Creativity and growth hacks through relentless innovation
                </p>
              </div>
            </SpiralReveal>
            
            {/* Commitment & Accountability */}
            <SpiralReveal delay={0.5} index={4}>
              <div className="bg-white border border-gray-200 rounded-lg p-10">
                <div className="w-16 h-16 rounded-full border-2 border-gray-200 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 11L12 14L22 4M21 12V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Commitment & Accountability</h3>
                <p className="text-gray-600">
                  Going above and beyond with the right attitude, commitment, and excellence
                </p>
            </div>
            </SpiralReveal>
            
            {/* Empathy & Empowerment */}
            <SpiralReveal delay={0.6} index={5}>
              <div className="bg-white border border-gray-200 rounded-lg p-10 md:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 rounded-full border-2 border-gray-200 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-gray-700" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 6.99996C16.5811 6.06936 17.2971 5.27015 18.1468 4.63038C19.0938 3.92488 20.5635 3.5 22 3.5M22 3.5C22 3.5 22 5.5 22 6.5C22 7.5 21.5 9.5 19.5 9.5C17.5 9.5 16 7.5 16 6.99996M22 3.5C22 3.5 18.5 3.5 16 6.99996M8 6.99996C7.41893 6.06936 6.70289 5.27015 5.85318 4.63038C4.90618 3.92488 3.43647 3.5 2 3.5M2 3.5C2 3.5 2 5.5 2 6.5C2 7.5 2.5 9.5 4.5 9.5C6.5 9.5 8 7.5 8 6.99996M2 3.5C2 3.5 5.5 3.5 8 6.99996M12 7V11M12 11C10.8954 11 9.99997 11.8954 9.99997 13V14C9.99997 15.1046 10.8954 16 12 16C13.1045 16 14 15.1046 14 14V13C14 11.8954 13.1045 11 12 11ZM7.5 14H5.5C4.94772 14 4.5 14.4477 4.5 15V21H19.5V15C19.5 14.4477 19.0523 14 18.5 14H16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Empathy & Empowerment</h3>
                <p className="text-gray-600">
                  An environment where every human THRIVES by empowering and understanding them
                </p>
              </div>
            </SpiralReveal>
          </div>
        </div>
      </section>
      
      {/* Get In Touch Strip */}
      <section className="py-8 bg-green-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <Button 
            className="bg-white hover:bg-gray-50 text-green-600 hover:text-green-700 border-none rounded-md px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 h-auto"
          >
            Get In Touch
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>
      
      {/* Full-width Contact Form */}
      <ContactForm />
      <Footer />
    </div>
  );
};

export default AboutUs;