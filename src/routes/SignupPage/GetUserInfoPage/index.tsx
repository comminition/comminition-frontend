import { FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames/bind';

import useInput from 'hooks/useInput';
import TextField from 'components/UI/TextField';
import Comminition from 'apis/comminition';
import pageVariants, { pageTransition } from 'styles/framerAnimation/pageTransition';

import styles from './getUserInfoPage.module.scss';
import { Toaster, toast } from 'react-hot-toast';

const cx = classNames.bind(styles);

const GetUserInfoPage = () => {
  const navigate = useNavigate();

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isUsernameValid && isEmailValid && isPasswordValid) {
      try {
        const {
          data: { id, nickname, email },
        } = await Comminition.createUser(enteredUsername, enteredEmail, enteredPassword);
        if (id && nickname && email) {
          navigate('/signup/emailValidation');
        }
      } catch (error) {
        if (error instanceof Error) {
          toast(error.message);
        }
      }
    }
  };

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
      <Toaster />
    </motion.div>
  );
};

export default GetUserInfoPage;
