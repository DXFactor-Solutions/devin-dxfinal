import React from 'react'
import { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import MicroagentCommunity from '@/components/MicroagentCommunity'
import AgentsSection from '@/components/AgentsSection'
import DXFactorSection from '@/components/DXFactorSection'
import ContactForm from '@/components/ContactForm'
import FeaturedSuccessStories from '@/components/FeaturedSuccessStories'
import Footer from '@/components/Footer'
import ClientIndex from './client-index'

export const metadata: Metadata = {
  title: 'DX Web2 – AI-Powered Genesis Deck | The First Agentic Platform for Fitness & Wellness',
  description: 'Transform your fitness business with DXFactor\'s AI-powered microagents. Generate $2B+ in outcomes with our Concierge, Click2Save, and Learning & Development agents. 120% net revenue retention guaranteed.',
  keywords: 'fitness AI, wellness technology, gym management software, member retention, fitness analytics, AI microagents, fitness business solutions, DXFactor, revenue retention, fitness automation',
  openGraph: {
    title: 'DX Web2 – AI-Powered Genesis Deck | The First Agentic Platform for Fitness & Wellness',
    description: 'Transform your fitness business with DXFactor\'s AI-powered microagents. Generate $2B+ in outcomes with our Concierge, Click2Save, and Learning & Development agents. 120% net revenue retention guaranteed.',
    type: 'website',
    url: 'https://dx-web2.vercel.app/',
    images: [
      {
        url: 'https://dx-web2.vercel.app/DX.png',
        width: 1200,
        height: 630,
        alt: 'DX Web2 - AI-Powered Genesis Deck'
      }
    ]
  },
  alternates: {
    canonical: 'https://dx-web2.vercel.app/'
  }
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <ClientIndex />
      <div className="relative z-10">
        <HeroSection />
      </div>
      <div className="relative z-10">
        <AgentsSection />
      </div>
      <div className="relative z-10">
        <MicroagentCommunity />
      </div>
      <div className="relative z-10">
        <DXFactorSection />
      </div>
      <div className="relative z-10">
        <FeaturedSuccessStories />
      </div>
      <div className="relative z-10">
        <ContactForm />
      </div>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  )
}
