import { ArrowLeft, Mail, Search, UserCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function WebMail() {
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<number | null>(null);
  
  const mails = [
    { 
      id: 1, 
      sender: '학생처', 
      title: '2026학년도 1학기 등록금 납부 안내', 
      date: '10:30', 
      isRead: false,
      content: '안녕하세요, 학생처입니다.\n\n2026학년도 1학기 등록금 납부 기간은 2월 20일부터 2월 28일까지입니다.\n기한 내에 납부하지 않을 경우 미등록 제적 처리될 수 있으니 유의하시기 바랍니다.\n\n자세한 납부 방법 및 가상계좌는 종합정보시스템에서 확인 가능합니다.'
    },
    { 
      id: 2, 
      sender: '기숙사 사감실', 
      title: '[경고] 야간 무단 외출 및 통금 위반 적발', 
      date: '어제', 
      isRead: false,
      content: '기숙사 사감실입니다.\n\n귀하는 어제 새벽 2시경 기숙사 창문을 통해 무단 외출한 사실이 외부 CCTV에 적발되었습니다.\n금일 오후 5시까지 사감실로 출석하여 경위서를 작성하시기 바랍니다.\n\n(벌점 5점 부과 예정이며, 누적 15점 시 퇴사 조치됩니다.)'
    },
    { 
      id: 3, 
      sender: '학생회', 
      title: '이번 주 학생회 회의 취소 안내 (사유: 회장 수면)', 
      date: '03.11', 
      isRead: true,
      content: '학생회 임원 여러분께 알립니다.\n\n금주 예정되었던 정기 학생회 회의는 한태형 학생회장의 만성 수면 부족 및 기상 거부로 인해 부득이하게 취소되었습니다.\n\n안건은 다음 주 회의로 이월됩니다. 각 부서장들은 제출 서류를 제 책상 위에 올려두시기 바랍니다.\n\n- 부회장 올림 -'
    },
    { 
      id: 4, 
      sender: '코스프레 동아리', 
      title: '신입 부원 모집! (마법소녀 컨셉 대환영)', 
      date: '03.10', 
      isRead: true,
      content: '안녕하세요! 대한아카데미 코스프레 동아리 \'코스모스\'입니다!\n\n이번 학기 신입 부원을 대모집합니다.\n특히 최근 유행하는 마법소녀 컨셉 대환영!! 진짜 마법소녀처럼 리얼한 지팡이나 의상을 직접 만들어오시는 분은 면접 프리패스입니다!\n\n관심 있으신 분들은 학생회관 304호로 찾아와주세요~ 많은 지원 부탁드려요!'
    },
    { 
      id: 5, 
      sender: '교무처', 
      title: '캠퍼스 내 불법 폭죽 및 특수효과 사용 엄금 안내', 
      date: '03.05', 
      isRead: true,
      content: '최근 야간에 캠퍼스 곳곳에서 불법 폭죽을 터뜨리거나 정체불명의 번쩍이는 특수효과를 사용하는 사례가 빈번하게 발생하고 있습니다.\n\n이는 심각한 면학 분위기 저해 및 화재 위험 행위이므로, 적발 시 엄중 징계 조치하겠습니다.\n학생 여러분의 각별한 주의를 당부드립니다.\n\n- 교무처장 -'
    },
  ];

  const selectedMail = mails.find(m => m.id === selectedId);

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
          <h1 className="text-lg font-bold text-gray-900">웹메일</h1>
        </div>
        {!selectedId && (
          <button className="text-gray-500">
            <Search size={20} />
          </button>
        )}
      </div>
      
      {selectedMail ? (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-200">
          <div className="p-5 border-b border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-4 leading-snug">
              {selectedMail.title}
            </h2>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <UserCircle2 size={36} className="text-gray-300" />
                <div>
                  <div className="font-medium text-gray-900 text-sm">{selectedMail.sender}</div>
                  <div className="text-xs text-gray-500">받는사람: 나</div>
                </div>
              </div>
              <span className="text-xs text-gray-400">{selectedMail.date}</span>
            </div>
          </div>
          <div className="p-6 text-gray-800 leading-relaxed whitespace-pre-wrap text-sm">
            {selectedMail.content}
          </div>
        </div>
      ) : (
        <div className="divide-y divide-gray-100">
          {mails.map((mail) => (
            <div 
              key={mail.id} 
              onClick={() => setSelectedId(mail.id)}
              className={`p-4 flex gap-3 cursor-pointer hover:bg-gray-50 transition-colors ${!mail.isRead ? 'bg-red-50/30' : ''}`}
            >
              <div className="mt-1">
                <Mail size={20} className={!mail.isRead ? 'text-red-500' : 'text-gray-400'} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <span className={`text-sm ${!mail.isRead ? 'font-bold text-gray-900' : 'text-gray-600'}`}>
                    {mail.sender}
                  </span>
                  <span className="text-xs text-gray-400">{mail.date}</span>
                </div>
                <h3 className={`text-sm ${!mail.isRead ? 'font-bold text-gray-900' : 'text-gray-700'}`}>
                  {mail.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
