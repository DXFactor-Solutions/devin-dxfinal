import React from 'react'
import { Metadata } from 'next'
import CareersClient from './client'

export const metadata: Metadata = {
  title: 'Careers | Join DXFactor - AI Fitness Technology Jobs',
  description: 'Join our mission to transform the fitness industry with AI technology. Explore career opportunities at DXFactor including engineering, sales, marketing, and customer success roles.',
  keywords: 'DXFactor careers, AI fitness jobs, technology careers, software engineer jobs, customer success jobs',
  authors: [{ name: 'DXFactor Solutions' }],
  openGraph: {
    title: 'Careers | Join DXFactor - AI Fitness Technology Jobs',
    description: 'Join our mission to transform the fitness industry with AI technology. Explore career opportunities at DXFactor including engineering, sales, marketing, and customer success roles.',
    type: 'website',
    url: 'https://dx-web2.vercel.app/careers',
    images: [
      {
        url: '/images/dxfactor-careers-og.jpg',
        width: 1200,
        height: 630,
        alt: 'DXFactor Careers'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers | Join DXFactor - AI Fitness Technology Jobs',
    description: 'Join our mission to transform the fitness industry with AI technology. Explore career opportunities at DXFactor including engineering, sales, marketing, and customer success roles.',
    images: ['/images/dxfactor-careers-og.jpg']
  },
  alternates: {
    canonical: 'https://dx-web2.vercel.app/careers'
  }
}

export default function CareersPage() {
  return <CareersClient />
}
