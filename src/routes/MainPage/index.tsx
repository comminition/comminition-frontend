import ContributionBoard from './components/ContributionBoard';
import InfoBoard from './components/InfoBoard';
import InquiryBoard from './components/InquiryBoard';
import RecruitBoard from './components/RecruitBoard';
import useInfo from './hooks/useInfo';
import styles from './mainPage.module.scss';

const MainPage = () => {
  const { infoQueriesResult, inquiryQueriesResult, projectQueriesResult } = useInfo();

  const infoItems = infoQueriesResult.map((result) => {
    const date = result.data?.info.createdAt ? new Date(result.data?.info.createdAt) : undefined;
    const formattedDate = new Intl.DateTimeFormat('ko-KR').format(date);

    return {
      title: result.data?.info.title,
      content: result.data?.info.content,
      date: formattedDate,
      isLiked: true,
      like: result.data?.likes,
      comments: result.data?.comments,
      bookmark: result.data?.scraps,
      isBookmarked: false,
      writer: result.data?.info.writer,
    };
  });

  const inquiryItems = inquiryQueriesResult.map((result) => {
    const date = result.data?.qna.createdAt ? new Date(result.data?.qna.createdAt) : undefined;
    const formattedDate = new Intl.DateTimeFormat('ko-KR').format(date);

    return {
      title: result.data?.qna.title,
      content: result.data?.qna.content,
      date: formattedDate,
      isLiked: true,
      like: result.data?.likes,
      comments: result.data?.comments,
      bookmark: result.data?.scraps,
      isBookmarked: false,
      writer: result.data?.qna.writer,
    };
  });

  const projectItems = projectQueriesResult.map((result) => {
    const date = result.data?.project.createdAt ? new Date(result.data?.project.createdAt) : undefined;
    const formattedDate = new Intl.DateTimeFormat('ko-KR').format(date);

    return {
      title: result.data?.project.title,
      content: result.data?.project.content,
      date: formattedDate,
      isLiked: true,
      like: result.data?.likes,
      comments: result.data?.comments,
      bookmark: result.data?.scraps,
      isBookmarked: false,
      writer: result.data?.project.writer,
      hashtags: result.data?.project.hashtags,
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
        <RecruitBoard items={projectItems} />
      </section>
      <section className={styles.inquiry}>
        <InquiryBoard />
      </section>
    </>
  );
};

export default MainPage;
