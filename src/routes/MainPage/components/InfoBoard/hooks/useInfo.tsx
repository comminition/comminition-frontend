import { useQueries, useQuery } from '@tanstack/react-query';
import comminition from 'apis/comminition';
import { queryKeys } from 'react-query/constants';

const getInfoPostList = async () => {
  const { data } = await comminition.getInfoPostList(0, 3);
  return data.all;
};

const getInfoPostContent = async (id: string) => {
  const { data } = await comminition.getInfoPostContent(id);
  return data;
};

const useInfo = () => {
  const fallback: string[] = [];
  const { data: infoData = fallback } = useQuery([queryKeys.InfoPostList], getInfoPostList);
  const infoQueriesResult = useQueries({
    queries: infoData.map((postId) => {
      return {
        queryKey: [queryKeys.InfoPostContent, postId],
        queryFn: () => getInfoPostContent(postId),
      };
    }),
  });

  return infoQueriesResult;
};

export default useInfo;
