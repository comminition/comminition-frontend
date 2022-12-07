import { useLocation } from 'react-router-dom';

import styles from './searchBar.module.scss';

interface IProp {
  title?: string;
}

const SearchBar = ({ title = '정보 게시판' }: IProp) => {
  const path = useLocation();
  return (
    <div>
      {path.pathname === '/mypage' ? (
        <div className={styles.wrapperMypage}>
          <h1>마이페이지</h1>
        </div>
      ) : (
        <div className={styles.wrapper}>
          <h1>{title}</h1>
          <div className={styles.searchBar}>
            <input type="text" placeholder="      검색어를 입력하세요" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
