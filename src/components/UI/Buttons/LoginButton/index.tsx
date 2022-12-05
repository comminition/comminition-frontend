import styles from './loginButton.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

interface ILoginButton {
  onClick?: () => void;
}

const LoginButton = ({ onClick }: ILoginButton) => {
  return (
    <button type="button" className={cx('loginBtn')} onClick={onClick}>
      Github로 로그인
    </button>
  );
};

export default LoginButton;
