import { useQuery } from "@tanstack/react-query";

import { keys, getPosts } from "@api/posts";
import { extractAPIData } from "@utils";

interface UseGetPostsQueryArgs {
  userId?: number;
}

const usePostsQuery = ({ userId }: UseGetPostsQueryArgs = {}) => {
  const { data, isLoading, isError } = useQuery(keys.getPosts({ userId }), () =>
    getPosts({ userId })
  );

  return { data: extractAPIData(data), isLoading, isError };
};

export default usePostsQuery;
