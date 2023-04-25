import { useQuery } from "@tanstack/react-query";

import { keys, getUsers } from "@api/users";
import { extractAPIData } from "@utils";

interface UserPostsArgs {
  name: string;
}

// Made as seperate hook to allow easier formatting/optimistic updates/etc if needed in the future
const usePosts = ({ name }: UserPostsArgs) => {
  const { data, isLoading, isError } = useQuery(keys.getUsers({ name }), () =>
    getUsers({ name })
  );

  return { data: extractAPIData(data), isLoading, isError };
};

export default usePosts;
