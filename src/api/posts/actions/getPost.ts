import baseRequests from "../../baseRequest";
import { GetPostResponse, GetPostRequest } from "../types";

const getPosts = ({ postId }: GetPostRequest) =>
  baseRequests.get<never, GetPostResponse>(`/posts/${postId}`);

export default getPosts;
