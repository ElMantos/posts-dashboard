import { AxiosResponse } from "axios";

// Re-export to make it easier to change interface if needed in the future
export type Response<T> = AxiosResponse<T>;
