import React from 'react'
import { Metadata } from 'next'
import WebinarClient from './client'

export const metadata: Metadata = {
  title: 'Webinars | DXFactor AI Fitness Technology Education',
  description: 'Join DXFactor\'s educational webinars to learn about AI implementation in fitness businesses, member retention strategies, and industry best practices.',
  keywords: 'fitness webinars, AI fitness education, gym management training, member retention webinars, fitness technology seminars',
  openGraph: {
    title: 'Webinars | DXFactor AI Fitness Technology Education',
    description: 'Join DXFactor\'s educational webinars to learn about AI implementation in fitness businesses, member retention strategies, and industry best practices.',
    type: 'website',
    url: 'https://dx-web2.vercel.app/webinar',
    images: [
      {
        url: 'https://dx-web2.vercel.app/DX.png',
        width: 1200,
        height: 630,
        alt: 'DXFactor Webinars'
      }
    ]
  },
  alternates: {
    canonical: 'https://dx-web2.vercel.app/webinar'
  }
}

export default function WebinarPage() {
  return <WebinarClient />
}
