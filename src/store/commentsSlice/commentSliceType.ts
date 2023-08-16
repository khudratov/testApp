import {IComment} from '../../types';

export type InitialStateType = {
  comments: IComment[] | null;
  getCommentLoading: boolean;
  createCommentLoading: boolean;
  updateCommentLoading: boolean;
  deleteCommentLoading: boolean;
};
