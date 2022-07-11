import classNames from 'classnames/bind';

import styles from './connectGithubPage.module.scss';

const cx = classNames.bind(styles);

const ConnectGitHubPage = () => {
  return (
    <div className={cx('connectGithubPage')}>
      <form className={styles.signupForm}>
        <h1>
          <mark>MJU</mark> Comminition
        </h1>
        <h2>회원가입</h2>
        <h3>Github 인증</h3>
        <button type="button" className={cx('connectBtn')}>
          Github 인증하러 가기
        </button>
        <button type="submit" className={cx('nextBtn')}>
          가입 완료
        </button>
      </form>
    </div>
  );
};

export default ConnectGitHubPage;
