import InfoItem from '../InfoItem';

const InfoList = () => {
  const content = {
    title: '게시글 제목',
    content:
      'Nostrud exercitation sunt ut voluptate amet ea quis. Mollit ad laborum enim aliqua. Lorem ipsum aliqua minim ipsum ipsum et duis aliquip culpa amet nostrud.',
    date: '2021.06.30',
    isLiked: true,
    like: 454,
    comments: 97,
    bookmark: 2,
    isBookmarked: false,
    writer: '김떙땡',
  };
  return <InfoItem {...content} />;
};

export default InfoList;
