import styles from './arrowButton.module.scss';

interface IProp {
  text: string;
  size: 'small' | 'medium' | 'large';
  _onClick?: () => void;
}

const ArrowButton = ({ text = '버튼', size, _onClick }: IProp) => {
  return (
    <button type="button" className={styles[`arrowButton-${size}`]}>
      {text}
    </button>
  );
};

export default ArrowButton;
