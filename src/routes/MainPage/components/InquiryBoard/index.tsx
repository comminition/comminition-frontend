import RoundButton from 'components/UI/RoundButton';

import styles from './inquiryBoard.module.scss';

const InquiryBoard = () => {
  return (
    <div className={styles.inquiryBoard}>
      <div className={styles.header}>
        <h1>커미니션 개발자에게</h1>
        <RoundButton size="large" backgroundColor="white" text="문의하러가기" />
      </div>
      <p>
        커미니션 관련 피드백과 문의는
        <br />
        오른쪽의 &apos;문의하러가기&apos;를 통해 남겨주세요 :)
      </p>
    </div>
  );
};

export default InquiryBoard;
