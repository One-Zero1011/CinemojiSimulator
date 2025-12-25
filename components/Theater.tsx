import React, { useState, useEffect, useRef } from 'react';
import { Genre, MBTI, LogEntry, Character, Relationship, SimulationLog, CreditEntry } from '../types';
import { getMovieScript } from '../constants';
import { LightingOverlay } from './LightingOverlay';
import { EndingCredits } from './EndingCredits';
import { Play, RotateCcw, Monitor, MessageCircle, Send, ChevronRight, ChevronLeft } from 'lucide-react';

interface TheaterProps {
  characters: Character[];
  relationships: Relationship[];
  genre: Genre;
  credits: CreditEntry[];
  onReset: () => void;
}

export const Theater: React.FC<TheaterProps> = ({ characters, relationships, genre, credits, onReset }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  
  // New States for Credits and Chat Toggle
  const [showCredits, setShowCredits] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(true);

  // Master timeline of all messages
  const [fullScript, setFullScript] = useState<SimulationLog[]>([]);
  // Messages currently displayed
  const [messages, setMessages] = useState<SimulationLog[]>([]);
  // To track which messages have been added
  const [processedLogIndices, setProcessedLogIndices] = useState<Set<number>>(new Set());

  // Refs for auto-scrolling
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Initialize Scripts
  useEffect(() => {
    let combinedLogs: SimulationLog[] = [];

    characters.forEach(char => {
      // Get raw script for this character
      const charScript = getMovieScript(genre, char.mbti, char.name);
      
      // Map to SimulationLog with character ID
      const taggedScript = charScript.map(log => ({
        ...log,
        characterId: char.id,
        // Add slight random variance to time so messages don't appear identically stacked every time
        time: log.time + (Math.random() * 2 - 1) 
      }));

      combinedLogs = [...combinedLogs, ...taggedScript];
    });

    // Sort by time
    combinedLogs.sort((a, b) => a.time - b.time);
    
    setFullScript(combinedLogs);
    setMessages([]); // Reset chat
    setProcessedLogIndices(new Set());
    setShowCredits(false);
    setIsChatOpen(true);
    setProgress(0);
  }, [genre, characters]);

  // Game Loop
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;

    if (isPlaying && progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + 0.3; // Speed
          if (next >= 100) {
            setIsPlaying(false);
            // Trigger Ending Sequence
            setShowCredits(true);
            setIsChatOpen(false); // Automatically fold chat
            return 100;
          }
          return next;
        });
      }, 50);
    }

    return () => clearInterval(interval);
  }, [isPlaying, progress]);

  // Check for Script Events based on Progress
  useEffect(() => {
    // Find logs that should have appeared by now but haven't
    const newIndices = new Set(processedLogIndices);
    let hasUpdates = false;

    fullScript.forEach((log, index) => {
      if (log.time <= progress && !newIndices.has(index)) {
        setMessages(prev => [...prev, log]);
        newIndices.add(index);
        hasUpdates = true;
      }
    });

    if (hasUpdates) {
      setProcessedLogIndices(newIndices);
    }
  }, [progress, fullScript, processedLogIndices]);

  // Auto scroll chat
  useEffect(() => {
    if (isChatOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isChatOpen]);

  // Helper to get active character emotion for animation
  const getCharacterEmotion = (charId: string) => {
    // Find the last message from this character
    const lastMsg = [...messages].reverse().find(m => m.characterId === charId);
    return lastMsg?.emotion || 'neutral';
  };

  const getBounceClass = (emotion: string) => {
    if (!isPlaying) return '';
    switch (emotion) {
      case 'shocked': return 'animate-shock';
      case 'happy': return 'animate-laugh';
      case 'angry': return 'animate-anger';
      case 'crying': return 'animate-cry';
      case 'bored': return 'animate-bored';
      default: return '';
    }
  };

  // Helper function to render a single seat (occupied or empty)
  const renderSeat = (char?: Character, index?: number, row: number = 1) => {
    // Row 1 is front, Row 3 is back
    const isFront = row === 1;
    const isMiddle = row === 2;
    const isBack = row === 3;

    // Adjust scale and styles based on row depth
    let scaleClass = 'scale-100';
    let brightness = 'brightness-100';
    let zIndex = 'z-30';
    let mx = '-mx-1 md:mx-1';
    
    if (isMiddle) {
        scaleClass = 'scale-90 origin-bottom';
        brightness = 'brightness-[0.6] saturate-50';
        zIndex = 'z-20';
        mx = '-mx-2 md:-mx-1';
    } else if (isBack) {
        scaleClass = 'scale-75 origin-bottom';
        brightness = 'brightness-[0.4] saturate-0';
        zIndex = 'z-10';
        mx = '-mx-3 md:-mx-2';
    }

    // Adjust dimensions based on row
    const width = isFront ? 'w-20 md:w-24' : (isMiddle ? 'w-16 md:w-20' : 'w-14 md:w-16');
    const height = isFront ? 'h-28 md:h-32' : (isMiddle ? 'h-24 md:h-28' : 'h-20 md:h-24');
    
    const seatColor = isFront ? 'bg-red-900' : (isMiddle ? 'bg-red-950' : 'bg-[#2a0a0a]');
    const borderColor = isFront ? 'border-red-800' : 'border-red-900';
    const baseColor = isFront ? 'bg-red-950' : 'bg-[#1a0505]';

    return (
        <div key={char ? char.id : `empty-${row}-${index}`} className={`relative flex flex-col items-center justify-end ${mx} flex-shrink-0 ${scaleClass} ${zIndex} ${brightness} transition-all duration-300`}>
             {/* Name Tag (Only for active characters) */}
             {char && (
                <div className="mb-2 px-2 py-1 bg-black/60 rounded text-[10px] md:text-xs text-gray-300 backdrop-blur-sm border border-gray-700 whitespace-nowrap z-50">
                  {char.name}
                </div>
             )}

             <div className="relative">
                 {/* Chair Back */}
                 <div className={`${width} ${height} ${seatColor} rounded-t-xl border-t-4 ${borderColor} shadow-2xl relative overflow-hidden z-0`}>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
                 </div>
                 
                 {/* Character Image */}
                 {char && (
                     <img 
                        src={char.image} 
                        alt={char.name}
                        className={`absolute bottom-2 left-0 w-full h-[90%] object-contain object-bottom drop-shadow-xl z-30 ${isPlaying ? getBounceClass(getCharacterEmotion(char.id)) : ''}`}
                        style={{ 
                            filter: isPlaying ? 'brightness(1.05) contrast(1.1)' : 'brightness(0.5)',
                            transformOrigin: 'bottom center'
                        }}
                     />
                 )}

                 {/* Lighting for active characters */}
                 {char && isPlaying && (
                     <div className="absolute inset-0 z-40 rounded-t-xl overflow-hidden opacity-30 mix-blend-overlay pointer-events-none">
                       <LightingOverlay genre={genre} intensity={0.4} />
                     </div>
                 )}
             </div>

             {/* Chair Base/Legs Area */}
             <div className={`w-[110%] h-3 md:h-4 ${baseColor} rounded-full mt-[-4px] z-50 shadow-lg`} />
        </div>
    );
  };

  const handleReset = () => {
    setShowCredits(false);
    setIsChatOpen(true);
    onReset();
  }

  return (
    <div className="flex flex-col md:flex-row h-screen bg-black text-white overflow-hidden relative">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-0 pointer-events-none" />
      
      {/* LEFT: Theater View (Movie & Characters) */}
      <div className="relative flex-1 flex flex-col items-center justify-between p-4 z-10 overflow-hidden transition-all duration-500">
        
        {/* Toggle Chat Button (Visible on the right edge of the theater view) */}
        <button 
            onClick={() => setIsChatOpen(!isChatOpen)}
            className="absolute top-4 right-4 z-50 bg-gray-800/80 p-2 rounded-full hover:bg-gray-700 text-white transition-colors border border-gray-600 shadow-lg"
            title={isChatOpen ? "채팅 접기" : "채팅 펼치기"}
        >
            {isChatOpen ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>

        {/* Ending Credits Overlay (Occupies left portion) */}
        {showCredits && (
            <EndingCredits 
              characters={characters} 
              credits={credits}
              onReset={handleReset} 
            />
        )}

        {/* Header/Screen Info */}
        <div className="w-full max-w-3xl flex justify-between items-center bg-gray-900/50 p-4 rounded-xl backdrop-blur-md border border-gray-800 z-20">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-red-600 rounded-lg">
                <Monitor size={20} className="text-white" />
             </div>
             <div>
               <h2 className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest font-bold">Now Playing</h2>
               <p className="text-base sm:text-lg font-bold text-white">{genre}</p>
             </div>
          </div>
          <div className="flex -space-x-2">
             {characters.map(c => (
               <img key={c.id} src={c.image} alt={c.name} className="w-8 h-8 rounded-full border-2 border-gray-800 object-cover" />
             ))}
          </div>
        </div>

        {/* Projector Light */}
        {isPlaying && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-2xl bg-gradient-to-b from-white/10 to-transparent blur-3xl z-0 pointer-events-none animate-pulse opacity-50" />
        )}

        {/* SEATING AREA LAYOUT */}
        <div className="flex flex-col items-center justify-end w-full mb-10 z-10 perspective-[1000px]">
            
            {/* ROW 3 (Far Back) - 18 Seats */}
            <div className="flex justify-center items-end -mb-12 md:-mb-16 opacity-50 select-none pointer-events-none scale-90">
                {Array.from({ length: 18 }).map((_, i) => renderSeat(undefined, i, 3))}
            </div>

            {/* ROW 2 (Middle Back) - 14 Seats */}
            <div className="flex justify-center items-end -mb-12 md:-mb-16 opacity-70 select-none pointer-events-none scale-95 z-10">
                {Array.from({ length: 14 }).map((_, i) => renderSeat(undefined, i, 2))}
            </div>

            {/* ROW 1 (Front) - Characters + Empty Side Seats */}
            <div className="flex items-end justify-center w-full overflow-x-auto pb-4 pt-32 px-4 hide-scrollbar z-20">
                <div className="flex items-end space-x-1 md:space-x-2 mx-auto">
                    {/* Left Empty Seats (3) */}
                    <div className="hidden md:flex space-x-1 md:space-x-2">
                        {renderSeat(undefined, 100, 1)}
                        {renderSeat(undefined, 101, 1)}
                        {renderSeat(undefined, 102, 1)}
                    </div>

                    {/* Active Characters */}
                    {characters.map(char => renderSeat(char, undefined, 1))}

                    {/* Right Empty Seats (3) */}
                    <div className="hidden md:flex space-x-1 md:space-x-2">
                         {renderSeat(undefined, 200, 1)}
                         {renderSeat(undefined, 201, 1)}
                         {renderSeat(undefined, 202, 1)}
                    </div>
                </div>
            </div>
        </div>

        {/* Controls & Progress Bar */}
        <div className="w-full max-w-2xl space-y-4 mb-4 z-20">
          <div className="h-6 bg-gray-800 rounded-full overflow-hidden border border-gray-700 relative group">
            <div 
              className="h-full bg-red-600 transition-all duration-100 ease-linear shadow-[0_0_10px_rgba(220,38,38,0.7)]"
              style={{ width: `${progress}%` }} 
            />
            {/* Percentage Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] z-10">
               <span>{Math.floor(progress)}%</span>
               {progress < 100 && (
                 <span className="ml-1 text-gray-300 font-normal">
                   (남은 시간: {100 - Math.floor(progress)}%)
                 </span>
               )}
            </div>
          </div>

          <div className="flex justify-center gap-4">
             {!isPlaying && progress < 100 && (
              <button 
                onClick={() => setIsPlaying(true)}
                className="flex items-center gap-2 px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-all shadow-lg"
              >
                <Play size={18} fill="currentColor" />
                {progress === 0 ? '영화 시작' : '이어보기'}
              </button>
            )}
            
            {/* Reset Button is now inside EndingCredits when credits are shown */}
            {(progress >= 100 && !showCredits) && (
               <button 
               onClick={handleReset}
               className="flex items-center gap-2 px-6 py-2 bg-red-600 text-white font-bold rounded-full hover:bg-red-500 transition-all shadow-lg z-50"
             >
               <RotateCcw size={18} />
               다시 설정하기
             </button>
            )}
          </div>
        </div>
      </div>

      {/* RIGHT: Messenger / Chat Interface - Collapsible */}
      <div 
        className={`bg-[#b2c7d9] border-l border-gray-700 flex flex-col z-30 shadow-2xl transition-all duration-500 ease-in-out overflow-hidden ${
            isChatOpen ? 'w-full md:w-96 translate-x-0 opacity-100' : 'w-0 opacity-0'
        } ${isChatOpen ? 'h-[40vh] md:h-auto' : 'h-0 md:h-auto'}`}
      >
        {/* Chat Header */}
        <div className="bg-[#a9bdce] p-3 flex items-center justify-between border-b border-[#9aadbd] shadow-sm min-w-[320px]">
           <div className="flex items-center gap-2 text-black/80 font-bold">
             <MessageCircle size={20} />
             <span>영화 수다방 ({characters.length})</span>
           </div>
           {/* Relationship Hints */}
           <div className="text-[10px] text-gray-600 flex flex-col items-end">
              {relationships.slice(0, 2).map(r => {
                 const f = characters.find(c => c.id === r.fromId)?.name;
                 const t = characters.find(c => c.id === r.toId)?.name;
                 return <span key={r.id}>{f}→{t}: {r.label}</span>
              })}
              {relationships.length > 2 && <span>...</span>}
           </div>
        </div>

        {/* Chat Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 font-sans bg-[#b2c7d9] min-w-[320px]">
          {messages.length === 0 && (
            <div className="text-center text-gray-500 mt-10 text-sm">
              영화가 시작되면 대화가 나타납니다.
            </div>
          )}
          
          {messages.map((msg, idx) => {
            const char = characters.find(c => c.id === msg.characterId);
            if (!char) return null;
            
            return (
              <div key={idx} className="flex gap-2 items-start animate-fade-in-up">
                <img src={char.image} alt={char.name} className="w-10 h-10 rounded-[14px] object-cover border border-black/10" />
                <div className="flex flex-col items-start max-w-[80%]">
                   <span className="text-xs text-gray-600 mb-1 ml-1">{char.name}</span>
                   <div className="bg-white text-black text-sm px-3 py-2 rounded-lg rounded-tl-none shadow-sm relative">
                     {msg.text}
                     {/* Emotion Emoji Badge */}
                     {msg.emotion !== 'neutral' && (
                       <span className="absolute -top-2 -right-2 text-lg">
                         {msg.emotion === 'happy' && '😄'}
                         {msg.emotion === 'shocked' && '😱'}
                         {msg.emotion === 'angry' && '😡'}
                         {msg.emotion === 'crying' && '😭'}
                         {msg.emotion === 'bored' && '🥱'}
                       </span>
                     )}
                   </div>
                </div>
              </div>
            );
          })}
          <div ref={chatEndRef} />
        </div>

        {/* Chat Input Area (Fake) */}
        <div className="bg-white p-3 flex gap-2 items-center border-t border-gray-200 min-w-[320px]">
           <input disabled placeholder="대화는 자동으로 진행됩니다..." className="flex-1 bg-gray-100 p-2 rounded text-sm text-gray-500 cursor-not-allowed" />
           <button disabled className="bg-yellow-400 p-2 rounded text-black opacity-50 cursor-not-allowed">
             <Send size={18} />
           </button>
        </div>
      </div>

      <style>{`
        @keyframes laugh {
            0%, 100% { transform: scale(1) translateY(0); }
            25% { transform: scale(1.02) translateY(-4px); }
            50% { transform: scale(1) translateY(0); }
            75% { transform: scale(1.02) translateY(-2px); }
        }
        .animate-laugh { animation: laugh 0.8s infinite ease-in-out; }

        @keyframes shock {
            0%, 100% { transform: scale(1); }
            10% { transform: scale(1.15) translateY(-8px); }
            20% { transform: scale(1.1) rotate(-3deg); }
            30% { transform: scale(1.1) rotate(3deg); }
            40% { transform: scale(1.1) rotate(-3deg); }
            50% { transform: scale(1); }
        }
        .animate-shock { animation: shock 1.5s infinite; }

        @keyframes anger {
            0% { transform: translate(0, 0); }
            25% { transform: translate(-2px, 2px); }
            50% { transform: translate(2px, -2px); }
            75% { transform: translate(-2px, -2px); }
            100% { transform: translate(0, 0); }
        }
        .animate-anger { animation: anger 0.2s infinite; }

        @keyframes cry {
            0%, 100% { transform: translateY(0) rotate(0); }
            50% { transform: translateY(2px) rotate(2deg); }
        }
        .animate-cry { animation: cry 2s infinite ease-in-out; }

        @keyframes bored {
            0%, 100% { transform: rotate(0) translateY(0); }
            25% { transform: rotate(-3deg) translateY(2px); }
            75% { transform: rotate(3deg) translateY(2px); }
        }
        .animate-bored { animation: bored 4s infinite ease-in-out; }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.3s ease-out forwards;
        }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        /* Hide scrollbar for IE, Edge and Firefox */
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </div>
  );
};