import React, { useEffect, useRef } from 'react';

interface LuxuryLine {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  width: number;
  color: string;
  alpha: number;
  speed: number;
}

const TrillionDollarBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const luxuryLinesRef = useRef<LuxuryLine[]>([]);
  const timeRef = useRef<number>(0);
  const scrollRef = useRef<number>(0);

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

    // Premium color palette
    const colors = {
      primary: ['rgba(34, 197, 94, 0.8)', 'rgba(74, 222, 128, 0.7)', 'rgba(134, 239, 172, 0.6)'],
      accent: ['rgba(34, 197, 94, 0.5)', 'rgba(74, 222, 128, 0.4)', 'rgba(134, 239, 172, 0.3)'],
      gold: ['rgba(251, 191, 36, 0.4)', 'rgba(252, 211, 77, 0.3)', 'rgba(253, 230, 138, 0.2)'],
      silver: ['rgba(148, 163, 184, 0.3)', 'rgba(100, 116, 139, 0.2)', 'rgba(71, 85, 105, 0.1)'],
    };

    // Initialize luxury accent lines
    const initLuxuryLines = () => {
      luxuryLinesRef.current = [];
      const numLines = Math.max(12, Math.floor(window.innerWidth / 180));
      
      for (let i = 0; i < numLines; i++) {
        const isHorizontal = Math.random() > 0.4;
        const isDiagonal = Math.random() > 0.8;
        const isGold = Math.random() > 0.7;
        
        let startX, startY, endX, endY;
        
        if (isDiagonal) {
          startX = Math.random() * window.innerWidth * 0.3;
          startY = Math.random() * window.innerHeight * 0.3;
          endX = startX + (Math.random() * 0.4 + 0.3) * window.innerWidth;
          endY = startY + (Math.random() * 0.4 + 0.3) * window.innerHeight;
        } else if (isHorizontal) {
          startX = 0;
          startY = Math.random() * window.innerHeight;
          endX = window.innerWidth;
          endY = startY;
        } else {
          startX = Math.random() * window.innerWidth;
          startY = 0;
          endX = startX;
          endY = window.innerHeight;
        }
        
        luxuryLinesRef.current.push({
          startX,
          startY,
          endX,
          endY,
          width: Math.random() * 0.8 + 0.2,
          color: isGold ? colors.gold[0] : colors.primary[Math.floor(Math.random() * colors.primary.length)],
          alpha: Math.random() * 0.2 + 0.05,
          speed: Math.random() * 0.03 + 0.01
        });
      }
    };

    initLuxuryLines();

    // Scroll tracking
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    // Enhanced curve with scroll-based distortion
    const drawLuxuryCurve = (ctx: CanvasRenderingContext2D, time: number) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      ctx.save();
      
      // Scroll-based distortion
      const scrollDistortion = Math.sin(scrollRef.current * 0.001) * 15;
      
      ctx.beginPath();
      ctx.moveTo(0, height * 0.7 + Math.sin(time * 0.2) * 20);
      
      const cp1x = width * 0.25;
      const cp1y = height * 0.6 + Math.sin(time * 0.2 + 1) * 40 + scrollDistortion;
      const cp2x = width * 0.75;
      const cp2y = height * 0.8 + Math.sin(time * 0.2 + 2) * 40 - scrollDistortion;
      
      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, width, height * 0.75 + Math.sin(time * 0.2 + 3) * 20);
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      
      // Dynamic gradient
      const gradient = ctx.createLinearGradient(0, height * 0.7, width, height);
      const baseIntensity = 0.05;
      gradient.addColorStop(0, `rgba(34, 197, 94, ${baseIntensity})`);
      gradient.addColorStop(0.5, `rgba(74, 222, 128, ${baseIntensity + 0.02})`);
      gradient.addColorStop(1, `rgba(134, 239, 172, ${baseIntensity + 0.04})`);
      
      ctx.fillStyle = gradient;
      ctx.fill();
      
      // Enhanced accent line
      ctx.beginPath();
      ctx.moveTo(0, height * 0.7 + Math.sin(time * 0.2) * 20);
      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, width, height * 0.75 + Math.sin(time * 0.2 + 3) * 20);
      
      ctx.lineWidth = 1;
      ctx.strokeStyle = `rgba(34, 197, 94, 0.3)`;
      ctx.shadowColor = 'rgba(34, 197, 94, 0.5)';
      ctx.shadowBlur = 5;
      ctx.stroke();
      
      ctx.restore();
    };

    // Enhanced luxury lines
    const drawLuxuryLines = (ctx: CanvasRenderingContext2D, time: number) => {
      luxuryLinesRef.current.forEach((line, index) => {
        ctx.save();
        
        const alpha = Math.max(0.02, line.alpha * (0.8 + 0.2 * Math.sin(time * line.speed + index)));
        
        ctx.globalAlpha = alpha;
        ctx.lineWidth = line.width;
        ctx.strokeStyle = line.color;
        
        ctx.beginPath();
        ctx.moveTo(line.startX, line.startY);
        ctx.lineTo(line.endX, line.endY);
        ctx.stroke();
        
        ctx.restore();
      });
    };

    // Draw luxury gradient background
    const drawLuxuryBackground = (ctx: CanvasRenderingContext2D) => {
      ctx.save();
      
      // Dynamic background based on scroll
      const scrollEffect = Math.sin(scrollRef.current * 0.0005) * 0.02;
      
      const gradient = ctx.createRadialGradient(
        window.innerWidth * 0.5, window.innerHeight * 0.3, 0,
        window.innerWidth * 0.5, window.innerHeight * 0.3, window.innerWidth * 0.8
      );
      
      gradient.addColorStop(0, `rgba(255, 255, 255, ${1 - scrollEffect})`);
      gradient.addColorStop(0.7, `rgba(249, 250, 251, ${1 - scrollEffect * 0.5})`);
      gradient.addColorStop(1, `rgba(243, 244, 246, ${1 - scrollEffect * 0.3})`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      
      ctx.restore();
    };

    // Enhanced topographic pattern
    const drawTopographicPattern = (ctx: CanvasRenderingContext2D, time: number) => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const scale = Math.min(width, height) / 1000;
      
      ctx.save();
      ctx.globalAlpha = 0.04 + Math.sin(time * 0.1) * 0.01;
      ctx.strokeStyle = 'rgba(34, 197, 94, 0.8)';
      
      const lines = 20;
      const spacing = height / lines;
      
      for (let i = 0; i < lines; i++) {
        ctx.beginPath();
        
        for (let x = 0; x < width; x += 3) {
          const baseY = i * spacing;
          
          const noise = Math.sin((x / width) * Math.PI * 6 + time * 0.15) * 
                       Math.sin((i / lines) * Math.PI * 3 + time * 0.08) * 
                       spacing * 0.15;
          
          const y = baseY + noise;
          
          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        
        ctx.lineWidth = scale * 0.5;
        ctx.stroke();
      }
      
      ctx.restore();
    };

    // Main animation loop
    let lastTime = 0;
    const animate = (timestamp: number) => {
      const deltaTime = Math.min((timestamp - lastTime) / 1000, 0.016); // Cap at 60fps
      lastTime = timestamp;
      
      const time = timestamp * 0.001;
      timeRef.current = time;
      
      ctx.clearRect(0, 0, canvas.width / window.devicePixelRatio, canvas.height / window.devicePixelRatio);
      
      // Draw layers
      drawLuxuryBackground(ctx);
      drawTopographicPattern(ctx, time);
      drawLuxuryLines(ctx, time);
      drawLuxuryCurve(ctx, time);
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      window.removeEventListener('scroll', handleScroll);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-white">
      {/* High-resolution interactive canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 cursor-pointer"
        style={{ width: '100%', height: '100%' }}
      />
      
      {/* Enhanced texture overlay */}
      <div className="absolute inset-0 opacity-[0.015] mix-blend-overlay pointer-events-none" 
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 11c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9zm48 25c4.97 0 9-4.03 9-9s-4.03-9-9-9-9 4.03-9 9 4.03 9 9 9zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3z' fill='%2322c55e' fill-opacity='0.04' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Dynamic vignette */}
      <div className="absolute inset-0 pointer-events-none transition-opacity duration-1000" 
        style={{
          background: 'radial-gradient(circle at center, transparent 50%, rgba(0, 0, 0, 0.02) 80%, rgba(0, 0, 0, 0.05) 100%)',
        }}
      />
      
      {/* Interactive hint overlay */}
      <div className="absolute bottom-4 right-4 text-xs text-green-500/40 pointer-events-none font-mono">
        Interactive • Move • Click • Scroll
      </div>
    </div>
  );
};

export default TrillionDollarBackground; 