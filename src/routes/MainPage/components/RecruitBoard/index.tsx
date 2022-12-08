import RoundButton from 'components/UI/Buttons/RoundButton';

import RecruitItem from '../../../../components/UI/RecruitItem';
import styles from './recruitBoard.module.scss';

export interface IProject {
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
  hashtags: string[] | undefined;
}

interface IProps {
  items: IProject[];
}

const RecruitBoard = ({ items }: IProps) => {
  return (
    <div className={styles.recruitBoard}>
      <div className={styles.header}>
        <h1>사이드 프로젝트 홍보/구인</h1>
        <RoundButton size="medium" backgroundColor="white" text="더보기" />
      </div>
      <div className={styles.content}>{items && items.map((project) => <RecruitItem {...project} />)}</div>
    </div>
  );
};

export default RecruitBoard;
