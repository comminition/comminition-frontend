import Layout from 'components/UI/Layout';
import { Route, Routes } from 'react-router-dom';

import LoginPage from 'routes/LoginPage';
import MainPage from 'routes/MainPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<MainPage />} />
      </Route>
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
