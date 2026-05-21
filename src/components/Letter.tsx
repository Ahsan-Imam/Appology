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
            HEY AAYESHA,
          </motion.p>

          <motion.p variants={textVariants}>
            I owe you a real apology — not just a quick "sorry",<br />
            but a proper one, from the heart.
          </motion.p>

          <motion.p variants={textVariants}>
            I apologise for hurting you by asking that question.<br />
            I didn't realise how much it would affect you,<br />
            and that's on me.
          </motion.p>

          <motion.p variants={textVariants}>
            I should have thought before I spoke,<br />
            and I genuinely regret that I made you feel that way.<br />
            last worst thing i will do to hurt anyone.
          </motion.p>

          <motion.p variants={textVariants}>
            Please accept my apology.<br />
            I truly am sorry, and I hope you can <br />
             pardon me.
          </motion.p>
        </div>
      </div>

      <motion.div
        variants={textVariants}
        className="mt-16 text-center"
      >
        <p className="font-dancing text-gray-400 text-xl tracking-wider">
          Written with a sorry heart.
        </p>
      </motion.div>
    </motion.div>
  );
};
