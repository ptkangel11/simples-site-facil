// src/components/Layout.tsx
import React, { useEffect } from 'react'; // Adicionado useEffect
import { Outlet, useLocation } from 'react-router-dom'; // Adicionado useLocation
import Navigation from './Navigation';
import DrPabloImage from './Imagem PNG.png';
import music from './Concerto for 2 Violins in A Minor, Op. 3, No. 8, Rv 522_ I. Allegro.mp3';
import PersistentAudioPlayer from './PersistentAudioPlayer';

const Layout = () => {
  const { pathname } = useLocation(); // Pega a URL/rota atual

  // Esse truque faz a tela rolar pro topo suavemente toda vez que a URL mudar
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

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
      <main className="relative z-10 flex flex-col flex-grow"> 
        <Outlet /> 
      </main>

      {/* Player de Áudio Persistente - COMEÇANDO AOS 30 SEGUNDOS */}
      <PersistentAudioPlayer src={`${music}#t=30`} />
    </div>
  );
};

export default Layout;