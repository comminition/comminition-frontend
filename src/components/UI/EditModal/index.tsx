import styles from './editModal.module.scss';

type Props = {
  modalClose: () => void;
};

const EditModal = ({ modalClose }: Props) => {
  const onModalClose = (e: { target: any; currentTarget: any }) => {
    if (e.target !== e.currentTarget) {
      console.log('hi');
      modalClose();
    }
  };
  return (
    <div>
      <div className={styles.editModal} role="button" onClick={onModalClose} tabIndex={0}>
        <button type="button">수정하기</button>
        <button type="button">삭제하기</button>
      </div>
    </div>
  );
};

export default EditModal;
