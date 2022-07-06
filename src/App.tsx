import { Route, Routes } from 'react-router-dom';

import LoginPage from 'routes/LoginPage';
import MainPage from 'routes/MainPage';
import InfoPage from 'routes/InfoPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="info" element={<InfoPage />} />
    </Routes>
  );
};

export default App;
