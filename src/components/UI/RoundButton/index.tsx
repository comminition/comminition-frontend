import classNames from 'classnames/bind';

import styles from './roundButton.module.scss';

interface IProp {
  size: 'medium' | 'large';
  backgroundColor: 'white' | 'transparent';
  text: string;
}

const cx = classNames.bind(styles);

const RoundButton = ({ size, backgroundColor, text }: IProp) => {
  return (
    <button type="button" className={cx('button', size, backgroundColor)}>
      {text}
    </button>
  );
};

export default RoundButton;
