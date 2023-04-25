import baseRequests from "../../baseRequest";
import { GetUserResponse, GetUserRequest } from "../types";

const getUser = ({ userId }: GetUserRequest) =>
  baseRequests.get<never, GetUserResponse>(`/users/${userId}`);

export default getUser;
