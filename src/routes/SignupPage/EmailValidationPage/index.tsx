import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import classNames from 'classnames/bind';
import type { RootState } from 'redux/store';
import { useSelector } from 'react-redux';
import { Toaster, toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import useInput from 'hooks/useInput';
import TextField from 'components/UI/TextField';
import Comminition from 'apis/comminition';
import pageVariants, { pageTransition } from 'styles/framerAnimation/pageTransition';

import styles from './emailValidationPage.module.scss';

const cx = classNames.bind(styles);

const EmailValidationPage = () => {
  const navigate = useNavigate();
  const [isValidCodeSent, setIsValidCodeSent] = useState(false);
  const { email: storedEmail } = useSelector((state: RootState) => state.signup);

  const {
    handleInputChange: handleEmailChange,
    handleBlur: handleEmailBlur,
    isTouched: isEmailTouched,
    isValid: isEmailValid,
    value: enteredEmail,
  } = useInput('email');

  const {
    handleInputChange: handleCodeChange,
    handleBlur: handleCodeBlur,
    isTouched: isCodeTouched,
    isValid: isCodeValid,
    value: enteredCode,
  } = useInput('code');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (isEmailValid) {
      if (enteredEmail !== storedEmail) {
        toast('입력한 이메일이 일치하지 않습니다.');
        return;
      }
      if (!isValidCodeSent) {
        try {
          await Comminition.certificateEmail(enteredEmail);
          setIsValidCodeSent(true);
        } catch (error) {
          if (error instanceof Error) {
            toast(error.message);
          }
        }
      } else {
        try {
          await Comminition.sendCertificationCode(enteredEmail, enteredCode);
          navigate('/signup/emailValidation');
        } catch (error) {
          if (error instanceof Error) {
            toast(error.message);
          }
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
      <Toaster />
    </motion.div>
  );
};

export default EmailValidationPage;
