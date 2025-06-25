import React from 'react'
import { Metadata } from 'next'
import WhyUsClient from './client'

export const metadata: Metadata = {
  title: 'Why Choose DXFactor | AI-Powered Fitness Solutions',
  description: 'Discover why 100+ fitness operators choose DXFactor for AI-powered solutions. Proven results, industry expertise, rapid implementation, and measurable outcomes.',
  keywords: 'why choose DXFactor, AI fitness solutions, fitness technology benefits, proven results, industry expertise',
  authors: [{ name: 'DXFactor Solutions' }],
  openGraph: {
    title: 'Why Choose DXFactor | AI-Powered Fitness Solutions',
    description: 'Discover why 100+ fitness operators choose DXFactor for AI-powered solutions. Proven results, industry expertise, rapid implementation, and measurable outcomes.',
    type: 'website',
    url: 'https://dx-web2.vercel.app/why-us',
    images: [
      {
        url: '/images/dxfactor-why-us-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Why Choose DXFactor'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Why Choose DXFactor | AI-Powered Fitness Solutions',
    description: 'Discover why 100+ fitness operators choose DXFactor for AI-powered solutions. Proven results, industry expertise, rapid implementation, and measurable outcomes.',
    images: ['/images/dxfactor-why-us-og.jpg']
  },
  alternates: {
    canonical: 'https://dx-web2.vercel.app/why-us'
  }
}

export default function WhyUsPage() {
  return <WhyUsClient />
}
