import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function AcademicNotice() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  
  const notices = [
    { 
      id: 1, 
      type: '긴급', 
      title: '뒷산 출입 통제 안내 (원인 미상의 가스 폭발 및 화재)', 
      date: '2026.03.13',
      content: '어제 새벽 학교 뒷산에서 발생한 원인 미상의 가스 폭발 및 화재로 인해 당분간 뒷산 출입을 전면 통제합니다.\n\n학생 여러분의 안전을 위해 절대 접근하지 마시기 바랍니다. (일부 학생들이 특수효과 촬영이라고 오해하고 있으나, 실제 화재 현장이니 주의 바랍니다.)\n\n- 학생처장 -'
    },
    { 
      id: 2, 
      type: '공지', 
      title: '기숙사 냉난방기 고장 수리 지연 안내 (예산 부족)', 
      date: '2026.03.12',
      content: '현재 기숙사 A동과 B동의 냉난방기 중앙 제어 시스템이 고장난 상태입니다.\n\n학교 예산 문제로 부품 수급이 지연되고 있어 수리에 시일이 걸릴 예정입니다. 학생 여러분의 너른 양해 부탁드립니다. 당분간 개인 방한/냉방 용품 사용을 허가합니다.\n\n- 기숙사 사감실 -'
    },
    { 
      id: 3, 
      type: '안내', 
      title: '기숙사 야간 통행금지 시간 엄수 및 사감 순찰 강화', 
      date: '2026.03.10',
      content: '최근 야간에 기숙사를 무단 이탈하여 배회하는 학생들이 다수 적발되고 있습니다.\n\n금일부터 야간 통행금지(01:00 ~ 05:00)를 엄격히 적용하며, 사감의 순찰을 대폭 강화할 예정이니 학칙을 준수해 주시기 바랍니다. 적발 시 즉각 벌점이 부여됩니다.\n\n- 기숙사 사감실 -'
    },
    { 
      id: 4, 
      type: '공지', 
      title: '수면역학과 전공 필수 <숙면의 이해> 실습실 변경', 
      date: '2026.03.08',
      content: '수면역학과 1학년 전공 필수 과목인 <숙면의 이해> 실습실이 변경되어 안내드립니다.\n\n기존: 제1수면실 (일반 매트리스)\n변경: 제3수면실 (최고급 메모리폼 매트리스 구비)\n\n착오 없으시기 바라며, 개인 수면 안대 및 애착 인형은 각자 지참하시기 바랍니다.\n\n- 수면역학과 조교 -'
    },
    { 
      id: 5, 
      type: '안내', 
      title: '교내 길고양이 먹이 주기 금지 구역 안내', 
      date: '2026.03.05',
      content: '최근 교내에 길고양이가 급증하여 위생 및 소음 문제가 발생하고 있습니다.\n\n특히 학생회관 뒤편 및 기숙사 쓰레기장 주변에서는 고양이 먹이 주기를 절대 금지합니다. 지정된 구역(학생식당 옆 공터)에서만 급여해 주시기 바랍니다.\n\n- 교무처 -'
    },
  ];

  const selectedNotice = notices.find(n => n.id === selectedId);

  return (
    <div className="flex flex-col min-h-full bg-white pb-16">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => selectedId ? setSelectedId(null) : navigate(-1)} 
            className="text-gray-600"
          >
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-lg font-bold text-gray-900">학사공지</h1>
        </div>
      </div>

      {selectedNotice ? (
        <div className="p-6 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-xs font-bold px-2 py-1 rounded ${
              selectedNotice.type === '긴급' ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
            }`}>
              {selectedNotice.type}
            </span>
            <span className="text-sm text-gray-500">{selectedNotice.date}</span>
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-6 leading-snug">
            {selectedNotice.title}
          </h2>
          <div className="w-full h-px bg-gray-100 mb-6"></div>
          <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {selectedNotice.content}
          </div>
        </div>
      ) : (
        <div className="divide-y divide-gray-100">
          {notices.map((notice) => (
            <div 
              key={notice.id} 
              onClick={() => setSelectedId(notice.id)}
              className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-xs font-bold px-2 py-1 rounded ${
                  notice.type === '긴급' ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  {notice.type}
                </span>
                <span className="text-xs text-gray-400">{notice.date}</span>
              </div>
              <h3 className="font-medium text-gray-900">{notice.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
