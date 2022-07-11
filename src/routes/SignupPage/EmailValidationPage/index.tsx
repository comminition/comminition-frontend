import { useState } from 'react';
import classNames from 'classnames/bind';
import TextField from 'components/UI/TextField';
import useInput from 'hooks/useInput';

import styles from './emailValidationPage.module.scss';

const cx = classNames.bind(styles);

const EmailValidationPage = () => {
  const [isValidCodeSent, setIsValidCodeSent] = useState(false);

  const {
    handleInputChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    isTouched: isEmailTouched,
    isValid: isEmailValid,
  } = useInput('email');

  const {
    handleInputChange: handleCodeChange,
    handleBlur: handleCodeBlur,
    isTouched: isCodeTouched,
    isValid: isCodeValid,
  } = useInput('code');

  return (
    <div className={styles.signupPage}>
      <form className={styles.signupForm}>
        <h1>
          <mark>MJU</mark> Comminition
        </h1>
        <h2>회원가입</h2>
        <h3>학교 이메일 인증</h3>
        <TextField
          type="email"
          required
          ariaLabel="school email"
          placeholder="학교 계정 이메일"
          marginBottom={isValidCodeSent ? '12px' : '30px'}
          textChangeHandler={handleEmailChange}
          blurHandler={handleEmailBlur}
          isTouched={isEmailTouched}
          isValid={isEmailValid}
          showIcon={false}
        />
        {isValidCodeSent && (
          <TextField
            type="text"
            required
            ariaLabel="athentication code"
            placeholder="인증 코드"
            marginBottom="30px"
            textChangeHandler={handleCodeChange}
            blurHandler={handleCodeBlur}
            isTouched={isCodeTouched}
            isValid={isCodeValid}
            showIcon={false}
          />
        )}
        <button type="submit" className={cx('nextBtn')}>
          {isValidCodeSent ? '다음으로' : '인증메일 보내기'}
        </button>
      </form>
    </div>
  );
};

export default EmailValidationPage;
