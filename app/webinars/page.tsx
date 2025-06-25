import React from 'react'
import { Metadata } from 'next'
import WebinarsClient from './client'

export const metadata: Metadata = {
  title: 'Webinars | DXFactor - AI-Powered Fitness Education',
  description: 'Join our educational webinars on AI implementation in fitness and wellness. Learn from industry experts about member experience transformation, revenue optimization, and operational efficiency.',
  keywords: 'fitness webinars, AI education, member experience, revenue optimization, fitness technology, DXFactor webinars',
  authors: [{ name: 'DXFactor Solutions' }],
  openGraph: {
    title: 'Webinars | DXFactor - AI-Powered Fitness Education',
    description: 'Join our educational webinars on AI implementation in fitness and wellness. Learn from industry experts about member experience transformation, revenue optimization, and operational efficiency.',
    type: 'website',
    url: 'https://dx-web2.vercel.app/webinars',
    images: [
      {
        url: '/images/dxfactor-webinars-og.jpg',
        width: 1200,
        height: 630,
        alt: 'DXFactor Webinars'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webinars | DXFactor - AI-Powered Fitness Education',
    description: 'Join our educational webinars on AI implementation in fitness and wellness. Learn from industry experts about member experience transformation, revenue optimization, and operational efficiency.',
    images: ['/images/dxfactor-webinars-og.jpg']
  },
  alternates: {
    canonical: 'https://dx-web2.vercel.app/webinars'
  }
}

export default function WebinarsPage() {
  return <WebinarsClient />
}
