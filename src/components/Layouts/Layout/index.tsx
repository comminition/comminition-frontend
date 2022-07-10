import { Outlet, useLocation } from 'react-router-dom';

import Gnb from 'components/Gnb';
import Header from 'components/UI/Header';
import Footer from 'components/UI/Footer';
import SearchBar from '../../UI/SearchBar';

const Layout = () => {
  const path = useLocation();

  const navigationColor = path.pathname === '/' ? 'navy' : 'blue';
  const header = path.pathname === '/' ? <Header /> : <SearchBar />;

  return (
    <>
      <Gnb backgroundColor={navigationColor} />
      {header}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
