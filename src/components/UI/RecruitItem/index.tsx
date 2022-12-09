import { BookmarkCheckedIcon, BookmarkIcon, CommentIcon, LikeCheckedIcon, LikeIcon, ProfileIcon } from 'assets/svgs';
import { IProject } from 'routes/MainPage/components/RecruitBoard';

import sampleImage from '../../../assets/images/sampleImage.png';
import styles from './recruitItem.module.scss';

interface IProps extends IProject {
  image?: string;
}

const RecruitItem = ({
  title,
  image,
  writer,
  profileImage,
  date,
  isLiked,
  like,
  comments,
  bookmark,
  isBookmarked,
}: IProps) => {
  const profileIcon = (profileImage && <img src={profileImage} alt="profile" className={styles.profileImage} />) || (
    <ProfileIcon className={styles.icon} />
  );
  const likeIcon = isLiked ? <LikeCheckedIcon className={styles.icon} /> : <LikeIcon className={styles.icon} />;
  const bookmarkIcon = isBookmarked ? (
    <BookmarkCheckedIcon className={styles.icon} />
  ) : (
    <BookmarkIcon className={styles.icon} />
  );

  return (
    <div className={styles.recruitItem}>
      <img src={image || sampleImage} alt={title} className={styles.image} />
      <h1>{title}</h1>
      <div className={styles.profile}>
        {profileIcon} <span>{writer}</span>
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
