import Layout from 'components/UI/Layout';
import { Route, Routes } from 'react-router-dom';
import InfoPage from 'routes/InfoPage';

import LoginPage from 'routes/LoginPage';
import MainPage from 'routes/MainPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<MainPage />} />
        <Route path="info" element={<InfoPage />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
