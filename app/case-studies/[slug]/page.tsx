import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import CaseStudyClient from './client'
import { caseStudies } from '@/lib/case-studies-data'

interface CaseStudyPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }))
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const study = caseStudies.find((study) => study.slug === params.slug)
  
  if (!study) {
    return {
      title: 'Case Study Not Found | DXFactor'
    }
  }

  return {
    title: `${study.title} | DXFactor Case Studies`,
    description: study.description,
    keywords: `${study.title}, fitness case study, gym success story, AI fitness results, member retention, DXFactor results`,
    authors: [{ name: 'DXFactor Solutions' }],
    openGraph: {
      title: `${study.title} | DXFactor Case Studies`,
      description: study.description,
      type: 'article',
      url: `https://dx-web2.vercel.app/case-studies/${params.slug}`,
      images: [
        {
          url: '/images/dxfactor-case-study-og.jpg',
          width: 1200,
          height: 630,
          alt: study.title
        }
      ],
      publishedTime: new Date().toISOString(),
    },
    twitter: {
      card: 'summary_large_image',
      title: `${study.title} | DXFactor Case Studies`,
      description: study.description,
      images: ['/images/dxfactor-case-study-og.jpg']
    },
    alternates: {
      canonical: `https://dx-web2.vercel.app/case-studies/${params.slug}`
    }
  }
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const study = caseStudies.find((study) => study.slug === params.slug)
  
  if (!study) {
    notFound()
  }

  return <CaseStudyClient study={study} slug={params.slug} />
}
