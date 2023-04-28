import { FC } from "react";
import styled from "styled-components";

import { Modal, Spinner } from "@components";
import { Post } from "@api/posts/types";

import PostTitle from "./PostTitle";
import PostBody from "./PostBody";

import useUserQuery from "../hooks/useUserQuery";

interface PostModalProps {
  onClose: () => void;
  post: Post;
}

const UserName = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

const PostModal: FC<PostModalProps> = ({
  post: { userId, title, body },
  onClose,
}) => {
  const { data: user, isLoading } = useUserQuery({ userId });

  const renderContent = () => {
    if (isLoading || !user) {
      return <Spinner />;
    }

    return (
      <>
        <PostTitle>{title}</PostTitle>
        <UserName><strong>Author:</strong> {user.name}</UserName>
        <PostBody>{body}</PostBody>
      </>
    );
  };
  return <Modal onClose={onClose}>{renderContent()}</Modal>;
};

export default PostModal;
