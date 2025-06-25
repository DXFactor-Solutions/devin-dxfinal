'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { MapPin, Clock, Users, TrendingUp, Heart, Zap, Code, Headphones, BarChart3 } from 'lucide-react'

export default function CareersClient() {
  const jobOpenings = [
    {
      title: "Senior AI Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      description: "Build and optimize AI microagents that transform fitness business operations",
      requirements: ["5+ years Python/ML experience", "Experience with LLMs", "Fitness industry knowledge preferred"],
      icon: Code
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote / Austin",
      type: "Full-time",
      description: "Help fitness operators maximize their ROI with DXFactor AI solutions",
      requirements: ["3+ years customer success", "Fitness industry experience", "Strong communication skills"],
      icon: Headphones
    },
    {
      title: "Product Marketing Manager",
      department: "Marketing",
      location: "Remote / New York",
      type: "Full-time",
      description: "Drive go-to-market strategy for AI-powered fitness solutions",
      requirements: ["5+ years product marketing", "B2B SaaS experience", "Fitness industry knowledge"],
      icon: BarChart3
    },
    {
      title: "Sales Development Representative",
      department: "Sales",
      location: "Remote",
      type: "Full-time",
      description: "Generate qualified leads and build relationships with fitness operators",
      requirements: ["2+ years SDR experience", "Fitness industry interest", "Strong prospecting skills"],
      icon: TrendingUp
    }
  ]

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and fitness stipend"
    },
    {
      icon: TrendingUp,
      title: "Growth & Development",
      description: "Learning budget, conference attendance, and career advancement opportunities"
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative environment, team retreats, and flexible work arrangements"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Work on cutting-edge AI technology that's transforming an entire industry"
    }
  ]

  const companyValues = [
    {
      title: "Member-First Mindset",
      description: "Everything we build is designed to improve the fitness member experience"
    },
    {
      title: "Data-Driven Decisions",
      description: "We use analytics and insights to guide our product and business decisions"
    },
    {
      title: "Continuous Innovation",
      description: "We're always pushing the boundaries of what's possible with AI in fitness"
    },
    {
      title: "Transparent Communication",
      description: "Open, honest communication across all levels of the organization"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Join Our <span className="text-green-600">Innovation Team</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Help shape the future of AI-powered fitness technology and make a meaningful impact on the wellness industry
            </p>
          </header>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Why Work at DXFactor?
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We're a fast-growing company at the intersection of AI and fitness, with a mission to transform how fitness businesses operate and serve their members.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Impact at Scale</h3>
                      <p className="text-gray-600">Your work directly affects 100+ fitness businesses and millions of members</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Cutting-Edge Technology</h3>
                      <p className="text-gray-600">Work with the latest AI and machine learning technologies</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Growth Opportunity</h3>
                      <p className="text-gray-600">Join a rapidly scaling company with significant career advancement potential</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Company Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-green-600 mb-2">$100M+</div>
                  <div className="text-sm text-gray-600">Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-green-600 mb-2">100+</div>
                  <div className="text-sm text-gray-600">Fitness Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-green-600 mb-2">50+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-green-600 mb-2">6</div>
                  <div className="text-sm text-gray-600">AI Microagents</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Benefits & Perks
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Open Positions
            </h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <job.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Users className="w-4 h-4" />
                              {job.department}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {job.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {job.type}
                            </span>
                          </div>
                        </div>
                        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors mt-4 lg:mt-0">
                          Apply Now
                        </button>
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex}>{req}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Don't See Your Role?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about AI and fitness. Send us your resume and let us know how you'd like to contribute.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Send Us Your Resume
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
