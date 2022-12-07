import ContributionBoard from './components/ContributionBoard';
import InfoBoard from './components/InfoBoard';
import InquiryBoard from './components/InquiryBoard';
import RecruitBoard from './components/RecruitBoard';
import styles from './mainPage.module.scss';

const MainPage = () => {
  return (
    <>
      <section className={styles.contributon}>
        <ContributionBoard />
      </section>
      <section className={styles.info}>
        <InfoBoard />
        <InfoBoard />
      </section>
      <section className={styles.recruit}>
        <RecruitBoard />
      </section>
      <section className={styles.inquiry}>
        <InquiryBoard />
      </section>
    </>
  );
};

export default MainPage;
