import api from './index';
import {IPost} from '../../types';

const getPosts = async (): Promise<IPost[]> => {
  const result = await api.get('/posts');

  return result.data;
};

const getPostById = async (id: string): Promise<IPost> => {
  const result = await api.get(`/posts/${id}`);

  return result.data;
};

const createPost = async (post: IPost): Promise<IPost> => {
  const result = await api.post('/posts', post);

  return result.data;
};

const updatePost = async (post: IPost): Promise<IPost> => {
  const result = await api.put(`/posts/${post.id}`, {post});

  return result.data;
};

const deletePost = async (post: IPost): Promise<IPost> => {
  const result = await api.delete(`/posts/${post.id}`);

  return result.data;
};

const postsAPI = {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
};

export default postsAPI;
