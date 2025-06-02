
import React from 'react';

const Navigation = () => {
  const navItems = [
    { name: 'HOME', href: '#home', active: true },
    { name: 'CONVIDADOS', href: '#convidados' },
    { name: 'GALERIA', href: '#galeria' },
    { name: 'INFORMAÇÕES', href: '#informacoes' }
  ];

  return (
    <nav className="fixed top-0 right-0 p-8 z-50">
      <div className="flex space-x-8">
        {navItems.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={`text-sm font-medium tracking-wider transition-colors duration-300 ${
              item.active
                ? 'text-white border border-white px-4 py-2'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
