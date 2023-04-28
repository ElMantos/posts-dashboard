import styled from "styled-components";

interface TextProps {
  fontSize?: string;
}

const Text = styled.p`
  font-size: ${({ fontSize }: TextProps) => fontSize || "16px"};
  font-weight: 500;
`;

export default Text;
