import React from 'react'
import { Metadata } from 'next'
import OutcomesPlatformClient from './client'

export const metadata: Metadata = {
  title: 'OMAP - Outcomes Microagent Platform | DXFactor',
  description: 'Discover the DXFactor Outcomes Microagent Platform (OMAP) - AI-powered solutions for fitness and wellness businesses to drive measurable results and operational efficiency.',
  keywords: 'OMAP, outcomes platform, microagent platform, AI fitness solutions, DXFactor platform, fitness technology',
  authors: [{ name: 'DXFactor Solutions' }],
  openGraph: {
    title: 'OMAP - Outcomes Microagent Platform | DXFactor',
    description: 'Discover the DXFactor Outcomes Microagent Platform (OMAP) - AI-powered solutions for fitness and wellness businesses to drive measurable results and operational efficiency.',
    type: 'website',
    url: 'https://dx-web2.vercel.app/outcomes-platform',
    images: [
      {
        url: '/images/dxfactor-omap-og.jpg',
        width: 1200,
        height: 630,
        alt: 'DXFactor OMAP Platform'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OMAP - Outcomes Microagent Platform | DXFactor',
    description: 'Discover the DXFactor Outcomes Microagent Platform (OMAP) - AI-powered solutions for fitness and wellness businesses to drive measurable results and operational efficiency.',
    images: ['/images/dxfactor-omap-og.jpg']
  },
  alternates: {
    canonical: 'https://dx-web2.vercel.app/outcomes-platform'
  }
}

export default function OutcomesPlatformPage() {
  return <OutcomesPlatformClient />
}
