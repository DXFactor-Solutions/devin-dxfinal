import React, { useRef, useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { motion, useAnimation, useInView, useScroll } from 'framer-motion';
import { ArrowRight, MapPin, Clock, DollarSign, Users, Zap, Heart, Target, Filter, Search, Briefcase, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

const Careers = () => {
  const containerRef = useRef(null);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedWorkType, setSelectedWorkType] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const openPositions = [
    {
      title: "Data Scientist (Internal)",
      department: "Data Science",
      location: "Ahmedabad, Gujarat",
      type: "Full Time",
      description: "Data Scientist Senior Positions - Lead science Aggregated Job Type: Full Time Experience: 3-5 Years Key Responsibilities: Design, develop, and implement end-to-end data science pipelines Gather, clean...",
      isOpen: true
    },
    {
      title: "Lead Java Developer (Versa)",
      department: "DXFactor",
      location: "Ahmedabad, Gujarat", 
      type: "Full Time",
      description: "Lead Software Engineer - Java Sr at Platform - Lead Location: Ahmedabad Job Type: Full Time Experience: 6-14 Years Key Responsibilities: Work as part of a fast-paced team to perform object-oriented...",
      isOpen: true
    },
    {
      title: "Sr Business Analyst (Internal)",
      department: "DXFactor",
      location: "Ahmedabad, Gujarat",
      type: "Full Time", 
      description: "Sr Business Analyst/BA of Positions - Lead Location: Ahmedabad Job Type: Full Time Experience: 5-8 Years/BA Responsibilities: Communicate with clients and gather the requirements Act as a bridge between...",
      isOpen: true
    }
  ];

  const advantages = [
    {
      icon: <Briefcase className="w-12 h-12 text-green-600" />,
      title: "Innovative Projects",
      description: "Work on AI-driven solutions that transform industries."
    },
    {
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: "Inclusive Culture", 
      description: "Thrive in a workplace that values diversity and collaboration."
    },
    {
      icon: <Target className="w-12 h-12 text-green-600" />,
      title: "Growth Opportunities",
      description: "Develop your career with mentorship and learning programs."
    }
  ];

  const departments = ["Data Science", "DXFactor", "Engineering", "Product", "Sales"];
  const workTypes = ["Full Time", "Part Time", "Contract"];
  const locations = ["Ahmedabad, Gujarat", "Remote", "Hybrid"];

  const filteredPositions = openPositions.filter(position => {
    const matchesDepartment = !selectedDepartment || position.department === selectedDepartment;
    const matchesWorkType = !selectedWorkType || position.type === selectedWorkType;
    const matchesLocation = !selectedLocation || position.location === selectedLocation;
    const matchesRemote = !remoteOnly || position.location.includes('Remote');
    const matchesSearch = !searchTerm || position.title.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesDepartment && matchesWorkType && matchesLocation && matchesRemote && matchesSearch;
  });

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden" ref={containerRef}>
      <Navbar />
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-400 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      
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
                <Users className="w-3 h-3 mr-1" />
                CAREERS
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                Join us to innovate,
                <br />
                <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent">
                  collaborate, and excel.
                </span>
              </h1>
              <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">

              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg">
                  View Open Positions
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold transition-colors bg-white/10 backdrop-blur-sm">
                  Learn About Our Culture
                </Button>
              </div>
            </div>
          </SpiralReveal>
        </div>
      </section>

      {/* Open Positions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SpiralReveal delay={0.1} index={0}>
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Open Positions
              </h2>
              
              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Choose Department</label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    aria-label="Choose Department"
                  >
                    <option value="">All Departments</option>
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Choose Work Type</label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    value={selectedWorkType}
                    onChange={(e) => setSelectedWorkType(e.target.value)}
                    aria-label="Choose Work Type"
                  >
                    <option value="">All Work Types</option>
                    {workTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Choose Location</label>
                  <select 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    aria-label="Choose Location"
                  >
                    <option value="">All Locations</option>
                    {locations.map(location => (
                      <option key={location} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
                
                <div className="flex items-end">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={remoteOnly}
                      onChange={(e) => setRemoteOnly(e.target.checked)}
                      className="mr-2 h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                    />
                    <span className="text-sm font-medium text-gray-700">Remote Only</span>
                  </label>
                </div>
              </div>
              
              {/* Search */}
              <div className="relative mb-8">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search Job Title"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </SpiralReveal>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredPositions.map((position, index) => (
              <SpiralReveal key={index} delay={0.2 + index * 0.1} index={index + 1}>
                <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-green-600 font-medium">{position.department}</span>
                        <span className="text-sm text-gray-400">•</span>
                        <span className="text-sm text-gray-600">1 Open role</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {position.description}
                      </p>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{position.type}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <div className="text-sm text-gray-500 mb-2">
                        <span>{position.location}</span>
                        <br />
                        <span>{position.type}</span>
                      </div>
                      <Button className="bg-green-600 hover:bg-green-700 text-white">
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </SpiralReveal>
            ))}
          </div>
        </div>
      </section>

      {/* The DXFactor Advantage Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SpiralReveal delay={0.1} index={0}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium mb-4">
                <Award className="w-3 h-3 mr-1" />
                WHY JOIN US?
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                The DXFactor Advantage
              </h2>
            </div>
          </SpiralReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <SpiralReveal key={index} delay={0.2 + index * 0.1} index={index + 1}>
                <div className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg transition-shadow text-center">
                  <div className="flex justify-center mb-6">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </SpiralReveal>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <Footer />
    </div>
  );
};

export default Careers;