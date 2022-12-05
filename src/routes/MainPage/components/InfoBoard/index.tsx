import InfoItem from '../../../../components/UI/InfoItem';
import RoundButton from 'components/UI/Buttons/RoundButton';

import styles from './infoBoard.module.scss';

interface IProp {
  title?: string;
}

const InfoList = ({ title = '정보 게시판' }: IProp) => {
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
    width: 'medium' as const,
    lineOfContent: 'twoLine' as const,
  };

  return (
    <div className={styles.board}>
      <div className={styles.header}>
        <h1>{title}</h1>
        <RoundButton size="medium" backgroundColor="white" text="더보기" />
      </div>
      <div className={styles.content}>
        <InfoItem {...content} />
        <div className={styles.divider} />
        <InfoItem {...content} />
        <div className={styles.divider} />
        <InfoItem {...content} />
      </div>
    </div>
  );
};

export default InfoList;
