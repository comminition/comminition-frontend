import classNames from 'classnames/bind';

import useInput from 'hooks/useInput';
import TextField from 'components/UI/TextField';

import styles from './getUserInfoPage.module.scss';

const cx = classNames.bind(styles);

const GetUserInfoPage = () => {
  const {
    handleInputChange: handleUsernameChange,
    handleBlur: handleUsernameBlur,
    isTouched: isUsernameTouched,
    isValid: isUsernameValid,
  } = useInput('username');
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
    <div className={styles.signupPage}>
      <form className={styles.signupForm}>
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
