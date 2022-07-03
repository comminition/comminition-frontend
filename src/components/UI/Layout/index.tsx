import { Outlet } from 'react-router-dom';

import Gnb from 'components/Gnb';
import Header from 'components/UI/Header';
import Footer from 'components/UI/Footer';

const Layout = () => {
  return (
    <>
      <Gnb />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
