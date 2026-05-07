import React from 'react';
import { motion } from 'framer-motion';

interface EnvelopeProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const Envelope: React.FC<EnvelopeProps> = ({ isOpen, onOpen }) => {
  return (
    <div 
      className="relative w-64 h-48 cursor-pointer group mb-10"
      onClick={onOpen}
    >
      {/* Envelope Back */}
      <div className="absolute inset-0 bg-[#e0d5c1] rounded-lg shadow-md" />
      
      {/* Letter peeking out */}
      <motion.div 
        className="absolute bottom-2 left-2 right-2 bg-white rounded-md shadow-sm border border-gray-100 flex flex-col items-center pt-4"
        initial={{ height: "90%", y: 0 }}
        animate={{ 
          height: isOpen ? "150%" : "90%",
          y: isOpen ? -80 : 0,
          opacity: isOpen ? 0 : 1
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="w-3/4 h-2 bg-gray-100 rounded-full mb-2"></div>
        <div className="w-1/2 h-2 bg-gray-100 rounded-full"></div>
      </motion.div>

      {/* Envelope Flap (Top) */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-1/2 origin-top z-20"
        initial={{ rotateX: 0 }}
        animate={{ rotateX: isOpen ? 180 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Flap Outside */}
        <div 
          className="absolute inset-0 z-20"
          style={{
            clipPath: "polygon(0 0, 50% 100%, 100% 0)",
            backgroundColor: "#f2e8d5",
            backfaceVisibility: "hidden"
          }}
        >
           {/* Wax Seal */}
          <motion.div 
            className="absolute left-1/2 top-[80%] -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-red-800 rounded-full shadow-sm flex items-center justify-center z-30"
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-8 h-8 rounded-full border border-red-900/30 flex items-center justify-center">
              <span className="text-red-900/50 text-xs font-serif italic">A</span>
            </div>
          </motion.div>
        </div>
        {/* Flap Inside */}
        <div 
          className="absolute inset-0 z-10"
          style={{
            clipPath: "polygon(0 0, 50% 100%, 100% 0)",
            backgroundColor: "#d1c6b1",
            transform: "rotateX(180deg)",
            backfaceVisibility: "hidden"
          }}
        />
      </motion.div>

      {/* Envelope Front Left */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          clipPath: "polygon(0 0, 0 100%, 50% 50%)",
          backgroundColor: "#ebdfcc",
        }}
      />

      {/* Envelope Front Right */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          clipPath: "polygon(100% 0, 50% 50%, 100% 100%)",
          backgroundColor: "#e6d9c5",
        }}
      />

      {/* Envelope Front Bottom */}
      <div 
        className="absolute inset-0 z-10"
        style={{
          clipPath: "polygon(0 100%, 50% 50%, 100% 100%)",
          backgroundColor: "#f5ebda",
        }}
      />
    </div>
  );
};
