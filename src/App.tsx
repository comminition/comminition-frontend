import Layout from 'components/Layouts/Layout';
import RequireAuth from 'components/Router/RequireAuth';
import LoadingSpinner from 'components/UI/LoadingSpinner';
import { Suspense } from 'react';
import { Route, Routes, ScrollRestoration } from 'react-router-dom';
import { ToastContainer, Zoom } from 'react-toastify';
import InfoPage from 'routes/InfoPage';
import LoginPage from 'routes/LoginPage';
import RedirectPage from 'routes/LoginPage/RedirectPage';
import MainPage from 'routes/MainPage';
import MyPage from 'routes/MyPage';
import QuestionPage from 'routes/QuestionPage';
import MyPage from 'routes/MyPage';

const App = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<RequireAuth />}>
            <Route path="" element={<MainPage />} />
            <Route path="recruit" element={<RecruitPage />} />
            <Route path="info" element={<InfoPage />} />
            <Route path="info/post" element={<PostPage />} />
        <Route path="info/read" element={<ReadPage />} />
        <Route path="question" element={<QuestionPage />} />
            <Route path="mypage" element={<MyPage />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="login/github" element={<RedirectPage />} />
        </Route>
      </Routes>
      <ScrollRestoration />
      <ToastContainer autoClose={1000} limit={1} transition={Zoom} />
    </Suspense>
  );
};

export default App;
