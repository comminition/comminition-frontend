import classNames from 'classnames/bind';

import styles from './loadingSpinner.module.scss';

const cx = classNames.bind(styles);
const LoadingSpinner = () => {
  return (
    <div className={cx('skCubeGrid')}>
      <div className={cx('skCube', 'skCube1')} />
      <div className={cx('skCube', 'skCube2')} />
      <div className={cx('skCube', 'skCube3')} />
      <div className={cx('skCube', 'skCube4')} />
      <div className={cx('skCube', 'skCube5')} />
      <div className={cx('skCube', 'skCube6')} />
      <div className={cx('skCube', 'skCube7')} />
      <div className={cx('skCube', 'skCube8')} />
      <div className={cx('skCube', 'skCube9')} />
    </div>
  );
};

export default LoadingSpinner;
