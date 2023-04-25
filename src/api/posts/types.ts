import { Response } from "../types";

export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export type GetPostsResponse = Response<Post[]>;

export interface GetPostsRequest {
  userId?: number;
}
