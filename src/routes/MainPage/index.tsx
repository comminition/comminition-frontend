import GithubCalendar from 'components/GithubCalendar';
import Gnb from 'components/Gnb';
import InfoBoard from './components/InfoBoard';
import Header from './Header';

import styles from './mainPage.module.scss';

const MainPage = () => {
  return (
    <>
      <Gnb />
      <Header />
      <section className={styles.contributon}>
        <h1>내 잔디밭</h1>
        <div className={styles.content}>
          <div>
            김땡땡
            <br />
            컴퓨터공학 전공 <br />
            60182135 <br />
            <address>용인시 처인구</address>
            frontend
            <br />
          </div>
          <GithubCalendar username={process.env.REACT_APP_USERNAME} />
        </div>
      </section>
      <section className={styles.info}>
        <InfoBoard />
        <InfoBoard />
      </section>
      <section className={styles.recruit}>모집</section>
    </>
  );
};

export default MainPage;
