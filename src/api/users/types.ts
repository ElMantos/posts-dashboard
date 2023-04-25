import { Response } from "../types";
export interface GetUsersRequest {
  name?: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export type GetUsersResponse = Response<User[]>;

export interface GetUserRequest {
  userId: number;
}

export type GetUserResponse = Response<User>;
