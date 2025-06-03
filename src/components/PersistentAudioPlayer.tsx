// src/components/PersistentAudioPlayer.tsx
import React, { useRef, useEffect, useState } from 'react';

interface PersistentAudioPlayerProps {
  src: string; // Caminho para o arquivo de música
}

const PersistentAudioPlayer: React.FC<PersistentAudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false); // Para autoplay com interação

  // Tenta tocar a música após a primeira interação do usuário em qualquer lugar da página
  useEffect(() => {
    const handleFirstInteraction = () => {
      setHasInteracted(true);
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };

    window.addEventListener('click', handleFirstInteraction);
    window.addEventListener('keydown', handleFirstInteraction);

    return () => {
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('keydown', handleFirstInteraction);
    };
  }, []);

  useEffect(() => {
    if (hasInteracted && audioRef.current) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        // Autoplay bloqueado ou outro erro
        console.warn("Autoplay foi bloqueado ou ocorreu um erro:", error);
        setIsPlaying(false);
      });
    }
  }, [hasInteracted]); // Tenta tocar quando hasInteracted muda para true

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => console.warn("Erro ao tocar áudio:", error));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '10px', left: '10px', zIndex: 1000 }}> {/* Estilo simples para o botão */}
      <audio ref={audioRef} src={src} loop />
      {hasInteracted && ( // Só mostra o botão depois da primeira interação
        <button
          onClick={togglePlayPause}
          className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-colors duration-300"
          aria-label={isPlaying ? "Pausar música" : "Tocar música"}
        >
          {isPlaying ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
};

export default PersistentAudioPlayer;