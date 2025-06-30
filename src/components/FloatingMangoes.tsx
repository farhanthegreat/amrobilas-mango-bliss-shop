
import React, { useEffect, useState } from 'react';

const FloatingMangoes = () => {
  const [mangoes, setMangoes] = useState<Array<{ id: number; x: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const createMangoes = () => {
      const newMangoes = Array.from({ length: 6 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        delay: Math.random() * 3,
        duration: 8 + Math.random() * 4
      }));
      setMangoes(newMangoes);
    };

    createMangoes();
    const interval = setInterval(createMangoes, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {mangoes.map((mango) => (
        <div
          key={mango.id}
          className="absolute animate-float opacity-20 hover:opacity-40 transition-opacity duration-300"
          style={{
            left: `${mango.x}%`,
            animationDelay: `${mango.delay}s`,
            animationDuration: `${mango.duration}s`,
            top: '-50px'
          }}
        >
          <div className="text-4xl animate-spin-slow">🥭</div>
        </div>
      ))}
    </div>
  );
};

export default FloatingMangoes;
