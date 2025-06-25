import React from 'react'
import { Metadata } from 'next'
import SolutionsClient from './client'

export const metadata: Metadata = {
  title: 'AI Solutions for Fitness | DXFactor Microagent Platform',
  description: 'Explore DXFactor\'s comprehensive AI solutions for fitness businesses. From member engagement to revenue optimization, discover how our microagents drive results.',
  keywords: 'fitness AI solutions, gym management software, member engagement platform, fitness technology, AI microagents, wellness automation',
  openGraph: {
    title: 'AI Solutions for Fitness | DXFactor Microagent Platform',
    description: 'Explore DXFactor\'s comprehensive AI solutions for fitness businesses. From member engagement to revenue optimization, discover how our microagents drive results.',
    type: 'website',
    url: 'https://dx-web2.vercel.app/solutions',
    images: [
      {
        url: 'https://dx-web2.vercel.app/DX.png',
        width: 1200,
        height: 630,
        alt: 'DXFactor Solutions'
      }
    ]
  },
  alternates: {
    canonical: 'https://dx-web2.vercel.app/solutions'
  }
}

export default function SolutionsPage() {
  return <SolutionsClient />
}
