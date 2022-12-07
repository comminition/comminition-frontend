import { useQueries, useQuery } from '@tanstack/react-query';
import comminition from 'apis/comminition';
import { queryKeys } from 'react-query/constants';

const getInquiryPostList = async () => {
  const { data } = await comminition.getInquiryPostList(0, 3);
  return data.all;
};

const getInquiryPostContent = async (id: string) => {
  const { data } = await comminition.getInquiryPostContent(id);
  return data;
};

const useInquiry = () => {
  const fallback: string[] = [];
  const { data: inquiryData = fallback } = useQuery([queryKeys.InfoInquiryList], getInquiryPostList);
  const inquiryQueriesResult = useQueries({
    queries: inquiryData.map((postId) => {
      return {
        queryKey: [queryKeys.InfoInquiryContent, postId],
        queryFn: () => getInquiryPostContent(postId),
      };
    }),
  });

  return inquiryQueriesResult;
};

export default useInquiry;
