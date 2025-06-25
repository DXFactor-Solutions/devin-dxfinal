import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import WebinarClient from './client'
import { webinars } from '@/lib/webinar-data'

interface WebinarPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return webinars.map((webinar) => ({
    slug: webinar.slug,
  }))
}

export async function generateMetadata({ params }: WebinarPageProps): Promise<Metadata> {
  const webinar = webinars.find((webinar) => webinar.slug === params.slug)
  
  if (!webinar) {
    return {
      title: 'Webinar Not Found | DXFactor'
    }
  }

  return {
    title: `${webinar.title} | DXFactor Webinars`,
    description: webinar.description,
    keywords: `${webinar.title}, fitness webinar, AI fitness education, member retention, DXFactor webinar`,
    authors: [{ name: 'DXFactor Solutions' }],
    openGraph: {
      title: `${webinar.title} | DXFactor Webinars`,
      description: webinar.description,
      type: 'article',
      url: `https://dx-web2.vercel.app/webinar/${params.slug}`,
      images: [
        {
          url: webinar.image || '/images/dxfactor-webinar-og.jpg',
          width: 1200,
          height: 630,
          alt: webinar.title
        }
      ],
      publishedTime: new Date().toISOString(),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${webinar.title} | DXFactor Webinars`,
      description: webinar.description,
      images: [webinar.image || '/images/dxfactor-webinar-og.jpg']
    },
    alternates: {
      canonical: `https://dx-web2.vercel.app/webinar/${params.slug}`
    }
  }
}

export default function WebinarPage({ params }: WebinarPageProps) {
  const webinar = webinars.find((webinar) => webinar.slug === params.slug)
  
  if (!webinar) {
    notFound()
  }

  return <WebinarClient webinar={webinar} slug={params.slug} />
}
