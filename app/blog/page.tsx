import React from 'react'
import { Metadata } from 'next'
import BlogClient from './client'

export const metadata: Metadata = {
  title: 'DXFactor Blog | AI Fitness Technology Insights & Industry News',
  description: 'Stay updated with the latest insights on AI-powered fitness technology, member retention strategies, and industry trends from DXFactor\'s expert team.',
  keywords: 'fitness AI blog, wellness technology insights, gym management tips, member retention strategies, fitness industry news, DXFactor insights',
  openGraph: {
    title: 'DXFactor Blog | AI Fitness Technology Insights & Industry News',
    description: 'Stay updated with the latest insights on AI-powered fitness technology, member retention strategies, and industry trends from DXFactor\'s expert team.',
    type: 'website',
    url: 'https://dx-web2.vercel.app/blog',
    images: [
      {
        url: 'https://dx-web2.vercel.app/DX.png',
        width: 1200,
        height: 630,
        alt: 'DXFactor Blog'
      }
    ]
  },
  alternates: {
    canonical: 'https://dx-web2.vercel.app/blog'
  }
}

export default function BlogPage() {
  return <BlogClient />
}
