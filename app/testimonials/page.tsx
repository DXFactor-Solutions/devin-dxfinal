import React from 'react'
import { Metadata } from 'next'
import TestimonialsClient from './client'

export const metadata: Metadata = {
  title: 'Testimonials | DXFactor - Customer Success Stories',
  description: 'Read success stories from fitness and wellness businesses using DXFactor AI solutions. Discover how our microagents drive revenue growth and operational efficiency.',
  keywords: 'DXFactor testimonials, customer success stories, fitness AI results, member experience transformation, revenue growth',
  authors: [{ name: 'DXFactor Solutions' }],
  openGraph: {
    title: 'Testimonials | DXFactor - Customer Success Stories',
    description: 'Read success stories from fitness and wellness businesses using DXFactor AI solutions. Discover how our microagents drive revenue growth and operational efficiency.',
    type: 'website',
    url: 'https://dx-web2.vercel.app/testimonials',
    images: [
      {
        url: '/images/dxfactor-testimonials-og.jpg',
        width: 1200,
        height: 630,
        alt: 'DXFactor Customer Testimonials'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Testimonials | DXFactor - Customer Success Stories',
    description: 'Read success stories from fitness and wellness businesses using DXFactor AI solutions. Discover how our microagents drive revenue growth and operational efficiency.',
    images: ['/images/dxfactor-testimonials-og.jpg']
  },
  alternates: {
    canonical: 'https://dx-web2.vercel.app/testimonials'
  }
}

export default function TestimonialsPage() {
  return <TestimonialsClient />
}
