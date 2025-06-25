'use client'

import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Star, Quote, TrendingUp, Users, DollarSign } from 'lucide-react'

export default function TestimonialsClient() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      title: "Owner, FitLife Gym",
      location: "Austin, TX",
      image: "/images/testimonial-sarah.jpg",
      rating: 5,
      quote: "DXFactor's AI Concierge has transformed our member experience. We've seen a 40% increase in member satisfaction and 25% reduction in front desk workload.",
      results: {
        metric: "Member Satisfaction",
        increase: "40%"
      }
    },
    {
      name: "Mike Rodriguez",
      title: "General Manager, PowerFit Studios",
      location: "Miami, FL",
      image: "/images/testimonial-mike.jpg",
      rating: 5,
      quote: "The Click2Save microagent helped us reduce member churn by 35%. It's like having a retention specialist working 24/7 for our business.",
      results: {
        metric: "Churn Reduction",
        increase: "35%"
      }
    },
    {
      name: "Jennifer Chen",
      title: "CEO, Wellness Works",
      location: "San Francisco, CA",
      image: "/images/testimonial-jennifer.jpg",
      rating: 5,
      quote: "Our revenue increased by $50K in the first quarter after implementing DXFactor's Collections microagent. The ROI was immediate and substantial.",
      results: {
        metric: "Revenue Increase",
        increase: "$50K"
      }
    },
    {
      name: "David Thompson",
      title: "Owner, Elite Fitness Center",
      location: "Chicago, IL",
      image: "/images/testimonial-david.jpg",
      rating: 5,
      quote: "The Learning & Development microagent has upskilled our entire team. Staff productivity is up 30% and member interactions are more professional.",
      results: {
        metric: "Staff Productivity",
        increase: "30%"
      }
    },
    {
      name: "Lisa Martinez",
      title: "Operations Director, FitZone",
      location: "Phoenix, AZ",
      image: "/images/testimonial-lisa.jpg",
      rating: 5,
      quote: "DXFactor's analytics platform gives us insights we never had before. We've optimized our operations and increased efficiency by 45%.",
      results: {
        metric: "Operational Efficiency",
        increase: "45%"
      }
    },
    {
      name: "Robert Kim",
      title: "Franchise Owner, GymMax",
      location: "Seattle, WA",
      image: "/images/testimonial-robert.jpg",
      rating: 5,
      quote: "Implementing all six microagents was the best business decision we made. Our net promoter score improved from 6 to 9, and revenue is up 28%.",
      results: {
        metric: "Revenue Growth",
        increase: "28%"
      }
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <header className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Customer <span className="text-green-600">Success Stories</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Discover how fitness and wellness businesses are transforming their operations with DXFactor AI solutions
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-green-600 mb-2">100+</div>
              <div className="text-gray-600">Satisfied Customers</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-blue-600 mb-2">$100M+</div>
              <div className="text-gray-600">Revenue Generated</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 text-center">
              <div className="text-4xl font-black text-purple-600 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-lg">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.title}</p>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                    <div className="flex items-center gap-1 mt-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-green-200 absolute -top-2 -left-2" />
                  <p className="text-gray-700 leading-relaxed pl-6 italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-4 flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-600">{testimonial.results.metric}</div>
                    <div className="text-2xl font-bold text-green-600">{testimonial.results.increase}</div>
                  </div>
                  <TrendingUp className="w-8 h-8 text-green-600" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Start your transformation today with our AI-powered microagents and see measurable results in your fitness business.
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
