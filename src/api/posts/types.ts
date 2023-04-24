export interface Post {
  body: string;
  id: number;
  title: string;
  userId: string;
}

export type GetPostsResponse = Post[];

export interface GetPostsRequest {
  title: string;
}
