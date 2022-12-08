import { BookmarkCheckedIcon, BookmarkIcon, CommentIcon, LikeCheckedIcon, LikeIcon, ProfileIcon } from 'assets/svgs';
import classNames from 'classnames/bind';

import styles from './infoItem.module.scss';

export interface IContent {
  title: string | undefined;
  content: string | undefined;
  date: string | undefined;
  isLiked: boolean | undefined;
  like: number | undefined;
  comments: number | undefined;
  bookmark: number | undefined;
  isBookmarked: boolean | undefined;
  writer: string | undefined;
  profileImage?: string | undefined;
}

interface IProp extends IContent {
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
          <span>{writer}</span>
        </div>
      </div>
      <div className={cx('content', lineOfContent)}>{content}</div>
      <div className={cx('footer')}>
        <time>{date?.toString()}</time>
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
