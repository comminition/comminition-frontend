import RoundButton from 'components/UI/Buttons/RoundButton';
import { Link } from 'react-router-dom';

import InfoItem, { IContent } from '../../../../components/UI/InfoItem';
import styles from './infoBoard.module.scss';

interface IProp {
  title?: string;
  items: IContent[];
}

const InfoList = ({ title = '정보 게시판', items }: IProp) => {
  const route = {
    '정보 게시판': 'info',
    '질문 게시판': 'question',
  }[title];

  return (
    <div className={styles.board}>
      <div className={styles.header}>
        <h1>{title}</h1>
        <Link to={route || 'info'}>
          <RoundButton size="medium" backgroundColor="white">
            더보기
          </RoundButton>
        </Link>
      </div>
      <div className={styles.content}>
        <InfoItem {...items[0]} lineOfContent="twoLine" width="medium" />
        <div className={styles.divider} />
        <InfoItem {...items[1]} lineOfContent="twoLine" width="medium" />
        <div className={styles.divider} />
        <InfoItem {...items[2]} lineOfContent="twoLine" width="medium" />
      </div>
    </div>
  );
};

export default InfoList;
