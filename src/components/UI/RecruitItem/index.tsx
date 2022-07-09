import styles from './recruitItem.module.scss';

import { BookmarkCheckedIcon, BookmarkIcon, CommentIcon, LikeCheckedIcon, LikeIcon, ProfileIcon } from 'assets/svgs';

interface IProp {
  title: string;
  image: string;
  author: string;
  profileImage?: string;
  date: string;
  isLiked: boolean;
  like: number;
  comments: number;
  bookmark: number;
  isBookmarked: boolean;
}

const RecruitItem = ({
  title,
  image,
  author,
  profileImage,
  date,
  isLiked,
  like,
  comments,
  bookmark,
  isBookmarked,
}: IProp) => {
  const profileIcon = profileImage || <ProfileIcon className={styles.icon} />;
  const likeIcon = isLiked ? <LikeCheckedIcon className={styles.icon} /> : <LikeIcon className={styles.icon} />;
  const bookmarkIcon = isBookmarked ? (
    <BookmarkCheckedIcon className={styles.icon} />
  ) : (
    <BookmarkIcon className={styles.icon} />
  );

  return (
    <div className={styles.recruitItem}>
      <img src={image} alt={title} className={styles.image} />
      <h1>{title}</h1>
      <div className={styles.profile}>
        {profileIcon} {author}
      </div>
      <div className={styles.footer}>
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
        <time>{date}</time>
      </div>
    </div>
  );
};

export default RecruitItem;
