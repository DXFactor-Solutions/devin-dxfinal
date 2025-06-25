'use client'

import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Zap, Target, TrendingUp, Users, BarChart3, CheckCircle } from 'lucide-react'

export default function OutcomesPlatformClient() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              <span className="text-green-600">OMAP</span> - Outcomes Microagent Platform
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              AI-powered solutions that deliver measurable results for fitness and wellness businesses
            </p>
          </header>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">
                Transform Your Business with AI Microagents
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The DXFactor Outcomes Microagent Platform (OMAP) is a comprehensive AI solution designed specifically for fitness and wellness operators. Our platform delivers proven results across 100+ fitness businesses.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Revenue Growth</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Operational Efficiency</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Member Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Data-Driven Insights</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-green-600 mb-2">$100M+</div>
                  <div className="text-sm text-gray-600">Revenue Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-green-600 mb-2">100+</div>
                  <div className="text-sm text-gray-600">Fitness Operators</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-green-600 mb-2">6</div>
                  <div className="text-sm text-gray-600">AI Microagents</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-green-600 mb-2">24/7</div>
                  <div className="text-sm text-gray-600">AI Support</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">AI Concierge</h3>
              <p className="text-gray-600 leading-relaxed">
                24/7 intelligent member support that handles inquiries, bookings, and provides personalized recommendations.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Click2Save</h3>
              <p className="text-gray-600 leading-relaxed">
                Automated retention system that identifies at-risk members and implements targeted save campaigns.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Collections</h3>
              <p className="text-gray-600 leading-relaxed">
                Smart payment recovery system that maximizes collections while maintaining member relationships.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Learning & Development</h3>
              <p className="text-gray-600 leading-relaxed">
                AI-powered training platform that upskills your team and improves operational performance.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Configurator</h3>
              <p className="text-gray-600 leading-relaxed">
                Intelligent system configuration that optimizes your operations based on business goals and metrics.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Prompt Analytics</h3>
              <p className="text-gray-600 leading-relaxed">
                Advanced analytics platform that provides actionable insights and performance optimization recommendations.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Join 100+ fitness operators who are already seeing measurable results with OMAP.
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
              Start Free with Concierge Agent
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}
