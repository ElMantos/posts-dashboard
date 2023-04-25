import { GetPostsRequest, GetPostRequest } from "./types";

const keys = {
  getPosts: ({ userId }: GetPostsRequest) => ["get-posts", userId],
  getPost: ({ postId }: GetPostRequest) => ["get-post", postId],
};

export default keys;
