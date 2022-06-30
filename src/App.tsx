import { Route, Routes } from 'react-router-dom';

import LoginPage from 'routes/LoginPage';

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
