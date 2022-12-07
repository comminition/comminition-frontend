import Layout from 'components/Layouts/Layout';
import RequireAuth from 'components/Router/RequireAuth';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import InfoPage from 'routes/InfoPage';
import LoginPage from 'routes/LoginPage';
import RedirectPage from 'routes/LoginPage/RedirectPage';
import MainPage from 'routes/MainPage';
import MyPage from 'routes/MyPage';
import QuestionPage from 'routes/QuestionPage';
import RecruitPage from 'routes/RecruitPage';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<RequireAuth />}>
            <Route path="" element={<MainPage />} />
            <Route path="recruit" element={<RecruitPage />} />
            <Route path="info" element={<InfoPage />} />
            <Route path="question" element={<QuestionPage />} />
            <Route path="mypage" element={<MyPage />} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="login/github" element={<RedirectPage />} />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
