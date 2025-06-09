"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
    // More balanced path creation with improved spacing
    const paths = Array.from({ length: 40 }, (_, i) => {
        const pathIndex = i / 40; // Normalized index for smoother distribution
        
        // Create more balanced curve parameters
        const startY = -180 + i * 5;
        const controlY1 = startY + (200 * pathIndex);
        const controlY2 = startY + (400 * pathIndex);
        const endY = startY + (450 * pathIndex);
        
        // Adjust position factor to create more balanced spacing
        const xOffset = 250 * position * (0.7 + pathIndex * 0.3);
        
        // Smoother path construction
        return {
            id: i,
            d: `M${-350 + xOffset} ${startY} 
                C${-280 + xOffset} ${controlY1} 
                ${0 + xOffset} ${controlY2} 
                ${350 + xOffset} ${endY}`,
            color: i % 3 === 0 ? "#22c55e" : i % 3 === 1 ? "#10b981" : "#34d399", // Different shades of green
            width: 0.6 + i * 0.03, // Slightly thicker lines for visibility
            opacity: 0.2 + (i / 40) * 0.4, // Increased opacity for better visibility
        };
    });

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 800 600"
                preserveAspectRatio="xMidYMid slice"
                fill="none"
            >
                <title>Green Flowing Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke={path.color}
                        strokeWidth={path.width}
                        strokeOpacity={path.opacity}
                        initial={{ pathLength: 0, opacity: 0.3 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, path.opacity, 0.3],
                            pathOffset: [0, 1],
                        }}
                        transition={{
                            duration: 15 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                            delay: path.id * 0.05, // Staggered animation starts
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths() {
    return (
        <div className="absolute inset-0 overflow-hidden bg-gray-50">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>
        </div>
    );
} 