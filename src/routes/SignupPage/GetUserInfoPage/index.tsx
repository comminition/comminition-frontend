import classNames from 'classnames/bind';
import TextField from 'components/UI/TextField';
import { motion } from 'framer-motion';
import useInput from 'hooks/useInput';
import { FormEvent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'redux/hooks';
import { sendPersonalInfo } from 'redux/signupSlice';
import type { RootState } from 'redux/store';
import pageVariants, { pageTransition } from 'styles/framerAnimation/pageTransition';

import styles from './getUserInfoPage.module.scss';

const cx = classNames.bind(styles);

const GetUserInfoPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state: RootState) => state.signup);

  const {
    handleInputChange: handleUsernameChange,
    handleBlur: handleUsernameBlur,
    isTouched: isUsernameTouched,
    isValid: isUsernameValid,
    value: enteredUsername,
  } = useInput('username');
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
    if (isUsernameValid && isEmailValid && isPasswordValid) {
      dispatch(sendPersonalInfo({ username: enteredUsername, email: enteredEmail, password: enteredPassword }));
    }
  };

  useEffect(() => {
    if (status === 'success') navigate('/signup/emailValidation');
  }, [status, navigate]);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className={styles.signupPage}
    >
      <form className={styles.signupForm} onSubmit={handleSubmit}>
        <h1>
          <mark>MJU</mark> Comminition
        </h1>
        <h2>회원가입</h2>
        <TextField
          type="text"
          placeholder="닉네임"
          ariaLabel="username"
          required
          minLength={2}
          textChangeHandler={handleUsernameChange}
          blurHandler={handleUsernameBlur}
          isTouched={isUsernameTouched}
          isValid={isUsernameValid}
          marginBottom="12px"
          showIcon={false}
        />
        <TextField
          type="email"
          placeholder="이메일"
          ariaLabel="email"
          required
          textChangeHandler={handleEmailChange}
          blurHandler={handleEmailBlur}
          isTouched={isEmailTouched}
          isValid={isEmailValid}
          marginBottom="12px"
          showIcon={false}
        />
        <TextField
          type="password"
          placeholder="비밀번호"
          ariaLabel="password"
          required
          minLength={8}
          textChangeHandler={handlePasswordChange}
          blurHandler={handlePasswordBlur}
          isTouched={isPasswordTouched}
          isValid={isPasswordValid}
          marginBottom="30px"
          showIcon={false}
        />
        <button type="submit" className={cx('nextBtn')}>
          다음으로
        </button>
      </form>
    </motion.div>
  );
};

export default GetUserInfoPage;
