'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import AgentsSection from '@/components/AgentsSection'
import ContactForm from '@/components/ContactForm'

export default function SolutionsClient() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
              AI-Powered <span className="text-green-500">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Transform your fitness business with our comprehensive suite of AI microagents designed to drive measurable outcomes
            </p>
          </div>
        </div>
      </section>
      
      <AgentsSection />
      <ContactForm />
      <Footer />
    </div>
  )
}
