import classNames from 'classnames/bind';

import useInput from 'hooks/useInput';
import TextField from 'components/UI/TextField';
import Comminition from 'apis/comminition';

import styles from './getUserInfoPage.module.scss';
import { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

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
      const {
        data: { id, nickname, email },
      } = await Comminition.createUser(enteredUsername, enteredEmail, enteredPassword);
      if (id && nickname && email) {
        navigate('/signup/emailValidation');
      }
    }
  };

  return (
    <div className={styles.signupPage}>
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
    </div>
  );
};

export default GetUserInfoPage;
