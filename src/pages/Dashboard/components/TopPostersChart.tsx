import { FC, useMemo } from "react";

import { BarChart, Spinner } from "@components";

import usePostsQuery from "../hooks/usePostsQuery";
import useUsersQuery from "../hooks/useUsersQuery";

const TopPostersCharts: FC = () => {
  const { data: posts, isLoading: isPostsLoading } = usePostsQuery();
  const { data: users, isLoading: isUsersLoading } = useUsersQuery();
  console.log({posts});
  const topUsersByPosts = useMemo(() => {
    if (!posts || !users) return undefined;

    const postsByUser = posts.reduce<Record<number, number>>(
      (acc, curr) => ({
        ...acc,
        [curr.userId]: acc?.[curr.userId] ? acc?.[curr.userId] + 1 : 1,
      }),
      {}
    );

    const topPostsByUser = Object.entries(postsByUser)
      .sort(([_, ApostsAmount], [__, BpostsAmount]) => {
        if (ApostsAmount < BpostsAmount) {
          return -1;
        }

        if (ApostsAmount === BpostsAmount) {
          return 0;
        }

        return 1;
      })
      .slice(0, 5);
    console.log({ topPostsByUser });

    return topPostsByUser.map(
      ([userId, postsAmount]) => {
        const user = users.find(({ id }) => id === Number(userId));

        if (!user) {
          throw new Error(
            "<TopPostersCharts /> could not find user with provided ID"
          );
        }

        return {
          value: postsAmount,
          label: user.name,
        };
      }
    );
  }, [posts, users]);

  console.log({ topUsersByPosts });


  if(isPostsLoading || isUsersLoading || !topUsersByPosts){
    return <Spinner />
  }

  return (
    <BarChart data={topUsersByPosts} />
  )
};

export default TopPostersCharts;
