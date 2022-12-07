import { LeftAngleIcon,LeftAnglesIcon, RightAngleIcon, RightAnglesIcon } from 'assets/svgs';

import styles from './pagenation.module.scss';

const Pagenation = () => {
  return (
    <div className={styles.pagenation}>
      <div className={styles.arrowButtons}>
        <button type="button">
          <LeftAnglesIcon />
        </button>
        <button type="button">
          <LeftAngleIcon />
        </button>
      </div>
      <button type="button">1</button>
      <button type="button">2</button>
      <button type="button">3</button>
      <button type="button">4</button>
      <button type="button">5</button>
      <button type="button">6</button>
      <button type="button">7</button>
      <button type="button">8</button>
      <button type="button">9</button>
      <button type="button">10</button>
      <div className={styles.arrowButtons}>
        <button type="button">
          <RightAnglesIcon />
        </button>
        <button type="button">
          <RightAngleIcon />
        </button>
      </div>
    </div>
  );
};

export default Pagenation;
