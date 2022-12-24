import classNames from 'classnames/bind';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { logout } from 'redux/authSlice';
import { useAppDispatch } from 'redux/hooks';

import styles from './gnb.module.scss';

interface IProp {
  backgroundColor: 'blue' | 'navy';
}

const { localStorage } = window;

const cx = classNames.bind(styles);

const Gnb = ({ backgroundColor }: IProp) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className={cx('nav', backgroundColor)}>
      <h1>
        <Link to="/" className={cx('title')}>
          MJU Comminition
        </Link>
      </h1>
      <ul className={cx('menu')}>
        <li className={cx('link')}>
          <NavLink to="/mypage">마이 페이지</NavLink>
        </li>
        <li className={cx('link')}>
          <a href="#">설정</a>
        </li>
        <li className={cx('link')}>
          <a href="#">알림</a>
        </li>
        <button type="button" className={cx('link', 'loginBtn')} onClick={handleLogout}>
          로그아웃
        </button>
      </ul>
    </nav>
  );
};

export default Gnb;
