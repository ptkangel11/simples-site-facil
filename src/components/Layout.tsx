// src/components/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
// import backgroundImageSrc from '../assets/75838767-2b1b-4c4a-a8d4-3686ad0af0cb.png';

const Layout = () => {
  return (
    <div className="min-h-screen bg-black font-inter relative">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat" // Mantenha bg-cover e bg-no-repeat
        style={{
          backgroundImage: 'url("./components/75838767-2b1b-4c4a-a8d4-3686ad0af0cb.png")',
          // AQUI: Mude a posição
          backgroundPosition: 'right center', // Alinha à direita horizontalmente, centro verticalmente
          // Outras opções:
          // backgroundPosition: '100% 50%', // Equivalente a 'right center'
          // backgroundPosition: 'right top',   // Canto superior direito
          // backgroundPosition: 'right bottom', // Canto inferior direito
          // backgroundPosition: '80% center', // Move 80% para a direita, centro verticalmente (para ajuste fino)
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <Navigation />

      <main className="relative z-10">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;