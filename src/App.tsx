import Layout from 'components/UI/Layout';
import { Route, Routes } from 'react-router-dom';
import RecruitPage from 'routes/RecruitPage';

import LoginPage from 'routes/LoginPage';
import MainPage from 'routes/MainPage';
import InfoPage from 'routes/InfoPage';
import QuestionPage from 'routes/QuestionPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<MainPage />} />
        <Route path="recruit" element={<RecruitPage />} />
        <Route path="info" element={<InfoPage />} />
        <Route path="question" element={<QuestionPage />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
