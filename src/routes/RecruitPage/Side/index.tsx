import RoundButton from 'components/UI/Buttons/RoundButton';
import styles from './side.module.scss';

const DUMMY_STACKS = ['Java', 'Javascript', 'Backend', 'Mysql', 'Html', 'Springboot', ' React', 'C', 'C++', 'Python'];

const Side = () => {
  return (
    <aside className={styles.side}>
      <h1>기술 스택</h1>
      <div className={styles.list}>
        {DUMMY_STACKS.map((stack) => (
          <RoundButton size="auto" backgroundColor="white" text={stack} />
        ))}
      </div>
    </aside>
  );
};

export default Side;
