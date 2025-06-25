import React from 'react'
import { Metadata } from 'next'
import ContactClient from './client'

export const metadata: Metadata = {
  title: 'Contact DXFactor | Get Started with AI-Powered Fitness Solutions',
  description: 'Ready to transform your fitness business? Contact DXFactor to learn how our AI microagents can generate measurable outcomes for your gym or studio.',
  keywords: 'contact DXFactor, fitness AI consultation, gym technology demo, wellness AI solutions, fitness business transformation',
  openGraph: {
    title: 'Contact DXFactor | Get Started with AI-Powered Fitness Solutions',
    description: 'Ready to transform your fitness business? Contact DXFactor to learn how our AI microagents can generate measurable outcomes for your gym or studio.',
    type: 'website',
    url: 'https://dx-web2.vercel.app/contact',
    images: [
      {
        url: 'https://dx-web2.vercel.app/DX.png',
        width: 1200,
        height: 630,
        alt: 'Contact DXFactor'
      }
    ]
  },
  alternates: {
    canonical: 'https://dx-web2.vercel.app/contact'
  }
}

export default function ContactPage() {
  return <ContactClient />
}
