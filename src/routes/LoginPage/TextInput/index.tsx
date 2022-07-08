import { ChangeEvent, FocusEvent } from 'react';
import classNames from 'classnames/bind';

import styles from './textInput.module.scss';

import { CollectIcon, InCollectIcon } from 'assets/svgs';

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
  let icon = null;
  if (isTouched && isValid) icon = <CollectIcon className={cx('icon')} />;
  if (isTouched && !isValid) icon = <InCollectIcon className={cx('icon')} />;

  return (
    <div className={styles.wrapper} style={{ marginBottom }}>
      <input
        type={type}
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
