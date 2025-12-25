import React from 'react';
import { Character, CreditEntry } from '../types';
import { Monitor, RotateCcw } from 'lucide-react';

interface EndingCreditsProps {
  characters: Character[];
  credits: CreditEntry[];
  onReset: () => void;
}

export const EndingCredits: React.FC<EndingCreditsProps> = ({ characters, credits, onReset }) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full sm:w-[400px] md:w-[450px] bg-black z-50 border-r border-gray-900 overflow-hidden">
        {/* Simple fade overlay at top only to smooth out disappearing text */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />

        <div className="w-full h-full relative">
            <div className="animate-credit-scroll absolute w-full">
                 <div className="w-full flex flex-col items-center">
                    
                    {/* Initial Spacer to start content off-screen below */}
                    <div className="h-[100vh]" />

                    {/* CAST SECTION */}
                    <div className="mb-24 w-full px-8">
                        <h2 className="text-xl font-bold text-white text-center mb-8 tracking-widest uppercase">Cast</h2>
                        <div className="space-y-4">
                            {characters.map((char) => (
                                <div key={char.id} className="flex flex-row justify-center items-baseline gap-6 w-full text-sm sm:text-base">
                                    {/* Role (Input) on the Left */}
                                    <span className="text-gray-400 font-medium w-1/2 text-right truncate">{char.role || char.mbti}</span>
                                    {/* Name on the Right */}
                                    <span className="text-white font-bold w-1/2 text-left truncate uppercase tracking-wider">{char.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CREW SECTION - Dynamic from Props */}
                    <div className="mb-32 w-full px-8">
                        <div className="space-y-6">
                            {credits.map((crew, idx) => (
                                <div key={idx} className="flex flex-row justify-center items-baseline gap-6 w-full text-xs sm:text-sm">
                                    <span className="text-gray-500 w-1/2 text-right truncate uppercase">{crew.role}</span>
                                    <span className="text-white font-bold w-1/2 text-left truncate uppercase">{crew.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* LOGO & RESET */}
                    <div className="flex flex-col items-center space-y-8 pb-64">
                        <div className="flex flex-col items-center opacity-50">
                             <Monitor size={24} className="text-gray-500 mb-2" />
                             <span className="text-[10px] text-gray-500 tracking-[0.4em] uppercase">CINEMOJI SIMULATOR</span>
                        </div>
                        
                        <button 
                            onClick={onReset}
                            className="group relative px-6 py-2 bg-white text-black font-bold text-sm tracking-widest hover:bg-gray-300 transition-colors rounded-sm pointer-events-auto"
                        >
                            REPLAY MOVIE
                        </button>
                    </div>
                 </div>
            </div>
        </div>

        <style>{`
            @keyframes credit-scroll {
                0% { transform: translateY(0); }
                100% { transform: translateY(calc(-100% + 50vh)); }
            }
           .animate-credit-scroll {
               animation: credit-scroll 25s linear forwards; 
           }
        `}</style>
    </div>
  );
}
