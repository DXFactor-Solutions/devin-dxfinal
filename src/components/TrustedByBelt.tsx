import React, { useRef } from 'react';

const brands = [
  { name: 'Lifetime Fitness', src: '/logos/lifetime.png' },
  { name: 'Orange Theory', src: '/logos/orangetheory.png' },
  { name: 'Crunch Fitness', src: '/logos/crunch.png' },
  { name: 'Wisconsin Athletic Club', src: '/logos/wac.png' },
  { name: 'XSport Fitness', src: '/logos/xsport.png' },
  { name: 'Golds Gym', src: '/logos/Golds-Gym.webp' },
  { name: 'Method Gym', src: '/logos/method.png' },
  { name: 'Chelsea Piers', src: '/logos/Chelsea-Piers-fitness.svg' },
  { name: 'Chuze Fitness', src: '/logos/chuze_logo.webp' },
  { name: 'Burn Fitness', src: '/logos/burn-new-logo.svg' },
  // Duplicate some logos for seamless looping
  { name: 'Lifetime Fitness', src: '/logos/lifetime.png' },
  { name: 'Orange Theory', src: '/logos/orangetheory.png' },
  { name: 'Crunch Fitness', src: '/logos/crunch.png' },
  { name: 'Wisconsin Athletic Club', src: '/logos/wac.png' },
  { name: 'XSport Fitness', src: '/logos/xsport.png' },
  { name: 'Golds Gym', src: '/logos/Golds-Gym.webp' },
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
      
      <div className="w-full max-w-7xl mx-auto px-2 sm:px-4">
        {/* Logo belt container with better mobile support */}
        <div className="relative overflow-hidden py-2 sm:py-4 md:py-6 w-full bg-white/90 backdrop-blur-sm rounded-lg sm:rounded-xl md:rounded-2xl border border-gray-200 shadow-sm">
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
                  className="h-5 sm:h-6 md:h-8 lg:h-10 object-contain opacity-80 hover:opacity-100 transition-all duration-300 max-w-full"
                  style={{ filter: 'none' }}
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