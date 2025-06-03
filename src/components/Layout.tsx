// src/components/Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './Navigation'; // Certifique-se que este caminho está correto

const Layout = () => {
  return (
    <div className="min-h-screen bg-black font-inter relative">
      {/* Background Image - Aplicado a todas as páginas */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-right" // Classe 'bg-right' para alinhar à direita (e centro verticalmente)
                                                                  // Você pode mudar para bg-right-top, bg-right-bottom, ou remover e usar style abaixo
        style={{
          // CAMINHO CORRIGIDO: Assumindo que a imagem está em 'public/lovable-uploads/...'
          backgroundImage: 'url("https://github.com/ptkangel11/simples-site-facil/blob/main/src/components/75838767-2b1b-4c4a-a8d4-3686ad0af0cb.png?raw=true")',
          // Se 'bg-right' não for suficiente ou quiser mais controle:
          // backgroundPosition: '80% center', // Exemplo: 80% da esquerda, centro verticalmente
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div> {/* Overlay escuro */}
      </div>

      {/* Navegação - Presente em todas as páginas */}
      <Navigation />

      {/* Conteúdo da Rota Atual - Renderizado aqui */}
      {/* Adicionamos flex para ajudar na centralização do conteúdo das páginas filhas se elas também usarem flex */}
      <main className="relative z-10 flex flex-col flex-grow"> 
        <Outlet /> {/* As rotas filhas (Index, ConfirmarPresenca, etc.) serão renderizadas aqui */}
      </main>
    </div>
  );
};

export default Layout;