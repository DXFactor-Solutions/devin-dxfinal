'use client'

import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { CheckCircle, TrendingUp, Users, Shield, Zap, Target, Award, Clock, DollarSign } from 'lucide-react'

export default function WhyUsClient() {
  const advantages = [
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "100+ fitness operators have generated $100M+ in revenue using our AI microagents",
      stats: "$100M+ Revenue Generated"
    },
    {
      icon: Users,
      title: "Industry Expertise",
      description: "Deep understanding of fitness business operations and member experience challenges",
      stats: "5+ Years Fitness Focus"
    },
    {
      icon: Zap,
      title: "Rapid Implementation",
      description: "Get up and running in days, not months, with our streamlined onboarding process",
      stats: "48-Hour Setup"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security and compliance to protect your member data and business information",
      stats: "SOC 2 Compliant"
    },
    {
      icon: Target,
      title: "Measurable Outcomes",
      description: "Track ROI with detailed analytics and performance metrics across all microagents",
      stats: "25-40% Revenue Increase"
    },
    {
      icon: Award,
      title: "24/7 Support",
      description: "Dedicated customer success team and technical support whenever you need assistance",
      stats: "99.9% Uptime"
    }
  ]

  const testimonialStats = [
    { metric: "Average Revenue Increase", value: "32%", icon: DollarSign },
    { metric: "Member Satisfaction Improvement", value: "45%", icon: Users },
    { metric: "Operational Efficiency Gain", value: "38%", icon: Zap },
    { metric: "Implementation Time", value: "2 Days", icon: Clock }
  ]

  const competitorComparison = [
    {
      feature: "Fitness Industry Focus",
      dxfactor: true,
      competitor1: false,
      competitor2: false
    },
    {
      feature: "6 Integrated Microagents",
      dxfactor: true,
      competitor1: false,
      competitor2: false
    },
    {
      feature: "Proven $100M+ Results",
      dxfactor: true,
      competitor1: false,
      competitor2: false
    },
    {
      feature: "48-Hour Implementation",
      dxfactor: true,
      competitor1: false,
      competitor2: true
    },
    {
      feature: "24/7 Expert Support",
      dxfactor: true,
      competitor1: true,
      competitor2: false
    },
    {
      feature: "Custom AI Training",
      dxfactor: true,
      competitor1: false,
      competitor2: false
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Why Choose <span className="text-green-600">DXFactor</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Discover why 100+ fitness operators trust DXFactor to transform their member experience and drive measurable business results
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <advantage.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">{advantage.description}</p>
                <div className="text-sm font-semibold text-green-600">{advantage.stats}</div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Real Results from Real Customers
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonialStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-md">
                    <stat.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-3xl font-black text-green-600 mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.metric}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
              How We Compare
            </h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-green-600">DXFactor</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Competitor A</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold text-gray-600">Competitor B</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {competitorComparison.map((row, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900">{row.feature}</td>
                        <td className="px-6 py-4 text-center">
                          {row.dxfactor ? (
                            <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                          ) : (
                            <div className="w-5 h-5 bg-gray-200 rounded-full mx-auto"></div>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.competitor1 ? (
                            <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                          ) : (
                            <div className="w-5 h-5 bg-gray-200 rounded-full mx-auto"></div>
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {row.competitor2 ? (
                            <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                          ) : (
                            <div className="w-5 h-5 bg-gray-200 rounded-full mx-auto"></div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Transform Your Fitness Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join 100+ fitness operators who are already seeing measurable results with DXFactor AI microagents
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Start Free with Concierge Agent
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
