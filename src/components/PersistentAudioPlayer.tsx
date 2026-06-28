// src/components/PersistentAudioPlayer.tsx
import React, { useRef, useEffect, useState } from 'react';

interface PersistentAudioPlayerProps {
  src: string;
}

const PersistentAudioPlayer: React.FC<PersistentAudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Lidar com a primeira interação do utilizador para permitir o autoplay
  useEffect(() => {
    const handleFirstInteraction = () => {
      setHasInteracted(true);
      window.removeEventListener('click', handleFirstInteraction, { capture: true });
      window.removeEventListener('keydown', handleFirstInteraction, { capture: true });
      window.removeEventListener('touchstart', handleFirstInteraction, { capture: true });
    };

    // Adiciona listeners para vários tipos de interação
    window.addEventListener('click', handleFirstInteraction, { capture: true, once: true });
    window.addEventListener('keydown', handleFirstInteraction, { capture: true, once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { capture: true, once: true });
    
    return () => {
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
        // A música está tocando
      }).catch(error => {
        console.warn("Autoplay da música foi bloqueado ou ocorreu um erro:", error);
      });
    }
  }, [hasInteracted]);

  return (
    // O elemento de áudio é renderizado, mas não é visível para o usuário.
    // Ele fica no DOM para que o JavaScript possa controlá-lo.
    <audio ref={audioRef} src={src} loop preload="auto" />
  );
};

export default PersistentAudioPlayer;
