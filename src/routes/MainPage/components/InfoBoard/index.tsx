import RoundButton from 'components/UI/Buttons/RoundButton';

import InfoItem, { IContent } from '../../../../components/UI/InfoItem';
import styles from './infoBoard.module.scss';

interface IProp {
  title?: string;
  items: IContent[];
}

const InfoList = ({ title = '정보 게시판', items }: IProp) => {
  return (
    <div className={styles.board}>
      <div className={styles.header}>
        <h1>{title}</h1>
        <RoundButton size="medium" backgroundColor="white" text="더보기" />
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
