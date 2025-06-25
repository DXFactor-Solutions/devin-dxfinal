import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPostClient from './client'
import { blogPosts } from '@/lib/blog-data'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Post Not Found | DXFactor Blog'
    }
  }

  return {
    title: `${post.title} | DXFactor Blog`,
    description: post.description,
    keywords: `${post.title}, fitness AI, wellness technology, gym management, member retention, DXFactor insights`,
    authors: [{ name: 'DXFactor Team' }],
    openGraph: {
      title: `${post.title} | DXFactor Blog`,
      description: post.description,
      type: 'article',
      url: `https://dx-web2.vercel.app/blog/${params.slug}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title
        }
      ],
      publishedTime: new Date().toISOString(),
      authors: ['DXFactor Team']
    },
    twitter: {
      card: 'summary_large_image',
      title: `${post.title} | DXFactor Blog`,
      description: post.description,
      images: [post.image]
    },
    alternates: {
      canonical: `https://dx-web2.vercel.app/blog/${params.slug}`
    }
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)
  
  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} slug={params.slug} />
}
