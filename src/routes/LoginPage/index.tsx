import useInput from 'hooks/useInput';

import TextInput from './TextInput';

import styles from './loginPage.module.scss';

const LoginPage = () => {
  const {
    handleInputChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    isTouched: isEmailTouched,
    isValid: isEmailValid,
  } = useInput('email');
  const {
    handleInputChange: handlePasswordChange,
    handleBlur: handlePasswordBlur,
    isTouched: isPasswordTouched,
    isValid: isPasswordValid,
  } = useInput('password');

  return (
    <div className={styles.loginPage}>
      <form className={styles.loginForm}>
        <h1>
          <mark>MJU</mark> Comminition
        </h1>
        <h2>로그인</h2>
        <TextInput
          type="email"
          placeholder="학교 계정 메일"
          required
          ariaLabel="email"
          marginBottom="15px"
          textChangeHandler={handleEmailChange}
          blurHandler={handleEmailBlur}
          isTouched={isEmailTouched}
          isValid={isEmailValid}
        />
        <TextInput
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
        />
        <button type="submit" className={styles.loginBtn}>
          로그인
        </button>
        <button type="button" className={styles.btn}>
          비밀번호를 잊으셨나요?
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
