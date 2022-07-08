import styles from './header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <p>Welcome to the</p>
      <p>
        <span>MJU</span> developer community
      </p>
    </header>
  );
};

export default Header;
