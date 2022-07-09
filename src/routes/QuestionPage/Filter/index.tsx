import styles from './filter.module.scss';

const Filter = () => {
  return (
    <div className={styles.filter}>
      정렬 |<button type="button"> 최신</button>
      <button type="button">스크랩</button>
      <button type="button">좋아요</button>
    </div>
  );
};

export default Filter;
