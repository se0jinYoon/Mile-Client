import { client } from '../../../utils/apis/axios';

interface DeleteCommentResponseType {
  status: number;
  message: string;
  data: null;
}
const fetchDeleteComment = async (postId: string) => {
  const token = localStorage.getItem('accessToken');
  try {
    const data = client.delete<DeleteCommentResponseType>(`/api/delete/${postId}/comment`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchDeleteComment;
