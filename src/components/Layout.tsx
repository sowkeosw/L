import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Home, List, Bell, User, Search } from 'lucide-react';

export default function Layout() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { path: '/', icon: Home, label: '홈' },
    { path: '/board', icon: List, label: '게시판' },
    { path: '/characters', icon: User, label: '인물사전' },
    { path: '/notifications', icon: Bell, label: '알림' },
  ];

  return (
    <div className="flex flex-col h-screen bg-gray-50 max-w-md mx-auto shadow-xl relative overflow-hidden">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between sticky top-0 z-10">
        <div className="flex flex-col">
          <span className="text-xs text-red-600 font-bold">대한아카데미</span>
          <span className="text-xl font-bold text-gray-900">대나무숲</span>
        </div>
        <div className="flex gap-4">
          <button className="text-gray-500 hover:text-gray-900">
            <Search size={24} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto pb-16">
        <Outlet />
      </main>

      {/* Bottom Navigation */}
      <nav className="bg-white border-t border-gray-200 fixed bottom-0 w-full max-w-md flex justify-around items-center h-16 z-10">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path));
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                isActive ? 'text-gray-900' : 'text-gray-400'
              }`}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
