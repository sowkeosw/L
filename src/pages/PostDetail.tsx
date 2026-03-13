import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, UserCircle2, ThumbsUp, MessageSquare, MoreVertical, Star } from 'lucide-react';
import { POSTS } from '../data/mockData';

export default function PostDetail() {
  const { postId } = useParams();
  const navigate = useNavigate();
  
  const post = POSTS.find(p => p.id === Number(postId));

  if (!post) {
    return <div className="p-8 text-center">게시물을 찾을 수 없습니다.</div>;
  }

  return (
    <div className="flex flex-col min-h-full bg-white pb-16">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="text-gray-600">
            <ArrowLeft size={24} />
          </button>
          <h1 className="text-lg font-bold text-gray-900">{post.board}</h1>
        </div>
      </div>

      <div className="p-4">
        {/* Author Info */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              <UserCircle2 size={24} />
            </div>
            <div>
              <div className="font-bold text-gray-900">{post.author}</div>
              <div className="text-xs text-gray-500">{post.time}</div>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreVertical size={20} />
          </button>
        </div>

        {/* Content */}
        <h2 className="text-xl font-bold text-gray-900 mb-4">{post.title}</h2>
        <p className="text-gray-800 leading-relaxed mb-6 whitespace-pre-wrap">{post.content}</p>

        {/* Actions */}
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
          <button className="flex items-center gap-1 text-red-500 bg-red-50 px-3 py-1.5 rounded-lg font-medium">
            <ThumbsUp size={16} /> 공감 {post.likes}
          </button>
          <button className="flex items-center gap-1 text-blue-500 bg-blue-50 px-3 py-1.5 rounded-lg font-medium">
            <Star size={16} /> 스크랩
          </button>
        </div>

        {/* Comments Section */}
        <div className="border-t border-gray-100 pt-4">
          <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
            <MessageSquare size={18} /> 댓글 {post.comments}
          </h3>
          
          {post.commentsList.map((comment) => (
            <div key={comment.id} className="py-3 border-b border-gray-50">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-sm text-gray-900">{comment.author}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <span>{comment.time}</span>
                  <button><MoreVertical size={14} /></button>
                </div>
              </div>
              <p className="text-sm text-gray-800">{comment.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Comment Input */}
      <div className="fixed bottom-16 w-full max-w-md bg-white border-t border-gray-200 p-3 flex items-center gap-2 z-10">
        <input 
          type="text" 
          placeholder="댓글을 입력하세요." 
          className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <button className="bg-red-600 text-white rounded-full p-2 hover:bg-red-700">
          <MessageSquare size={18} />
        </button>
      </div>
    </div>
  );
}
