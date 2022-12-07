import { BookmarkCheckedIcon,BookmarkIcon, CommentIcon, LikeCheckedIcon, LikeIcon, ProfileIcon } from 'assets/svgs';

import styles from './questionItem.module.scss';

interface IProp {
  title: string;
  content: string;
  date: string;
  isLiked: boolean;
  like: number;
  comments: number;
  bookmark: number;
  isBookmarked: boolean;
  writer: string;
  profileImage?: string;
}

const QuestionItem = ({
  title,
  content,
  date,
  isLiked,
  like,
  comments,
  bookmark,
  isBookmarked,
  writer,
  profileImage,
}: IProp) => {
  const profileIcon = profileImage || <ProfileIcon className={styles.icon} />;
  const likeIcon = isLiked ? <LikeCheckedIcon className={styles.icon} /> : <LikeIcon className={styles.icon} />;
  const bookmarkIcon = isBookmarked ? (
    <BookmarkCheckedIcon className={styles.icon} />
  ) : (
    <BookmarkIcon className={styles.icon} />
  );

  return (
    <div className={styles.questionItem}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div className={styles.profile}>
          {profileIcon}
          {writer}
        </div>
      </div>
      <div className={styles.content}>{content}</div>
      <div className={styles.footer}>
        <time>{date}</time>
        <div className={styles.icons}>
          <div>
            {likeIcon} {like}
          </div>
          <div>
            <CommentIcon className={styles.icon} />
            {comments}
          </div>
          <div>
            {bookmarkIcon}
            {bookmark}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionItem;
