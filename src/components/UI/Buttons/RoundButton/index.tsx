import classNames from 'classnames/bind';
import { MouseEvent } from 'react';

import styles from './roundButton.module.scss';

interface IProp {
  size: 'medium' | 'large' | 'auto';
  backgroundColor: 'white' | 'transparent';
  children: string;
  marginBottom?: 'marginBottom5' | 'marginBottom10';
  marginHorizontal?: 'marginHorizontal5' | 'marginHorizontal10';
  height?: string;
  color?: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}

const cx = classNames.bind(styles);

const RoundButton = ({
  size,
  backgroundColor,
  children,
  marginBottom,
  marginHorizontal,
  height,
  color,
  onClick,
}: IProp) => {
  return (
    <button
      type="button"
      className={cx('button', size, backgroundColor, marginBottom, marginHorizontal)}
      style={{ height, borderColor: color, color }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default RoundButton;
