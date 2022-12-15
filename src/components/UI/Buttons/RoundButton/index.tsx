import classNames from 'classnames/bind';

import styles from './roundButton.module.scss';

interface IProp {
  size: 'medium' | 'large' | 'auto';
  backgroundColor: 'white' | 'transparent';
  children: string;
  marginBottom?: 'marginBottom5' | 'marginBottom10';
  marginHorizontal?: 'marginHorizontal5' | 'marginHorizontal10';
  height?: string;
  color?: string;
}

const cx = classNames.bind(styles);

const RoundButton = ({ size, backgroundColor, children, marginBottom, marginHorizontal, height, color }: IProp) => {
  return (
    <button
      type="button"
      className={cx('button', size, backgroundColor, marginBottom, marginHorizontal)}
      style={{ height, borderColor: color, color }}
    >
      {children}
    </button>
  );
};

export default RoundButton;
