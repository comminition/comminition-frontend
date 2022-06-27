import { useState } from 'react';
import { EyeOnIcon, EyeOffIcon, CheckIcon } from 'assets/svgs';
import styles from './textInput.module.scss';

interface IProp {
  type: 'text' | 'email' | 'password';
  required: boolean;
  placeholder?: string;
  ariaLabel?: string;
  marginBottom?: string;
  marginTop?: string;
  minLength?: number;
}

const EMAIL_VALID_STYLE = {
  width: '30px',
  height: '30px',
  backgroundColor: '#4c70ee',
  border: '1px solid #4c70ee',

  borderRadius: '100px',
  fill: 'white',
};

const EMAIL_INVALID_STYLE = {
  width: '30px',
  height: '30px',
  border: '1px solid #4c70ee',
  opacity: '0.3',
  backgroundColor: ' #4c70ee',
  borderRadius: '100px',
  fill: 'white',
};

const TextField = ({ type, placeholder, ariaLabel, required, marginTop, marginBottom, minLength }: IProp) => {
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleShowText = () => {
    setShowPassword((prev) => !prev);
  };

  let icon;
  switch (type) {
    case 'email':
      icon = <CheckIcon className={styles.icon} style={isEmailValid ? EMAIL_VALID_STYLE : EMAIL_INVALID_STYLE} />;
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
      ? (icon = <EyeOnIcon className={styles.icon} onClick={handleShowText} />)
      : (icon = <EyeOffIcon className={styles.icon} onClick={handleShowText} />);

  return (
    <div className={styles.wrapper} style={{ marginBottom }}>
      <input
        type={type === 'password' && showPassword ? 'text' : type}
        required={required}
        placeholder={placeholder}
        aria-label={ariaLabel}
        minLength={minLength}
      />
      {icon}
    </div>
  );
};

export default TextField;
