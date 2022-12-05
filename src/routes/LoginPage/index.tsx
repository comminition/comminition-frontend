import classNames from 'classnames/bind';
import styles from './loginPage.module.scss';
import LoginButton from 'components/UI/Buttons/LoginButton';

const cx = classNames.bind(styles);

const LoginPage = () => {
  return (
    <div className={cx('loginPage')}>
      <div className={cx('loginForm')}>
        <h1>
          <mark>MJU</mark> Comminition
        </h1>
        <h2>로그인</h2>
        <LoginButton />
      </div>
    </div>
  );
};

export default LoginPage;
