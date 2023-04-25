import { FC } from "react";
import styled from "styled-components";

import PostTitle from "./PostTitle";
import PostBody from "./PostBody";

interface PostProps {
  title: string;
  body: string;
  onClick: () => void;
}

const Container = styled.div`
  width: 100%;
  padding: 0px 32px;
  border: 1px solid #c0d6fa;
  background-color: #e6efff;
  margin-bottom: 24px;
  border-radius: 8px;
  cursor: pointer;
`;

const Post: FC<PostProps> = ({ title, body, onClick }) => {
  return (
    // It is not a good practice to have interactive events on non-interactive elements, probably should refactor :) 
    <Container onClick={onClick}>
      <PostTitle>{title}</PostTitle>
      <PostBody>{body}</PostBody>
    </Container>
  );
};


export default Post;