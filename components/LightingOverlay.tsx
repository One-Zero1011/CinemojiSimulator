import React, { useEffect, useState } from 'react';

interface LightingOverlayProps {
  genre: string;
  intensity?: number;
}

export const LightingOverlay: React.FC<LightingOverlayProps> = ({ genre, intensity = 1 }) => {
  const [color, setColor] = useState('bg-white');
  const [opacity, setOpacity] = useState(0.2);

  // Simulate screen flicker based on genre
  useEffect(() => {
    const flickerInterval = setInterval(() => {
      // Randomize opacity to simulate scene changes
      const newOpacity = Math.random() * 0.3 + 0.1; // 0.1 to 0.4
      setOpacity(newOpacity * intensity);

      // Randomize color tint occasionally based on genre
      const chance = Math.random();
      if (chance > 0.8) {
        if (genre === 'Horror') setColor('bg-blue-900');
        else if (genre === 'Action') setColor('bg-orange-500');
        else if (genre === 'Romance') setColor('bg-pink-300');
        else if (genre === 'Crime/Noir') setColor('bg-gray-800');
        else setColor('bg-white');
      } else {
        setColor('bg-white'); // Most of the time it's just bright light
      }

    }, 150); // Fast flicker

    return () => clearInterval(flickerInterval);
  }, [genre, intensity]);

  return (
    <div 
      className={`absolute inset-0 pointer-events-none mix-blend-overlay transition-colors duration-300 ease-linear ${color}`}
      style={{ opacity: opacity }}
    />
  );
};
