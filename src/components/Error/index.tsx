import { FC } from "react";
import styled from "styled-components";

interface ErrorProps {
  text: string;
}

const ErrorContainer = styled.div`
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  color: rgb(95, 33, 32);
  background-color: rgb(253, 237, 237);
  text-align: center;
`;

const Error: FC<ErrorProps> = ({ text }) => (
  <ErrorContainer>{text}</ErrorContainer>
);

export default Error;
