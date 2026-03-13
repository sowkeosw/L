import { Link } from 'react-router-dom';
import { MessageSquare, ThumbsUp, ChevronRight } from 'lucide-react';
import { POSTS } from '../data/mockData';

export default function Home() {
  const hotPosts = [...POSTS].sort((a, b) => b.likes - a.likes).slice(0, 2);
  const recentPosts = POSTS.slice(0, 4);

  return (
    <div className="p-4 space-y-6">
      {/* Quick Links */}
      <div className="grid grid-cols-4 gap-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
        {[
          { name: '학교 홈', path: '/school-home' },
          { name: '학사공지', path: '/academic-notice' },
          { name: '학사일정', path: '/academic-calendar' },
          { name: '웹메일', path: '/web-mail' }
        ].map((link, i) => (
          <Link key={i} to={link.path} className="flex flex-col items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center text-red-600 font-bold">
              {link.name[0]}
            </div>
            <span className="text-xs text-gray-600">{link.name}</span>
          </Link>
        ))}
      </div>

      {/* Hot Posts */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="font-bold text-gray-900">실시간 인기 글</h2>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
        <div className="divide-y divide-gray-100">
          {hotPosts.map((post) => (
            <Link key={post.id} to={`/post/${post.id}`} className="block p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-semibold text-red-600">{post.board}</span>
                <span className="text-xs text-gray-400">{post.time}</span>
              </div>
              <h3 className="font-medium text-gray-900 mb-1 line-clamp-1">{post.title}</h3>
              <p className="text-sm text-gray-500 line-clamp-1 mb-2">{post.content}</p>
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span className="flex items-center gap-1 text-red-500"><ThumbsUp size={12} /> {post.likes}</span>
                <span className="flex items-center gap-1 text-blue-500"><MessageSquare size={12} /> {post.comments}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Board Previews */}
      <section className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center">
          <h2 className="font-bold text-gray-900">최근 게시물</h2>
          <Link to="/board" className="text-red-600 text-sm font-medium">더보기</Link>
        </div>
        <div className="divide-y divide-gray-100">
          {recentPosts.map((post) => (
            <Link key={post.id} to={`/post/${post.id}`} className="block p-4 hover:bg-gray-50 transition-colors">
              <h3 className="font-medium text-gray-900 mb-1 line-clamp-1">{post.title}</h3>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{post.board}</span>
                <div className="flex items-center gap-2 text-xs">
                  <span className="flex items-center gap-1 text-red-500"><ThumbsUp size={12} /> {post.likes}</span>
                  <span className="flex items-center gap-1 text-blue-500"><MessageSquare size={12} /> {post.comments}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
