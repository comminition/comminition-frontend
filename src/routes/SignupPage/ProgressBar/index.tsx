import classNames from 'classnames/bind';

import styles from './progressBar.module.scss';

interface IProp {
  progressed: 1 | 2 | 3;
}
const cx = classNames.bind(styles);

const ProgressBar = ({ progressed }: IProp) => {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('progress', { progressed: progressed >= 1 })} />
      <div className={cx('progress', { progressed: progressed >= 2 })} />
      <div className={cx('progress', { progressed: progressed >= 3 })} />
    </div>
  );
};

export default ProgressBar;
