import { User } from "@api/users/types";

const makeOptionsFromUsers = (users: User[] | undefined) =>
  users?.map(({ name, id }) => ({ label: name, value: id.toString() })) || [];

export default makeOptionsFromUsers;
