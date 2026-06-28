// src/components/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation'; // Certifique-se que este caminho está correto
import DrPabloImage from './Imagem PNG.png';
import PersistentAudioPlayer from './PersistentAudioPlayer';

const Layout = () => {
  // URL da música que será tocada
  const audioSrc = "src/components/Winter (L'Inverno) Op (mp3cut.net).flac";

  return (
    <div className="min-h-screen bg-black font-inter relative">
      {/* Background Image - Aplicado a todas as páginas */}
      <div
          className="fixed inset-0 bg-cover bg-no-repeat bg-[70%_top] md:bg-center" 
          style={{
            backgroundImage: `url(${DrPabloImage})`,
          }}
          >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div> {/* Overlay escuro */}
      </div>

      {/* Navegação - Presente em todas as páginas */}
      <Navigation />

      {/* Conteúdo da Rota Atual - Renderizado aqui */}
      {/* Adicionamos flex para ajudar na centralização do conteúdo das páginas filhas se elas também usarem flex */}
      <main className="relative z-10 flex flex-col flex-grow"> 
        <Outlet /> {/* As rotas filhas (Index, ConfirmarPresenca, etc.) serão renderizadas aqui */}
      </main>

      {/* Player de Áudio Persistente */}
      <PersistentAudioPlayer src={audioSrc} />
    </div>
  );
};

export default Layout;