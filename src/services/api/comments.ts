import api from './index';
import {IComment} from '../../types';

const getCommentsByPostId = async (id: string): Promise<IComment[]> => {
  const result = await api.get(`/comments?postId=${id}`);

  return result.data;
};

const creatComment = async (comment: IComment): Promise<IComment> => {
  await api.post('/comments', comment);

  return comment;
};

const updateComment = async (comment: IComment): Promise<IComment> => {
  await api.put(`/comments/${comment.id}`, comment);

  return comment;
};

const deleteComment = async (comment: IComment): Promise<IComment> => {
  await api.delete(`/comments/${comment.id}`);

  return comment;
};

const commentsAPI = {
  getCommentsByPostId,
  creatComment,
  updateComment,
  deleteComment,
};

export default commentsAPI;
