import { client } from '../../../utils/apis/axios';

interface GroupFeedAuthPropTypes {
  data: {
    isMember: boolean;
  };
  status: number;
  message: string;
}

export const fetchGroupFeedAuth = async (groupId: string) => {
  try {
    const accessToken = localStorage.getItem('accessToken');
    const response = await client.get<GroupFeedAuthPropTypes>(`/api/moim/${groupId}/authenticate`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response.data; //"isMember" : boolean
  } catch (error) {
    console.error('에러:', error);
  }
};

interface GroupInfoPropTypes {
  data: {
    imageUrl: string;
    moimName: string;
    ownerName: string;
    startDate: string;
    writerCount: number;
    description: string;
  };
  status: number;
  message: string;
}

export const fetchGroupInfo = async (groupId: string) => {
  try {
    const response = await client.get<GroupInfoPropTypes>(`/api/moim/${groupId}/info`);

    return response.data;
  } catch (error) {
    console.error('에러:', error);
  }
};

export const fetchTodayWritingStyle = async (groupId: string) => {
  try {
    const response = await client.get(`/api/moim/${groupId}/topic`);
    return response.data;
  } catch (error) {
    console.error('에러:', error);
  }
};

interface CuriousPostPropTypes {
  data: {
    postList: {
      postId: string;
      imageUrl: string;
      topic: string;
      title: string;
      content: string;
    }[];
  };
  status: number;
  message: string;
}

export const fetchCuriousPost = async (groupId: string) => {
  try {
    const response = await client.get<CuriousPostPropTypes>(`/api/moim/${groupId}/mostCuriousPost`);
    console.log(response.data, '데이터');
    return response.data;
  } catch (error) {
    console.error('에러:', error);
  }
};
