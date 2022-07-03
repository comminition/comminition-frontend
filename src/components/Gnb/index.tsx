import classNames from 'classnames/bind';

import styles from './gnb.module.scss';

const cx = classNames.bind(styles);

const Gnb = () => {
  return (
    <nav className={styles.nav}>
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
        <li className={cx('link', 'loginBtn')}>
          <a href="#">로그아웃</a>
        </li>
      </ul>
    </nav>
  );
};

export default Gnb;
