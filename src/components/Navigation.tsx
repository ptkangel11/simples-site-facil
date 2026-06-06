
import React, { useState } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'SOBRE', href: '/#sobre' },
    { name: 'DR. PABLO RESPONDE', href: '/#responde' },
    { name: 'AGENDE A SUA CONSULTA', href: '/confirmar-presenca' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="w-full bg-[#7A545C]/20 backdrop-blur-xl border-b border-white/10 px-8 py-4 z-50 hidden md:flex items-center justify-between fixed top-0">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/">
            <div className="w-16 h-16 rounded-full border border-[#D4AF37] flex items-center justify-center bg-transparent">
              <span className="text-[#D4AF37] font-serif text-2xl tracking-tighter">PL</span>
            </div>
          </Link>
        </div>

        {/* Center: Links */}
        <div className="flex space-x-10">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href || (item.href === '/#sobre' && location.pathname === '/');
            return item.href.includes('#') ? (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-semibold tracking-wider transition-colors duration-300 relative pb-1 ${
                  isActive ? 'text-white border-b-2 border-white' : 'text-gray-200 hover:text-white hover:border-b-2 hover:border-gray-300'
                }`}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-semibold tracking-wider transition-colors duration-300 relative pb-1 ${
                  isActive ? 'text-white border-b-2 border-white' : 'text-gray-200 hover:text-white hover:border-b-2 hover:border-gray-300'
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        {/* Right: Search */}
        <div className="flex-shrink-0">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Procurar..." 
              className="pl-4 pr-10 py-2 bg-white text-gray-500 italic text-sm focus:outline-none w-48"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-800">
              <Search size={18} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="w-full bg-[#7A545C]/20 backdrop-blur-xl border-b border-white/10 p-4 z-50 md:hidden flex justify-between items-center fixed top-0">
        <Link to="/">
          <div className="w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center bg-transparent">
            <span className="text-[#D4AF37] font-serif text-xl tracking-tighter">PL</span>
          </div>
        </Link>

        <button
          onClick={toggleMenu}
          className="text-white p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors duration-300"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-20 left-0 w-full bg-[#7A545C]/90 backdrop-blur-xl border-t border-white/10 shadow-lg">
            <div className="py-2 flex flex-col items-center">
              {navItems.map((item) => (
                item.href.includes('#') ? (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-sm font-semibold tracking-wider text-white hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-4 py-3 text-sm font-semibold tracking-wider text-white hover:text-[#D4AF37] transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="mt-4 mb-2 relative mx-4">
                <input 
                  type="text" 
                  placeholder="Procurar..." 
                  className="pl-4 pr-10 py-2 bg-white text-gray-500 italic text-sm focus:outline-none w-full"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-800">
                  <Search size={18} />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
