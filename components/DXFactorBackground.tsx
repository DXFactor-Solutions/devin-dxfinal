import React from 'react';

const DXFactorBackground = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100" />
      
      {/* Radial gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-50/30 to-transparent" />
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(16, 185, 129, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(16, 185, 129, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      {/* Glowing orbs for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-3/4 left-3/4 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Subtle noise texture */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.5'/%3E%3C/svg%3E")`
        }}
      />
      
      {/* Subtle geometric shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border-2 border-emerald-200/30 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
      <div className="absolute bottom-20 left-20 w-24 h-24 border-2 border-emerald-200/30 rounded-lg rotate-45 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
      
      {/* Animated gradient border at the top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent animate-pulse" />
    </div>
  );
};

export default DXFactorBackground; 