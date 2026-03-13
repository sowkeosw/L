import { Bell, MessageCircle } from 'lucide-react';

export default function Notifications() {
  const notifications = [
    {
      id: 1,
      sender: '먕먕이',
      time: '방금 전',
      message: '마법 열쇠가 있어야만 변신이 가능하다먕! 간수 잘해라먕! 절대 마법 쓰는 걸 일반인들한테 들키지 말아라먕!',
      isRead: false,
      profileImage: 'https://raw.githubusercontent.com/sowkeosw/M/refs/heads/main/%EB%A8%95%EB%A8%95.png'
    }
  ];

  return (
    <div className="min-h-full bg-gray-50 pb-20">
      <div className="bg-white border-b border-gray-100 px-4 py-3 sticky top-0 z-10">
        <h1 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <Bell size={20} className="text-pink-500" />
          알림
        </h1>
      </div>

      <div className="divide-y divide-gray-100">
        {notifications.length > 0 ? (
          notifications.map((notif) => (
            <div 
              key={notif.id} 
              className={`p-4 flex gap-3 ${notif.isRead ? 'bg-white' : 'bg-pink-50/50'}`}
            >
              <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0 overflow-hidden border border-gray-100">
                {notif.profileImage ? (
                  <img src={notif.profileImage} alt={notif.sender} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-pink-100 text-pink-500">
                    <MessageCircle size={20} />
                  </div>
                )}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-bold text-sm text-gray-900">{notif.sender}</span>
                  <span className="text-xs text-gray-400">{notif.time}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {notif.message}
                </p>
              </div>
              {!notif.isRead && (
                <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0"></div>
              )}
            </div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-gray-500">
            <Bell size={48} className="mb-4 text-gray-300" />
            <p>새로운 알림이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
