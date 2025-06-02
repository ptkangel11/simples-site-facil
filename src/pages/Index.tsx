
import React from 'react';
import Navigation from '../components/Navigation';
import CountdownTimer from '../components/CountdownTimer';
import TechnologyBadge from '../components/TechnologyBadge';

const Index = () => {
  return (
    <div className="min-h-screen bg-black font-inter overflow-hidden">
      {/* Background with leather texture on left */}
      <div className="absolute inset-0">
        <div className="w-1/3 h-full bg-gradient-to-r from-amber-900 via-amber-800 to-amber-700"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left side - Text content */}
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-light text-white mb-4 tracking-wider">
                DR. PABLO BERINI LEMGRUBER
              </h1>
              <p className="text-xl text-gray-300 mb-12 tracking-widest">
                MEDICINA 2025
              </p>
              
              {/* Countdown Timer */}
              <CountdownTimer />
            </div>

            {/* Right side - Doctor image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Purple leather chair background */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-80 h-32 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 rounded-t-full opacity-80"></div>
                
                {/* Doctor figure silhouette */}
                <div className="relative z-10 w-80 h-96 bg-gradient-to-b from-gray-600 to-gray-800 opacity-90" 
                     style={{
                       clipPath: 'polygon(40% 0%, 60% 0%, 80% 100%, 20% 100%)'
                     }}>
                </div>
                
                {/* Suit details */}
                <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-4 h-20 bg-black opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Technology Badge */}
      <TechnologyBadge />

      {/* Decorative books on the left side */}
      <div className="absolute left-0 top-1/4 space-y-4 opacity-60">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-16 h-4 bg-gradient-to-r from-orange-800 to-orange-600 ml-8"></div>
        ))}
      </div>
    </div>
  );
};

export default Index;
