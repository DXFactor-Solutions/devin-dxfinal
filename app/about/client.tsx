'use client'

import React, { useRef, useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import FeaturedSuccessStories from '@/components/FeaturedSuccessStories'
import { motion, useAnimation, useInView, useScroll } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { Button } from '@/components/ui/button'

const SpiralReveal = ({ children, delay = 0, index = 0 }: {
  children: React.ReactNode
  delay?: number
  index?: number
}) => {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        rotate: 0,
        transition: {
          duration: 0.8,
          delay: delay + (index * 0.1),
          ease: [0.25, 0.46, 0.45, 0.94],
          type: "spring",
          stiffness: 100,
          damping: 15
        }
      })
    }
  }, [controls, inView, delay, index])

  return (
    <motion.div
      ref={ref}
      initial={{ 
        opacity: 0, 
        y: 60,
        scale: 0.8,
        rotate: -5
      }}
      animate={controls}
      style={{
        transformOrigin: "center bottom"
      }}
    >
      {children}
    </motion.div>
  )
}

const Logo = ({ src, alt, className = "" }: { src: string; alt: string; className?: string }) => (
  <div className={`flex items-center justify-center p-4 ${className}`}>
    <img 
      src={src} 
      alt={alt} 
      className="h-8 sm:h-10 md:h-12 object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
    />
  </div>
)

const SlowMarquee = ({ children, direction = "left" }: { children: React.ReactNode; direction?: "left" | "right" }) => {
  const marqueeVariants = {
    animate: {
      x: direction === "left" ? [0, -1920] : [0, 1920],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 60,
          ease: "linear",
        },
      },
    },
  }

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="inline-block"
        variants={marqueeVariants}
        animate="animate"
      >
        {children}
      </motion.div>
    </div>
  )
}

export default function AboutUsClient() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const allClientLogos = [
    { src: "/logos/anytimefitness.png", alt: "Anytime Fitness" },
    { src: "/logos/planetfitness.png", alt: "Planet Fitness" },
    { src: "/logos/lafitness.png", alt: "LA Fitness" },
    { src: "/logos/24hourfitness.png", alt: "24 Hour Fitness" },
    { src: "/logos/equinox.png", alt: "Equinox" },
    { src: "/logos/orangetheory.png", alt: "Orangetheory" },
    { src: "/logos/crossfit.png", alt: "CrossFit" },
    { src: "/logos/soulcycle.png", alt: "SoulCycle" },
    { src: "/logos/barrys.png", alt: "Barry's" },
    { src: "/logos/f45.png", alt: "F45" }
  ]

  const textClientNames = [
    "Anytime Fitness", "Planet Fitness", "LA Fitness", "24 Hour Fitness", 
    "Equinox", "Orangetheory", "CrossFit", "SoulCycle", "Barry's", "F45"
  ]

  const partnerNames = [
    "TechStars", "Y Combinator", "Andreessen Horowitz", "Sequoia Capital",
    "Google Ventures", "Microsoft Ventures", "Amazon Web Services", "Salesforce Ventures"
  ]

  const values = [
    { title: "Innovation", description: "Pushing boundaries with cutting-edge AI technology" },
    { title: "Results", description: "Delivering measurable outcomes that drive real business growth" },
    { title: "Partnership", description: "Building long-term relationships based on mutual success" }
  ]

  const leaders = [
    {
      name: "Krunal Patel",
      role: "CEO & Founder",
      image: "/headshots/krunal.jpeg",
      expertise: "AI Strategy & Product Vision",
      bio: "Visionary leader with 15+ years in fitness technology and AI innovation. Former VP of Engineering at leading fitness platforms.",
      achievement: "Led teams that generated $500M+ in revenue",
      quote: "We're not just building software; we're architecting the future of fitness."
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "/headshots/sarah.jpeg",
      expertise: "Machine Learning & Architecture",
      bio: "Former Google AI researcher specializing in recommendation systems and predictive analytics for consumer applications.",
      achievement: "Published 20+ papers in top-tier ML conferences",
      quote: "The intersection of AI and human wellness is where magic happens."
    },
    {
      name: "Marcus Rodriguez",
      role: "VP of Sales",
      image: "/headshots/marcus.jpeg",
      expertise: "Enterprise Sales & Partnerships",
      bio: "Seasoned sales executive with deep fitness industry relationships. Previously scaled SaaS companies from $1M to $100M ARR.",
      achievement: "Closed $50M+ in enterprise deals",
      quote: "Every conversation is an opportunity to transform a business."
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Data Science",
      image: "/headshots/emily.jpeg",
      expertise: "Behavioral Analytics & ML",
      bio: "PhD in Behavioral Psychology from Stanford. Expert in member engagement patterns and retention modeling.",
      achievement: "Improved retention rates by 40% across 500+ locations",
      quote: "Data tells stories, but insights change lives."
    },
    {
      name: "Ron Benamor",
      role: "Strategic Advisor",
      image: "/headshots/ronben.jpeg",
      expertise: "Business Development",
      bio: "Strategic advisor with deep industry connections and proven track record in scaling fitness technology companies.",
      achievement: "Facilitated partnerships worth $100M+",
      quote: "Success in fitness tech comes from understanding both the business and the heart of the industry."
    },
    {
      name: "Al Noshirvani",
      role: "Board Member", 
      image: "/headshots/alno.webp",
      expertise: "Industry Vision",
      bio: "Board Member, fitness visionary and GTM leader.",
      achievement: "Founded 3 fitness unicorns",
      quote: "The future of fitness is personal, powered, and profitable."
    }
  ]

  return (
    <div className="relative min-h-screen bg-gray-50 overflow-hidden" ref={containerRef}>
      <Navbar />
      
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-400 z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      
      <section className="relative min-h-[60vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden pt-16">
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
          
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-8">
          <SpiralReveal delay={0.2} index={0}>
            <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[95px] font-black tracking-tight leading-[0.9] mb-3 sm:mb-4 md:mb-6">
              <span className="text-white block">ABOUT</span>
              <span className="text-green-400 block">DXFACTOR</span>
            </h1>
          </SpiralReveal>
          
          <SpiralReveal delay={0.4} index={1}>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
              We build revenue machines, not just software. Our AI-powered platform has generated <span className="text-green-400 font-bold">$2B+ in outcomes</span> for fitness operators worldwide.
            </p>
          </SpiralReveal>
          
          <SpiralReveal delay={0.6} index={2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 text-lg font-semibold">
                Our Story <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-semibold">
                <Play className="mr-2 h-5 w-5" /> Watch Video
              </Button>
            </div>
          </SpiralReveal>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SpiralReveal delay={0.2} index={0}>
            <div className="text-center mb-8 sm:mb-14">
              <p className="text-green-500 text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 font-medium"></p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-800 mb-4 sm:mb-6 tracking-tight">OUR CUSTOMERS & PARTNERS</h2>
            </div>
          </SpiralReveal>

          <div className="space-y-8 sm:space-y-12">
            <SlowMarquee direction="left">
              <div className="flex items-center space-x-8 sm:space-x-16">
                {[...textClientNames, ...textClientNames].map((name, index) => (
                  <div key={index} className="flex-shrink-0">
                    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-400 whitespace-nowrap">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </SlowMarquee>
            
            <SlowMarquee direction="right">
              <div className="flex items-center space-x-8 sm:space-x-16">
                {[...partnerNames, ...partnerNames].map((name, index) => (
                  <div key={index} className="flex-shrink-0">
                    <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-500 whitespace-nowrap">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </SlowMarquee>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SpiralReveal delay={0.2} index={0}>
            <motion.div 
              className="text-center mb-12 sm:mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <div className="w-16 sm:w-20 h-1 bg-green-500 mx-auto mb-6 sm:mb-8"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Our Mission & Vision</h2>
            </motion.div>
          </SpiralReveal>
          
          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            {values.map((value, index) => (
              <SpiralReveal key={value.title} delay={0.3} index={index}>
                <div className="text-center">
                  <div className="w-10 sm:w-12 h-1 bg-green-500 mb-4 sm:mb-6"></div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </SpiralReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SpiralReveal delay={0.2} index={0}>
            <div className="text-center mb-12 sm:mb-16">
              <div className="w-16 sm:w-20 h-1 bg-green-500 mx-auto mb-6 sm:mb-8"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight">Meet Our Leadership Team</h2>
              <p className="text-lg sm:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
                Industry veterans and AI pioneers driving the future of fitness technology
              </p>
            </div>
          </SpiralReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {leaders.map((leader, index) => (
              <SpiralReveal key={leader.name} delay={0.3 + (index * 0.1)} index={index}>
                <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-green-400 to-emerald-600">
                    <img 
                      src={leader.image} 
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <p className="text-green-600 font-semibold mb-2">{leader.role}</p>
                  <p className="text-sm text-gray-500 mb-4">{leader.expertise}</p>
                  <p className="text-sm text-gray-700 mb-4 leading-relaxed">{leader.bio}</p>
                  <div className="bg-green-50 rounded-lg p-3 mb-4">
                    <p className="text-xs font-semibold text-green-800">{leader.achievement}</p>
                  </div>
                  <blockquote className="text-sm italic text-gray-600 border-l-4 border-green-500 pl-4">
                    "{leader.quote}"
                  </blockquote>
                </div>
              </SpiralReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SpiralReveal delay={0.2} index={0}>
            <div className="text-center mb-12 sm:mb-16">
              <div className="w-16 sm:w-20 h-1 bg-green-500 mx-auto mb-6 sm:mb-8"></div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">Our Core Values</h2>
              <p className="text-lg sm:text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
          </SpiralReveal>

          <div className="grid md:grid-cols-3 gap-8 sm:gap-12">
            <SpiralReveal delay={0.3} index={0}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Innovation First</h3>
                <p className="text-gray-300">
                  Pioneering the next generation of AI-powered fitness solutions
                </p>
              </div>
            </SpiralReveal>

            <SpiralReveal delay={0.4} index={1}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Commitment & Accountability</h3>
                <p className="text-gray-300">
                  Going above and beyond with the right attitude, commitment, and excellence
                </p>
              </div>
            </SpiralReveal>

            <SpiralReveal delay={0.5} index={2}>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Empathy & Empowerment</h3>
                <p className="text-gray-300">
                  An environment where every human THRIVES by empowering and understanding them
                </p>
              </div>
            </SpiralReveal>
          </div>
        </div>
      </section>

      <FeaturedSuccessStories />
      <ContactForm />
      <Footer />
    </div>
  )
}
