import { useQuery } from "@tanstack/react-query";

import { keys, getPosts } from "@api/posts";

interface UserPostsArgs {
  title: string;
}

// Made as seperate hook to allow easier formatting/optimistic updates/etc if needed in the future
const usePosts = ({ title }: UserPostsArgs) => {
  const { data, isLoading, isError } = useQuery(keys.getPosts({ title }), () =>
    getPosts({ title })
  );

  return { data, isLoading, isError };
};

export default usePosts;
