import { BookmarkCheckedIcon, CommentCheckedIcon, LikeCheckedIcon, PostCheckedIcon } from 'assets/svgs';

import styles from './activity.module.scss';

const Activity = () => {
  return (
    <div className={styles.activity}>
      <span>나의 활동</span>
      <div className={styles.activityDiv}>
        <div className={styles.activityBody}>
          <button className={styles.items} type="button">
            <PostCheckedIcon />
            <p>작성한 글 보러 가기</p>
          </button>
          <button className={styles.items} type="button">
            <CommentCheckedIcon />
            <p>댓글 작성한 글 보러 가기</p>
          </button>
        </div>
        <div className={styles.activityBody}>
          <button className={styles.items} type="button">
            <LikeCheckedIcon />
            <p>좋아요 표시한 글 보러 가기</p>
          </button>
          <button className={styles.items} type="button">
            <BookmarkCheckedIcon />
            <p>스크랩한 글 보러 가기</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Activity;
