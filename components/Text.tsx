import React from "react";
import styled from "styled-components";

interface TextProps {
  children: React.ReactNode;
}

const TextContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledText = styled.p`
  font-family: "Raleway", sans-serif;
  font-size: 3rem;
  font-weight: 300;
  color: #ffffff;
`;

const Text: React.FC<TextProps> = ({ children }) => {
  return (
    <TextContainer>
      <StyledText>{children}</StyledText>
    </TextContainer>
  );
};

export default Text;
