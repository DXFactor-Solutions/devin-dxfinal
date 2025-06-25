import React from 'react'
import { Metadata } from 'next'
import AboutUsClient from './client'

export const metadata: Metadata = {
  title: 'About DXFactor Solutions | AI-Powered Fitness & Wellness Technology Leaders',
  description: 'Learn about DXFactor\'s mission to transform fitness and wellness businesses through AI technology. We\'ve generated $2B+ in outcomes for operators with our revenue-focused approach.',
  keywords: 'DXFactor about, fitness technology company, AI wellness solutions, fitness business transformation, revenue machines, fitness industry experts',
  openGraph: {
    title: 'About DXFactor Solutions | AI-Powered Fitness & Wellness Technology Leaders',
    description: 'Learn about DXFactor\'s mission to transform fitness and wellness businesses through AI technology. We\'ve generated $2B+ in outcomes for operators with our revenue-focused approach.',
    type: 'website',
    url: 'https://dx-web2.vercel.app/about',
    images: [
      {
        url: 'https://dx-web2.vercel.app/DX.png',
        width: 1200,
        height: 630,
        alt: 'About DXFactor Solutions'
      }
    ]
  },
  alternates: {
    canonical: 'https://dx-web2.vercel.app/about'
  }
}

export default function AboutPage() {
  return <AboutUsClient />
}
