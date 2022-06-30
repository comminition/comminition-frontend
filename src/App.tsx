import { Route, Routes } from 'react-router-dom';

import LoginPage from 'routes/LoginPage';
import MainPage from 'routes/MainPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
