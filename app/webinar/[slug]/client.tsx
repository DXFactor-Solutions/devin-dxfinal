'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Calendar, Clock, Users, ArrowLeft, Play } from 'lucide-react'

interface Webinar {
  slug: string
  title: string
  description: string
  image: string
}

interface WebinarClientProps {
  webinar: Webinar
  slug: string
}

export default function WebinarClient({ webinar, slug }: WebinarClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link 
            href="/webinar"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Webinars
          </Link>
          
          <header className="mb-12">
            <div className="aspect-video bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl overflow-hidden mb-8 relative">
              <img 
                src={webinar.image} 
                alt={webinar.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Play className="w-20 h-20 text-white opacity-80" />
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Recent</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>45 min</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>500+ attendees</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              {webinar.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {webinar.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                AI &amp; Fitness
              </span>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-medium rounded-full">
                Webinar
              </span>
            </div>
          </header>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Webinar Content Coming Soon</h3>
              <p className="text-blue-700">
                This webinar content is currently being migrated from our video platform. 
                Please check back soon for the full webinar recording and materials.
              </p>
              <p className="text-sm text-blue-600 mt-4">
                <strong>Summary:</strong> {webinar.description}
              </p>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  )
}
