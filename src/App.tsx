import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import BoardList from './pages/BoardList';
import BoardDetail from './pages/BoardDetail';
import PostDetail from './pages/PostDetail';
import Characters from './pages/Characters';
import Notifications from './pages/Notifications';
import SchoolHome from './pages/SchoolHome';
import AcademicNotice from './pages/AcademicNotice';
import AcademicCalendar from './pages/AcademicCalendar';
import WebMail from './pages/WebMail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="board" element={<BoardList />} />
          <Route path="board/:boardId" element={<BoardDetail />} />
          <Route path="post/:postId" element={<PostDetail />} />
          <Route path="characters" element={<Characters />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="school-home" element={<SchoolHome />} />
          <Route path="academic-notice" element={<AcademicNotice />} />
          <Route path="academic-calendar" element={<AcademicCalendar />} />
          <Route path="web-mail" element={<WebMail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
