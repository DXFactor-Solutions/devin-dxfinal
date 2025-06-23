import React, { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Quote, Star, Users, TrendingUp, Play, Pause } from 'lucide-react';
import { Link } from 'react-router-dom';

// Animation component for spiral effect
const SpiralReveal = ({ children, delay = 0, index = 0 }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  const angle = index * 30;
  const radius = index * 5;
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
          rotate: -5 + (index % 3) * 5
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

// Testimonials data
const testimonials = [
    {
      quote: "DXFactor understands our industry, delivers real results, and moves fast. Their responsiveness and expertise cut costs by 50%—a true game-changer for us!",
      author: "Don Dickerson",
      title: "Vice President",
      company: "Fitness SF",
      avatar: "/headshots/Don-Dickerson-Fitness-SF.png",
      logo: "/logos/fitnessSF.svg"
    },
    {
      quote: "DXFactor was critical in delivering a reliable and scalable streaming platform for CRUNCH+ on time and within budget, transforming our digital content delivery.",
      author: "Mike Neff",
      title: "Executive Vice President",
      company: "Crunch",
      avatar: "/headshots/Mike-Neff-Crunch.jpeg",
      logo: "/logos/crunch.svg"
    },
    {
      quote: "The technology integration has streamlined our operations, giving us a unified view of our data and enabling faster, more informed decisions.",
      author: "Rob Koehler",
      title: "Director of Technology Development",
      company: "Wisconsin Athletic Club",
      avatar: "/headshots/Rob-Koehler-WAC.jpeg",
      logo: "/logos/wac-logo.svg"
    },
    {
      quote: "Not just code—DXFactor brought collaboration, speed, and structure to help us scale our digital platform with confidence.",
      author: "Jeremy Brutus",
      title: "Co-Founder",
      company: "URBN Playground",
      avatar: "/headshots/Jeremy-Brutus-URBN.jpeg",
      logo: "/logos/urbn.svg"
    },
    {
      quote: "Click2Save has made my administrative team's life much easier and more productive while saving members at the same time.",
      author: "Chad Shaw",
      title: "Chief Operating Officer",
      company: "Fit Athletic Club",
      avatar: "/headshots/Chad-Shaw-Fit-Athletic.jpeg",
      logo: "/logos/fit-athletic.svg"
    },
    {
      quote: "We are excited to partner with DXFactor for their unparalleled expertise in digital transformation which will help us accelerate our member portfolio to ensure that will support the growth of our partners.",
      author: "Khai Rai",
      title: "Platform President",
      company: "ABC",
      avatar: "/headshots/Khal-Rai-ABC.jpeg",
      logo: "/logos/abc.svg"
    },
    {
      quote: "Method Gym saved 7% of cancellations & $1.8K in dues in 30 days—thanks to DXFactor's Click2Save. Fast setup, real ROI, better member experience.",
      author: "Al Noshirvani",
      title: "Founder",
      company: "Method Gym",
      avatar: "/headshots/alno.webp",
      logo: "/logos/method-gym.svg"
    },
    {
      quote: "DXFactor brings clarity, speed & care—solving problems with you, not just for you. Bold ideas meet practical results.",
      author: "Chelsea Lorenzen",
      title: "Associate Partner",
      company: "ALTA",
      avatar: "/headshots/Chelsea-Lorenzen-ALTA.jpeg",
      logo: "/logos/alta.svg"
    },
    {
      quote: "Partnering with DXFactor enhances our ability to offer comprehensive, personalized solutions that drive both member satisfaction and operational efficiency.",
      author: "John Ford",
      title: "Chief Product Officer",
      company: "EGYM",
      avatar: "/headshots/John-Ford-EGYM.jpeg",
      logo: "/logos/egym.svg"
    },
    {
      quote: "With AI Agents, we have an opportunity to have a conversation with every prospects to guide them to the correct membership type, to try to get them with personal training, and discuss other things like youth and family programs.",
      author: "Jon Roberts",
      title: "Chief Information Officer",
      company: "In Shape",
      avatar: "/headshots/Jon-Roberts-InShape.jpeg",
      logo: "/logos/inshape.svg"
    },
    {
      quote: "We saved 4000 man hours in 12 months due to Dx Factor's Concierge Agent mainly from answering phone calls and front desk questions.",
      author: "Andrew Brady",
      title: "VP of Technology",
      company: "Chuze",
      avatar: "/headshots/Andrew-Brady-Chuze.jpeg",
      logo: "/logos/chuze.svg"
    },
    {
      quote: "Since integrating DXFactor's AI-powered agent, we've seen a significant reduction in the time spent on general membership inquiries, saving more than 20 hours each month. This efficiency boost allows us to allocate more resources to member experience and operational improvements.",
      author: "Jason Breazeale",
      title: "VP of Technology",
      company: "Burn Boot Camp",
      avatar: "/headshots/Jason-Breazeale-BBC.jpeg",
      logo: "/logos/burn-boot-camp.svg"
    },
    {
      quote: "In less than a month, Method saved 7.03% of members who initiated cancellation, retaining $1,800 in monthly revenue. The result? Not just higher retention and operational savings, but a dramatically improved member experience.",
      author: "Troy McFarland",
      title: "Director of Marketing",
      company: "Fitness SF",
      avatar: "/headshots/Troy-Macfarland-FitnessSF.jpg",
      logo: "/logos/fitnessSF.svg"
    },
    {
      quote: "If you're looking for a strategic engineering partner who thinks beyond the code, DXFactor is the team you want in your corner.",
      author: "Chelsea Lorenzen",
      title: "Associate Partner",
      company: "ALTA",
      avatar: "/headshots/Chelsea-Lorenzen-ALTA.jpeg",
      logo: "/logos/alta.svg"
    },
    {
      quote: "Partnering with DXFactor enhances our ability to offer comprehensive, personalized solutions that drive both member satisfaction and operational efficiency.",
      author: "John Ford",
      title: "Chief Product Officer",
      company: "EGYM",
      avatar: "/headshots/John-Ford-EGYM.jpeg",
      logo: "/logos/egym.svg"
    }
];

const TestimonialsPage = () => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);

  const videoTestimonials = [
    // ... video testimonials
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Navbar />

      {/* Hero Section */}
      <div className="relative bg-black pt-24 pb-16 text-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
            style={{ objectPosition: 'center 20%' }}
          >
            <source src="/videos/postworkout.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 drop-shadow-lg">
            <span className="text-green-400">$2B+</span> in Outcomes.
            <br />
            <span className="text-white">100+</span> Success Stories.
          </h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed mb-8 drop-shadow-md font-medium">
            From boutique studios to enterprise chains, see how operators like you have transformed their business with DX.
          </p>
        
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-4">
              <p className="text-4xl font-extrabold text-green-400 mb-1 drop-shadow-lg">120%</p>
              <p className="text-sm text-white font-semibold drop-shadow-md">Net Revenue Retention</p>
            </div>
            <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-4">
              <p className="text-4xl font-extrabold text-green-400 mb-1 drop-shadow-lg">96</p>
              <p className="text-sm text-white font-semibold drop-shadow-md">Net Promoter Score</p>
            </div>
            <div className="text-center bg-black/30 backdrop-blur-sm rounded-lg p-4">
              <p className="text-4xl font-extrabold text-green-400 mb-1 drop-shadow-lg">30%</p>
              <p className="text-sm text-white font-semibold drop-shadow-md">Faster Decision-Making</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Featured Success Stories Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SpiralReveal delay={0.1} index={0}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Deep dives into transformational outcomes
              </p>
            </div>
          </SpiralReveal>

          {/* Case Study Cards */}
          <div className="space-y-16">
            {/* Crunch Fitness Case Study */}
            <SpiralReveal delay={0.2} index={1}>
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <img src="/logos/Fit-athletic.svg" alt="Crunch Fitness" className="h-12 w-auto" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">160 Saves. $288k Retained</h3>
                    <p className="text-sm text-green-600 font-medium">Challenge: Manual cancellations</p>
                  </div>
                </div>
                
                <p className="text-gray-800 mb-8 max-w-3xl font-medium">
                  Crunch Fitness was losing 40% of their leads to competitors because they came in after hours. Their front desk couldn't handle the volume during peak times, and overnight inquiries went unanswered.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Stats on the left */}
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <p className="text-4xl font-bold text-green-600 mb-1">12.34%</p>
                      <p className="text-sm text-gray-800 font-semibold">Canceling members saved</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <p className="text-4xl font-bold text-green-600 mb-1">$288k</p>
                      <p className="text-sm text-gray-800 font-semibold">Annual revenue retained</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <p className="text-4xl font-bold text-green-600 mb-1">20%</p>
                      <p className="text-sm text-gray-800 font-semibold">Improvement in administrative efficiency</p>
                    </div>
                    <button className="text-green-600 font-medium hover:text-green-700 transition-colors flex items-center gap-2 mt-6">
                      Read Full Case Study →
                    </button>
                  </div>

                  {/* Video on the right */}
                  <div className="relative rounded-xl overflow-hidden bg-gray-900 aspect-video">
                    <video
                      className="w-full h-full object-cover"
                      poster="/thumbnails/crunch-thumb.jpg"
                      controls
                    >
                      <source src="/testimonialvideo/crunch.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </SpiralReveal>

            {/* Chuze Fitness Case Study */}
            <SpiralReveal delay={0.3} index={2}>
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <img src="/logos/Chuze.jpg" alt="Chuze Fitness" className="h-12 w-auto" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">From Long Lines to Self-Service​</h3>
                    <p className="text-sm text-green-600 font-medium">Challenge: Front-Desk Overload & App
                    Limitations</p>
                  </div>
                </div>
                
                <p className="text-gray-800 mb-8 max-w-3xl font-medium">
                Chuze needed to move joins, upgrades, and
cancels out of the club and into the app — all
while meeting the FTC's Click-to-Cancel
deadline. But their legacy tech was holding
them back, and key features like Buddy
Passes and Rewards were scattered across
separate systems. 
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center bg-white rounded-lg p-6 shadow-sm">
                    <p className="text-5xl font-bold text-green-600 mb-2">37%</p>
                    <p className="text-gray-800 font-semibold">Of new memberships now originate in-app</p>
                  </div>
                  <div className="text-center bg-white rounded-lg p-6 shadow-sm">
                    <p className="text-5xl font-bold text-green-600 mb-2">70% </p>
                    <p className="text-gray-800 font-semibold">Reduction in manual cancel/upgrade work</p>
                  </div>
                  <div className="text-center bg-white rounded-lg p-6 shadow-sm">
                    <p className="text-5xl font-bold text-green-600 mb-2">3x</p>
                    <p className="text-gray-800 font-semibold">Growth in Buddy activity through the app</p>
                  </div>
                </div>
                
                <Link to="/case-studies/dxf-chuze-fitness" className="text-green-600 font-medium hover:text-green-700 transition-colors flex items-center gap-2">
                  Read Full Case Study →
                </Link>
              </div>
            </SpiralReveal>

            {/* Fitness SF Case Study */}
            <SpiralReveal delay={0.4} index={3}>
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                <div className="flex items-center gap-4 mb-6">
                  <img src="/logos/fitnessSF.svg" alt="Fitness SF" className="h-12 w-auto" />
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">300+ Hours Saved. Every Month.</h3>
                    <p className="text-sm text-green-600 font-medium">Challenge: Disconnected Systems</p>
                  </div>
                </div>
                
                <p className="text-gray-800 mb-8 max-w-3xl font-medium">
                  Fitness SF had data in 7 different systems with no unified view. Decision-making was slow, and opportunities were missed. They needed a complete data transformation.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Stats on the left */}
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <p className="text-4xl font-bold text-green-600 mb-1">4000+</p>
                      <p className="text-sm text-gray-800 font-semibold">Hours Saved Annually</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <p className="text-4xl font-bold text-green-600 mb-1">24/7</p>
                      <p className="text-sm text-gray-800 font-semibold">Member Concierge Support</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <p className="text-4xl font-bold text-green-600 mb-1">1000+</p>
                      <p className="text-sm text-gray-800 font-semibold">Inquiries Handled</p>
                    </div>
                    <button className="text-green-600 font-medium hover:text-green-700 transition-colors flex items-center gap-2 mt-6">
                      Read Full Case Study →
                    </button>
                  </div>

                  {/* Video on the right */}
                  <div className="relative rounded-xl overflow-hidden bg-gray-900 aspect-video">
                    <video
                      className="w-full h-full object-cover"
                      poster="/thumbnails/fitnesssf-thumb.jpg"
                      controls
                    >
                      <source src="/testimonialvideo/urbn.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
              </div>
            </SpiralReveal>
          </div>
        </div>
      </section>

      {/* What Operators Are Saying Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Operators Are Saying
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quick wins and transformational stories from the field
            </p>
          </div>

          {/* Testimonial Quotes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow">
                <Quote className="w-8 h-8 text-green-600 mb-4" />
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover"
                    onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

// Flip Card Component - needs to be defined for the testimonials
const FlipCard = ({ testimonial, videoSrc, currentlyPlaying, setCurrentlyPlaying }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);
  const isPlaying = currentlyPlaying === videoSrc;

  const handleVideoToggle = (e) => {
    e.stopPropagation();
    if (videoRef.current && !videoError) {
      if (isPlaying) {
        videoRef.current.pause();
        setCurrentlyPlaying(null);
      } else {
        setCurrentlyPlaying(videoSrc);
      }
    }
  };

  const handleFlip = () => {
    setIsFlipped(prev => !prev);
  };

  useEffect(() => {
    if(videoRef.current) {
      if(isFlipped && !isPlaying) {
        setCurrentlyPlaying(videoSrc);
      } else if (!isFlipped && isPlaying) {
        videoRef.current.pause();
        setCurrentlyPlaying(null);
      }
    }
  }, [isFlipped, isPlaying, setCurrentlyPlaying, videoSrc]);

  useEffect(() => {
    if(videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(e => console.error("Video play failed", e));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying]);

  const handleVideoError = () => {
    console.error('Video failed to load:', videoSrc);
    setVideoError(true);
  };

  const flipCardStyles = `
    .flip-card-container {
      perspective: 1000px;
      height: 320px;
    }
    
    .flip-card {
      position: relative;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
      transition: transform 0.8s ease-in-out;
    }
    
    .flip-card.flipped {
      transform: rotateY(180deg);
    }
    
    .flip-card-front,
    .flip-card-back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      border-radius: 0.75rem;
      overflow: hidden;
    }
    
    .flip-card-back {
      transform: rotateY(180deg);
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: flipCardStyles }} />
      <div className="flip-card-container" onClick={handleFlip}>
        <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
          {/* Front Side - Testimonial */}
          <div className="flip-card-front bg-gradient-to-br from-green-50 to-emerald-50 p-6 border border-green-100 hover:shadow-lg transition-shadow cursor-pointer relative">
            <div className="absolute top-4 right-4">
              <img 
                src={testimonial.logo} 
                alt={`${testimonial.company} logo`}
                className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity"
                onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
              />
            </div>
            
            <div className="flex items-center mb-4">
              <Quote className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-gray-700 leading-relaxed mb-6 italic text-base line-clamp-4">
              "{testimonial.quote}"
            </p>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author}
                  className="w-10 h-10 rounded-full mr-3 border-2 border-white shadow-sm"
                />
                <div>
                  <div className="font-bold text-gray-900 text-sm">{testimonial.author}</div>
                  <div className="text-xs text-gray-600">{testimonial.title}</div>
                  <div className="text-xs font-medium text-green-600">{testimonial.company}</div>
                </div>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center text-xs text-gray-500 bg-white/80 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-200">
                  <Play className="w-3 h-3 mr-1" />
                  Click to watch video
                </div>
              </div>
            </div>
          </div>

          {/* Back Side - Video */}
          <div className="flip-card-back bg-gray-900 cursor-pointer relative overflow-hidden">
            {!videoError ? (
              <>
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  muted={false}
                  onError={handleVideoError}
                  controls={false}
                  preload="metadata"
                >
                  <source src={videoSrc} type="video/mp4" />
                  <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
                  <source src={videoSrc.replace('.mp4', '.mov')} type="video/quicktime" />
                  Your browser does not support the video tag.
                </video>
                
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={handleVideoToggle}
                    className="bg-white/90 hover:bg-white text-gray-900 p-4 rounded-full transition-all duration-200 shadow-lg hover:scale-110"
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                  </button>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-white">
                    <p className="font-semibold text-lg mb-1">{testimonial.author}</p>
                    <p className="text-sm opacity-90">{testimonial.title}</p>
                    <p className="text-sm opacity-75">{testimonial.company}</p>
                  </div>
                </div>
              </>
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center p-6">
                <div className="text-center text-white">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Play className="w-8 h-8 text-red-400" />
                  </div>
                  <p className="text-lg font-semibold mb-2">Video Unavailable</p>
                  <p className="text-sm opacity-75 mb-4">Sorry, this video couldn't be loaded.</p>
                  <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg">
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <p className="text-xs opacity-90">{testimonial.title}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            )}
            
            <div className="absolute top-4 right-4 text-xs text-white bg-black/60 backdrop-blur-sm px-3 py-2 rounded-full">
              Click to flip back
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsPage; 