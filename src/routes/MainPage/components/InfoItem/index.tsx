import { LikeCheckedIcon, ProfileIcon, CommentIcon, BookmarkIcon, LikeIcon, BookmarkCheckedIcon } from 'assets/svgs';
import styles from './infoItem.module.scss';

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

const InfoItem = ({
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
  const profileIcon = profileImage || <ProfileIcon />;
  const likeIcon = isLiked ? <LikeCheckedIcon /> : <LikeIcon />;
  const bookmarkIcon = isBookmarked ? <BookmarkCheckedIcon /> : <BookmarkIcon />;

  return (
    <div className={styles.infoItem}>
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
            <CommentIcon />
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

export default InfoItem;
