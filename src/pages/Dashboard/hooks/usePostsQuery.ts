import { useQuery } from "@tanstack/react-query";

import { keys, getPosts } from "@api/posts";
import { extractAPIData } from "@utils";

interface UserPostsArgs {
  userId?: number;
}

// Made as seperate hook to allow easier formatting/optimistic updates/etc if needed in the future
const usePosts = ({ userId }: UserPostsArgs) => {
  const { data, isLoading, isError } = useQuery(keys.getPosts({ userId }), () =>
    getPosts({ userId })
  );

  return { data: extractAPIData(data), isLoading, isError };
};

export default usePosts;
