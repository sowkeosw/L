import { useState } from 'react';
import { Search, ChevronDown, ChevronUp, AlertTriangle, Sparkles, X } from 'lucide-react';
import { CHARACTERS } from '../data/mockData';

export default function Characters() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredCharacters = CHARACTERS.filter(char => 
    char.name.includes(searchTerm) || 
    char.department.includes(searchTerm) ||
    char.tags.some(tag => tag.includes(searchTerm))
  );

  return (
    <div className="p-4 space-y-6 bg-gray-50 min-h-full">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4">
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle size={24} className="text-red-500" />
          <h1 className="text-xl font-bold text-gray-900">캠퍼스 요주의 인물</h1>
        </div>
        <p className="text-sm text-gray-500 mb-4">
          대한아카데미에서 주의해야 할 인물들의 목록입니다. (비공식)
        </p>
        
        {/* Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="이름, 학과, 태그 검색..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-gray-100 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <Search size={18} className="absolute left-3 top-2.5 text-gray-400" />
        </div>
      </div>

      {/* Character List */}
      <div className="space-y-4">
        {filteredCharacters.map((char) => {
          const isExpanded = expandedId === char.id;
          
          return (
            <div key={char.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-200">
              {/* Card Header (Always visible) */}
              <div 
                className="p-4 flex items-start gap-4 cursor-pointer hover:bg-gray-50"
                onClick={() => setExpandedId(isExpanded ? null : char.id)}
              >
                {/* Avatar Placeholder */}
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-50 rounded-2xl flex items-center justify-center flex-shrink-0 border border-red-100 overflow-hidden">
                  {char.profileImage ? (
                    <img src={char.profileImage} alt={char.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  ) : (
                    <span className="text-2xl font-bold text-red-400">{char.name[0]}</span>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h2 className="text-lg font-bold text-gray-900">{char.name}</h2>
                    {isExpanded ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
                  </div>
                  <p className="text-xs font-medium text-red-600 mb-2">{char.department}</p>
                  <div className="flex flex-wrap gap-1">
                    {char.tags.map(tag => (
                      <span key={tag} className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md text-[10px] font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Expanded Details */}
              {isExpanded && (
                <div className="px-4 pb-4 pt-2 border-t border-gray-50 bg-gray-50/50">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xs font-bold text-gray-500 mb-1">기본 정보</h3>
                      <p className="text-sm text-gray-800">나이: {char.age} / 키: {char.height}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-xs font-bold text-gray-500 mb-1">외모 및 성격</h3>
                      <p className="text-sm text-gray-800 leading-relaxed">{char.appearance}</p>
                      <p className="text-sm text-gray-800 mt-1 font-medium">성격: {char.personality}</p>
                    </div>

                    <div>
                      <h3 className="text-xs font-bold text-gray-500 mb-1">상세 설명</h3>
                      <p className="text-sm text-gray-800 leading-relaxed">{char.description}</p>
                    </div>

                    <div className="bg-red-50 rounded-xl p-3 border border-red-100">
                      <h3 className="text-xs font-bold text-red-800 mb-1 flex items-center gap-1">
                        <Sparkles size={12} /> 기밀 정보 (열람 주의)
                      </h3>
                      <p className="text-sm text-red-900 leading-relaxed">{char.secret}</p>
                    </div>

                    {/* Image Gallery */}
                    <div className="pt-2">
                      <h3 className="text-xs font-bold text-gray-500 mb-2">관련 사진 (목격담)</h3>
                      <div className="grid grid-cols-3 gap-2">
                        {char.galleryImages ? (
                          char.galleryImages.map((imgUrl, idx) => (
                            <div 
                              key={idx} 
                              className="aspect-square rounded-lg overflow-hidden bg-gray-200 border border-gray-100 shadow-sm cursor-pointer"
                              onClick={() => setSelectedImage(imgUrl)}
                            >
                              <img 
                                src={imgUrl} 
                                alt={`${char.name} 사진 ${idx + 1}`}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          ))
                        ) : (
                          (char.name === '먕먕이' ? [1] : [1, 2, 3, 4, 5, 6]).map((num) => (
                            <div 
                              key={num} 
                              className="aspect-square rounded-lg overflow-hidden bg-gray-200 border border-gray-100 shadow-sm cursor-pointer"
                              onClick={() => setSelectedImage(`https://picsum.photos/seed/${char.imageSeed}-${num}/800/800`)}
                            >
                              <img 
                                src={`https://picsum.photos/seed/${char.imageSeed}-${num}/400/400`} 
                                alt={`${char.name} 사진 ${num}`}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        
        {filteredCharacters.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            검색 결과가 없습니다.
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-3xl w-full max-h-[90vh] flex items-center justify-center" onClick={e => e.stopPropagation()}>
            <button 
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <img 
              src={selectedImage} 
              alt="Enlarged view" 
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </div>
  );
}
