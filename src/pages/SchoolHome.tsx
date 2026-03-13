import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SchoolHome() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col min-h-full bg-white pb-16">
      <div className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-gray-600">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-lg font-bold text-gray-900">학교 홈</h1>
        </div>
      </div>
      <div className="p-6 flex flex-col items-center text-center space-y-6">
        <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mb-4">
          <span className="text-4xl font-bold text-red-600">大</span>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">대한아카데미</h2>
        <p className="text-gray-600 leading-relaxed">
          미래를 이끌어갈 글로벌 융합 인재를 양성하는<br />
          최고의 교육 기관에 오신 것을 환영합니다.
        </p>
        
        <div className="w-full bg-gray-50 p-4 rounded-xl text-left space-y-3 mt-4">
          <h3 className="font-bold text-gray-900 mb-2">주요 학과 안내</h3>
          <ul className="text-sm text-gray-600 space-y-2 list-disc list-inside">
            <li>경영과</li>
            <li>오징어심리학과</li>
            <li>우유배달학과</li>
            <li>K-뷰티융합디자인학과</li>
            <li>수면역학과</li>
          </ul>
        </div>

        <button className="flex items-center gap-2 text-red-600 font-medium mt-8 bg-red-50 px-6 py-3 rounded-xl w-full justify-center">
          <span>공식 홈페이지로 이동</span>
          <ExternalLink size={18} />
        </button>
      </div>
    </div>
  );
}
