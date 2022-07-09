import styles from './questionPage.module.scss';
import Pagenation from 'routes/RecruitPage/Pagenation';
import QuestionItem from './QuestionItem/index';
import { PostButton, Advertisement } from 'assets/svgs';
import Filter from './Filter';

const QuestionPage = () => {
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
    <div className={styles.questionPage}>
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
          <QuestionItem {...content} />
          <hr className={styles.line} />
          <QuestionItem {...content} />
          <hr className={styles.line} />
          <QuestionItem {...content} />
          <hr className={styles.line} />
          <QuestionItem {...content} />
          <hr className={styles.line} />
          <QuestionItem {...content} />
          <hr className={styles.line} />
          <QuestionItem {...content} />
          <hr className={styles.line} />
          <QuestionItem {...content} />
          <hr className={styles.line} />
          <QuestionItem {...content} />
          <hr className={styles.line} />
          <QuestionItem {...content} />
          <hr className={styles.line} />
          <QuestionItem {...content} />
        </div>
        <div className={styles.adDiv}>
          <Advertisement />
        </div>
      </div>
      <Pagenation />
    </div>
  );
};

export default QuestionPage;
