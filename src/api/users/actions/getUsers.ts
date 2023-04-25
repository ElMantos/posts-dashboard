import baseRequests from "../../baseRequest";
import { GetUsersResponse, GetUsersRequest } from "../types";

const getUsers = ({ name }: GetUsersRequest) =>
  baseRequests.get<never, GetUsersResponse>("/users", {
    params: { name: name?.length ? name : undefined },
  });

export default getUsers;
