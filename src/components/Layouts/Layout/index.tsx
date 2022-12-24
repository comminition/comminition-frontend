import Gnb from 'components/Gnb';
import Footer from 'components/UI/Footer';
import MainHeader from 'components/UI/MainHeader';
import TextHeader from 'components/UI/TextHeader';
import { Outlet, useLocation } from 'react-router-dom';

import SearchBar from '../../UI/SearchBar';

const Layout = () => {
  const path = useLocation();

  const header = {
    '/': { navigationBar: <Gnb backgroundColor="navy" />, header: <MainHeader /> },
    '/mypage': { navigationBar: <Gnb backgroundColor="navy" />, header: <TextHeader title="마이페이지" /> },
    '/info': { navigationBar: <Gnb backgroundColor="blue" />, header: <SearchBar title="정보게시판" /> },
    '/question': { navigationBar: <Gnb backgroundColor="blue" />, header: <SearchBar title="질문게시판" /> },
    '/recruit': {
      navigationBar: <Gnb backgroundColor="blue" />,
      header: <SearchBar title="사이드 프로젝트 홍보/구인" />,
    },
  }[path.pathname];

  return path.pathname === '/login' ? (
    <Outlet />
  ) : (
    <>
      {header?.navigationBar}
      {header?.header}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
