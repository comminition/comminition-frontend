import classNames from 'classnames/bind';

import styles from './roundButton.module.scss';

interface IProp {
  size: 'medium' | 'large' | 'auto';
  backgroundColor: 'white' | 'transparent';
  text: string;
  marginBottom?: 'marginBottom5' | 'marginBottom10';
  marginHorizontal?: 'marginHorizontal5' | 'marginHorizontal10';
}

const cx = classNames.bind(styles);

const RoundButton = ({ size, backgroundColor, text, marginBottom, marginHorizontal }: IProp) => {
  return (
    <button type="button" className={cx('button', size, backgroundColor, marginBottom, marginHorizontal)}>
      {text}
    </button>
  );
};

export default RoundButton;
