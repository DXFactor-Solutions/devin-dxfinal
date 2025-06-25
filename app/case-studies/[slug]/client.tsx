'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Calendar, User, TrendingUp, ArrowLeft } from 'lucide-react'

interface CaseStudy {
  slug: string
  title: string
  description: string
  html: string
  category: string
}

interface CaseStudyClientProps {
  study: CaseStudy
  slug: string
}

export default function CaseStudyClient({ study, slug }: CaseStudyClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link 
            href="/case-studies"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>
          
          <header className="mb-12">
            <div className="aspect-video bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl overflow-hidden mb-8 flex items-center justify-center text-white text-3xl font-bold">
              {study.category}
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
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
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              {study.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {study.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                {study.category}
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                Case Study
              </span>
            </div>
          </header>
          
          <div className="prose prose-lg max-w-none">
            {study.html && !study.html.startsWith('/CASEStudies/') ? (
              <div dangerouslySetInnerHTML={{ __html: study.html }} />
            ) : (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Content Coming Soon</h3>
                <p className="text-blue-700">
                  This case study content is currently being migrated from our document system. 
                  Please check back soon for the full case study details.
                </p>
                <p className="text-sm text-blue-600 mt-4">
                  <strong>Summary:</strong> {study.description}
                </p>
              </div>
            )}
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  )
}
