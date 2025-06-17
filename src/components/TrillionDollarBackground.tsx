import React, { useEffect, useRef } from 'react';

const TrillionDollarBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create refined particles
    const createParticles = () => {
      const particlesContainer = containerRef.current?.querySelector('#particles');
      if (!particlesContainer) return;
      
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 15 + 's';
        particle.style.animationDuration = (10 + Math.random() * 10) + 's';
        
        // Vary particle sizes slightly
        const size = 2 + Math.random() * 3;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        
        particlesContainer.appendChild(particle);
      }
    };

    // Smooth parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * -0.3;
      
      const gradient = containerRef.current?.querySelector('.gradient-bg') as HTMLElement;
      const grid = containerRef.current?.querySelector('.grid-overlay') as HTMLElement;
      const blobs = containerRef.current?.querySelectorAll('.blob') as NodeListOf<HTMLElement>;
      
      if (gradient) gradient.style.transform = `translateY(${rate}px)`;
      if (grid) grid.style.transform = `translate(${rate * 0.1}px, ${rate * 0.1}px)`;
      
      blobs.forEach((blob, index) => {
        const speed = 0.2 + (index * 0.1);
        blob.style.transform = `translateY(${rate * speed}px)`;
      });
    };

    // Enhanced mouse interaction
    const handleMouseMove = (e: MouseEvent) => {
      const cursor = { x: e.clientX, y: e.clientY };
      const shapes = containerRef.current?.querySelectorAll('.shape') as NodeListOf<HTMLElement>;
      const glowAreas = containerRef.current?.querySelectorAll('.glow-area') as NodeListOf<HTMLElement>;
      
      shapes.forEach((shape) => {
        const rect = shape.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const distance = Math.sqrt(
          Math.pow(cursor.x - centerX, 2) + 
          Math.pow(cursor.y - centerY, 2)
        );
        
        if (distance < 300) {
          const intensity = (300 - distance) / 300;
          const moveX = (cursor.x - centerX) * intensity * 0.1;
          const moveY = (cursor.y - centerY) * intensity * 0.1;
          
          shape.style.transform = `translate(${moveX}px, ${moveY}px) scale(${1 + intensity * 0.1})`;
          shape.style.boxShadow = `0 ${intensity * 20}px ${intensity * 40}px rgba(123,201,110,${intensity * 0.3})`;
        } else {
          shape.style.transform = 'translate(0px, 0px) scale(1)';
          shape.style.boxShadow = '0 8px 32px rgba(123,201,110,0.1)';
        }
      });
      
      // Interactive glow areas
      glowAreas.forEach(glow => {
        const rect = glow.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const distance = Math.sqrt(
          Math.pow(cursor.x - centerX, 2) + 
          Math.pow(cursor.y - centerY, 2)
        );
        
        if (distance < 200) {
          const intensity = (200 - distance) / 200;
          glow.style.opacity = String(0.3 + (intensity * 0.5));
          glow.style.transform = `scale(${1 + intensity * 0.3})`;
        }
      });
    };

    // Initialize
    createParticles();
    
    // Add event listeners
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousemove', handleMouseMove);

    // Add some random movement to particles
    const particleInterval = setInterval(() => {
      const particles = containerRef.current?.querySelectorAll('.particle') as NodeListOf<HTMLElement>;
      particles.forEach(particle => {
        if (Math.random() > 0.95) {
          particle.style.animationDuration = (8 + Math.random() * 12) + 's';
        }
      });
    }, 3000);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(particleInterval);
    };
  }, []);

  const styles = `
    .hero-container {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    /* Clean gradient background */
    .gradient-bg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        135deg,
        #f8fffe 0%,
        #f0fdf4 20%,
        #e8f5e8 40%,
        #d1f2d1 60%,
        #bbf7d0 80%,
        #a7f3d0 100%
      );
    }

    /* Floating geometric shapes */
    .floating-shapes {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }

    .shape {
      position: absolute;
      border-radius: 50%;
      background: linear-gradient(45deg, rgba(123,201,110,0.15), rgba(168,230,163,0.25));
      animation: float 20s ease-in-out infinite;
      backdrop-filter: blur(20px);
      border: 1px solid rgba(123,201,110,0.2);
      box-shadow: 0 8px 32px rgba(123,201,110,0.1);
    }

    .shape:nth-child(1) {
      width: 400px;
      height: 400px;
      top: 5%;
      left: 10%;
      animation-delay: 0s;
      animation-duration: 25s;
    }

    .shape:nth-child(2) {
      width: 200px;
      height: 200px;
      top: 50%;
      right: 15%;
      animation-delay: 8s;
      animation-duration: 30s;
    }

    .shape:nth-child(3) {
      width: 300px;
      height: 300px;
      bottom: 15%;
      left: 20%;
      animation-delay: 16s;
      animation-duration: 22s;
    }

    .shape:nth-child(4) {
      width: 150px;
      height: 150px;
      top: 20%;
      right: 30%;
      animation-delay: 24s;
      animation-duration: 28s;
    }

    .shape:nth-child(5) {
      width: 250px;
      height: 250px;
      top: 70%;
      left: 60%;
      animation-delay: 12s;
      animation-duration: 26s;
    }

    @keyframes float {
      0%, 100% { 
        transform: translateY(0px) translateX(0px) scale(1);
        opacity: 0.6;
      }
      25% { 
        transform: translateY(-30px) translateX(20px) scale(1.05);
        opacity: 0.8;
      }
      50% { 
        transform: translateY(-20px) translateX(-15px) scale(0.95);
        opacity: 1;
      }
      75% { 
        transform: translateY(10px) translateX(25px) scale(1.02);
        opacity: 0.7;
      }
    }

    /* Refined particle system */
    .particles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;
    }

    .particle {
      position: absolute;
      width: 3px;
      height: 3px;
      background: rgba(123,201,110,0.6);
      border-radius: 50%;
      animation: particleFloat 15s linear infinite;
      box-shadow: 0 0 6px rgba(123,201,110,0.4);
    }

    @keyframes particleFloat {
      0% {
        transform: translateY(110vh) translateX(0px);
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        transform: translateY(-10vh) translateX(200px);
        opacity: 0;
      }
    }

    /* Subtle grid pattern */
    .grid-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        linear-gradient(rgba(123,201,110,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(123,201,110,0.03) 1px, transparent 1px);
      background-size: 100px 100px;
      animation: gridShift 30s ease-in-out infinite;
    }

    @keyframes gridShift {
      0%, 100% { 
        transform: translate(0, 0);
        opacity: 0.5;
      }
      50% { 
        transform: translate(20px, 20px);
        opacity: 0.8;
      }
    }

    /* Organic blob shapes */
    .blob {
      position: absolute;
      border-radius: 50%;
      background: linear-gradient(45deg, rgba(168,230,163,0.2), rgba(187,247,208,0.3));
      filter: blur(40px);
      animation: blobMove 25s ease-in-out infinite;
    }

    .blob:nth-child(1) {
      width: 500px;
      height: 300px;
      top: 10%;
      right: 20%;
      animation-delay: 0s;
    }

    .blob:nth-child(2) {
      width: 400px;
      height: 400px;
      bottom: 20%;
      left: 10%;
      animation-delay: 10s;
    }

    .blob:nth-child(3) {
      width: 300px;
      height: 200px;
      top: 60%;
      right: 40%;
      animation-delay: 20s;
    }

    @keyframes blobMove {
      0%, 100% { 
        transform: translate(0, 0) rotate(0deg) scale(1);
      }
      33% { 
        transform: translate(50px, -30px) rotate(120deg) scale(1.1);
      }
      66% { 
        transform: translate(-30px, 40px) rotate(240deg) scale(0.9);
      }
    }

    /* Subtle wave animation */
    .wave-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent 0%,
        rgba(123,201,110,0.05) 25%,
        rgba(168,230,163,0.08) 50%,
        rgba(123,201,110,0.05) 75%,
        transparent 100%
      );
      animation: waveMove 20s ease-in-out infinite;
      transform: skewY(-3deg);
    }

    @keyframes waveMove {
      0%, 100% { 
        transform: translateX(-100%) skewY(-3deg);
      }
      50% { 
        transform: translateX(100%) skewY(3deg);
      }
    }

    /* Interactive glow areas */
    .glow-area {
      position: absolute;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(123,201,110,0.1) 0%, transparent 70%);
      pointer-events: none;
      transition: all 0.3s ease;
    }

    .glow-area-1 {
      width: 300px;
      height: 300px;
      top: 25%;
      left: 25%;
      animation: pulse 8s ease-in-out infinite;
    }

    .glow-area-2 {
      width: 200px;
      height: 200px;
      bottom: 30%;
      right: 25%;
      animation: pulse 10s ease-in-out infinite;
      animation-delay: 4s;
    }

    @keyframes pulse {
      0%, 100% { 
        opacity: 0.3;
        transform: scale(1);
      }
      50% { 
        opacity: 0.7;
        transform: scale(1.2);
      }
    }
  `;

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: '#f8fffe' }} ref={containerRef}>
      <style>{styles}</style>
      <div className="hero-container">
        {/* Clean gradient background */}
        <div className="gradient-bg"></div>
        
        {/* Grid overlay */}
        <div className="grid-overlay"></div>
        
        {/* Organic blob shapes */}
        <div className="blob"></div>
        <div className="blob"></div>
        <div className="blob"></div>
        
        {/* Wave overlay */}
        <div className="wave-overlay"></div>
        
        {/* Floating shapes */}
        <div className="floating-shapes">
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
          <div className="shape"></div>
        </div>
        
        {/* Glow areas */}
        <div className="glow-area glow-area-1"></div>
        <div className="glow-area glow-area-2"></div>
        
        {/* Particles */}
        <div className="particles" id="particles"></div>
      </div>
    </div>
  );
};

export default TrillionDollarBackground;