import {configureStore} from '@reduxjs/toolkit';
import {postsSlice} from './postsSlice';
import {commentsSlice} from './commentsSlice';

export const createStore = () =>
  configureStore({
    reducer: {
      posts: postsSlice.reducer,
      comments: commentsSlice.reducer,
    },
  });

export const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
