import React, { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion, useAnimation, useInView, useScroll } from 'framer-motion';
import { 
  ArrowRight, 
  Play, 
  Mail, 
  MapPin, 
  Phone, 
  Clock, 
  Shield, 
  Sparkles,
  MessageCircle,
  Calendar,
  Users,
  Zap
} from 'lucide-react';
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

const ContactUs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const [formData, setFormData] = useState({
    fullName: '',
    companyEmail: '',
    phone: '',
    message: '',
    interestedIn: 'AI Agents',
    agreeToTerms: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 2000);
  };

  const interestOptions = [
    'AI Agents',
    'Click2Save',
    'Custom Solution',
    'Other'
  ];

  const offices = [
    {
      country: 'USA',
      state: 'Virginia',
      address: '1765 Greensboro Station Pl Suite 900, McLean, VA 22102',
      className: 'bg-blue-50 border-blue-200'
    },
    {
      country: 'USA', 
      state: 'California',
      address: '303 Twin Dolphin Drive, 6th Fl Redwood City, CA 94065',
      className: 'bg-green-50 border-green-200'
    },
    {
      country: 'IND',
      state: 'Ahmedabad',
      address: 'Shaligram Corporates, 10th Floor, Ambli Bopal Road, Ahmedabad, Gujarat 380058',
      className: 'bg-purple-50 border-purple-200'
    },
    {
      country: 'IND',
      state: 'Bangalore',
      address: '150, Workafella Business Centre, 1, Infantry Rd, Bengaluru, Karnataka 560001',
      className: 'bg-orange-50 border-orange-200'
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
      
      {/* Hero Section */}
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
              mixBlendMode: 'normal',
              objectPosition: 'center 20%'
            }}
          >
            <source src="/videos/postworkout.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/30 to-gray-900/50 mix-blend-multiply"></div>
        </div>
          
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-8">
          <SpiralReveal delay={0.2} index={0}>
            <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[95px] font-black tracking-tight leading-[0.9] mb-3 sm:mb-4 md:mb-6">
              <span className="text-white block">CONTACT</span>
              <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent inline-block">US</span>
            </h1>
          </SpiralReveal>
          
          <SpiralReveal delay={0.5} index={1}>
            <h2 className="text-base sm:text-xl md:text-2xl lg:text-4xl font-black text-white mb-4 sm:mb-6 md:mb-8 tracking-tight px-2 sm:px-4 md:px-0 leading-tight">
              Ready to Transform Your Business?<br className="sm:hidden" /> Let's Talk.
            </h2>
          </SpiralReveal>
          
          <SpiralReveal delay={0.7} index={2}>
            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              Get in touch with our team to discuss how DX Outcomes Micro-Agent Platform can revolutionize your operations.
            </p>
          </SpiralReveal>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SpiralReveal delay={0.1} index={0}>
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-1.5 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4" />
                <span>Get In Touch</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-4 tracking-tight">
                Send Us a Message
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Have questions or need support? Fill out the form below, and our team will get back to you promptly.
              </p>
            </div>
          </SpiralReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <SpiralReveal delay={0.2} index={1}>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Email</h3>
                      <a href="mailto:inquiry@dxfactor.com" className="text-green-600 hover:text-green-700 font-medium">
                        inquiry@dxfactor.com
                      </a>
                    </div>
                  </div>
                </div>
              </SpiralReveal>

              {/* Office Locations */}
              <div className="space-y-4">
                <SpiralReveal delay={0.3} index={2}>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-green-600" />
                    Our Offices
                  </h3>
                </SpiralReveal>

                {offices.map((office, index) => (
                  <SpiralReveal key={index} delay={0.4 + index * 0.1} index={3 + index}>
                    <div className={`rounded-lg p-4 border-2 ${office.className}`}>
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                            <span className="text-xs font-bold text-green-600">{office.country}</span>
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="px-2 py-0.5 bg-green-600 text-white text-xs font-medium rounded">
                              {office.state}
                            </span>
                          </div>
                          <p className="text-sm text-gray-700 leading-relaxed">
                            {office.address}
                          </p>
                        </div>
                      </div>
                    </div>
                  </SpiralReveal>
                ))}
              </div>

              {/* Quick Stats */}
              <SpiralReveal delay={0.8} index={7}>
                <div className="bg-gray-900 rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-green-400" />
                    Why Choose DXFactor?
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">$2B+</div>
                      <div className="text-xs text-gray-400">Outcomes Delivered</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">100+</div>
                      <div className="text-xs text-gray-400">Happy Clients</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">24/7</div>
                      <div className="text-xs text-gray-400">Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">120%</div>
                      <div className="text-xs text-gray-400">Net Revenue Retention</div>
                    </div>
                  </div>
                </div>
              </SpiralReveal>
            </div>

            {/* Contact Form */}
            <div>
              <SpiralReveal delay={0.4} index={8}>
                <div className="relative">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl blur-xl opacity-20 scale-95"></div>
                  
                  <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      
                      {/* Interest Selection */}
                      <div>
                        <label htmlFor="interestedIn" className="block text-sm font-medium text-gray-700 mb-2">
                          Interested in
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {interestOptions.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setFormData(prev => ({ ...prev, interestedIn: option }))}
                              className={`px-3 py-2 text-sm rounded-lg border-2 transition-all ${
                                formData.interestedIn === option
                                  ? 'border-green-500 bg-green-50 text-green-700 font-medium'
                                  : 'border-gray-200 hover:border-gray-300 text-gray-600'
                              }`}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Full Name */}
                      <div>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-green-500 transition-all duration-300 outline-none"
                          placeholder="Full Name *"
                        />
                      </div>

                      {/* Company Email */}
                      <div>
                        <input
                          type="email"
                          name="companyEmail"
                          value={formData.companyEmail}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-green-500 transition-all duration-300 outline-none"
                          placeholder="Company Email *"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-green-500 transition-all duration-300 outline-none"
                          placeholder="Phone"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-green-500 transition-all duration-300 outline-none resize-none"
                          placeholder="What should we know before contacting you?"
                        />
                      </div>

                      {/* reCAPTCHA placeholder */}
                      <div className="flex items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-200">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Shield className="w-4 h-4" />
                          <span className="text-sm">I'm not a robot</span>
                        </div>
                      </div>

                      {/* Terms and Privacy */}
                      <div className="flex items-start">
                        <input
                          id="agreeToTerms"
                          name="agreeToTerms"
                          type="checkbox"
                          checked={formData.agreeToTerms}
                          onChange={handleChange}
                          required
                          className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500 mt-0.5"
                        />
                        <div className="ml-3 text-sm">
                          <label htmlFor="agreeToTerms" className="text-gray-600">
                            I agree to the{' '}
                            <a href="/legal" target="_blank" rel="noopener noreferrer" className="font-medium text-green-600 hover:text-green-700 underline">
                              Terms and Privacy Policy
                            </a>
                          </label>
                        </div>
                      </div>

                      {/* Required fields note */}
                      <p className="text-xs text-red-600">* Required fields</p>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={!formData.fullName || !formData.companyEmail || isSubmitting}
                        className="w-full bg-gradient-to-r from-green-600 to-green-500 text-white py-4 px-6 rounded-lg font-medium hover:from-green-700 hover:to-green-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Submitting...
                          </>
                        ) : (
                          <>
                            <MessageCircle className="w-5 h-5" />
                            SUBMIT
                          </>
                        )}
                      </button>

                      {/* Trust indicators */}
                      <div className="flex items-center justify-center gap-6 pt-2">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Shield className="w-3 h-3" />
                          <span>SSL Secured</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span>24hr Response</span>
                        </div>
                      </div>
                    </form>

                    {/* Success Message */}
                    {showSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute inset-0 bg-green-50 rounded-2xl flex items-center justify-center"
                      >
                        <div className="text-center">
                          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MessageCircle className="w-8 h-8 text-green-600" />
                          </div>
                          <h3 className="text-lg font-bold text-green-800 mb-2">Message Sent!</h3>
                          <p className="text-green-700">We'll get back to you within 24 hours.</p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </SpiralReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
          <SpiralReveal delay={0.2} index={0}>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 100+ fitness operators who trust DXFactor to power their growth with AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                Start Free with Concierge Agent
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg">
                <Calendar className="mr-2 w-5 h-5" />
                Schedule Demo
              </Button>
            </div>
          </SpiralReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs; 