import baseRequests from "../../baseRequest";
import { GetPostsResponse, GetPostsRequest } from "../types";

const getPosts = ({ title }: GetPostsRequest) =>
  baseRequests.get<never, GetPostsResponse>("/posts", {
    params: { title },
  });

export default getPosts;
