import { ChangeEvent, FocusEvent, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './textInput.module.scss';

import { EyeOnIcon, EyeOffIcon, CheckIcon } from 'assets/svgs';

const cx = classNames.bind(styles);

interface IProp {
  type: 'text' | 'email' | 'password';
  required: boolean;
  placeholder?: string;
  ariaLabel?: string;
  marginBottom?: string;
  marginTop?: string;
  minLength?: number;
  textChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  blurHandler?: (e: FocusEvent<HTMLInputElement>) => void;
  isTouched?: boolean;
  isValid?: boolean;
}

const TextField = ({
  type,
  placeholder,
  ariaLabel,
  required,
  marginTop,
  marginBottom,
  minLength,
  textChangeHandler,
  blurHandler,
  isTouched,
  isValid,
}: IProp) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowText = () => {
    setShowPassword((prev) => !prev);
  };

  let icon;
  switch (type) {
    case 'email':
      icon = <CheckIcon className={cx('emailIcon', { validEmailIcon: isValid })} />;
      break;
    case 'password':
      icon = <EyeOffIcon className={styles.icon} onClick={handleShowText} />;
      break;
    case 'text':
      icon = null;
      break;
  }

  if (type === 'password')
    showPassword
      ? (icon = <EyeOnIcon className={styles.passwordIcon} onClick={handleShowText} />)
      : (icon = <EyeOffIcon className={styles.passwordIcon} onClick={handleShowText} />);

  return (
    <div className={styles.wrapper} style={{ marginBottom }}>
      <input
        type={type === 'password' && showPassword ? 'text' : type}
        required={required}
        placeholder={placeholder}
        aria-label={ariaLabel}
        minLength={minLength}
        onChange={textChangeHandler}
        onBlur={blurHandler}
        className={cx('input', { valid: isTouched && isValid }, { invalid: isTouched && !isValid })}
      />
      {icon}
    </div>
  );
};

export default TextField;
