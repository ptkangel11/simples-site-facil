// src/components/PersistentAudioPlayer.tsx
import React, { useRef, useEffect, useState } from 'react';

interface PersistentAudioPlayerProps {
  src: string;
}

const PersistentAudioPlayer: React.FC<PersistentAudioPlayerProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  // const [isPlaying, setIsPlaying] = useState(false); // Não é mais necessário se o botão for removido
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const handleFirstInteraction = () => {
      setHasInteracted(true);
      window.removeEventListener('click', handleFirstInteraction, { capture: true });
      window.removeEventListener('keydown', handleFirstInteraction, { capture: true });
      window.removeEventListener('touchstart', handleFirstInteraction, { capture: true });
    };

    window.addEventListener('click', handleFirstInteraction, { capture: true, once: true });
    window.addEventListener('keydown', handleFirstInteraction, { capture: true, once: true });
    window.addEventListener('touchstart', handleFirstInteraction, { capture: true, once: true });

    return () => {
      window.removeEventListener('click', handleFirstInteraction, { capture: true });
      window.removeEventListener('keydown', handleFirstInteraction, { capture: true });
      window.removeEventListener('touchstart', handleFirstInteraction, { capture: true });
    };
  }, []);

  useEffect(() => {
    if (hasInteracted && audioRef.current) {
      audioRef.current.volume = 0.5; // Volume inicial
      audioRef.current.play().then(() => {
        // setIsPlaying(true); // Não é mais necessário
        console.log("Música tocando após interação.");
      }).catch(error => {
        console.warn("Autoplay da música foi bloqueado ou ocorreu um erro:", error);
        // setIsPlaying(false); // Não é mais necessário
      });
    }
  }, [hasInteracted]);

  // A função togglePlayPause e o botão foram removidos/comentados
  /*
  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (!hasInteracted) {
        setHasInteracted(true);
        if (!isPlaying) {
            audioRef.current.play().then(() => setIsPlaying(true)).catch(e => console.warn(e));
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    } else {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(e => console.warn("Erro ao tocar áudio:", e));
        }
        setIsPlaying(!isPlaying);
    }
  };
  */

  return (
    // A div que continha o botão pode ser removida ou deixada se você planeja adicionar outros controles ocultos no futuro.
    // Por enquanto, vamos apenas renderizar o elemento de áudio.
    <div>
      <audio ref={audioRef} src={src} loop preload="auto" />
      {/* O botão foi removido daqui:
      {showButton && (
        <button
          onClick={togglePlayPause}
          // ... classes e atributos ...
        >
          {isPlaying ? ( ... ) : ( ... )}
        </button>
      )}
      */}
    </div>
  );
};

export default PersistentAudioPlayer;
