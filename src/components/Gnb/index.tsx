import classNames from 'classnames/bind';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from 'redux/authSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import styles from './gnb.module.scss';

interface IProp {
  backgroundColor: 'blue' | 'navy';
}

const cx = classNames.bind(styles);

const Gnb = ({ backgroundColor }: IProp) => {
  const store = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (!store.accessToken) navigate('/login');
  }, [navigate, store.accessToken]);

  return (
    <nav className={cx('nav', backgroundColor)}>
      <h1 className={styles.title}>MJU Comminition</h1>
      <ul className={styles.menu}>
        <li className={styles.link}>
          <a href="#">마이 페이지</a>
        </li>
        <li className={styles.link}>
          <a href="#">설정</a>
        </li>
        <li className={styles.link}>
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
