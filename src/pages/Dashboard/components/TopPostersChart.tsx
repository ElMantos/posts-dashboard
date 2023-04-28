import { FC, useMemo } from "react";
import styled from "styled-components";

import { BarChart, Spinner, Text, Error as ErrorComponent } from "@components";

import usePostsQuery from "../hooks/usePostsQuery";
import useUsersQuery from "../hooks/useUsersQuery";

const TitleContainer = styled.div`
  margin-top: 16px;
`;

const TopPostersCharts: FC = () => {
  const { data: posts, isLoading: isPostsLoading, isError: isPostsError } = usePostsQuery();
  const { data: users, isLoading: isUsersLoading, isError: isUsersError } = useUsersQuery();
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

    return topPostsByUser.map(([userId, postsAmount]) => {
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
    });
  }, [posts, users]);

  if(isPostsError || isUsersError){
    return <ErrorComponent text="Unexpected error occured" />
  }

  if (isPostsLoading || isUsersLoading || !topUsersByPosts) {
    return <Spinner />;
  }

  return (
    <>
      <TitleContainer>
        <Text fontSize="20px">Top 5 posters: </Text>
      </TitleContainer>
      <BarChart data={topUsersByPosts} />
    </>
  );
};

export default TopPostersCharts;
