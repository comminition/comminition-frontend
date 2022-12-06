import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layouts/Layout';
import LoginPage from 'routes/LoginPage';
import MainPage from 'routes/MainPage';
import RecruitPage from 'routes/RecruitPage';
import InfoPage from 'routes/InfoPage';
import QuestionPage from 'routes/QuestionPage';
import MyPage from 'routes/MyPage';
import { Toaster } from 'react-hot-toast';
import RequireAuth from 'components/Router/RequireAuth';
import RedirectPage from 'routes/LoginPage/RedirectPage';

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
