import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date(new Date().getFullYear() + 1, 0, 10);
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();


    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-4 md:space-x-12 mb-8">
      <div className="text-center">
        <div className="text-3xl md:text-6xl font-light text-white mb-2">{timeLeft.days}</div>
        <div className="text-xs md:text-sm text-gray-300 tracking-widest">DIAS</div>
      </div>
      <div className="text-center">
        <div className="text-3xl md:text-6xl font-light text-white mb-2">{timeLeft.hours}</div>
        <div className="text-xs md:text-sm text-gray-300 tracking-widest">HORAS</div>
      </div>
      <div className="text-center">
        <div className="text-3xl md:text-6xl font-light text-white mb-2">{timeLeft.minutes}</div>
        <div className="text-xs md:text-sm text-gray-300 tracking-widest">MINUTOS</div>
      </div>
      <div className="text-center">
        <div className="text-3xl md:text-6xl font-light text-white mb-2">{timeLeft.seconds}</div>
        <div className="text-xs md:text-sm text-gray-300 tracking-widest">SEGUNDOS</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
