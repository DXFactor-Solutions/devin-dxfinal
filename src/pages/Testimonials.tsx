import React, { useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { motion, useAnimation, useInView } from 'framer-motion';
import { Quote, Star, Users, TrendingUp } from 'lucide-react';

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

const TestimonialsPage = () => {
  const testimonials = [
    {
      quote: "DXFactor understands our industry, delivers real results, and moves fast. Their responsiveness and expertise cut costs by 50%—a true game-changer for us!",
      author: "Don Dickerson",
      title: "Vice President",
      company: "Fitness SF",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face",
      featured: true
    },
    {
      quote: "DXFactor was critical in delivering a reliable and scalable streaming platform for CRUNCH+ on time and within budget, transforming our digital content delivery.",
      author: "Mike Neff",
      title: "Executive Vice President",
      company: "Crunch",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
      featured: true
    },
    {
      quote: "The technology integration has streamlined our operations, giving us a unified view of our data and enabling faster, more informed decisions.",
      author: "Rob Koehler",
      title: "Director of Technology Development",
      company: "Wisconsin Athletic Club",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face",
      featured: true
    },
    {
      quote: "Not just code—DXFactor brought collaboration, speed, and structure to help us scale our digital platform with confidence.",
      author: "Jeremy Brutus",
      title: "Co-Founder",
      company: "URBN Playground",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=64&h=64&fit=crop&crop=face"
    },
    {
      quote: "Click2Save has made my administrative team's life much easier and more productive while saving members at the same time.",
      author: "Chad Shaw",
      title: "Chief Operating Officer",
      company: "Fit Athletic Club",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=64&h=64&fit=crop&crop=face"
    },
    {
      quote: "We are excited to partner with DXFactor for their unparalleled expertise in digital transformation which will push our combined portfolio into new and exciting areas that will support the growth of our partners.",
      author: "Khal Rai",
      title: "Platform President",
      company: "ABC",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=64&h=64&fit=crop&crop=face"
    },
    {
      quote: "Method Gym saved 7% of cancellations & $1.8K in dues in 30 days—thanks to DXFactor's Click to Save. Fast setup, real ROI, better member experience.",
      author: "Al Noshirvani",
      title: "Founder",
      company: "Method Gym",
      avatar: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=64&h=64&fit=crop&crop=face"
    },
    {
      quote: "DXFactor brings clarity, speed & care—solving problems with you, not just for you. Bold ideas need partners like this.",
      author: "Chelsea Lorenzo",
      title: "Associate Partner",
      company: "ALTA",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b371?w=64&h=64&fit=crop&crop=face"
    },
    {
      quote: "Partnering with DXFactor enhances our ability to offer comprehensive, personalized solutions that drive both member satisfaction and operational efficiency.",
      author: "John Ford",
      title: "Chief Product Officer",
      company: "EGYM",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    },
    {
      quote: "With AI Agents, we have an opportunity to have a conversation with every prospects to guide them to the correct membership type, to try to upsell them with personal training, and discuss other things like goals as they come into the club.",
      author: "Jon Roberts",
      title: "Chief Information Officer",
      company: "In Shape",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=64&h=64&fit=crop&crop=face"
    },
    {
      quote: "We saved 4000 man hours in 12 months due to Dx Factor's Concierge Agent mainly from answering phone calls and front desk questions.",
      author: "Don Dickerson",
      title: "President",
      company: "Fitness SF - Agent",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    },
    {
      quote: "Since integrating DXFactor's AI-powered agent, we've seen a significant reduction in the time spent on general membership inquiries, saving roughly 20 hours each month. This efficiency boost allows us to allocate more resources to member experience and operational improvements.",
      author: "Troy McFarland",
      title: "Director of Operations",
      company: "Fitness SF - Agent",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
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
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl border border-green-100 hover:shadow-lg transition-shadow">
                  <div className="flex items-center mb-6">
                    <Quote className="w-8 h-8 text-green-600 mb-4" />
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-6 italic text-lg">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-bold text-gray-900">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">{testimonial.title}</div>
                      <div className="text-sm font-medium text-green-600">{testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </SpiralReveal>
            ))}
          </div>
        </div>
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
                <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow h-full flex flex-col">
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