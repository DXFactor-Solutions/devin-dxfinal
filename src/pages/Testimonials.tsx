import React, { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Quote, Star, Users, TrendingUp, Play, Pause } from 'lucide-react';

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

// Flip Card Component
const FlipCard = ({ testimonial, videoSrc }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef(null);

  const handleVideoToggle = () => {
    if (videoRef.current && !videoError) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    if (!isFlipped && videoRef.current && !videoError) {
      // Auto play when flipping to video side
      setTimeout(() => {
        videoRef.current.play().catch(() => {
          console.log('Auto-play prevented');
        });
      }, 300); // Wait for flip animation
    }
  };

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
            {/* Company Logo */}
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
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onError={handleVideoError}
                  controls={false}
                  preload="metadata"
                  onLoadStart={() => console.log('Video load started:', videoSrc)}
                  onCanPlay={() => console.log('Video can play:', videoSrc)}
                >
                  <source src={videoSrc} type="video/mp4" />
                  <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
                  <source src={videoSrc.replace('.mp4', '.mov')} type="video/quicktime" />
                  Your browser does not support the video tag.
                </video>
                
                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVideoToggle();
                    }}
                    className="bg-white/90 hover:bg-white text-gray-900 p-4 rounded-full transition-all duration-200 shadow-lg hover:scale-110"
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6 ml-1" />}
                  </button>
                </div>

                {/* Video Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-white">
                    <p className="font-semibold text-lg mb-1">{testimonial.author}</p>
                    <p className="text-sm opacity-90">{testimonial.title}</p>
                    <p className="text-sm opacity-75">{testimonial.company}</p>
                  </div>
                </div>
              </>
            ) : (
              // Video Error Fallback
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

// Video Carousel Card Component
const VideoCarouselCard = ({ video, index }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Playing video:', video.src);
    setVideoError(false);
    setShowVideo(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.error('Video play error:', error);
          setVideoError(true);
        });
        setIsPlaying(true);
      }
    }, 100);
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleVideoError = () => {
    console.error('Video loading error:', video.src);
    setVideoError(true);
  };

  const handleVideoLoaded = () => {
    console.log('Video loaded successfully:', video.src);
    setVideoLoaded(true);
  };

  return (
    <div className="flex-shrink-0 w-80 h-64 relative group cursor-pointer select-none" 
         onClick={handlePlay}
         onTouchStart={handlePlay}
         style={{ touchAction: 'manipulation' }}>
      {!showVideo ? (
        // Video Thumbnail/Preview
        <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative border-2 border-transparent hover:border-green-500/50">
          {/* Thumbnail Background */}
          <div className="absolute inset-0 bg-black/60"></div>
          
          {/* Author Image as Background */}
          <img 
            src={video.thumbnail}
            alt={video.author}
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
              console.log('Thumbnail failed to load:', video.thumbnail);
            }}
          />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 border-2 border-green-500/20 hover:border-green-500">
              <Play className="w-8 h-8 text-gray-900 ml-1" />
            </div>
          </div>
          
          {/* Click instruction overlay */}
          <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div className="bg-black/80 text-white text-xs px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-20">
              Click to play video
            </div>
          </div>
          
          {/* Video Info */}
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-white font-bold text-lg mb-1">{video.title}</h3>
            <p className="text-white/80 text-sm mb-2">{video.subtitle}</p>
            <div className="flex items-center space-x-2">
              <img 
                src={video.thumbnail}
                alt={video.author}
                className="w-6 h-6 rounded-full border border-white/30"
                onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
              />
              <span className="text-white/90 text-xs">{video.author} • {video.company}</span>
            </div>
          </div>
          
          {/* Duration Badge */}
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
            2:30
          </div>
        </div>
      ) : (
        // Full Video Player
        <div className="w-full h-full bg-black rounded-xl overflow-hidden shadow-lg relative">
          {!videoError ? (
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              controls
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onError={handleVideoError}
              onLoadedData={handleVideoLoaded}
              onEnded={() => {
                setIsPlaying(false);
                setShowVideo(false);
              }}
              preload="metadata"
            >
              <source src={video.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            // Error fallback
            <div className="w-full h-full bg-gray-800 flex items-center justify-center text-white p-6">
              <div className="text-center">
                <div className="text-red-400 mb-2">⚠️</div>
                <p className="text-sm">Video unavailable</p>
                <p className="text-xs opacity-70 mt-1">{video.title}</p>
              </div>
            </div>
          )}
          
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowVideo(false);
              setIsPlaying(false);
              if (videoRef.current) {
                videoRef.current.pause();
              }
            }}
            className="absolute top-4 right-4 w-8 h-8 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors z-10"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

const TestimonialsPage = () => {
  const testimonials = [
    {
      quote: "DXFactor understands our industry, delivers real results, and moves fast. Their responsiveness and expertise cut costs by 50%—a true game-changer for us!",
      author: "Don Dickerson",
      title: "Vice President",
      company: "Fitness SF",
      avatar: "/headshots/Don-Dickerson-Fitness-SF.png",
      logo: "/logos/fitnessSF.svg",
      featured: true,
      hasVideo: true,
      videoSrc: "/testimonialvideo/urbn.mp4"
    },
    {
      quote: "The technology integration has streamlined our operations, giving us a unified view of our data and enabling faster, more informed decisions.",
      author: "Rob Koehler",
      title: "Director of Technology Development",
      company: "Wisconsin Athletic Club",
      avatar: "/headshots/Rob-Koehler-WAC.jpeg",
      logo: "/logos/wac-logo.svg",
      featured: true,
      hasVideo: false
    },
    {
      quote: "DXFactor was critical in delivering a reliable and scalable streaming platform for CRUNCH+ on time and within budget, transforming our digital content delivery.",
      author: "Mike Neff",
      title: "Executive Vice President",
      company: "Crunch",
      avatar: "/headshots/Mike-Neff-Crunch.jpeg",
      logo: "/logos/crunch.svg",
      featured: true,
      hasVideo: true,
      videoSrc: "/testimonialvideo/crunch.mp4"
    },
    {
      quote: "Not just code—DXFactor brought collaboration, speed, and structure to help us scale our digital platform with confidence.",
      author: "Jeremy Brutus",
      title: "Co-Founder",
      company: "URBN Playground",
      avatar: "/headshots/Jeremy-Brutus-URBN.jpeg",
      logo: "/logos/URBN Playground.png"
    },
    {
      quote: "Click2Save has made my administrative team's life much easier and more productive while saving members at the same time.",
      author: "Chad Shaw",
      title: "Chief Operating Officer",
      company: "Fit Athletic Club",
      avatar: "/headshots/Chad-Shaw-Fit-Athletic.jpeg",
      logo: "/logos/Fit-athletic.svg"
    },
    {
      quote: "We are excited to partner with DXFactor for their unparalleled expertise in digital transformation which will push our combined portfolio into new and exciting areas that will support the growth of our partners.",
      author: "Khal Rai",
      title: "Platform President",
      company: "ABC",
      avatar: "/headshots/Khal-Rai-ABC.jpeg"
    },
    {
      quote: "Method Gym saved 7% of cancellations & $1.8K in dues in 30 days—thanks to DXFactor's Click to Save. Fast setup, real ROI, better member experience.",
      author: "Al Noshirvani",
      title: "Founder",
      company: "Method Gym",
      avatar: "/headshots/alno.webp",
      logo: "/logos/method-gym.png"
    },
    {
      quote: "DXFactor brings clarity, speed & care—solving problems with you, not just for you. Bold ideas need partners like this.",
      author: "Chelsea Lorenzo",
      title: "Associate Partner",
      company: "ALTA",
      avatar: "/headshots/Chelsea-Lorenzen-ALTA.jpeg"
    },
    {
      quote: "Partnering with DXFactor enhances our ability to offer comprehensive, personalized solutions that drive both member satisfaction and operational efficiency.",
      author: "John Ford",
      title: "Chief Product Officer",
      company: "EGYM",
      avatar: "/headshots/John-Ford-EGYM.jpeg"
    },
    {
      quote: "With AI Agents, we have an opportunity to have a conversation with every prospects to guide them to the correct membership type, to try to upsell them with personal training, and discuss other things like goals as they come into the club.",
      author: "Jon Roberts",
      title: "Chief Information Officer",
      company: "In Shape",
      avatar: "/headshots/Jon-Roberts-InShape.jpeg"
    },
    {
      quote: "We saved 4000 man hours in 12 months due to Dx Factor's Concierge Agent mainly from answering phone calls and front desk questions.",
      author: "Don Dickerson",
      title: "President",
      company: "Fitness SF - Agent",
      avatar: "/headshots/Don-Dickerson-Fitness-SF.png",
      logo: "/logos/fitnessSF.svg"
    },
    {
      quote: "Since integrating DXFactor's AI-powered agent, we've seen a significant reduction in the time spent on general membership inquiries, saving roughly 20 hours each month. This efficiency boost allows us to allocate more resources to member experience and operational improvements.",
      author: "Troy McFarland",
      title: "Director of Operations",
      company: "Fitness SF - Agent",
      avatar: "/headshots/Troy-Macfarland-FitnessSF.jpg",
      logo: "/logos/fitnessSF.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SpiralReveal delay={0.1} index={0}>
            <div className="text-center">
              <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium mb-6">
                <Quote className="w-3 h-3 mr-1" />
                CLIENT TESTIMONIALS
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-gray-900 leading-tight mb-6">
                What Our Clients
                <br />
                <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                  Say About Us
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Don't just take our word for it. Hear from fitness industry leaders who have transformed their businesses with DXFactor's AI solutions.
              </p>
            </div>
          </SpiralReveal>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SpiralReveal delay={0.1} index={0}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Featured Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Industry leaders share their experiences working with DXFactor
              </p>
            </div>
          </SpiralReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.filter(t => t.featured).map((testimonial, index) => (
              <SpiralReveal key={index} delay={0.2 + index * 0.1} index={index + 1}>
                {testimonial.hasVideo ? (
                  <FlipCard testimonial={testimonial} videoSrc={testimonial.videoSrc} />
                ) : (
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-shadow h-80 relative">
                    {/* Company Logo */}
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
                      <div className="flex items-center">
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
                    </div>
                  </div>
                )}
              </SpiralReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video Carousel Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SpiralReveal delay={0.1} index={0}>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Client Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Watch real testimonials from industry leaders sharing their transformation journeys
              </p>
            </div>
          </SpiralReveal>

          {/* Video Carousel */}
          <div className="relative">
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-6 pb-4" style={{ width: 'max-content' }}>
                {[
                  {
                    src: "/testimonialvideo/crunch.mp4",
                    title: "Crunch Fitness Success",
                    subtitle: "Scalable Platform Delivery",
                    thumbnail: "/headshots/Mike-Neff-Crunch.jpeg",
                    author: "Mike Neff",
                    company: "Crunch"
                  },
                  {
                    src: "/testimonialvideo/urbn.mp4",
                    title: "URBN Playground Growth",
                    subtitle: "Team Flexibility & Speed",
                    thumbnail: "/headshots/Jeremy-Brutus-URBN.jpeg",
                    author: "Jeremy Brutus", 
                    company: "URBN Playground"
                  },
                  {
                    src: "/testimonialvideo/Crunch _ DX Factor  Quick Finish.mp4",
                    title: "Quick Project Delivery",
                    subtitle: "Crunch Fitness Experience",
                    thumbnail: "/headshots/Mike-Neff-Crunch.jpeg",
                    author: "Crunch Team",
                    company: "Crunch Fitness"
                  },
                  {
                    src: "/testimonialvideo/Fitness SF _ Dharmesh  Industry Understanding.mp4",
                    title: "Industry Understanding",
                    subtitle: "Fitness SF Partnership",
                    thumbnail: "/headshots/Don-Dickerson-Fitness-SF.png",
                    author: "Dharmesh",
                    company: "Fitness SF"
                  },
                  {
                    src: "/testimonialvideo/Fitness SF _ Sales team adoption.mp4",
                    title: "Sales Team Adoption",
                    subtitle: "Fitness SF Success",
                    thumbnail: "/headshots/Don-Dickerson-Fitness-SF.png",
                    author: "Sales Team",
                    company: "Fitness SF"
                  },
                  {
                    src: "/testimonialvideo/FSF_ Native App Launch.mp4",
                    title: "Native App Launch",
                    subtitle: "Fitness SF Innovation",
                    thumbnail: "/headshots/Don-Dickerson-Fitness-SF.png",
                    author: "FSF Team",
                    company: "Fitness SF"
                  },
                  {
                    src: "/testimonialvideo/FSF_ Smooth Launch Success.mp4",
                    title: "Smooth Launch Success",
                    subtitle: "Fitness SF Results",
                    thumbnail: "/headshots/Don-Dickerson-Fitness-SF.png",
                    author: "FSF Team",
                    company: "Fitness SF"
                  },
                  {
                    src: "/testimonialvideo/FSF_ Staff Happy  Costs Reduced (1).mp4",
                    title: "Cost Reduction Success",
                    subtitle: "Staff Satisfaction & Savings",
                    thumbnail: "/headshots/Don-Dickerson-Fitness-SF.png",
                    author: "FSF Team",
                    company: "Fitness SF"
                  },
                  {
                    src: "/testimonialvideo/SF _ Choosing DX Factor.mp4",
                    title: "Choosing DX Factor",
                    subtitle: "Decision Process",
                    thumbnail: "/headshots/Don-Dickerson-Fitness-SF.png",
                    author: "SF Team",
                    company: "Fitness SF"
                  },
                  {
                    src: "/testimonialvideo/SF _ DX  Results  Not Sales.mp4",
                    title: "Results Not Sales",
                    subtitle: "Real Outcomes Focus",
                    thumbnail: "/headshots/Don-Dickerson-Fitness-SF.png",
                    author: "SF Team",
                    company: "Fitness SF"
                  }
                ].map((video, index) => (
                  <VideoCarouselCard key={index} video={video} index={index} />
                ))}
              </div>
            </div>

            {/* Scroll Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="w-2 h-2 bg-gray-300 rounded-full"></div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ready to Share Your Success Story?
              </h3>
              <p className="text-gray-600 mb-6">
                Join these industry leaders and transform your business with DXFactor's AI solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors shadow-lg">
                  Schedule Demo
                </button>
                <button className="border-2 border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold transition-colors">
                  View All Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-green-500 rounded-full blur-xl"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full blur-xl"></div>
          <div className="absolute bottom-20 left-32 w-24 h-24 bg-emerald-500 rounded-full blur-xl"></div>
          <div className="absolute bottom-32 right-10 w-18 h-18 bg-green-400 rounded-full blur-xl"></div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}} />
      </section>

      {/* All Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SpiralReveal delay={0.1} index={0}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                More Client Success Stories
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover how fitness businesses across the industry are achieving remarkable results
              </p>
            </div>
          </SpiralReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.filter(t => !t.featured).map((testimonial, index) => (
              <SpiralReveal key={index} delay={0.2 + index * 0.1} index={index + 1}>
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow h-full flex flex-col relative">
                  {/* Company Logo */}
                  <div className="absolute top-4 right-4">
                    <img 
                      src={testimonial.logo} 
                      alt={`${testimonial.company} logo`}
                      className="h-6 w-auto opacity-60 hover:opacity-100 transition-opacity"
                      onError={(e) => (e.target as HTMLImageElement).style.display = 'none'}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <Quote className="w-6 h-6 text-green-600 mb-4" />
                    <p className="text-gray-600 leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="flex items-center mt-auto">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <div className="font-bold text-gray-900 text-sm">{testimonial.author}</div>
                      <div className="text-xs text-gray-600">{testimonial.title}</div>
                      <div className="text-xs font-medium text-green-600">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </SpiralReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SpiralReveal delay={0.1} index={0}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Let's discuss how DXFactor can transform your fitness business with proven AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Schedule Your Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
                View Case Studies
              </button>
            </div>
          </SpiralReveal>
        </div>
      </section>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default TestimonialsPage; 