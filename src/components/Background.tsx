import React from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  size: number;
  x: number;
  y: number;
  duration: number;
  delay: number;
  animX: number[];
}

const INITIAL_PARTICLES: Particle[] = Array.from({ length: 30 }).map((_, i) => ({
  id: i,
  size: Math.random() * 6 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 20 + 10,
  delay: Math.random() * 5,
  animX: [0, Math.random() * 50 - 25, Math.random() * 50 - 25]
}));

export const Background: React.FC<{ isBlurred?: boolean }> = ({ isBlurred = false }) => {
  return (
    <div
      className={`fixed inset-0 pointer-events-none transition-all duration-1000 z-[-1] overflow-hidden bg-gradient-to-br from-warm-white via-cream to-soft-blush ${
        isBlurred ? 'blur-md opacity-80' : 'blur-0 opacity-100'
      }`}
    >
      {INITIAL_PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.8)]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}vw`,
            top: `${p.y}vh`,
          }}
          animate={{
            y: [0, -100, -200],
            x: p.animX,
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-t from-lavender/10 to-transparent mix-blend-overlay"></div>
    </div>
  );
};
