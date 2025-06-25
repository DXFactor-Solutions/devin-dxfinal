import React from 'react'
import { Metadata } from 'next'
import CaseStudiesClient from './client'

export const metadata: Metadata = {
  title: 'Case Studies | DXFactor AI-Powered Fitness Success Stories',
  description: 'Discover how fitness businesses achieved $2B+ in outcomes with DXFactor\'s AI microagents. Real results from gyms, studios, and wellness centers worldwide.',
  keywords: 'fitness case studies, gym success stories, AI fitness results, member retention case studies, fitness business growth, DXFactor results',
  openGraph: {
    title: 'Case Studies | DXFactor AI-Powered Fitness Success Stories',
    description: 'Discover how fitness businesses achieved $2B+ in outcomes with DXFactor\'s AI microagents. Real results from gyms, studios, and wellness centers worldwide.',
    type: 'website',
    url: 'https://dx-web2.vercel.app/case-studies',
    images: [
      {
        url: 'https://dx-web2.vercel.app/DX.png',
        width: 1200,
        height: 630,
        alt: 'DXFactor Case Studies'
      }
    ]
  },
  alternates: {
    canonical: 'https://dx-web2.vercel.app/case-studies'
  }
}

export default function CaseStudiesPage() {
  return <CaseStudiesClient />
}
