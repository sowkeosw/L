import { Link } from 'react-router-dom';
import { Pin, Star } from 'lucide-react';

export default function BoardList() {
  const boards = [
    { id: 'free', name: '자유게시판', pinned: true },
    { id: 'secret', name: '비밀게시판', pinned: true },
    { id: 'freshman', name: '새내기게시판', pinned: true },
    { id: 'lost', name: '분실물게시판', pinned: false },
    { id: 'info', name: '정보게시판', pinned: false },
    { id: 'market', name: '장터게시판', pinned: false },
  ];

  return (
    <div className="p-4 space-y-6">
      <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50 flex items-center gap-2">
          <Pin size={18} className="text-gray-600" />
          <h2 className="font-bold text-gray-900">즐겨찾는 게시판</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {boards.filter(b => b.pinned).map(board => (
            <Link key={board.id} to={`/board/${board.id}`} className="flex items-center justify-between p-4 hover:bg-gray-50">
              <span className="font-medium text-gray-900">{board.name}</span>
              <Star size={18} className="text-yellow-400 fill-yellow-400" />
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 bg-gray-50">
          <h2 className="font-bold text-gray-900">일반 게시판</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {boards.filter(b => !b.pinned).map(board => (
            <Link key={board.id} to={`/board/${board.id}`} className="flex items-center justify-between p-4 hover:bg-gray-50">
              <span className="font-medium text-gray-900">{board.name}</span>
              <Star size={18} className="text-gray-300" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
