// src/components/AnimatedText.tsx
import React from 'react';
import './AnimatedText.css'; // Criaremos este arquivo CSS a seguir

interface AnimatedTextProps {
  text: string;
  staggerDelay?: number; // Atraso em segundos entre cada letra
  animationDuration?: number; // Duração da animação para cada letra
  className?: string; // Classes adicionais para o container do texto
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  staggerDelay = 0.05, // Atraso padrão de 50ms
  animationDuration = 0.5, // Duração padrão de 0.5s
  className = '',
}) => {
  const letters = text.split('');

  return (
    <h1 className={`animated-text-container ${className}`}>
      {letters.map((letter, index) => (
        <span
          key={index}
          className="animated-letter"
          style={{
            animationDelay: `${index * staggerDelay}s`,
            animationDuration: `${animationDuration}s`,
          }}
        >
          {/* Se a letra for um espaço, substitua por um espaço não quebrável para manter o espaçamento */}
          {letter === ' ' ? '\u00A0' : letter}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedText;