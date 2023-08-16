import {IComment, IPost} from '../../types';

export interface CommentsProps {
  post: IPost;
  data: IComment[];
}
