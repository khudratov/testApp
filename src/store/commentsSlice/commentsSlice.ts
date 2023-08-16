import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {InitialStateType} from './commentSliceType';
import {
  createCommentAction,
  deleteCommentAction,
  getCommentsByPostIdAction,
  updateCommentAction,
} from './commentActions';
import {IComment} from '../../types';

const initialState: InitialStateType = {
  comments: null,
  getCommentLoading: false,
  createCommentLoading: false,
  updateCommentLoading: false,
  deleteCommentLoading: false,
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: {
    [getCommentsByPostIdAction.pending.type](state) {
      state.comments = null;
      state.getCommentLoading = true;
    },
    [getCommentsByPostIdAction.fulfilled.type](
      state,
      {payload}: PayloadAction<IComment[]>,
    ) {
      state.comments = payload;
      state.getCommentLoading = false;
    },
    [getCommentsByPostIdAction.rejected.type](state) {
      state.getCommentLoading = false;
    },

    [createCommentAction.pending.type](state) {
      state.createCommentLoading = true;
    },
    [createCommentAction.fulfilled.type](
      state,
      {payload}: PayloadAction<IComment>,
    ) {
      if (state.comments) {
        state.comments = [...state.comments, payload];
      }
      state.createCommentLoading = false;
    },
    [createCommentAction.rejected.type](state) {
      state.createCommentLoading = false;
    },

    [updateCommentAction.pending.type](state) {
      state.updateCommentLoading = true;
    },
    [updateCommentAction.fulfilled.type](
      state,
      {payload}: PayloadAction<IComment>,
    ) {
      state.updateCommentLoading = false;
      if (state.comments) {
        const index = state.comments.findIndex(
          comment => comment.id === payload.id,
        );

        if (index >= 0) {
          state.comments[0] = payload;
        }
      }
    },
    [updateCommentAction.rejected.type](state) {
      state.updateCommentLoading = false;
    },

    [deleteCommentAction.pending.type](state) {
      state.deleteCommentLoading = true;
    },
    [deleteCommentAction.fulfilled.type](
      state,
      {payload}: PayloadAction<IComment>,
    ) {
      if (state.comments) {
        state.comments = state.comments.filter(
          comment => comment.id !== payload.id,
        );
      }
      state.deleteCommentLoading = false;
    },
    [deleteCommentAction.rejected.type](state) {
      state.deleteCommentLoading = false;
    },
  },
});
