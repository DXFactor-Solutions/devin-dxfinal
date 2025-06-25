'use client'

import React, { useState, useEffect, useRef } from 'react'

const FloatingElement = ({ top, left, size, color, delay = 0 }: {
  top: number
  left: number
  size: number
  color: string
  delay?: number
}) => {
  const elementRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setOffset(scrollY * 0.05)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <div 
      ref={elementRef}
      className="absolute pointer-events-none"
      style={{ 
        top: `${top}%`, 
        left: `${left}%`,
        width: `${size}px`,
        height: `${size}px`,
        transform: `translateY(${-offset * (1 + delay)}px)`,
        transition: 'transform 0.2s ease-out'
      }}
    >
      <div 
        className={`w-full h-full rounded-full ${color} blur-3xl`}
        style={{ opacity: 0.5 }}
      ></div>
    </div>
  )
}

export default function ClientIndex() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll')
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { 
      threshold: 0.15,
      rootMargin: '0px 0px -100px 0px'
    })
    
    animatedElements.forEach(element => {
      observer.observe(element)
    })
    
    return () => {
      animatedElements.forEach(element => {
        observer.unobserve(element)
      })
    }
  }, [])
  
  return (
    <>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <FloatingElement top={20} left={15} size={300} color="bg-white" delay={0.2} />
        <FloatingElement top={60} left={70} size={350} color="bg-white" delay={0.3} />
        <FloatingElement top={80} left={30} size={320} color="bg-white" delay={0.1} />
      </div>
    </>
  )
}
