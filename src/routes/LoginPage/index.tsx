import useInput from 'hooks/useInput';
import classNames from 'classnames/bind';
import { useAppDispatch } from 'redux/hooks';
import { login } from 'redux/authSlice';

import TextField from '../../components/UI/TextField';

import styles from './loginPage.module.scss';
import { FormEvent } from 'react';

const cx = classNames.bind(styles);

const LoginPage = () => {
  const dispatch = useAppDispatch();

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

  return (
    <div className={cx('loginPage')}>
      <form className={cx('loginForm')} onSubmit={handleSubmit}>
        <h1>
          <mark>MJU</mark> Comminition
        </h1>
        <h2>로그인</h2>
        <TextField
          type="email"
          placeholder="학교 계정 메일"
          required
          ariaLabel="email"
          marginBottom="15px"
          textChangeHandler={handleEmailChange}
          blurHandler={handleEmailBlur}
          isTouched={isEmailTouched}
          isValid={isEmailValid}
          showIcon
        />
        <TextField
          type="password"
          placeholder="비밀번호"
          required
          ariaLabel="password"
          marginBottom="30px"
          minLength={8}
          textChangeHandler={handlePasswordChange}
          blurHandler={handlePasswordBlur}
          isTouched={isPasswordTouched}
          isValid={isPasswordValid}
          showIcon
        />
        <button type="submit" className={cx('loginBtn')}>
          로그인
        </button>
        <div className={cx('loginMenu')}>
          <button type="button" className={cx('btn')}>
            아이디 찾기
          </button>
          <div className={cx('divider')} />
          <button type="button" className={cx('btn')}>
            비밀번호 찾기
          </button>
          <div className={cx('divider')} />
          <button type="button" className={cx('btn')}>
            회원가입
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
