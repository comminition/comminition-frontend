import Gnb from 'components/Gnb';
import Footer from 'components/UI/Footer';
import Header from 'components/UI/Header';
import { Outlet, useLocation } from 'react-router-dom';

import SearchBar from '../../UI/SearchBar';

const Layout = () => {
  const path = useLocation();

  const navigationColor = path.pathname === '/' || path.pathname === '/mypage' ? 'navy' : 'blue';
  const header = path.pathname === '/' ? <Header /> : <SearchBar />;

  return path.pathname === '/login' ? (
    <Outlet />
  ) : (
    <>
      <Gnb backgroundColor={navigationColor} />
      {header}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
