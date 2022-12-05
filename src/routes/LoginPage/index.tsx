import classNames from 'classnames/bind';
import styles from './loginPage.module.scss';
import LoginButton from 'components/UI/Buttons/LoginButton';
import comminition from 'apis/comminition';

const cx = classNames.bind(styles);

const LoginPage = () => {
  const handleClick = () => {
    window.location.assign(process.env.REACT_APP_OAUTH_URI as string);
  };

  return (
    <div className={cx('loginPage')}>
      <div className={cx('loginForm')}>
        <h1>
          <mark>MJU</mark> Comminition
        </h1>
        <h2>로그인</h2>
        <LoginButton onClick={handleClick} />
      </div>
    </div>
  );
};

export default LoginPage;
