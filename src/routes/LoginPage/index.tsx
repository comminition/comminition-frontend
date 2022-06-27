import styles from './loginPage.module.scss';

const LoginPage = () => {
  return (
    <div className={styles.loginPage}>
      <form className={styles.loginForm}>
        <h1>
          <mark>MJU</mark> Comminition
        </h1>
        <h2>로그인</h2>
        <input type="email" aria-label="email" required placeholder="학교 계정 메일" />
        <input type="password" aria-label="password" required placeholder="비밀번호" />
        <button type="submit" className={styles.loginBtn}>
          로그인
        </button>
        <button type="button" className={styles.btn}>
          비밀번호를 잊으셨나요?
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
