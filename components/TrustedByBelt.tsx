'use client'

import React, { useRef } from 'react';

const brands = [
  { name: '8WeeksOut', src: '/logos/8WeeksOut-Logo.webp' },
  { name: 'Orange Theory', src: '/logos/orangetheory.svg' },
  { name: 'Crunch Fitness', src: '/logos/crunch.svg' },
  { name: 'Wisconsin Athletic Club', src: '/logos/wac-logo.svg' },
  { name: 'Xponential', src: '/logos/xponential_black.webp' },
  { name: 'Golds Gym', src: '/logos/goldsgym.svg' },
  { name: 'Method Gym', src: '/logos/method-gym.png' },
  { name: 'Chelsea Piers', src: '/logos/chelsea piers.svg' },
  { name: 'Chuze Fitness', src: '/logos/Chuze.jpg' },
  { name: 'Burn Fitness', src: '/logos/burn-new-logo.svg' },
  { name: 'Fitness SF', src: '/logos/fitnessSF.svg' },
  { name: 'Healthworks', src: '/logos/healthworks.png' },
  // Duplicate some logos for seamless looping
  { name: '8WeeksOut', src: '/logos/8WeeksOut-Logo.webp' },
  { name: 'Orange Theory', src: '/logos/orangetheory.svg' },
  { name: 'Crunch Fitness', src: '/logos/crunch.svg' },
  { name: 'Wisconsin Athletic Club', src: '/logos/wac-logo.svg' },
  { name: 'Xponential', src: '/logos/xponential_black.webp' },
  { name: 'Golds Gym', src: '/logos/goldsgym.svg' },
];

// CSS for logo belt animation with better mobile support
const logoAnimationStyles = `
  @keyframes scrollBelt {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
  
  .logo-belt {
    animation: scrollBelt 35s linear infinite;
  }
  
  .logo-belt:hover {
    animation-play-state: paused;
  }
  
  @media (max-width: 768px) {
    .logo-belt {
      animation: scrollBelt 25s linear infinite;
    }
  }
`;

const TrustedByBelt = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full py-2 sm:py-4 md:py-6 overflow-hidden" ref={containerRef}>
      {/* Inject animation styles */}
      <style dangerouslySetInnerHTML={{ __html: logoAnimationStyles }} />
      
      <div className="w-full">
        {/* Logo belt container with better mobile support */}
        <div className="relative overflow-hidden py-2 sm:py-4 md:py-6 w-full">
          {/* Logos container with animation */}
          <div className="flex logo-belt">
            {brands.map((brand, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-center flex-shrink-0 mx-2 sm:mx-3 md:mx-5"
                style={{ minWidth: '80px' }}
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className={`h-5 sm:h-6 md:h-8 lg:h-10 object-contain opacity-80 hover:opacity-100 transition-all duration-300 max-w-full ${
                    brand.name === 'Golds Gym' ? 'golds-gym-logo' : ''
                  }`}
                  style={{ 
                    filter: brand.name === 'Golds Gym' ? 'sepia(1) saturate(3) hue-rotate(35deg) brightness(1.2) drop-shadow(1px 1px 0px black) drop-shadow(-1px -1px 0px black) drop-shadow(1px -1px 0px black) drop-shadow(-1px 1px 0px black)' : 'none',
                    transform: 'none'
                  }}
                  onError={(e) => {
                    // Fallback: hide broken images
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedByBelt;  