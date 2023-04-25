import { GetPostsRequest } from "./types";

const keys = {
  getPosts: ({ userId }: GetPostsRequest) => ["posts", userId],
};

export default keys;
