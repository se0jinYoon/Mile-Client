import { client } from '../../../utils/apis/axios';

// 글 모임 초대 페이지 글모임 정보 GET
interface FetchGroupInfoResponseTypes {
  data: {
    moimTitle: string;
    imageUrl: string;
    leader: string;
    memberCount: number;
    description: string;
  };
  status: number;
  message: string;
}

export const fetchGroupInfo = async (groupId: string) => {
  try {
    const accessToken = localStorage.getItem('accesToken');
    const response = await client.get<FetchGroupInfoResponseTypes>(`/api/moim/${groupId}/invite`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log(response.data);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
