import classNames from 'classnames/bind';

import styles from './infoItem.module.scss';

import { LikeCheckedIcon, ProfileIcon, CommentIcon, BookmarkIcon, LikeIcon, BookmarkCheckedIcon } from 'assets/svgs';

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
  width: 'medium' | 'wide';
  lineOfContent: 'oneLine' | 'twoLine';
}

const cx = classNames.bind(styles);

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
  width,
  lineOfContent,
}: IProp) => {
  const profileIcon = profileImage || <ProfileIcon className={cx('icon')} />;
  const likeIcon = isLiked ? <LikeCheckedIcon className={cx('icon')} /> : <LikeIcon className={cx('icon')} />;
  const bookmarkIcon = isBookmarked ? (
    <BookmarkCheckedIcon className={cx('icon')} />
  ) : (
    <BookmarkIcon className={cx('icon')} />
  );

  return (
    <div className={cx('infoItem', width)}>
      <div className={cx('header')}>
        <div className={cx('title')}>{title}</div>
        <div className={cx('profile')}>
          {profileIcon}
          {writer}
        </div>
      </div>
      <div className={cx('content', lineOfContent)}>{content}</div>
      <div className={cx('footer')}>
        <time>{date}</time>
        <div className={cx('icons')}>
          <div>
            {likeIcon} {like}
          </div>
          <div>
            <CommentIcon className={cx('icon')} />
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
