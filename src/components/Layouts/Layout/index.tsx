import { Outlet, useLocation } from 'react-router-dom';

import Gnb from 'components/Gnb';
import Header from 'components/UI/Header';
import Footer from 'components/UI/Footer';
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
