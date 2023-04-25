import { useQuery } from "@tanstack/react-query";

import { keys, getUser } from "@api/users";
import { extractAPIData } from "@utils";

interface UseGetUserQueryArgs {
  userId: number;
}

const useUsersQuery = ({ userId }: UseGetUserQueryArgs) => {
  const { data, isLoading, isError } = useQuery(keys.getUser({ userId }), () =>
    getUser({ userId })
  );

  return { data: extractAPIData(data), isLoading, isError };
};

export default useUsersQuery;
