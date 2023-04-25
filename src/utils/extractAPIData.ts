import { Response } from "@api/types";

const extracAPIData = <T>(data: Response<T> | undefined) => {
  return data?.data;
};

export default extracAPIData;
