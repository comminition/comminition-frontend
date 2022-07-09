import styles from './infoPage.module.scss';
import Pagenation from 'routes/RecruitPage/Pagenation';
import InfoItem from './InfoItem/index';
import { PostButton, Advertisement } from 'assets/svgs';
import Filter from './Filter';

const InfoPage = () => {
  const content = {
    title: '게시글 제목',
    content:
      'Nostrud exercitation sunt ut voluptate amet ea quis. Mollit ad laborum enim aliqua. Lorem ipsum aliqua minim ipsum ipsum et duis aliquip culpa amet nostrud.',
    date: '2021.06.30',
    isLiked: true,
    like: 454,
    comments: 97,
    bookmark: 2,
    isBookmarked: false,
    writer: '김떙땡',
  };
  return (
    <div className={styles.infoPage}>
      <div className={styles.topDiv}>
        <p className={styles.filter}>
          <Filter />
        </p>
        <button type="button" className={styles.postButton}>
          <PostButton />
        </button>
      </div>
      <div className={styles.midDiv}>
        <div className={styles.postBody}>
          <InfoItem {...content} />
          <hr className={styles.line}/>
          <InfoItem {...content} />
          <hr className={styles.line}/>
          <InfoItem {...content} />
          <hr className={styles.line}/>
          <InfoItem {...content} />
          <hr className={styles.line}/>
          <InfoItem {...content} />
          <hr className={styles.line}/>
          <InfoItem {...content} />
          <hr className={styles.line}/>
          <InfoItem {...content} />
          <hr className={styles.line}/>
          <InfoItem {...content} />
          <hr className={styles.line}/>
          <InfoItem {...content} />
          <hr className={styles.line}/>
          <InfoItem {...content} />
        </div>
        <div className={styles.adDiv}>
          <Advertisement />
        </div>
      </div>
      <Pagenation />
    </div>
  );
};

export default InfoPage;