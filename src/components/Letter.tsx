import React from 'react';
import { motion, type Variants } from 'framer-motion';

interface LetterProps {
  isVisible: boolean;
}

export const Letter: React.FC<LetterProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.8
      }
    }
  };

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="w-full max-w-md mx-auto pt-20 pb-32 px-6 flex flex-col items-center justify-start min-h-[120vh]"
      initial="hidden"
      animate="visible"
      variants={letterVariants}
    >
      <div className="bg-[#fdfbf7] w-full p-8 md:p-10 rounded-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-gray-100 relative">
        {/* Soft paper texture effect via overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-20 pointer-events-none mix-blend-multiply rounded-lg"></div>
        
        <div className="relative z-10 font-poppins text-gray-700 leading-relaxed text-[15px] md:text-[16px] space-y-6">
          <motion.p variants={textVariants} className="font-semibold text-lg mb-8">
            Hey man,
          </motion.p>
          
          <motion.p variants={textVariants}>
            I know things have been a bit off between us lately,<br/>
            and maybe I messed up by not handling it right.
          </motion.p>
          
          <motion.p variants={textVariants}>
            But I never meant to disrespect you or let you down.
          </motion.p>
          
          <motion.p variants={textVariants}>
            If my actions made you feel ignored or unappreciated,<br/>
            I’m genuinely sorry.
          </motion.p>
          
          <motion.p variants={textVariants}>
            Our friendship means a lot to me,<br/>
            and I just needed to be upfront and tell you that.
          </motion.p>
          
          <motion.p variants={textVariants}>
            I don’t expect everything to go back to normal right away.<br/>
            I just wanted to own up to my part and clear the air.
          </motion.p>
        </div>
      </div>

      <motion.div 
        variants={textVariants}
        className="mt-16 text-center"
      >
        <p className="font-dancing text-gray-400 text-xl tracking-wider">
          Made with honesty.
        </p>
      </motion.div>
    </motion.div>
  );
};
