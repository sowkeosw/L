import { ArrowLeft, Calendar as CalendarIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AcademicCalendar() {
  const navigate = useNavigate();
  
  const calendar = [
    { month: '3월', events: ['3/2: 입학식 및 1학기 개강', '3/13~15: 신입생 OT & MT', '3/18~22: 동아리 가두모집'] },
    { month: '4월', events: ['4/21~25: 1학기 중간고사'] },
    { month: '5월', events: ['5/14~16: 학교 축제'] },
    { month: '6월', events: ['6/16~20: 1학기 기말고사', '6/22: 하계 방학 시작'] },
    { month: '7월', events: ['7/25~29: 총학생회 주관 농촌봉사활동'] },
    { month: '8월', events: ['8/12~14: 2학기 수강신청'] },
    { month: '9월', events: ['9/1: 2학기 개강', '9/26~28: 가을 MT'] },
    { month: '10월', events: ['10/10: 학과 대항 체육대회', '10/20~24: 2학기 중간고사'] },
    { month: '11월', events: ['11/12~14: 학술제 / 논문 발표'] },
    { month: '12월', events: ['12/15~19: 2학기 기말고사', '12/22: 동계 방학 시작'] },
  ];

  return (
    <div className="flex flex-col min-h-full bg-white pb-16">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-gray-600">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-lg font-bold text-gray-900">학사일정</h1>
        </div>
      </div>
      <div className="p-4 space-y-6">
        <div className="bg-red-50 p-4 rounded-xl flex items-center gap-3 text-red-800 mb-2">
          <CalendarIcon className="text-red-600" />
          <span className="font-medium">2026학년도 1학기 학사일정</span>
        </div>
        
        <div className="space-y-4">
          {calendar.map((item, index) => (
            <div key={index} className="flex gap-4">
              <div className="w-12 pt-1 font-bold text-gray-900 text-lg">{item.month}</div>
              <div className="flex-1 border-l-2 border-gray-100 pl-4 pb-4">
                <ul className="space-y-3">
                  {item.events.map((event, i) => (
                    <li key={i} className="text-gray-700 relative before:content-[''] before:absolute before:-left-[21px] before:top-2 before:w-2 before:h-2 before:bg-red-400 before:rounded-full">
                      {event}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
