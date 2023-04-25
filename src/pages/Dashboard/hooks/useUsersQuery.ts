import { useQuery } from "@tanstack/react-query";

import { keys, getUsers } from "@api/users";
import { extractAPIData } from "@utils";

interface UseGetUsersQueryArgs {
  name: string;
}

const useUsersQuery = ({ name }: UseGetUsersQueryArgs) => {
  const { data, isLoading, isError } = useQuery(keys.getUsers({ name }), () =>
    getUsers({ name })
  );

  return { data: extractAPIData(data), isLoading, isError };
};

export default useUsersQuery;
