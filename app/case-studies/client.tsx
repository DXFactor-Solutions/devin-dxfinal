'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { caseStudies } from '@/lib/case-studies-data'
import Link from 'next/link'
import { Calendar, User, TrendingUp, ArrowRight } from 'lucide-react'

export default function CaseStudiesClient() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
              Success <span className="text-green-500">Stories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Real results from fitness businesses that transformed their operations with DXFactor's AI-powered platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <article key={study.slug} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-video bg-gradient-to-br from-green-400 to-emerald-600 relative overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                    {study.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Recent</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>DXFactor Client</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>{study.category}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {study.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {study.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      {study.category}
                    </span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
                      Case Study
                    </span>
                  </div>
                  
                  <Link 
                    href={`/case-studies/${study.slug}`}
                    className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
                  >
                    Read Case Study <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}
