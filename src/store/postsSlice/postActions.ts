import {createAsyncThunk} from '@reduxjs/toolkit';
import postsAPI from '../../services/api/posts';
import {IPost} from '../../types';

export const createPostAction = createAsyncThunk<
  IPost,
  {post: IPost; onSuccess: () => void}
>('posts/create', async ({post, onSuccess}) => {
  const data = await postsAPI.createPost(post);
  onSuccess();

  return data;
});

export const getPostsAction = createAsyncThunk<IPost[], undefined>(
  'posts/getAll',
  async () => {
    return await postsAPI.getPosts();
  },
);

export const getPostByIdAction = createAsyncThunk<IPost, {id: string}>(
  'posts/getById',
  async ({id}) => {
    return await postsAPI.getPostById(id);
  },
);

export const deletePostActions = createAsyncThunk<IPost, {post: IPost}>(
  'posts/delete',
  async ({post}) => {
    await postsAPI.deletePost(post);
    return post;
  },
);

export const updatePostActions = createAsyncThunk<
  IPost,
  {post: IPost; onSuccess: () => void}
>('posts/update', async ({post, onSuccess}) => {
  // Cannot update new created Data
  await postsAPI.updatePost(post);
  onSuccess();
  return post;
});
