import React, { useEffect, useRef, useState } from 'react';

// Add CSS for scrollbar styling
const scrollbarStyles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .custom-scrollbar::-webkit-scrollbar {
    width: 4px;
  }
  .custom-scrollbar::-webkit-scrollbar-track {
    background: transparent;
  }
  .custom-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(34, 197, 94, 0.3);
    border-radius: 20px;
  }
`;

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
}

interface Brand {
  id: number;
  name: string;
  logo: string;
}

const TestimonialsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const testimonialScrollerRef = useRef<HTMLDivElement>(null);
  const brandScrollerRef = useRef<HTMLDivElement>(null);
  const [animationSpeed] = useState<number>(0.5); // Increased to normal speed
  const [isVisible, setIsVisible] = useState<boolean>(true); // Initialize as true to start animation immediately
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);
  const testimonialAnimationIdRef = useRef<number | null>(null);
  const brandAnimationIdRef = useRef<number | null>(null);

  // Real testimonial data from the screenshots with summarized quotes to fit cards
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "DXFactor built a state-of-the-art streaming platform for CRUNCH+ digital content. Their team worked tirelessly to develop a solution that is reliable, secure, and scalable.",
      author: "Mike Neff",
      role: "Executive Vice President, Member Services",
      company: "Crunch"
    },
    {
      id: 2,
      quote: "We found the ideal digital transformation partner in DXFactor. Their approach has streamlined our operations, providing a unified view of our member data for informed decisions.",
      author: "Rob Koehler",
      role: "Director of Technology Development",
      company: "Wisconsin Athletic Club"
    },
    {
      id: 3,
      quote: "DXFactor was the perfect match thanks to their knowledge of data and fitness. The digital outcomes they delivered have had a significant impact on our operations.",
      author: "Brent Zempel",
      role: "Chief Information Officer",
      company: "XSport Fitness"
    },
    {
      id: 4,
      quote: "We completed our project in just 3 weeks with DXFactor. They built personas for our multi-billion dollar client, who was thrilled with the results and opened up additional revenue opportunities.",
      author: "Steve Rao",
      role: "CEO",
      company: "Farm Market iD"
    },
    {
      id: 5,
      quote: "DXFactor's data transformation capabilities aggregate data from multiple sources into a unified API. Their platform nearly doubled our data lake size and reduced supply chain uncertainty.",
      author: "René Kulik",
      role: "Head of Sales & Marketing",
      company: "Wabtec"
    },
    {
      id: 6,
      quote: "Our members love the personalized experience from DXFactor's AI agents. They handle support inquiries 24/7, with instant responses and all-time high satisfaction scores.",
      author: "Robert Kim",
      role: "Customer Success Manager",
      company: "Pulse Fitness"
    }
  ];

  // Brand logos for the bottom row
  const brands: Brand[] = [
    { id: 1, name: "Crunch Fitness", logo: "crunch-fitness.svg" },
    { id: 2, name: "Wisconsin Athletic Club", logo: "wac.svg" },
    { id: 3, name: "XSport Fitness", logo: "xsport.svg" },
    { id: 4, name: "Farm Market iD", logo: "farm-market.svg" },
    { id: 5, name: "Wabtec", logo: "wabtec.svg" },
    { id: 6, name: "Pulse Fitness", logo: "pulse-fitness.svg" },
    { id: 7, name: "Planet Fitness", logo: "planet-fitness.svg" },
    { id: 8, name: "Equinox", logo: "equinox.svg" },
    { id: 9, name: "Lifetime Fitness", logo: "lifetime.svg" },
    { id: 10, name: "Orange Theory", logo: "orange-theory.svg" },
  ];

  // Change active testimonial for mobile view
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Function to start animations with direct DOM manipulation
  const startAnimations = () => {
    const testimonialScroller = testimonialScrollerRef.current;
    const brandScroller = brandScrollerRef.current;
    
    if (!testimonialScroller || !brandScroller) return;
    
    // Clear any existing animations
    if (testimonialAnimationIdRef.current) {
      cancelAnimationFrame(testimonialAnimationIdRef.current);
    }
    if (brandAnimationIdRef.current) {
      cancelAnimationFrame(brandAnimationIdRef.current);
    }
    
    // Set initial positions if needed
    if (testimonialScroller.scrollLeft === 0 && brandScroller.scrollLeft === 0) {
      // Ensure second scroller starts from a different position
      brandScroller.scrollLeft = brandScroller.scrollWidth / 2;
    }
    
    // Animation for testimonials (left-to-right)
    const animateTestimonials = () => {
      if (!isVisible || !testimonialScroller) return;
      
      // Force direct DOM manipulation
      if (testimonialScroller.scrollLeft >= testimonialScroller.scrollWidth / 2) {
        testimonialScroller.scrollLeft = 0;
      } else {
        testimonialScroller.scrollLeft += animationSpeed;
      }
      
      testimonialAnimationIdRef.current = window.requestAnimationFrame(animateTestimonials);
    };

    // Animation for brands (right-to-left)
    const animateBrands = () => {
      if (!isVisible || !brandScroller) return;
      
      // Force direct DOM manipulation
      if (brandScroller.scrollLeft <= 0) {
        brandScroller.scrollLeft = brandScroller.scrollWidth / 2;
      } else {
        brandScroller.scrollLeft -= animationSpeed * 1.2; // Slightly faster
      }
      
      brandAnimationIdRef.current = window.requestAnimationFrame(animateBrands);
    };
    
    // Start the animations immediately
    animateTestimonials();
    animateBrands();
  };

  // Initialize scroll positions and animations on mount
  useEffect(() => {
    // Start animations with a slight delay to ensure DOM is fully ready
    const timer = setTimeout(() => {
      startAnimations();
    }, 100);
    
    // Cleanup function
    return () => {
      clearTimeout(timer);
      if (testimonialAnimationIdRef.current) {
        cancelAnimationFrame(testimonialAnimationIdRef.current);
      }
      if (brandAnimationIdRef.current) {
        cancelAnimationFrame(brandAnimationIdRef.current);
      }
    };
  }, []); // Empty dependency array - run once on mount

  // Observer to detect when section is in viewport
  useEffect(() => {
    // Observer to detect when section is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        setIsVisible(isIntersecting);
        
        if (isIntersecting) {
          startAnimations();
        } else {
          // Cancel animations when not in view
          if (testimonialAnimationIdRef.current) {
            cancelAnimationFrame(testimonialAnimationIdRef.current);
            testimonialAnimationIdRef.current = null;
          }
          if (brandAnimationIdRef.current) {
            cancelAnimationFrame(brandAnimationIdRef.current);
            brandAnimationIdRef.current = null;
          }
        }
      },
      { threshold: 0.1 } // Lower threshold to detect earlier
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    // Handle visibility change
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible' && isVisible) {
        startAnimations();
      } else {
        // Cancel animations when tab is not visible
        if (testimonialAnimationIdRef.current) {
          cancelAnimationFrame(testimonialAnimationIdRef.current);
          testimonialAnimationIdRef.current = null;
        }
        if (brandAnimationIdRef.current) {
          cancelAnimationFrame(brandAnimationIdRef.current);
          brandAnimationIdRef.current = null;
        }
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (testimonialAnimationIdRef.current) {
        cancelAnimationFrame(testimonialAnimationIdRef.current);
      }
      if (brandAnimationIdRef.current) {
        cancelAnimationFrame(brandAnimationIdRef.current);
      }
    };
  }, [isVisible]); // Only re-run if isVisible changes

  // Testimonial card component
  const TestimonialCard = ({ testimonial, delay = 0 }: { testimonial: Testimonial, delay?: number }) => (
    <div className="relative min-w-[400px] max-w-[400px] h-[320px] bg-white rounded-xl shadow-md p-7 mx-5 flex flex-col transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-green-400 group border border-gray-200">
      {/* Quote marks */}
      <div className="mb-3 text-green-500">
        <svg width="32" height="24" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.628 29.276C9.354 29.276 7.362 28.544 5.65 27.08C3.938 25.616 3.082 23.314 3.082 20.174C3.082 16.638 4.014 13.536 5.878 10.868C7.742 8.2 10.648 5.914 14.592 4.012L17.936 8.998C15.434 10.33 13.502 11.908 12.132 13.734C10.762 15.522 10.116 17.12 10.192 18.528C10.648 18.072 11.476 17.844 12.674 17.844C14.196 17.844 15.51 18.338 16.604 19.328C17.736 20.28 18.304 21.688 18.304 23.5C18.304 25.426 17.66 26.986 16.376 28.184C15.13 28.912 13.502 29.276 11.628 29.276ZM31.214 29.276C28.942 29.276 26.95 28.544 25.238 27.08C23.524 25.616 22.668 23.314 22.668 20.174C22.668 16.638 23.6 13.536 25.464 10.868C27.328 8.2 30.234 5.914 34.178 4.012L37.522 8.998C35.02 10.33 33.088 11.908 31.718 13.734C30.348 15.522 29.702 17.12 29.778 18.528C30.234 18.072 31.062 17.844 32.26 17.844C33.782 17.844 35.096 18.338 36.19 19.328C37.322 20.28 37.888 21.688 37.888 23.5C37.888 25.426 37.244 26.986 35.962 28.184C34.714 28.912 33.088 29.276 31.214 29.276Z" fill="#22C55E" fill-opacity="0.3"/>
        </svg>
      </div>
      
      {/* Quote content */}
      <div className="flex-grow overflow-y-auto pr-1 custom-scrollbar">
        <p className="text-gray-700 font-normal text-base leading-relaxed whitespace-normal">{testimonial.quote}</p>
      </div>
      
      {/* Author info */}
      <div className="border-t border-gray-200 pt-4 mt-4">
        <h4 className="font-semibold text-gray-900 text-lg mb-1 whitespace-normal">{testimonial.author}</h4>
        <p className="text-gray-500 text-sm whitespace-normal">{testimonial.role}, <span className="text-green-600">{testimonial.company}</span></p>
      </div>
      
      {/* Hover effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-500/0 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none"></div>
    </div>
  );

  // Brand logo component
  const BrandLogo = ({ brand }: { brand: Brand }) => (
    <div className="min-w-[200px] h-16 mx-6 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
      <div className="bg-white rounded-lg px-6 py-3 flex items-center justify-center shadow-md border border-gray-200">
        {/* Placeholder for logo - in production you'd use real SVGs or images */}
        <div className="text-gray-700 font-medium text-lg">{brand.name}</div>
      </div>
    </div>
  );
  
  // Mobile testimonial view
  const MobileTestimonialView = () => (
    <div className="lg:hidden relative px-4 py-6 bg-white rounded-xl shadow-md mx-4 mb-8 border border-gray-200">
      <div className="mb-4 text-green-500">
        <svg width="32" height="24" viewBox="0 0 42 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.628 29.276C9.354 29.276 7.362 28.544 5.65 27.08C3.938 25.616 3.082 23.314 3.082 20.174C3.082 16.638 4.014 13.536 5.878 10.868C7.742 8.2 10.648 5.914 14.592 4.012L17.936 8.998C15.434 10.33 13.502 11.908 12.132 13.734C10.762 15.522 10.116 17.12 10.192 18.528C10.648 18.072 11.476 17.844 12.674 17.844C14.196 17.844 15.51 18.338 16.604 19.328C17.736 20.28 18.304 21.688 18.304 23.5C18.304 25.426 17.66 26.986 16.376 28.184C15.13 28.912 13.502 29.276 11.628 29.276ZM31.214 29.276C28.942 29.276 26.95 28.544 25.238 27.08C23.524 25.616 22.668 23.314 22.668 20.174C22.668 16.638 23.6 13.536 25.464 10.868C27.328 8.2 30.234 5.914 34.178 4.012L37.522 8.998C35.02 10.33 33.088 11.908 31.718 13.734C30.348 15.522 29.702 17.12 29.778 18.528C30.234 18.072 31.062 17.844 32.26 17.844C33.782 17.844 35.096 18.338 36.19 19.328C37.322 20.28 37.888 21.688 37.888 23.5C37.888 25.426 37.244 26.986 35.962 28.184C34.714 28.912 33.088 29.276 31.214 29.276Z" fill="#22C55E" fill-opacity="0.3"/>
        </svg>
      </div>
      
      <div className="min-h-[200px] overflow-y-auto custom-scrollbar">
        <p className="text-gray-700 mb-6 font-normal text-base leading-relaxed whitespace-normal">{testimonials[activeTestimonial].quote}</p>
      </div>
      
      <div className="border-t border-gray-200 pt-4 mt-4">
        <h4 className="font-semibold text-gray-900 text-lg mb-1 whitespace-normal">{testimonials[activeTestimonial].author}</h4>
        <p className="text-gray-500 text-sm whitespace-normal">{testimonials[activeTestimonial].role}, <span className="text-green-600">{testimonials[activeTestimonial].company}</span></p>
      </div>
      
      <div className="flex justify-between mt-6">
        <button 
          onClick={prevTestimonial}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
          aria-label="Previous testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button 
          onClick={nextTestimonial}
          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700"
          aria-label="Next testimonial"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      <div className="flex justify-center space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <button 
            key={index}
            className={`w-2 h-2 rounded-full ${index === activeTestimonial ? 'bg-green-500' : 'bg-gray-300'}`}
            onClick={() => setActiveTestimonial(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gray-50 relative overflow-hidden" ref={containerRef}>
      {/* Inject CSS for scrollbar hiding */}
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />
      
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-gray-300/[0.1] bg-[size:30px_30px]"></div>
        
        {/* Gradient glow spots */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-green-200/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-green-200/20 rounded-full blur-[80px]"></div>
      </div>
      
      {/* Section content begins with proper padding to account for the wave from PreacherSection */}
      <div className="pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-10">
          <div className="text-center animate-on-scroll fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-['Open_Sans']">
              <span className="relative inline-block">
                <span className="relative z-10">What Our Clients Say</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-green-200 z-0"></span>
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-12">
              Join the hundreds of fitness and wellness businesses that have transformed their operations with our AI-powered solutions.
            </p>
          </div>
        </div>

        {/* Mobile testimonial carousel */}
        <MobileTestimonialView />

        {/* Top row - Testimonials (Left to right) */}
        <div className="overflow-hidden mb-10 animate-on-scroll slide-left delay-300 hidden lg:block">
          <div 
            ref={testimonialScrollerRef}
            className="flex overflow-x-scroll scrollbar-hide"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              willChange: 'scroll-position' // Performance optimization
            }}
          >
            {/* Duplicate testimonials for infinite scroll effect */}
            <div className="flex py-3">
              {testimonials.map(testimonial => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
            <div className="flex py-3">
              {testimonials.map(testimonial => (
                <TestimonialCard key={`duplicate-${testimonial.id}`} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom row - Brand logos (Right to left) */}
        <div className="overflow-hidden animate-on-scroll slide-right delay-400 hidden lg:block">
          <div 
            ref={brandScrollerRef}
            className="flex whitespace-nowrap overflow-x-scroll scrollbar-hide"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              willChange: 'scroll-position' // Performance optimization
            }}
          >
            {/* Duplicate brands for infinite scroll effect */}
            <div className="flex py-3 items-center">
              {brands.map(brand => (
                <BrandLogo key={`brand-${brand.id}`} brand={brand} />
              ))}
            </div>
            <div className="flex py-3 items-center">
              {brands.map(brand => (
                <BrandLogo key={`brand-duplicate-${brand.id}`} brand={brand} />
              ))}
            </div>
          </div>
        </div>

        {/* Optional CTA */}
        <div className="text-center mt-12 animate-on-scroll fade-up delay-500">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors group">
            <span>Read More Success Stories</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Wave-shaped divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-0 h-12">
        <svg className="relative block w-full h-12" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>
    </section>
  );
};

export default TestimonialsSection; 