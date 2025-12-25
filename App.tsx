import React, { useState } from 'react';
import { Setup } from './components/Setup';
import { Theater } from './components/Theater';
import { MBTI, Genre, Character, Relationship, CreditEntry } from './types';

function App() {
  const [step, setStep] = useState<'setup' | 'theater'>('setup');
  
  // State for multiple characters and relationships
  const [characters, setCharacters] = useState<Character[]>([]);
  const [relationships, setRelationships] = useState<Relationship[]>([]);
  const [genre, setGenre] = useState<Genre>(Genre.ACTION);
  
  // Credits State - Default values matching previous hardcoded ones
  const [credits, setCredits] = useState<CreditEntry[]>([
    { role: '감독', name: 'You' },
    { role: '제공 | 배급', name: 'CineMoji Simulator' },
    { role: '투자', name: 'CineMoji AI' },
    { role: 'EDITED BY', name: 'React Renderer' },
    { role: 'MUSIC BY', name: 'Tone.js Orchestra' },
  ]);

  const handleStart = (
    chars: Character[], 
    rels: Relationship[], 
    selectedGenre: Genre,
    finalCredits: CreditEntry[]
  ) => {
    setCharacters(chars);
    setRelationships(rels);
    setGenre(selectedGenre);
    setCredits(finalCredits);
    setStep('theater');
  };

  const handleReset = () => {
    setStep('setup');
  };

  return (
    <div>
      {step === 'setup' ? (
        <Setup 
          onStart={handleStart}
          initialCharacters={characters}
          initialRelationships={relationships}
          initialGenre={genre}
          initialCredits={credits}
        />
      ) : (
        <Theater 
          characters={characters} 
          relationships={relationships} 
          genre={genre} 
          credits={credits}
          onReset={handleReset} 
        />
      )}
    </div>
  );
}

export default App;