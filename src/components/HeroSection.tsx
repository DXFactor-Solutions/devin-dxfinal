import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ArrowRight, PlayCircle } from 'lucide-react';

// Updated to have a cleaner 2-line format
const FIRST_LINE = "We Don't Build Software";
const SECOND_LINE = "We Build Revenue Machines";
const SOFTWARE = 'Software';
const REVENUE_MACHINES = 'Revenue Machines';

const HeroSection = () => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [showCursor1, setShowCursor1] = useState(true);
  const [showCursor2, setShowCursor2] = useState(false);
  const [line1Done, setLine1Done] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const fullLine1 = "We Don't Build Software";
  const fullLine2 = "We Build Revenue Machines";
  
  const softwareWord = "Software";
  const revenueMachinesWord = "Revenue Machines";

  const softwareStartIndex = fullLine1.indexOf(softwareWord);
  const softwareEndIndex = softwareStartIndex + softwareWord.length;
  const revenueMachinesStartIndex = fullLine2.indexOf(revenueMachinesWord);

  useEffect(() => {
    // Initialize video when component mounts
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slightly slower playback
    }
  }, []);

  useEffect(() => {
    setText1('');
    setText2('');
    setShowCursor1(true);
    setShowCursor2(false);
    setLine1Done(false);

    let charIndex1 = 0;
    const interval1 = setInterval(() => {
      if (charIndex1 < fullLine1.length) {
        setText1(fullLine1.substring(0, charIndex1 + 1));
        charIndex1++;
      } else {
        clearInterval(interval1);
        setShowCursor1(false);
        setLine1Done(true);

        setTimeout(() => {
          setShowCursor2(true);
          let charIndex2 = 0;
          const interval2 = setInterval(() => {
            if (charIndex2 < fullLine2.length) {
              setText2(fullLine2.substring(0, charIndex2 + 1));
              charIndex2++;
            } else {
              clearInterval(interval2);
              setShowCursor2(false); // Hide cursor when done
            }
          }, 70); // Typing speed for line 2
        }, 500); // Pause between lines
      }
    }, 70); // Typing speed for line 1

    return () => {
      clearInterval(interval1);
      // It's good practice to clear the second interval too, though it's nested.
      // This might require a ref for interval2 if cleanup is strictly needed here.
    };
  }, []); // Empty dependency array ensures this runs once on mount

  const renderLine1 = () => {
    const part1 = text1.substring(0, softwareStartIndex);
    const software = text1.substring(softwareStartIndex, Math.min(text1.length, softwareEndIndex));
    const part3 = text1.substring(Math.min(text1.length, softwareEndIndex));

    return (
      <div className="block mb-2 md:mb-3 whitespace-nowrap">
        {part1}
        {software && (
          <span className="relative inline-block">
            <span className="text-white">{software}</span>
            {text1.length >= softwareEndIndex && (
              <span 
                className="absolute left-0 right-0 top-1/2 h-1 bg-red-500 opacity-80 transform -translate-y-1/2 pointer-events-none"
                style={{ zIndex: 1 }}
              ></span>
            )}
          </span>
        )}
        {part3}
        {showCursor1 && <span className="animate-pulse text-white">|</span>}
      </div>
    );
  };

  const renderLine2 = () => {
    if (!line1Done) return null;
    const beforeRevenue = text2.substring(0, revenueMachinesStartIndex);
    const revenueMachines = text2.substring(revenueMachinesStartIndex);

    return (
      <div className="block whitespace-nowrap">
        {beforeRevenue}
        {revenueMachines && (
          <span className="text-green-500">{revenueMachines}</span>
        )}
        {showCursor2 && <span className="animate-pulse text-white">|</span>}
      </div>
    );
  };

  return (
    <section className="relative h-screen flex flex-col pt-20 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.8)' }}
        >
          <source src="/dx1.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center w-full">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="container px-4 mx-auto text-center"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-4 md:mb-5 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto flex flex-col"
            style={{ lineHeight: 1.2, minHeight: '2.8em' }} // minHeight helps prevent layout shift
          >
            {renderLine1()}
            {renderLine2()}
          </motion.div>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-xl md:max-w-2xl mx-auto mb-7 md:mb-8 text-base md:text-xl text-gray-200 leading-relaxed"
          >
            The first Agentic Platform built specifically for Fitness & Wellness. Deploy agents that deliver measurable outcomes at scale.
          </motion.p>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-3 md:gap-5 mb-8"
          >
            <Button 
              size="lg" 
              className="bg-black hover:bg-gray-800 text-white border-none rounded-md px-8 py-3 shadow-md hover:shadow-lg transition-all duration-300"
            >
              Book Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white hover:border-gray-300 text-white hover:text-white bg-transparent hover:bg-black/20 rounded-md px-8 py-3 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <PlayCircle className="mr-2 w-5 h-5 text-gray-200" />
              Watch Demo
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-4xl mx-auto mt-10 md:mt-12 w-full px-2"
          >
            <div className="text-center p-6 bg-black/40 backdrop-blur-sm rounded-lg shadow-lg border border-white/10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">$2B+</h3>
              <p className="text-xs md:text-sm text-gray-300 uppercase tracking-wider">REVENUE GENERATED</p>
            </div>
            <div className="text-center p-6 bg-black/40 backdrop-blur-sm rounded-lg shadow-lg border border-white/10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">120%</h3>
              <p className="text-xs md:text-sm text-gray-300 uppercase tracking-wider">NET REVENUE RETENTION</p>
            </div>
            <div className="text-center p-6 bg-black/40 backdrop-blur-sm rounded-lg shadow-lg border border-white/10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">96</h3>
              <p className="text-xs md:text-sm text-gray-300 uppercase tracking-wider">NET PROMOTER SCORE</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;