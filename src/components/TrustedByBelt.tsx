import React, { useRef } from 'react';

const brands = [
  { name: 'Lifetime Fitness', src: '/logos/lifetime.png' },
  { name: 'Orange Theory', src: '/logos/orangetheory.png' },
  { name: 'Crunch Fitness', src: '/logos/chrunch.webp' },
  { name: 'Wisconsin Athletic Club', src: '/logos/wac.png' },
  { name: 'XSport Fitness', src: '/logos/xsport.png' },
  { name: 'Golds Gym', src: '/logos/Golds-Gym.webp' },
  { name: 'Method Gym', src: '/logos/method-gym-logo-blk.png' },
  { name: 'Chelsea Piers', src: '/logos/Chelsea-Piers-fitness.svg' },
  { name: 'Fitness SF', src: '/logos/fitness-sf-logo.svg' },
  { name: 'Chuze Fitness', src: '/logos/chuze_logo.webp' },
  { name: 'Exponential', src: '/logos/exponential.webp' },
  { name: 'Burn Fitness', src: '/logos/burn-new-logo.svg' },
  // Duplicate some logos for seamless looping
  { name: 'Lifetime Fitness', src: '/logos/lifetime.png' },
  { name: 'Orange Theory', src: '/logos/orangetheory.png' },
  { name: 'Crunch Fitness', src: '/logos/chrunch.webp' },
  { name: 'Wisconsin Athletic Club', src: '/logos/wac.png' },
];

// CSS for logo belt animation
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
`;

const TrustedByBelt = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-screen left-1/2 transform -translate-x-1/2 py-6 overflow-hidden" ref={containerRef}>
      {/* Inject animation styles */}
      <style dangerouslySetInnerHTML={{ __html: logoAnimationStyles }} />
      
      <div className="w-full">
        {/* Logo belt container - true full screen width with white background */}
        <div className="relative overflow-hidden py-6 w-full bg-white/90 backdrop-blur-sm rounded-2xl border border-gray-200 shadow-sm">
          {/* Logos container with animation */}
          <div className="flex logo-belt">
            {brands.map((brand, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-center flex-shrink-0 mx-3 md:mx-5"
                style={{ minWidth: '120px' }}
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className="h-8 md:h-10 object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                  style={{ filter: 'none' }}
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