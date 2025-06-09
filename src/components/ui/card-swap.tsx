'use client';

import React, {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
  ReactNode,
  HTMLAttributes,
  useState,
} from 'react';
import gsap from 'gsap';

// --- Type Definitions ---

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface CardSwapProps {
  children: ReactNode;
  width?: number;
  height?: number;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (index: number) => void;
  skewAmount?: number;
  easing?: 'elastic' | 'power';
}

interface Slot {
  x: number;
  y: number;
  z: number;
  zIndex: number;
}

// --- Helper Functions ---

const makeSlot = (
  i: number,
  distX: number,
  distY: number,
  total: number,
): Slot => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (el: HTMLDivElement, slot: Slot, skew: number): void => {
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: 'center center',
    zIndex: slot.zIndex,
    force3D: true,
  });
};

// --- Child Component: Card ---

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      className={`absolute top-1/2 left-1/2 rounded-xl border p-6 
      bg-white text-gray-800 border-gray-200
      shadow-md hover:shadow-lg
      [transform-style:preserve-3d] [will-change:transform] [backface-visibility:hidden]
      transition-colors duration-300 ${className ?? ''}`.trim()}
    />
  ),
);
Card.displayName = 'Card';

// --- Main Component: CardSwap ---

const CardSwap = ({
  width = 500,
  height = 400,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = false,
  onCardClick,
  skewAmount = 6,
  easing = 'elastic',
  children,
}: CardSwapProps) => {
  const config = useMemo(
    () =>
      easing === 'elastic'
        ? {
            ease: 'elastic.out(0.6,0.9)',
            durDrop: 2,
            durMove: 2,
            durReturn: 2,
            promoteOverlap: 0.9,
            returnDelay: 0.05,
          }
        : {
            ease: 'power1.inOut',
            durDrop: 0.8,
            durMove: 0.8,
            durReturn: 0.8,
            promoteOverlap: 0.45,
            returnDelay: 0.2,
          },
    [easing],
  );

  const childArr = useMemo(() => Children.toArray(children), [children]);
  const refs = useMemo(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    [childArr.length],
  );
  const order = useRef<number[]>(
    Array.from({ length: childArr.length }, (_, i) => i),
  );
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<number>();
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Arrange all cards in their slots
  const arrangeCards = () => {
    const total = refs.length;
    refs.forEach((r, i) => {
      if (r.current) {
        // Find this card's position in the order array
        const orderIndex = order.current.findIndex(index => index === i);
        placeNow(
          r.current,
          makeSlot(orderIndex, cardDistance, verticalDistance, total),
          skewAmount,
        );
      }
    });
  };

  // Move a card to the front
  const moveCardToFront = (cardIndex: number) => {
    // If the card is already at the front, do nothing
    if (order.current[0] === cardIndex) return;

    // Find where this card is in the current order
    const cardPosition = order.current.findIndex(idx => idx === cardIndex);
    if (cardPosition === -1) return;

    // Remove the card from its current position
    const newOrder = [...order.current];
    newOrder.splice(cardPosition, 1);
    // Place it at the front
    newOrder.unshift(cardIndex);
    
    // Update the order and rearrange cards
    order.current = newOrder;
    
    // Animate the transitions
    const total = refs.length;
    const tl = gsap.timeline();
    
    // Animate all cards to their new positions
    newOrder.forEach((idx, position) => {
      const el = refs[idx].current;
      if (!el) return;
      
      const slot = makeSlot(position, cardDistance, verticalDistance, total);
      tl.to(
        el,
        {
          x: slot.x,
          y: slot.y,
          z: slot.z,
          zIndex: slot.zIndex,
          duration: 0.8,
          ease: config.ease,
        },
        position === 0 ? 0 : `<${position * 0.1}`,
      );
    });
  };

  useEffect(() => {
    // Initial card arrangement
    arrangeCards();

    // Auto-rotation if delay is set
    if (delay > 0) {
      const rotate = () => {
        if (order.current.length < 2) return;
        const [front, ...rest] = order.current;
        order.current = [...rest, front];
        arrangeCards();
      };

      intervalRef.current = window.setInterval(rotate, delay);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [cardDistance, verticalDistance, skewAmount, delay, refs]);

  // Handle hover effects
  const handleMouseEnter = (index: number) => {
    setHoveredCard(index);
    if (delay === 0) { // Only move on hover if auto-rotation is disabled
      // Find position in order
      const position = order.current.findIndex(idx => idx === index);
      if (position > 0) { // If not already at front
        const el = refs[index].current;
        if (el) {
          // Slightly lift the card
          gsap.to(el, {
            y: `-=${20}`,
            z: '+=30',
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      }
    }
  };

  const handleMouseLeave = (index: number) => {
    setHoveredCard(null);
    if (delay === 0) { // Only reset on leave if auto-rotation is disabled
      // Find position in order
      const position = order.current.findIndex(idx => idx === index);
      if (position > 0) { // If not already at front
        const el = refs[index].current;
        if (el) {
          // Return to original position
          const slot = makeSlot(position, cardDistance, verticalDistance, refs.length);
          gsap.to(el, {
            y: slot.y,
            z: slot.z,
            duration: 0.3,
            ease: 'power2.out'
          });
        }
      }
    }
  };

  // Handle click to bring card to front
  const handleCardClick = (index: number, e: React.MouseEvent) => {
    // If card is already at front, trigger the original onClick if provided
    if (order.current[0] === index) {
      onCardClick?.(index);
      return;
    }
    
    // Move this card to the front
    moveCardToFront(index);
    
    // Also trigger the original onClick if provided
    onCardClick?.(index);
  };

  const renderedChildren = childArr.map((child, i) =>
    isValidElement(child)
      ? cloneElement(child as React.ReactElement, {
          key: i,
          ref: refs[i],
          style: { width, height, ...(child.props.style ?? {}) },
          onMouseEnter: () => handleMouseEnter(i),
          onMouseLeave: () => handleMouseLeave(i),
          onClick: (e: React.MouseEvent) => {
            handleCardClick(i, e);
            child.props.onClick?.(e);
          },
        })
      : child,
  );

  return (
    <div
      ref={containerRef}
      className="absolute left-1/2 top-1/2 origin-center perspective-[900px] overflow-visible 
      transform -translate-x-1/2 -translate-y-1/2
      max-[768px]:scale-[0.8] 
      max-[480px]:scale-[0.6]"
      style={{ width, height }}
    >
      {renderedChildren}
    </div>
  );
};

export default CardSwap;