import {IPost} from '../../types';

export type InitialStateType = {
  list: null | IPost[];
  post: null | IPost;
  getLoading: boolean;
  getPostLoading: boolean;
  createLoading: boolean;
  deleteLoading: boolean;
  updateLoading: boolean;
};
