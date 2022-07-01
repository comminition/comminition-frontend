import GithubCalendar from 'components/GithubCalendar';
import Gnb from 'components/Gnb';
import InfoList from './components/InfoList';
import Header from './Header';

import styles from './mainPage.module.scss';

const DUMMY_DATA = [
  {
    title: '게시글 제목',
    content:
      'Nostrud exercitation sunt ut voluptate amet ea quis. Mollit ad laborum enim aliqua. Lorem ipsum aliqua minim ipsum ipsum et duis aliquip culpa amet nostrud.',
    date: '2021.06.30',
    isLiked: true,
    like: 454,
    comments: 97,
    bookmark: 2,
    isBookmarked: false,
  },
  {
    title: '게시글 제목',
    content:
      'Nostrud exercitation sunt ut voluptate amet ea quis. Mollit ad laborum enim aliqua. Lorem ipsum aliqua minim ipsum ipsum et duis aliquip culpa amet nostrud.',
    date: '2021.06.30',
    isLiked: false,
    like: 454,
    comments: 97,
    bookmark: 2,
    isBookmarked: false,
  },
  {
    title: '게시글 제목',
    content:
      'Nostrud exercitation sunt ut voluptate amet ea quis. Mollit ad laborum enim aliqua. Lorem ipsum aliqua minim ipsum ipsum et duis aliquip culpa amet nostrud.',
    date: '2021.06.30',
    isLiked: false,
    like: 454,
    comments: 97,
    bookmark: 2,
    isBookmarked: false,
  },
];

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
        <InfoList />
      </section>
    </>
  );
};

export default MainPage;
