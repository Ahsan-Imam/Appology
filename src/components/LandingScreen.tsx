import React from 'react';
import { motion } from 'framer-motion';
import { Envelope } from './Envelope';

interface LandingScreenProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const LandingScreen: React.FC<LandingScreenProps> = ({ isOpen, onOpen }) => {
  return (
    <motion.div 
      className="absolute inset-0 flex flex-col items-center justify-center px-6"
      animate={{ 
        opacity: isOpen ? 0 : 1,
        y: isOpen ? -50 : 0
      }}
      transition={{ duration: 1, delay: isOpen ? 1.5 : 0 }} // Delay fade out until envelope animation finishes
      style={{ pointerEvents: isOpen ? 'none' : 'auto' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="font-playfair text-3xl md:text-4xl font-semibold text-gray-800 mb-4 tracking-wide">
          A letter I should’ve said earlier.
        </h1>
        <p className="font-poppins text-gray-500 text-sm md:text-base italic">
          "Some feelings are easier written than spoken."
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <Envelope isOpen={isOpen} onOpen={onOpen} />
      </motion.div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
        onClick={onOpen}
        className="mt-8 px-8 py-3 bg-white/50 backdrop-blur-sm border border-white/40 rounded-full shadow-sm text-gray-600 font-poppins text-sm tracking-widest uppercase hover:bg-white/70 active:scale-95 transition-all"
      >
        Tap to Open
      </motion.button>
    </motion.div>
  );
};
