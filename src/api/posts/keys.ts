import { GetPostsRequest } from "./types";

const keys = {
  getPosts: ({ title }: GetPostsRequest) => ["posts", title],
};

export default keys;
