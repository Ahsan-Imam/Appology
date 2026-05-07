import React, { useState, useEffect } from 'react';
import { Background } from './components/Background';
import { LandingScreen } from './components/LandingScreen';
import { Letter } from './components/Letter';
import { AudioPlayer } from './components/AudioPlayer';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // After the envelope opening animation finishes (approx 1.5s), show the letter
    setTimeout(() => {
      setShowLetter(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden selection:bg-pink-100 selection:text-pink-900 font-poppins">
      <Background isBlurred={isOpen} />
      
      {!showLetter && (
        <LandingScreen isOpen={isOpen} onOpen={handleOpen} />
      )}
      
      <Letter isVisible={showLetter} />
      
      <AudioPlayer shouldPlay={isOpen} />
    </div>
  );
}

export default App;
