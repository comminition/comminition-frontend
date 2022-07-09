import styles from './searchBar.module.scss';

interface IProp {
  title?: string;
}

const SearchBar = ({ title = '사이드 프로젝트 홍보/구인' }: IProp) => {
  return (
    <div className={styles.wrapper}>
      <h1>{title}</h1>
      <div className={styles.searchBar}>
        <input type="text" placeholder="      검색어를 입력하세요" />
      </div>
    </div>
  );
};

export default SearchBar;
