// src/components/PersistentAudioPlayer.tsx
import React, { useRef, useEffect, useState } from 'react';

interface PersistentAudioPlayerProps {
  src: string;
}

const PersistentAudioPlayer: React.FC<PersistentAudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showButton, setShowButton] = useState(false); // Para mostrar o botão após um pequeno atraso

  // Lidar com a primeira interação do utilizador para permitir o autoplay
  useEffect(() => {
    const handleFirstInteraction = () => {
      setHasInteracted(true);
      // Apenas para garantir que o botão apareça se a interação for muito rápida
      setTimeout(() => setShowButton(true), 100); 
      window.removeEventListener('click', handleFirstInteraction, { capture: true });
      window.removeEventListener('keydown', handleFirstInteraction, { capture: true });
      window.removeEventListener('touchstart', handleFirstInteraction, { capture: true });
    };

    // Adiciona listeners para vários tipos de interação
    window.addEventListener('click', handleFirstInteraction, { capture: true, once: true });
    window.addEventListener('keydown', handleFirstInteraction, { capture: true, once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { capture: true, once: true });
    
    // Um pequeno atraso para mostrar o botão mesmo que não haja interação imediata,
    // mas o autoplay só funcionará após a interação.
    const timer = setTimeout(() => {
        setShowButton(true);
    }, 1500); // Mostra o botão após 1.5 segundos

    return () => {
      clearTimeout(timer);
      // Remove os listeners se o componente for desmontado antes da interação
      window.removeEventListener('click', handleFirstInteraction, { capture: true });
      window.removeEventListener('keydown', handleFirstInteraction, { capture: true });
      window.removeEventListener('touchstart', handleFirstInteraction, { capture: true });
    };
  }, []);

  // Tenta tocar a música quando 'hasInteracted' se torna true
  useEffect(() => {
    if (hasInteracted && audioRef.current) {
      // Define o volume antes de tocar (opcional, mas bom para não assustar o utilizador)
      audioRef.current.volume = 0.5; // Exemplo: 50% do volume
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.warn("Autoplay da música foi bloqueado ou ocorreu um erro:", error);
        // O utilizador precisará clicar no botão de play manualmente
        setIsPlaying(false);
      });
    }
  }, [hasInteracted]);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    // Se não houve interação, esta ação conta como a primeira
    if (!hasInteracted) {
        setHasInteracted(true);
        // Se o estado hasInteracted for definido aqui, o useEffect acima tentará dar play.
        // Portanto, precisamos controlar o estado isPlaying com base na ação do botão.
        if (!isPlaying) {
            audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.warn(e));
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    } else {
        // Interação já ocorreu, apenas alterna o play/pause
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.warn("Erro ao tocar áudio:", e));
        }
        setIsPlaying(!isPlaying);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: 10001 }}> {/* Aumentado z-index */}
      <audio ref={audioRef} src={src} loop preload="auto" />
      {showButton && ( // Mostra o botão após o atraso ou primeira interação
        <button
          onClick={togglePlayPause}
          className="bg-gray-800 hover:bg-gray-700 text-white font-bold p-3 rounded-full shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-all duration-150 ease-in-out"
          aria-label={isPlaying ? "Pausar música" : "Tocar música"}
          title={isPlaying ? "Pausar música" : "Tocar música"}
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
