// src/pages/Index.tsx
import React from 'react';
import CountdownTimer from '../components/CountdownTimer'; // Certifique-se que o caminho está correto
// A importação de AnimatedText foi removida, pois não está mais em uso direto neste trecho.

const Index = () => {
  return (
    // Contêiner principal para o conteúdo da página Index.
    // As classes abaixo centralizam o conteúdo e ajustam a posição.
    // A altura mínima foi ajustada para 'calc(100vh-3rem)'.
    <div className="flex flex-col items-center justify-start text-center min-h-[calc(100vh-3rem)] px-4 pt-20 md:pt-24 pb-8">
      {/* Bloco de conteúdo principal da página Index */}
      <div className="animate-fade-in"> {/* Se você tiver esta animação configurada */}
        
        {/* Título principal com novas classes de tamanho de texto */}
        <h1 className="text-xl sm:text-2xl lg:text-4xl text-white mb-4 tracking-wider font-light">
          DR. PABLO BERINI LEMGRUBER
        </h1>

        {/* Subtítulo com as classes de tamanho de texto especificadas */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-10 sm:mb-12 tracking-widest">
          MEDICINA 2025
        </p>

        {/* Countdown Timer */}
        <div className="flex justify-center">
          <CountdownTimer />
        </div>
      </div>
      {/* Comentários sobre a estrutura duplicada removida foram mantidos para referência, se necessário, mas o código duplicado foi removido. */}
      {/* A SEGUNDA PARTE DO SEU CÓDIGO ORIGINAL FOI REMOVIDA, POIS DUPLICAVA A ESTRUTURA DO LAYOUT.TSX
        E CONTINA UM CAMINHO DE IMAGEM INCORRETO.
      */}
    </div>
  );
};

export default Index;
