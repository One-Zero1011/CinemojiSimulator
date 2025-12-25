import React, { useState } from 'react';
import { MBTI, MBTI_TYPES, Genre, Character, Relationship, CreditEntry } from '../types';
import { Upload, Clapperboard, Sparkles, Plus, Trash2, Users, HeartHandshake, ScrollText } from 'lucide-react';

interface SetupProps {
  onStart: (characters: Character[], relationships: Relationship[], genre: Genre, credits: CreditEntry[]) => void;
  initialCharacters?: Character[];
  initialRelationships?: Relationship[];
  initialGenre?: Genre;
  initialCredits?: CreditEntry[];
}

export const Setup: React.FC<SetupProps> = ({ 
  onStart,
  initialCharacters = [],
  initialRelationships = [],
  initialGenre = Genre.ACTION,
  initialCredits = []
}) => {
  // Global Settings
  const [selectedGenre, setSelectedGenre] = useState<Genre>(initialGenre);

  // Character State
  const [characters, setCharacters] = useState<Character[]>(initialCharacters);
  
  // Relationship State
  const [relationships, setRelationships] = useState<Relationship[]>(initialRelationships);

  // Ending Credits State
  const [credits, setCredits] = useState<CreditEntry[]>(initialCredits.length > 0 ? initialCredits : [
    { role: '감독', name: 'You' },
    { role: '제공 | 배급', name: 'CineMoji Simulator' }
  ]);

  // Form Inputs
  const [tempImage, setTempImage] = useState<string | null>(null);
  const [tempName, setTempName] = useState('');
  const [tempRole, setTempRole] = useState('');
  const [tempMBTI, setTempMBTI] = useState<MBTI>('INTP');

  // Relationship Form
  const [relFrom, setRelFrom] = useState<string>('');
  const [relTo, setRelTo] = useState<string>('');
  const [relLabel, setRelLabel] = useState<string>('친구');

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const url = URL.createObjectURL(e.target.files[0]);
      setTempImage(url);
    }
  };

  const addCharacter = () => {
    if (!tempName) return; // Image is optional now

    // Use uploaded image or generate a default avatar based on name
    const characterImage = tempImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(tempName)}&background=random&color=fff&bold=true&size=128`;

    const newChar: Character = {
      id: Date.now().toString(),
      name: tempName,
      image: characterImage,
      mbti: tempMBTI,
      role: tempRole || 'Cast'
    };
    setCharacters([...characters, newChar]);
    
    // Reset inputs
    setTempImage(null);
    setTempName('');
    setTempRole('');
    setTempMBTI('INTP');
  };

  const removeCharacter = (id: string) => {
    setCharacters(characters.filter(c => c.id !== id));
    setRelationships(relationships.filter(r => r.fromId !== id && r.toId !== id));
  };

  const addRelationship = () => {
    if (!relFrom || !relTo || relFrom === relTo) return;
    const newRel: Relationship = {
      id: Date.now().toString(),
      fromId: relFrom,
      toId: relTo,
      label: relLabel
    };
    setRelationships([...relationships, newRel]);
  };

  const removeRelationship = (id: string) => {
    setRelationships(relationships.filter(r => r.id !== id));
  };

  // Credits Helper
  const handleCreditChange = (index: number, field: keyof CreditEntry, value: string) => {
    const newCredits = [...credits];
    newCredits[index] = { ...newCredits[index], [field]: value };
    setCredits(newCredits);
  };

  const addCreditRow = () => {
    setCredits([...credits, { role: '', name: '' }]);
  };

  const removeCreditRow = (index: number) => {
    setCredits(credits.filter((_, i) => i !== index));
  };

  const getCharName = (id: string) => characters.find(c => c.id === id)?.name || 'Unknown';

  const genres = Object.values(Genre);

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center p-4 font-sans overflow-y-auto">
      <div className="w-full max-w-4xl bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl overflow-hidden mb-10">
        
        {/* Header */}
        <div className="bg-gray-800 p-6 border-b border-gray-700 flex items-center gap-3">
          <div className="p-3 bg-yellow-500 rounded-lg text-black">
            <Clapperboard size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">씨네모지 멀티버스</h1>
            <p className="text-gray-400 text-sm">다중 캐릭터 영화 관람 시뮬레이터</p>
          </div>
        </div>

        <div className="p-4 md:p-8 space-y-10">
          
          {/* SECTION 1: Character Creation */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-yellow-500 uppercase tracking-wide flex items-center gap-2">
              <Users size={20} /> 1. 캐릭터 등록
            </h2>
            
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="grid md:grid-cols-[auto_1fr] gap-6 items-start">
                
                {/* Image Upload */}
                <div className="space-y-2">
                  <div className={`relative w-32 h-32 rounded-xl border-2 border-dashed flex items-center justify-center overflow-hidden transition-all ${tempImage ? 'border-yellow-500 bg-gray-800' : 'border-gray-600 bg-gray-800/50 hover:border-gray-500'}`}>
                    {tempImage ? (
                      <img src={tempImage} alt="Preview" className="w-full h-full object-cover" />
                    ) : (
                      <Upload className="text-gray-500" size={32} />
                    )}
                    <input type="file" accept="image/*" onChange={handleImageUpload} className="absolute inset-0 opacity-0 cursor-pointer" />
                  </div>
                  <p className="text-xs text-center text-gray-400">이미지 업로드 (선택)</p>
                </div>

                {/* Info Inputs */}
                <div className="space-y-4 w-full">
                  <div>
                    <label className="text-xs text-gray-400 uppercase font-bold">이름</label>
                    <input 
                      type="text" 
                      value={tempName}
                      onChange={(e) => setTempName(e.target.value)}
                      placeholder="캐릭터 이름 (예: 철수)" 
                      className="w-full bg-gray-900 border border-gray-600 rounded-lg p-3 text-white focus:border-yellow-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-400 uppercase font-bold">배역 (Role)</label>
                    <input 
                      type="text" 
                      value={tempRole}
                      onChange={(e) => setTempRole(e.target.value)}
                      placeholder="예: 주인공, 악당 (엔딩 크레딧 표시용)" 
                      className="w-full bg-gray-900 border border-gray-600 rounded-lg p-3 text-white focus:border-yellow-500 focus:outline-none"
                    />
                  </div>
                  
                  <div>
                    <label className="text-xs text-gray-400 uppercase font-bold flex items-center gap-1 mb-2">
                      <Sparkles size={12} /> MBTI 유형
                    </label>
                    <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                      {MBTI_TYPES.map((type) => (
                        <button
                          key={type}
                          onClick={() => setTempMBTI(type)}
                          className={`px-1 py-2 text-[10px] sm:text-xs font-bold rounded transition-all ${
                            tempMBTI === type 
                            ? 'bg-yellow-500 text-black' 
                            : 'bg-gray-700 text-gray-400 hover:bg-gray-600'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={addCharacter}
                    disabled={!tempName}
                    className={`w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 ${
                      tempName
                      ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg'
                      : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    <Plus size={18} /> 캐릭터 리스트에 추가
                  </button>
                </div>
              </div>
            </div>

            {/* Added Characters List */}
            {characters.length > 0 && (
               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                 {characters.map((char) => (
                   <div key={char.id} className="relative group bg-gray-800 rounded-xl p-3 border border-gray-700 flex flex-col items-center gap-2">
                     <button 
                        onClick={() => removeCharacter(char.id)}
                        className="absolute top-2 right-2 p-1 bg-red-500/20 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition-colors"
                     >
                       <Trash2 size={14} />
                     </button>
                     <img src={char.image} alt={char.name} className="w-16 h-16 rounded-full object-cover border-2 border-yellow-500/50" />
                     <div className="text-center">
                       <p className="font-bold text-sm">{char.name}</p>
                       <p className="text-xs text-gray-400 mb-1">{char.role}</p>
                       <p className="text-xs text-yellow-500 font-mono">[{char.mbti}]</p>
                     </div>
                   </div>
                 ))}
               </div>
            )}
          </div>

          <div className="w-full h-px bg-gray-800" />

          {/* SECTION 2: Relationships (Only if 2+ characters) */}
          {characters.length >= 2 && (
            <div className="space-y-4">
               <h2 className="text-lg font-bold text-pink-500 uppercase tracking-wide flex items-center gap-2">
                <HeartHandshake size={20} /> 2. 관계 설정 (선택)
              </h2>
              
              <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700 flex flex-col md:flex-row gap-4 items-end">
                  <div className="flex-1 w-full">
                    <label className="text-xs text-gray-500 mb-1 block">누가 (From)</label>
                    <select 
                      className="w-full bg-gray-900 border border-gray-600 rounded-lg p-2"
                      value={relFrom}
                      onChange={(e) => setRelFrom(e.target.value)}
                    >
                      <option value="">선택...</option>
                      {characters.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                  </div>
                  
                  <div className="flex items-center pb-3 text-gray-500">→</div>

                  <div className="flex-1 w-full">
                    <label className="text-xs text-gray-500 mb-1 block">누구에게 (To)</label>
                    <select 
                      className="w-full bg-gray-900 border border-gray-600 rounded-lg p-2"
                      value={relTo}
                      onChange={(e) => setRelTo(e.target.value)}
                    >
                      <option value="">선택...</option>
                      {characters.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                    </select>
                  </div>

                  <div className="flex-1 w-full">
                    <label className="text-xs text-gray-500 mb-1 block">관계 (Label)</label>
                    <input 
                       type="text" 
                       className="w-full bg-gray-900 border border-gray-600 rounded-lg p-2"
                       placeholder="예: 짝사랑, 라이벌"
                       value={relLabel}
                       onChange={(e) => setRelLabel(e.target.value)}
                    />
                  </div>

                  <button 
                    onClick={addRelationship}
                    className="bg-pink-600 hover:bg-pink-500 text-white p-2.5 rounded-lg whitespace-nowrap"
                  >
                    추가
                  </button>
              </div>

              {relationships.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {relationships.map((r) => (
                    <div key={r.id} className="flex items-center gap-2 px-3 py-1 bg-gray-800 rounded-full border border-gray-600 text-xs">
                       <span className="text-blue-300">{getCharName(r.fromId)}</span>
                       <span className="text-gray-500">→</span>
                       <span className="text-pink-300">{getCharName(r.toId)}</span>
                       <span className="font-bold bg-gray-700 px-1 rounded text-white">{r.label}</span>
                       <button onClick={() => removeRelationship(r.id)} className="text-gray-500 hover:text-red-400 ml-1">×</button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="w-full h-px bg-gray-800" />

          {/* SECTION 3: Genre */}
          <div className="space-y-4">
             <h2 className="text-lg font-bold text-white uppercase tracking-wide">
              3. 영화 장르 선택
            </h2>
            <div className="flex flex-wrap gap-2">
              {genres.map((g) => (
                <button
                  key={g}
                  onClick={() => setSelectedGenre(g)}
                  className={`flex items-center px-4 py-3 rounded-lg border transition-all ${
                    selectedGenre === g
                    ? 'border-yellow-500 bg-yellow-500/10 text-yellow-400'
                    : 'border-gray-700 bg-gray-800 text-gray-400 hover:border-gray-500'
                  }`}
                >
                  <span className={`w-3 h-3 rounded-full mr-2 ${selectedGenre === g ? 'bg-yellow-500' : 'bg-gray-600'}`}></span>
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full h-px bg-gray-800" />

          {/* SECTION 4: Credits Settings */}
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-gray-300 uppercase tracking-wide flex items-center gap-2">
              <ScrollText size={20} /> 4. 엔딩 크레딧 설정 (선택)
            </h2>
            <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700 space-y-4">
               {credits.map((credit, idx) => (
                 <div key={idx} className="flex items-center gap-4">
                   <div className="flex-1">
                      <label className="text-[10px] text-gray-500 mb-1 block uppercase">역할 (Role)</label>
                      <input 
                        type="text" 
                        value={credit.role}
                        onChange={(e) => handleCreditChange(idx, 'role', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-600 rounded-lg p-2 text-white text-sm"
                        placeholder="예: 감독"
                      />
                   </div>
                   <div className="flex-1">
                      <label className="text-[10px] text-gray-500 mb-1 block uppercase">이름 (Name)</label>
                      <input 
                        type="text" 
                        value={credit.name}
                        onChange={(e) => handleCreditChange(idx, 'name', e.target.value)}
                        className="w-full bg-gray-900 border border-gray-600 rounded-lg p-2 text-white text-sm"
                        placeholder="이름 입력"
                      />
                   </div>
                   <button 
                      onClick={() => removeCreditRow(idx)}
                      className="mt-5 p-2 bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white rounded-lg transition-colors"
                      title="삭제"
                   >
                     <Trash2 size={16} />
                   </button>
                 </div>
               ))}
               
               <button
                 onClick={addCreditRow}
                 className="w-full py-2 border border-dashed border-gray-600 rounded-lg text-gray-400 hover:text-white hover:border-gray-400 hover:bg-gray-800 transition-all flex items-center justify-center gap-2 text-sm"
               >
                 <Plus size={16} /> 크레딧 추가
               </button>
            </div>
          </div>

          {/* START */}
          <button
            onClick={() => characters.length > 0 && onStart(characters, relationships, selectedGenre, credits)}
            disabled={characters.length === 0}
            className={`w-full py-5 rounded-xl font-bold text-xl transition-all transform active:scale-95 shadow-2xl ${
              characters.length > 0
              ? 'bg-gradient-to-r from-red-600 to-red-800 text-white hover:brightness-110' 
              : 'bg-gray-800 text-gray-600 cursor-not-allowed'
            }`}
          >
            {characters.length > 0 ? `${characters.length}명의 캐릭터와 영화 보기 시작` : '캐릭터를 최소 1명 등록해주세요'}
          </button>
        </div>
      </div>
    </div>
  );
};