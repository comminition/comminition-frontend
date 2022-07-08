import RecruitItem from 'routes/MainPage/components/RecruitBoard/RecruitItem';
import sampleImage from '../../../assets/images/sampleImage.png';

import styles from './main.module.scss';

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

const Main = () => {
  return (
    <main className={styles.main}>
      <RecruitItem {...content} />
      <RecruitItem {...content} />
      <RecruitItem {...content} />
      <RecruitItem {...content} />
      <RecruitItem {...content} />
      <RecruitItem {...content} />
      <RecruitItem {...content} />
      <RecruitItem {...content} />
      <RecruitItem {...content} />
      <RecruitItem {...content} />
      <RecruitItem {...content} />
      <RecruitItem {...content} />
    </main>
  );
};

export default Main;
