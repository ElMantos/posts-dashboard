import baseRequests from "../../baseRequest";
import { GetPostsResponse, GetPostsRequest } from "../types";

const getPosts = ({ userId }: GetPostsRequest) =>
  baseRequests.get<never, GetPostsResponse>("/posts", {
    params: { userId: userId },
  });

export default getPosts;
