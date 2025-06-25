import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { TooltipProvider } from '@/components/ui/tooltip'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import ClientProviders from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DX Web2 – AI-Powered Genesis Deck | The First Agentic Platform for Fitness & Wellness',
  description: 'Transform your fitness business with DXFactor\'s AI-powered microagents. Generate $2B+ in outcomes with our Concierge, Click2Save, and Learning & Development agents. 120% net revenue retention guaranteed.',
  keywords: 'fitness AI, wellness technology, gym management software, member retention, fitness analytics, AI microagents, fitness business solutions, DXFactor, revenue retention, fitness automation',
  authors: [{ name: 'DXFactor Solutions' }],
  robots: 'index, follow',
  openGraph: {
    title: 'DX Web2 – AI-Powered Genesis Deck | The First Agentic Platform for Fitness & Wellness',
    description: 'Transform your fitness business with DXFactor\'s AI-powered microagents. Generate $2B+ in outcomes with our Concierge, Click2Save, and Learning & Development agents.',
    type: 'website',
    url: 'https://dx-web2.vercel.app/',
    images: [
      {
        url: 'https://dx-web2.vercel.app/DX.png',
        width: 1200,
        height: 630,
        alt: 'DX Web2 - AI-Powered Genesis Deck'
      }
    ],
    siteName: 'DX Web2',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DX Web2 – AI-Powered Genesis Deck | The First Agentic Platform for Fitness & Wellness',
    description: 'Transform your fitness business with DXFactor\'s AI-powered microagents. Generate $2B+ in outcomes with our Concierge, Click2Save, and Learning & Development agents.',
    images: ['https://dx-web2.vercel.app/DX.png']
  },
  alternates: {
    canonical: 'https://dx-web2.vercel.app/'
  },
  other: {
    'theme-color': '#10b981'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientProviders>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            {children}
          </TooltipProvider>
        </ClientProviders>
      </body>
    </html>
  )
}
