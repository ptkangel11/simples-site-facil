// src/pages/Index.tsx
import React from 'react';
import CountdownTimer from '../components/CountdownTimer'; // Certifique-se que o caminho está correto


const Index = () => {
  return (
    // Contêiner principal para o conteúdo da página Index.
    // 'min-h-[calc(100vh-VAR_ALTURA_NAV)]': Faz o contêiner ocupar pelo menos a altura da tela
    // menos a altura da sua barra de navegação (substitua VAR_ALTURA_NAV pela altura real em pixels ou rem, ex: 4rem, 64px).
    // Isso ajuda 'justify-center' a funcionar verticalmente de forma eficaz.
    // Se o seu Layout ou o <main> dentro dele já define uma altura e centralização,
    // você pode simplificar este div.
    // 'flex flex-col items-center justify-center': Centraliza o conteúdo filho.
    // 'text-center': Centraliza o texto dentro dos elementos filhos.
    <div className="flex flex-col items-center justify-start text-center min-h-[calc(100vh-4rem)] px-4 pt-20 md:pt-24 pb-8"> {/* Ex: 4rem para altura da nav */}
      {/*
        Você pode usar um container para limitar a largura se desejar,
        mas a centralização principal é feita pela div acima.
      */}
      <div className="animate-fade-in"> {/* Animação aplicada ao bloco de conteúdo */}
        <h1 className="text-xl sm:text-2xl lg:text-4xl text-white mb-4 tracking-wider font-light">
          DR. PABLO BERINI LEMGRUBER
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-10 sm:mb-12 tracking-widest">
          MEDICINA 2025
        </p>
        <div className="flex justify-center"> {/* O CountdownTimer já estava dentro de um flex justify-center */}
          <CountdownTimer />
        </div>
      </div>
    </div>
  );
};

export default Index;