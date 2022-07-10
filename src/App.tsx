import { Route, Routes } from 'react-router-dom';

import Layout from 'components/UI/Layout';
import LoginPage from 'routes/LoginPage';
import SignupPage from 'routes/SignupPage';
import MainPage from 'routes/MainPage';
import RecruitPage from 'routes/RecruitPage';
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
      <Route path="signup" element={<SignupPage />} />
    </Routes>
  );
};

export default App;
