import styles from './postPage.module.scss';
import { FileUpload, DeleteButton } from 'assets/svgs';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'lib/axios';

interface FormType {
  title: string;
  content: string;
}

const PostPage = () => {
  const [previewButton, setPreviewButton] = useState(false);
  const [editButton, setEditButton] = useState(true);
  const [imageSrc, setImageSrc] = useState('');

  const previewSelected = () => {
    if (previewButton === true && editButton === false) {
      setPreviewButton(false);
      setEditButton(true);
    }
  };

  const editSelected = () => {
    if (previewButton === false && editButton === true) {
      setPreviewButton(true);
      setEditButton(false);
    }
  };

  const encodeFileToBase64 = (fileBlob: Blob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise<void>((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result as any);
        resolve();
        console.log(reader.result);
      };
    });
  };

  const deleteFile = () => {
    setImageSrc('');
  };

  return (
    <div className={styles.postPage}>
      <div className={styles.postBody}>
        <div className={styles.uploadTab}>
          <button
            className={previewButton ? styles.unSelected : styles.selected}
            onClick={previewSelected}
            type="button"
          >
            ＜＞ Edit new file
          </button>
          <button className={editButton ? styles.unSelected : styles.selected} onClick={editSelected} type="button">
            preview
          </button>
        </div>
        <input placeholder="제목" />
        <textarea placeholder="내용을 입력해주세요" />
        <div className={styles.imageBackground}>
          {imageSrc && (
            <div className={styles.imageBackground}>
              <img src={imageSrc} alt="preview-img" />
              <DeleteButton onClick={deleteFile} />
            </div>
          )}
        </div>
        <div className={styles.fileUpload}>
          <FileUpload />
          <label htmlFor="file">파일 업로드</label>
          <input
            type="file"
            id="file"
            onChange={(e: any) => {
              encodeFileToBase64(e.target.files[0]);
            }}
            accept="image/jpeg, image/jpg, image/png"
          />
        </div>
      </div>
      <Link to="/info/read">
        <div className={styles.buttonBody}>
          <button type="button">작성완료</button>
        </div>
      </Link>
    </div>
  );
};

export default PostPage;
