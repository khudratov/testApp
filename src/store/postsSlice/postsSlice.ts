import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IPost} from '../../types';
import {
  createPostAction,
  deletePostActions,
  getPostByIdAction,
  getPostsAction,
  updatePostActions,
} from './postActions';
import {InitialStateType} from './postSliceTypes';

const initialState: InitialStateType = {
  list: null,
  post: null,
  getLoading: false,
  getPostLoading: false,
  createLoading: false,
  deleteLoading: false,
  updateLoading: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [createPostAction.pending.type](state) {
      state.createLoading = true;
    },
    [createPostAction.fulfilled.type](state, {payload}: PayloadAction<IPost>) {
      if (state.list) {
        state.list = [...state.list, payload];
      }
      state.createLoading = false;
    },
    [createPostAction.rejected.type](state) {
      state.createLoading = false;
    },

    [getPostsAction.pending.type](state) {
      state.getLoading = true;
    },
    [getPostsAction.fulfilled.type](state, action: PayloadAction<IPost[]>) {
      state.list = action.payload;
      state.getLoading = false;
    },
    [getPostsAction.rejected.type](state) {
      state.getLoading = false;
    },

    [deletePostActions.pending.type](state) {
      state.deleteLoading = true;
    },
    [deletePostActions.fulfilled.type](state, {payload}: PayloadAction<IPost>) {
      if (state.list) {
        state.list = state.list.filter(post => post.id !== payload.id);
      }
      state.deleteLoading = false;
    },
    [deletePostActions.rejected.type](state) {
      state.deleteLoading = false;
    },

    [updatePostActions.pending.type](state) {
      state.updateLoading = true;
    },
    [updatePostActions.fulfilled.type](state, {payload}: PayloadAction<IPost>) {
      if (state.list) {
        const index = state.list.findIndex(post => post.id === payload.id);

        if (index > -1) {
          state.list[index] = payload;
        }
      }
      state.updateLoading = false;
    },
    [updatePostActions.rejected.type](state) {
      state.updateLoading = false;
    },

    [getPostByIdAction.pending.type](state) {
      state.post = null;
      state.getPostLoading = true;
    },
    [getPostByIdAction.fulfilled.type](state, {payload}: PayloadAction<IPost>) {
      state.getPostLoading = false;
      state.post = payload;
    },
    [getPostByIdAction.rejected.type](state) {
      state.getPostLoading = false;
    },
  },
});
