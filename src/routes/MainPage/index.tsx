import ContributionBoard from './components/ContributionBoard';
import InfoBoard from './components/InfoBoard';
import InquiryBoard from './components/InquiryBoard';
import RecruitBoard from './components/RecruitBoard';
import useInfo from './hooks/useInfo';
import styles from './mainPage.module.scss';

const MainPage = () => {
  const { infoQueriesResult, inquiryQueriesResult, projectQueriesResult } = useInfo();

  console.log(projectQueriesResult);

  const infoItems = infoQueriesResult.map((result) => {
    return {
      title: result.data?.info.title,
      content: result.data?.info.content,
      date: result.data?.info.createdAt,
      isLiked: true,
      like: result.data?.likes,
      comments: result.data?.comments,
      bookmark: result.data?.scraps,
      isBookmarked: false,
      writer: result.data?.info.writer,
    };
  });

  const inquiryItems = inquiryQueriesResult.map((result) => {
    return {
      title: result.data?.qna.title,
      content: result.data?.qna.content,
      date: result.data?.qna.createdAt,
      isLiked: true,
      like: result.data?.likes,
      comments: result.data?.comments,
      bookmark: result.data?.scraps,
      isBookmarked: false,
      writer: result.data?.qna.writer,
    };
  });

  return (
    <>
      <section className={styles.contributon}>
        <ContributionBoard />
      </section>
      <section className={styles.info}>
        <InfoBoard title="정보 게시판" items={infoItems} />
        <InfoBoard title="질문 게시판" items={inquiryItems} />
      </section>
      <section className={styles.recruit}>
        <RecruitBoard />
      </section>
      <section className={styles.inquiry}>
        <InquiryBoard />
      </section>
    </>
  );
};

export default MainPage;
