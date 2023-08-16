import {createAsyncThunk} from '@reduxjs/toolkit';
import {IComment} from '../../types';
import commentsAPI from '../../services/api/comments';

export const getCommentsByPostIdAction = createAsyncThunk<
  IComment[],
  {postId: string}
>('comments/getAll', async ({postId}) => {
  return await commentsAPI.getCommentsByPostId(postId);
});

export const createCommentAction = createAsyncThunk<
  IComment,
  {comment: IComment; onSuccess: () => void}
>('comments/create', async ({comment, onSuccess}) => {
  const data = await commentsAPI.creatComment(comment);
  onSuccess();

  return data;
});

export const updateCommentAction = createAsyncThunk<
  IComment,
  {comment: IComment; onSuccess: () => void}
>('comments/update', async ({comment, onSuccess}) => {
  const data = await commentsAPI.updateComment(comment);
  onSuccess();
  return data;
});

export const deleteCommentAction = createAsyncThunk<
  IComment,
  {comment: IComment; onSuccess: () => void}
>('comments/delete', async ({comment, onSuccess}) => {
  await commentsAPI.deleteComment(comment);
  onSuccess();
  return comment;
});
