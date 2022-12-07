import styles from './readPage.module.scss';
import { ProfileIcon, MenuButton, LikeIcon, CommentIcon, BookmarkIcon } from 'assets/svgs';
import React, { useState } from 'react';
import EditModal from 'components/UI/EditModal';
import { Link } from 'react-router-dom';

const ReadPage = () => {
  const [textAreaValue, setTextAreaValue] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const modalClose = () => {
    setModalOpen(!modalOpen);
  };
  const onChangeValue = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    setTextAreaValue(target.value);
  };

  return (
    <div className={styles.readPage}>
      <div className={styles.postDiv}>
        <div className={styles.topPostDiv}>
          <div className={styles.title}>정보 공유합니당</div>
          <Link to="/mypage">
            <button type="button" className={styles.profile}>
              <ProfileIcon />
              <p>프로필</p>
            </button>
          </Link>
          <div className={styles.menu}>
            <button type="button" onClick={modalClose}>
              <MenuButton />
            </button>
            {modalOpen && <EditModal modalClose={modalClose} />}
          </div>
        </div>
        <hr />
        <textarea placeholder="요런저런 내용입니다." />
        <hr />
        <div className={styles.bottomPostDiv}>
          <div className={styles.count}>
            <LikeIcon />
            <p>16</p>
          </div>
          <div className={styles.count}>
            <CommentIcon />
            <p>16</p>
          </div>
          <div className={styles.count}>
            <BookmarkIcon />
            <p>16</p>
          </div>
          <div className={styles.date}>2021.06.30</div>
        </div>
      </div>
      <div className={styles.commentDiv}>
        <div className={styles.commentTopDiv}>
          <textarea
            className={textAreaValue ? styles.postCommentFocus : styles.postComment}
            placeholder="댓글을 입력해주세요"
            onChange={onChangeValue}
            value={textAreaValue}
          />
          {textAreaValue && (
            <>
              <button type="button">취소</button>
              <button type="button">등록</button>
            </>
          )}
        </div>
        <div className={styles.commentBottomDiv}>
          <div className={styles.filter}>
            <p>댓글</p>
            <p>0</p>
          </div>
          <div className={styles.comments}>
            <div className={styles.comment}>
              <button type="button" className={styles.profile}>
                <ProfileIcon />
                <p>하이</p>
              </button>
              <div className={styles.sideProfile}>
                <p>2021.06.30</p>
                <button type="button">
                  <MenuButton />
                </button>
              </div>
              <div className={styles.content}>
                <p>참새짹짹 고양이 야옹</p>
                <div className={styles.like}>
                  <LikeIcon />
                </div>
              </div>
            </div>
            <div className={styles.comment} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadPage;
