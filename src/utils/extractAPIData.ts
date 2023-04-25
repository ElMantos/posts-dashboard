import { UseQueryResult } from "@tanstack/react-query";

const extracAPIData = <T>(data: UseQueryResult<T>) => {
  return data?.data;
};

export default extracAPIData;
