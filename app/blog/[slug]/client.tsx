'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react'

interface BlogPost {
  slug: string
  title: string
  description: string
  content: string
  html: string
  image: string
}

interface BlogPostClientProps {
  post: BlogPost
  slug: string
}

export default function BlogPostClient({ post, slug }: BlogPostClientProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <article className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <header className="mb-12">
            <div className="aspect-video bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl overflow-hidden mb-8">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>Recent</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="w-4 h-4" />
                <span>DXFactor Team</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {post.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                AI & Fitness
              </span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                Technology
              </span>
            </div>
          </header>
          
          <div className="prose prose-lg max-w-none">
            {post.html && !post.html.startsWith('/docz/') ? (
              <div dangerouslySetInnerHTML={{ __html: post.html }} />
            ) : post.content ? (
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Content Coming Soon</h3>
                <p className="text-blue-700">
                  This blog post content is currently being migrated from our document system. 
                  Please check back soon for the full article content.
                </p>
                <p className="text-sm text-blue-600 mt-4">
                  <strong>Summary:</strong> {post.description}
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
