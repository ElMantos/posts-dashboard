import { FC, useState } from "react";
import styled from "styled-components";
import { Draggable } from "react-drag-reorder";

import {
  Error as ErrorComponent,
  Container,
  Autocomplete,
  PageHeader,
  Spinner,
} from "@components";
import { useDebouncedValue } from "@hooks";
import { Post as IPost } from "@api/posts/types";
import { withModuledErrorBoundary } from "@hoc";

import Post from "./components/Post";
import PostModal from "./components/PostModal";
import TopPostersByCharts from "./components/TopPostersChart";

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

const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  .grabbable {
    // predefined class styles are messing up design
    flex: unset;
    width: 100%;
  }
`;

const ThrowErrorButton = styled.button`
  display: inline-block;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s;
  background-color: rgb(253, 237, 237);
  color: rgb(95, 33, 32);
  border-color: rgb(95, 33, 32);
`;

const Dashboard: FC = () => {
  const [userName, setUserName] = useState("");
  const [selectedPost, setSelectedPost] = useState<undefined | IPost>(
    undefined
  );
  const [shouldSimulateError, setShouldSimulateError] = useState(false)
  const [selectedOption, setSelectedOption] = useState<
    { value: string | number; label: string } | undefined
  >();
  // debounce prevents requests going out on user input to avoid throttling
  const debouncedUsername = useDebouncedValue(userName, 500);

  const {
    data: posts,
    isLoading: isPostsLoading,
    isError: isPostsError,
  } = usePostsQuery({
    userId: selectedOption?.value ? Number(selectedOption?.value) : undefined,
  });
  const { data: users, isError: isUsersError } = useUsersQuery({
    name: debouncedUsername,
  });

  const renderPosts = () => {
    if (isPostsLoading) {
      return (
        <SpinnerContainer>
          <Spinner />
        </SpinnerContainer>
      );
    }

    return (
      <Draggable>
        {(posts || []).map(({ title, body, id }) => (
          <Post
            key={id}
            title={title}
            onClick={() => {
              const post = posts?.find(({ id: postId }) => postId === id);
              if (!post) return;
              setSelectedPost(post);
            }}
            body={body}
          />
        ))}
      </Draggable>
    );
  };

  if (isPostsError || isUsersError) {
    return (
      <ErrorComponent text="Failed to fetch users or posts, please refresh your page and try again" />
    );
  }

  if(shouldSimulateError){
    throw new Error('aaahhhh shucks...')
  }

  return (
    <>
    <ThrowErrorButton onClick={() => setShouldSimulateError(true)}>Click me to simulate error and see how ErrorBoundary component works :)</ThrowErrorButton>
      {selectedPost && (
        <PostModal
          post={selectedPost}
          onClose={() => setSelectedPost(undefined)}
        />
      )}
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
        <TopPostersByCharts />
        <Separator />
        <PageHeader>Posts</PageHeader>

        <PostsContainer>{renderPosts()}</PostsContainer>
      </Container>
    </>
  );
};

export default withModuledErrorBoundary(Dashboard);
