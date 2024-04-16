import { useQuery, useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import { createGroupMemberJoin } from '../apis/createGroupMemberJoin';
import { fetchGroupInfo } from '../apis/fetchGroupInfo';
import { fetchWriterNameConflict } from '../apis/fetchWriterNameConflict';

export const QUERY_KEY_GROUP_INVITE = {
  getGroupInfo: 'getGroupInfo',
  getWriterNameConflict: 'getWriterNameConflict',
  postGroupMemberJoin: 'postGroupMemeberJoin',
};

// 글 모임 정보 가져오기
export const useGetGroupInfo = (groupId: string) => {
  const navigate = useNavigate();

  const { data, error } = useQuery({
    queryKey: [QUERY_KEY_GROUP_INVITE.getGroupInfo, groupId],
    queryFn: () => fetchGroupInfo(groupId),
  });

  const moimTitle = data && data.data.moimTitle;
  const imageUrl = data && data.data.imageUrl;
  const leader = data && data.data.leader;
  const foundedDate = data && data.data.foundedDate;
  const memberCount = data && data.data.memberCount;
  const description = data && data.data.description;

  if (error) {
    navigate(`/group/${groupId}`);
  }

  return { moimTitle, imageUrl, leader, foundedDate, memberCount, description, error };
};

// 필명 중복 여부 확인
export const useGetWriterNameConflict = (
  groupId: string,
  writerName: string,
  isConflictBtnClicked: boolean,
) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY_GROUP_INVITE.getWriterNameConflict, groupId, writerName],
    queryFn: () => fetchWriterNameConflict(groupId, writerName),
    enabled: !!isConflictBtnClicked,
  });

  const isConflict = data && data.data.isConflict;

  return { isConflict };
};

// 초대링크를 통한 글모임 사용자 가입
interface postGroupMemberJoinType {
  groupId: string;
  writerName: string;
  writerDescription: string;
}
export const usePostGroupMemberJoin = ({
  groupId,
  writerName,
  writerDescription,
}: postGroupMemberJoinType) => {
  const { mutate, data } = useMutation({
    mutationKey: [
      QUERY_KEY_GROUP_INVITE.postGroupMemberJoin,
      {
        groupId,
        writerName,
        writerDescription,
      },
    ],
    mutationFn: () => createGroupMemberJoin({ groupId, writerName, writerDescription }),
  });
  return { mutate, data };
};
