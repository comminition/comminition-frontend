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
  const profileIcon = profileImage || <ProfileIcon />;
  const likeIcon = isLiked ? <LikeCheckedIcon /> : <LikeIcon />;
  const bookmarkIcon = isBookmarked ? <BookmarkCheckedIcon /> : <BookmarkIcon />;

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
            <CommentIcon />
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
