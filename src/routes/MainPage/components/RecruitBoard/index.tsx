import RecruitItem from './RecruitItem';
import RoundButton from 'components/UI/RoundButton';

import styles from './recruitBoard.module.scss';

import sampleImage from '../../../../assets/images/sampleImage.png';

const RecruitBoard = () => {
  const content = {
    title: '함께 이런저런 프로젝트 하실 분 구합니다',
    image: sampleImage,
    date: '2021.06.05',
    isLiked: true,
    like: 16,
    comments: 7,
    bookmark: 3,
    isBookmarked: false,
    author: '김떙땡',
  };
  return (
    <div className={styles.recruitBoard}>
      <div className={styles.header}>
        <h1>사이드 프로젝트 홍보/구인</h1>
        <RoundButton size="medium" backgroundColor="white" text="더보기" />
      </div>
      <div className={styles.content}>
        <RecruitItem {...content} />
        <RecruitItem {...content} />
        <RecruitItem {...content} />
        <RecruitItem {...content} />
      </div>
    </div>
  );
};

export default RecruitBoard;
