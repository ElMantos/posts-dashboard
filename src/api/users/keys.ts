import { GetUsersRequest, GetUserRequest } from "./types";

const keys = {
  getUsers: ({ name }: GetUsersRequest) => ["get-users", name],
  getUser: ({ userId }: GetUserRequest) => ["get-user", userId],
};

export default keys;
