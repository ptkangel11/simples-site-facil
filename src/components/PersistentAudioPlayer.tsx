// src/components/PersistentAudioPlayer.tsx
import React, { useRef, useEffect, useState } from 'react';

interface PersistentAudioPlayerProps {
  src: string;
  volume?: number; // Volume inicial entre 0.0 e 1.0
}

const PersistentAudioPlayer: React.FC<PersistentAudioPlayerProps> = ({ 
  src, 
  volume = 0.3 // Volume padrão mais baixo para não assustar
}) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isActuallyPlaying, setIsActuallyPlaying] = useState(false); // Para saber se o play() foi bem-sucedido

  // Efeito para lidar com a primeira interação do utilizador
  useEffect(() => {
    const handleFirstInteraction = () => {
      // console.log("User interaction detected.");
      setHasInteracted(true);
      // Remove os listeners após a primeira interação para evitar múltiplas chamadas
      window.removeEventListener('click', handleFirstInteraction, { capture: true });
      window.removeEventListener('keydown', handleFirstInteraction, { capture: true });
      window.removeEventListener('touchstart', handleFirstInteraction, { capture: true });
    };

    // Adiciona listeners para vários tipos de interação, uma única vez
    window.addEventListener('click', handleFirstInteraction, { capture: true, once: true });
    window.addEventListener('keydown', handleFirstInteraction, { capture: true, once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { capture: true, once: true });

    // Cleanup: remove os listeners se o componente for desmontado antes da interação
    return () => {
      window.removeEventListener('click', handleFirstInteraction, { capture: true });
      window.removeEventListener('keydown', handleFirstInteraction, { capture: true });
      window.removeEventListener('touchstart', handleFirstInteraction, { capture: true });
    };
  }, []); // Executa apenas uma vez na montagem

  // Efeito para tentar tocar a música quando 'hasInteracted' se torna true
  useEffect(() => {
    if (hasInteracted && audioRef.current && !audioRef.current.currentTime) { // Tenta tocar apenas se não estiver já a tocar/iniciado
      // console.log("Attempting to play audio due to user interaction...");
      audioRef.current.volume = volume; // Define o volume inicial

      const playPromise = audioRef.current.play();

      if (playPromise !== undefined) {
        playPromise.then(() => {
          // console.log("Audio playback started successfully.");
          setIsActuallyPlaying(true);
        }).catch(error => {
          // O autoplay foi bloqueado ou ocorreu outro erro.
          // Em dispositivos móveis, isso é comum se a interação não foi "direta" o suficiente
          // ou se o navegador ainda bloqueia.
          console.warn("Audio autoplay was blocked or an error occurred:", error);
          setIsActuallyPlaying(false);
          // Infelizmente, sem um botão, o utilizador não pode tentar novamente.
        });
      }
    }
  }, [hasInteracted, volume]); // Reage à mudança de hasInteracted ou volume

  // Opcional: Log para saber se a música está realmente a tocar (para depuração)
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlaying = () => console.log("Event: Audio is playing");
    const handlePause = () => console.log("Event: Audio is paused");
    const handleEnded = () => console.log("Event: Audio ended");
    const handleError = (e: Event) => console.error("Event: Audio error", (e.target as HTMLAudioElement).error);


    audio.addEventListener('playing', handlePlaying);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);


    return () => {
      audio.removeEventListener('playing', handlePlaying);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, []);


  return (
    // O elemento de áudio está aqui, mas sem controles visíveis.
    // O atributo 'autoPlay' por si só é frequentemente ignorado pelos navegadores para áudio com som.
    // 'preload="auto"' sugere ao navegador para carregar o áudio.
    <div>
      <audio ref={audioRef} src={src} loop preload="auto" />
    </div>
  );
};

export default PersistentAudioPlayer;
