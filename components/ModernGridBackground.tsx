'use client'

import React, { useEffect, useRef } from 'react';

const ModernGridBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size with pixel ratio for crisp rendering
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
    };
    
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Green colors for grid and elements
    const colors = {
      gridLines: 'rgba(34, 197, 94, 0.05)',
      accentLines: 'rgba(34, 197, 94, 0.1)',
      dots: 'rgba(34, 197, 94, 0.15)',
      highlightDots: 'rgba(34, 197, 94, 0.3)',
      pulseCircle: 'rgba(74, 222, 128, 0.08)'
    };

    // Grid configuration
    const grid = {
      smallSpacing: 20, // Small grid lines
      largeSpacing: 100, // Large grid lines
      dotRadius: 1.5, // Dot size at intersections
      highlightDotRadius: 2.5 // Larger dot size for highlighted intersections
    };

    // Generate pulse points
    const pulsePoints = Array(6).fill(0).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 100 + 50,
      speed: Math.random() * 0.02 + 0.01,
      offset: Math.random() * Math.PI * 2
    }));

    // Draw the grid with dots at intersections
    const drawGrid = (time: number) => {
      // Clear canvas
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      
      // Fill background with very light green tint
      ctx.fillStyle = 'rgba(240, 253, 244, 0.5)';
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

      // Draw pulse circles
      pulsePoints.forEach(point => {
        const pulsatingRadius = point.radius + Math.sin(time * point.speed + point.offset) * 20;
        
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, pulsatingRadius
        );
        
        gradient.addColorStop(0, colors.pulseCircle);
        gradient.addColorStop(1, 'rgba(74, 222, 128, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(point.x, point.y, pulsatingRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw small grid lines
      ctx.strokeStyle = colors.gridLines;
      ctx.lineWidth = 0.5;

      // Vertical small grid lines
      for (let x = 0; x <= window.innerWidth; x += grid.smallSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, window.innerHeight);
        ctx.stroke();
      }
      
      // Horizontal small grid lines
      for (let y = 0; y <= window.innerHeight; y += grid.smallSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(window.innerWidth, y);
        ctx.stroke();
      }

      // Draw large grid lines
      ctx.strokeStyle = colors.accentLines;
      ctx.lineWidth = 1;

      // Vertical large grid lines
      for (let x = 0; x <= window.innerWidth; x += grid.largeSpacing) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, window.innerHeight);
        ctx.stroke();
      }
      
      // Horizontal large grid lines
      for (let y = 0; y <= window.innerHeight; y += grid.largeSpacing) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(window.innerWidth, y);
        ctx.stroke();
      }

      // Draw dots at grid intersections
      for (let x = 0; x <= window.innerWidth; x += grid.smallSpacing) {
        for (let y = 0; y <= window.innerHeight; y += grid.smallSpacing) {
          // Determine if this is a large grid intersection
          const isLargeIntersection = x % grid.largeSpacing === 0 && y % grid.largeSpacing === 0;
          
          // Determine if dot should be highlighted (with pulsing effect)
          const isHighlighted = isLargeIntersection && Math.sin(time * 0.5 + (x + y) * 0.01) > 0.7;
          
          ctx.fillStyle = isHighlighted ? colors.highlightDots : colors.dots;
          
          ctx.beginPath();
          ctx.arc(x, y, isLargeIntersection ? grid.highlightDotRadius : grid.dotRadius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw dynamic accent line
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.15)';
      ctx.lineWidth = 2;
      
      ctx.beginPath();
      ctx.moveTo(0, window.innerHeight * 0.5 + Math.sin(time * 0.5) * 50);
      
      // Create a wavy line across the screen
      for (let x = 0; x <= window.innerWidth; x += 10) {
        const waveHeight = Math.sin(time * 0.5 + x * 0.005) * 30;
        ctx.lineTo(x, window.innerHeight * 0.5 + waveHeight);
      }
      
      ctx.stroke();
    };

    // Animation loop
    const animate = (timestamp: number) => {
      const time = timestamp * 0.001; // Convert to seconds
      
      drawGrid(time);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Clean up
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-white/95">
      <canvas 
        ref={canvasRef}
        className="absolute inset-0"
        style={{ width: '100%', height: '100%' }}
      />
      
      {/* Subtle noise texture overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: '200px 200px'
        }}
      />
    </div>
  );
};

export default ModernGridBackground;  