import { Bell } from 'lucide-react';

export default function Notifications() {
  return (
    <div className="flex flex-col items-center justify-center h-full bg-white text-gray-500">
      <Bell size={48} className="mb-4 text-gray-300" />
      <p>새로운 알림이 없습니다.</p>
    </div>
  );
}
