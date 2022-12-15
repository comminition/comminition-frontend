import styles from './searchBar.module.scss';

interface IProp {
  title?: string;
}

const SearchBar = ({ title = '정보게시판' }: IProp) => {
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
