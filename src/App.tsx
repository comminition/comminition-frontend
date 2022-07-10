import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layouts/Layout';
import LoginPage from 'routes/LoginPage';
import SignupPage from 'routes/SignupPage';
import MainPage from 'routes/MainPage';
import RecruitPage from 'routes/RecruitPage';
import InfoPage from 'routes/InfoPage';
import QuestionPage from 'routes/QuestionPage';
import SignupLayout from 'components/Layouts/SignupLayout';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<MainPage />} />
        <Route path="recruit" element={<RecruitPage />} />
        <Route path="info" element={<InfoPage />} />
        <Route path="question" element={<QuestionPage />} />
      </Route>
      <Route path="1" element={<LoginPage />} />
      <Route path="signup" element={<SignupLayout />}>
        <Route path="1" element={<SignupPage />} />
      </Route>
    </Routes>
  );
};

export default App;
