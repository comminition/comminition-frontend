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

const getInquiryPostList = async () => {
  const { data } = await comminition.getInquiryPostList(0, 3);
  return data.all;
};

const getInquiryPostContent = async (id: string) => {
  const { data } = await comminition.getInquiryPostContent(id);
  return data;
};

const getProjectList = async () => {
  const { data } = await comminition.getProjectList(0, 4);
  return data.all;
};

const getProjectContent = async (id: string) => {
  const { data } = await comminition.getProjectContent(id);
  return data;
};

const useInfo = () => {
  const fallbackInfoIds: string[] = [];
  const { data: infoData = fallbackInfoIds } = useQuery([queryKeys.InfoPostList], getInfoPostList);
  const infoQueriesResult = useQueries({
    queries: infoData.map((postId) => {
      return {
        queryKey: [queryKeys.InfoPostContent, postId],
        queryFn: () => getInfoPostContent(postId),
      };
    }),
  });

  const fallbackInquiryIds: string[] = [];
  const { data: inquiryData = fallbackInquiryIds } = useQuery([queryKeys.InquiryPostList], getInquiryPostList);
  const inquiryQueriesResult = useQueries({
    queries: inquiryData.map((postId) => {
      return {
        queryKey: [queryKeys.InquiryPostContent, postId],
        queryFn: () => getInquiryPostContent(postId),
      };
    }),
  });

  const fallbackProjectIds: string[] = [];
  const { data: projectData = fallbackProjectIds } = useQuery([queryKeys.ProjectPostList], getProjectList);
  const projectQueriesResult = useQueries({
    queries: projectData.map((postId) => {
      return {
        queryKey: [queryKeys.ProjectPostContent, postId],
        queryFn: () => getProjectContent(postId),
      };
    }),
  });

  return { infoQueriesResult, inquiryQueriesResult, projectQueriesResult };
};

export default useInfo;
