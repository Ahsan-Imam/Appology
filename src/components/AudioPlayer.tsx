import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

interface AudioPlayerProps {
  shouldPlay: boolean;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ shouldPlay }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    if (shouldPlay && audioRef.current) {
      audioRef.current.volume = 0.3; // Soft background volume
      audioRef.current.play().catch((err) => {
        console.log("Audio autoplay was prevented:", err);
      });
    }
  }, [shouldPlay]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      <audio 
        ref={audioRef} 
        src="https://cdn.pixabay.com/download/audio/2022/10/25/audio_51d5306db3.mp3?filename=soft-piano-113119.mp3" 
        loop 
        preload="auto"
      />
      {shouldPlay && (
        <button
          onClick={toggleMute}
          className="fixed bottom-6 right-6 z-50 p-3 bg-white/50 backdrop-blur-md border border-white/40 rounded-full shadow-lg text-gray-500 hover:text-gray-700 transition-colors"
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
        >
          {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
        </button>
      )}
    </>
  );
};
