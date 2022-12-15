import styles from './textHeader.module.scss';

interface IProps {
  title?: string;
}

const TextHeader = ({ title = '마이페이지' }: IProps) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
    </header>
  );
};

export default TextHeader;
