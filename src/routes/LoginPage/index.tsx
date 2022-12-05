import useInput from 'hooks/useInput';
import classNames from 'classnames/bind';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { login } from 'redux/authSlice';
import { FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import TextField from '../../components/UI/TextField';

import styles from './loginPage.module.scss';
import LoginButton from 'components/UI/Buttons/LoginButton';

const cx = classNames.bind(styles);

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const store = useAppSelector((state) => state.login);
  const navigate = useNavigate();

  const {
    handleInputChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    isTouched: isEmailTouched,
    isValid: isEmailValid,
    value: enteredEmail,
  } = useInput('email');
  const {
    handleInputChange: handlePasswordChange,
    handleBlur: handlePasswordBlur,
    isTouched: isPasswordTouched,
    isValid: isPasswordValid,
    value: enteredPassword,
  } = useInput('password');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isEmailValid && isPasswordValid) {
      dispatch(login({ email: enteredEmail, password: enteredPassword }));
    }
  };

  const handleSignupButton = () => {
    navigate('/signup/getInfo');
  };

  useEffect(() => {
    if (store.isAuthenticated) navigate('/');
  }, [navigate, store.isAuthenticated]);

  return (
    <div className={cx('loginPage')}>
      <form className={cx('loginForm')} onSubmit={handleSubmit}>
        <h1>
          <mark>MJU</mark> Comminition
        </h1>
        <h2>로그인</h2>
        <LoginButton />
      </form>
    </div>
  );
};

export default LoginPage;
