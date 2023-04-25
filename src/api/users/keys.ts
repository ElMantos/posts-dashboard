import { GetUsersRequest } from "./types";

const keys = {
  getUsers: ({ name }: GetUsersRequest) => ["get-users", name],
};

export default keys;
