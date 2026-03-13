import { useParams, Link, useNavigate } from 'react-router-dom';
import { MessageSquare, ThumbsUp, ArrowLeft, Edit3 } from 'lucide-react';
import { POSTS } from '../data/mockData';

export default function BoardDetail() {
  const { boardId } = useParams();
  const navigate = useNavigate();
  
  // Map boardId to actual board name for filtering
  const boardNameMap: Record<string, string> = {
    free: '자유게시판',
    secret: '비밀게시판',
    freshman: '새내기게시판',
    lost: '분실물게시판',
    info: '정보게시판',
    market: '장터게시판',
  };
  
  const boardName = boardNameMap[boardId || ''] || '게시판';
  const boardPosts = POSTS.filter(post => post.board === boardName);

  return (
    <div className="flex flex-col min-h-full bg-white pb-16">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-gray-600">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-lg font-bold text-gray-900">{boardName}</h1>
        </div>
      </div>

      {/* Post List */}
      <div className="divide-y divide-gray-100 flex-1">
        {boardPosts.length > 0 ? (
          boardPosts.map((post) => (
            <Link key={post.id} to={`/post/${post.id}`} className="block p-4 hover:bg-gray-50 transition-colors">
              <h3 className="font-medium text-gray-900 mb-1">{post.title}</h3>
              <p className="text-sm text-gray-500 line-clamp-2 mb-2">{post.content}</p>
              <div className="flex items-center justify-between text-xs text-gray-400">
                <div className="flex items-center gap-2">
                  <span>{post.time}</span>
                  <span>|</span>
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 text-red-500"><ThumbsUp size={12} /> {post.likes}</span>
                  <span className="flex items-center gap-1 text-blue-500"><MessageSquare size={12} /> {post.comments}</span>
                </div>
              </div>
            </Link>
          ))
        ) : (
          <div className="p-8 text-center text-gray-500">
            게시물이 없습니다.
          </div>
        )}
      </div>

      {/* FAB */}
      <button className="fixed bottom-20 right-4 w-14 h-14 bg-red-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-red-700 transition-colors">
        <Edit3 size={24} />
      </button>
    </div>
  );
}
