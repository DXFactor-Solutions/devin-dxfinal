import React, { useState, useRef, useEffect } from 'react';
import { Target, Zap, Users, Award, TrendingUp, Shield, Clock, Lightbulb, CheckCircle, BarChart3, Database, Rocket, ArrowRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { motion, useAnimation, useInView } from 'framer-motion';
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

const WhyUsPage = () => {
  const coreValues = [
    {
      icon: CheckCircle,
      title: "Guaranteed outcomes",
      description: "We are super obsessed about outcomes. We go beyond just successfully completing the project. Every project we work on is guaranteed to generate real value."
    },
    {
      icon: Users,
      title: "Industry expertise",
      description: "We bring a deep understanding of your industry to every project. Our team understands the nuances of your industry and the intricacies of the data ecosystem, processes and desired outcomes."
    },
    {
      icon: BarChart3,
      title: "Data-to-Outcomes Experts",
      description: "Organizations are investing billions of dollars in technology with minimal returns. We help your organization navigate the sea of data buzzwords and shape data into opportunities you didn't even know existed."
    },
    {
      icon: Rocket,
      title: "Scale rapidly with ease",
      description: "With 25+ years of experience in offshore operations for U.S. companies, we specialize in creating cost-effective offshore teams. Our proven BOT model helps scale small to mid-sized businesses into high-performing offshore entities."
    }
  ];

  const testimonials = [
    {
      quote: "DXFactor understands our industry, delivers real results, and moves fast. Their responsiveness and expertise cut costs by 50%—a true game-changer for us!",
      author: "Don Dickerson",
      title: "Vice President, FITNESS SF",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face"
    },
    {
      quote: "The technology integration has streamlined our operations, giving us a unified view of our data and enabling faster, more informed decisions.",
      author: "Rob Koehler",
      title: "Director of Technology Development, Wisconsin Athletic Club",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64&h=64&fit=crop&crop=face"
    },
    {
      quote: "DXFactor was critical in delivering a reliable and scalable streaming platform for CRUNCH+ on time and within budget, transforming our digital content delivery.",
      author: "Mike Neff",
      title: "Executive Vice President, Member Services, Crunch",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 overflow-hidden min-h-[60vh] flex items-center">
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
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-1">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-16 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <SpiralReveal delay={0.1} index={0}>
            <div className="text-center">
              <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium mb-6">
                <Award className="w-3 h-3 mr-1" />
                WHY CHOOSE DXFACTOR
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                Driving Innovation,
                <br />
                <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                  Delivering Results
                </span>
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed mb-8">
                We don't just build software. We build revenue machines that transform your business operations and deliver measurable outcomes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg">
                  Get In Touch
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors bg-white/10 backdrop-blur-sm">
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </SpiralReveal>
        </div>
      </section>

      {/* Core Values Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SpiralReveal delay={0.1} index={0}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium mb-4">
                <Award className="w-3 h-3 mr-1" />
                CORE VALUES
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Sets Us Apart?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Redefining excellence through innovation, expertise, and results.
              </p>
            </div>
          </SpiralReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value, index) => (
              <SpiralReveal key={index} delay={0.2 + index * 0.1} index={index + 1}>
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </SpiralReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SpiralReveal delay={0.1} index={0}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium mb-4">
                <Users className="w-3 h-3 mr-1" />
                CUSTOMER SPEAK
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Testimonials
              </h2>
            </div>
          </SpiralReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <SpiralReveal key={index} delay={0.2 + index * 0.1} index={index + 1}>
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow">
                  <p className="text-gray-600 leading-relaxed mb-6 italic">
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
                      <div className="text-sm text-gray-500">{testimonial.title}</div>
                    </div>
                  </div>
                </div>
              </SpiralReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SpiralReveal delay={0.1} index={0}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium mb-4">
                <TrendingUp className="w-3 h-3 mr-1" />
                THE NUMBERS
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Proven Results That Drive Business Growth
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These results highlight the measurable value DXFactor delivers to its clients, empowering businesses to innovate, grow, and succeed
              </p>
            </div>
          </SpiralReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <SpiralReveal delay={0.2} index={1}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600 font-medium">Customer Satisfaction Rate</div>
              </div>
            </SpiralReveal>
            <SpiralReveal delay={0.3} index={2}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">15%</div>
                <div className="text-gray-600 font-medium">Increase in Operational Efficiency Across Teams</div>
              </div>
            </SpiralReveal>
            <SpiralReveal delay={0.4} index={3}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">20%</div>
                <div className="text-gray-600 font-medium">Boost in Customer Retention Through Tailored Solutions</div>
              </div>
            </SpiralReveal>
            <SpiralReveal delay={0.5} index={4}>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">30%</div>
                <div className="text-gray-600 font-medium">Faster Decision-Making Enabled by Real-Time Data Insights</div>
              </div>
            </SpiralReveal>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-green-600 to-emerald-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SpiralReveal delay={0.1} index={0}>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Unlock Growth with AI & Digital Innovation
            </h2>
            <p className="text-xl text-green-100 mb-8 leading-relaxed">
              Tell us your challenges, and we'll craft AI-driven, scalable solutions to optimize operations, enhance engagement, and drive measurable business impact.
            </p>
            <div className="text-center mb-8">
              <p className="text-green-100 font-medium">
                Trusted by Leading Brands for their Digital Journeys.
              </p>
            </div>
          </SpiralReveal>
        </div>
      </div>
      
      <ContactForm />
      <Footer />
    </div>
  );
};

export default WhyUsPage; 