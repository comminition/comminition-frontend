import styles from './explanation.module.scss';

const Explanation = () => {
  return (
    <div>
      <div className={styles.explanation}>
        <span>자기소개</span>
        <div>
          <p>
            반갑습니다 프론트개발자 김땡땡입니다 :) 만나서 정말 반가워요 이것은 저의 소개입니다. 자기소개 부분에는
            글자수 제한이 있으면 좋을 것 같아요 !! 이렇게 계속 작성하다보면 최소 얼마나 글자수가 이 텍스트 박스 안에
            들어갈 수 있는지 알 수 있겠죠?? 음 너무 길어서 뭐라고 더 써야할 지 모르겠어요. 그냥 깔끔하게 100자 정도로
            하면 되려나 지금 이정도로 쓰면 대충 몇글자일까나,, /오 이 앞까지는 공백포함 215자 공백제외 161이래요 ! 그럼
            깔끔하게 150자 제한으로 갈게요
          </p>
        </div>
      </div>
    </div>
  );
};

export default Explanation;
