import { FC } from "react";
import styled from "styled-components";

interface PostProps {
  title: string;
  body: string;
  userId: number;
}

const Container = styled.div`
  width: 100%;
  padding: 32px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

const Body = styled.p`
  font-size: 16px;
  font-weight: 500;
`;

const Post: FC<PostProps> = ({ title, body, userId }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </Container>
  );
};


export default Post;