import React from 'react'
import { Metadata } from 'next'
import NewsClient from './client'

export const metadata: Metadata = {
  title: 'News | DXFactor - Latest AI Fitness Industry Updates',
  description: 'Stay updated with the latest news and developments in AI-powered fitness technology. Read about industry trends, product updates, and innovation insights from DXFactor.',
  keywords: 'fitness industry news, AI technology updates, DXFactor news, fitness innovation, industry trends',
  authors: [{ name: 'DXFactor Solutions' }],
  openGraph: {
    title: 'News | DXFactor - Latest AI Fitness Industry Updates',
    description: 'Stay updated with the latest news and developments in AI-powered fitness technology. Read about industry trends, product updates, and innovation insights from DXFactor.',
    type: 'website',
    url: 'https://dx-web2.vercel.app/news',
    images: [
      {
        url: '/images/dxfactor-news-og.jpg',
        width: 1200,
        height: 630,
        alt: 'DXFactor News'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'News | DXFactor - Latest AI Fitness Industry Updates',
    description: 'Stay updated with the latest news and developments in AI-powered fitness technology. Read about industry trends, product updates, and innovation insights from DXFactor.',
    images: ['/images/dxfactor-news-og.jpg']
  },
  alternates: {
    canonical: 'https://dx-web2.vercel.app/news'
  }
}

export default function NewsPage() {
  return <NewsClient />
}
