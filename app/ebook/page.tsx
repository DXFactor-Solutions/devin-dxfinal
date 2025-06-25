import React from 'react'
import { Metadata } from 'next'
import EbookClient from './client'

export const metadata: Metadata = {
  title: 'Free Ebook | DXFactor - AI Implementation Guide for Fitness',
  description: 'Download our comprehensive guide on implementing AI in fitness and wellness businesses. Learn strategies for member experience transformation and revenue optimization.',
  keywords: 'fitness AI ebook, member experience guide, revenue optimization, fitness technology implementation, DXFactor guide',
  authors: [{ name: 'DXFactor Solutions' }],
  openGraph: {
    title: 'Free Ebook | DXFactor - AI Implementation Guide for Fitness',
    description: 'Download our comprehensive guide on implementing AI in fitness and wellness businesses. Learn strategies for member experience transformation and revenue optimization.',
    type: 'website',
    url: 'https://dx-web2.vercel.app/ebook',
    images: [
      {
        url: '/images/dxfactor-ebook-og.jpg',
        width: 1200,
        height: 630,
        alt: 'DXFactor AI Implementation Ebook'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Ebook | DXFactor - AI Implementation Guide for Fitness',
    description: 'Download our comprehensive guide on implementing AI in fitness and wellness businesses. Learn strategies for member experience transformation and revenue optimization.',
    images: ['/images/dxfactor-ebook-og.jpg']
  },
  alternates: {
    canonical: 'https://dx-web2.vercel.app/ebook'
  }
}

export default function EbookPage() {
  return <EbookClient />
}
