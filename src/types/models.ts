export interface IPost {
  id: string;
  title: string;
  body: string;
}

export interface IComment {
  id: string;
  postId: string;
  text: string;
}
