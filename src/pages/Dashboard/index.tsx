import { FC, useState } from "react";
import styled from "styled-components";

import { Container, Autocomplete, PageHeader, Spinner } from "@components";
import { useDebouncedValue } from "@hooks";

import Post from "./components/Post";

import usePostsQuery from "./hooks/usePostsQuery";
import useUsersQuery from "./hooks/useUsersQuery";
import makeOptionsFromUsers from "./utils/makeOptionsFromUsers";

const Separator = styled.hr`
  margin-top: 48px;
  margin-bottom: 32px;
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Dashboard: FC = () => {
  const [userName, setUserName] = useState("");
  const [selectedOption, setSelectedOption] = useState<
    { value: string | number; label: string } | undefined
  >();
  // debounce prevents requests going out on user input to avoid throttling
  const debouncedUsername = useDebouncedValue(userName, 500);

  const {
    data: posts,
    isLoading: isPostsLoading,
    isError,
  } = usePostsQuery({
    userId: selectedOption?.value ? Number(selectedOption?.value) : undefined,
  });
  const { data: users, isError: isUsersError } = useUsersQuery({
    name: debouncedUsername,
  });
  console.log({ users: users });

  const renderPosts = () => {
    if (isPostsLoading) {
      return (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      );
    }

    (posts || []).map(({ title, userId, body, id }) => (
      <Post key={id} title={title} userId={userId} body={body} />
    ));
  };

  return (
    <Container>
      <Autocomplete
        inputValue={userName}
        onInputValueChange={(e) => setUserName(e.target.value)}
        value={selectedOption}
        options={makeOptionsFromUsers(users)}
        placeholder="Search posts by user name"
        onChange={(nextValue) => setSelectedOption(nextValue)}
      />

      <Separator />
      <PageHeader>Posts</PageHeader>

      {renderPosts()}
    </Container>
  );
};

export default Dashboard;
