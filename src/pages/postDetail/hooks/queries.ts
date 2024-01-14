//한 파일에서 사용하는 쿼리키를 모아두고 쿼리를 선언해주세요

import { useQuery, useQueryClient } from '@tanstack/react-query';

import fetchPostDetail from '../apis/fetchPostDetail';
//쿼리키를 이렇게 두는 이유는 겹치지 않기위해 + 객체로 생성하여 자동완성 하기 위해
export const QUERY_KEY_POST_DETAIL = {
  getPostDetail: 'getPostDetail',
  postCurious: 'postCurious',
  deleteCurious: 'deleteCurious',
  deletePost: 'deletePost',
  postComment: 'postComment',
  getCommentList: 'getCommentList',
  deleteComment: 'deleteComment',
  getAuthorization: 'getAuthorization',
  getCurious: 'getCurious',
};

export const useGetPostDetail = (postId: string) => {
  const queryClient = useQueryClient();
  const { data } = useQuery({
    queryKey: [QUERY_KEY_POST_DETAIL.getPostDetail],
    queryFn: () => fetchPostDetail('1'),
  });
  console.log(data);
  return data;
};
