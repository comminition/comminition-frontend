import { Route, Routes, useLocation } from 'react-router-dom';

import Layout from 'components/Layouts/Layout';
import LoginPage from 'routes/LoginPage';
import MainPage from 'routes/MainPage';
import RecruitPage from 'routes/RecruitPage';
import InfoPage from 'routes/InfoPage';
import QuestionPage from 'routes/QuestionPage';
import MyPage from 'routes/MyPage';
import { Toaster } from 'react-hot-toast';

const App = () => {
  const location = useLocation();

  return (
    <>
      <Routes location={location}>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<MainPage />} />
          <Route path="recruit" element={<RecruitPage />} />
          <Route path="info" element={<InfoPage />} />
          <Route path="question" element={<QuestionPage />} />
          <Route path="mypage" element={<MyPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
