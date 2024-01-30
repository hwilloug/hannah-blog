import styled from "@emotion/styled";
import { ReactElement } from "react";
import { StyledButton } from "./StyledComponents";

const AsideContainer = styled.div`
  max-width: 17rem;
  min-width: 17rem;
`;

const WelcomeContainer = styled.div`
  background-color: white;
  border: 1px solid black;
  padding: 20px;
`;

const WelcomeTitle = styled.span`
  font-size: 36px;
`;

const WelcomeText = styled.p`
  font-size: 18px;
`;

const AboutButton = styled(StyledButton)``;

const Aside: React.FunctionComponent = (): ReactElement => {
  return (
    <AsideContainer>
      <WelcomeContainer>
        <WelcomeTitle>Welcome to Poppyland Blog</WelcomeTitle>
        <WelcomeText>
          Hello, and welcome to my blog! I'm Hannah, and this is where I write
          about the stuff I do outside of work.
        </WelcomeText>
        <AboutButton>More About Me</AboutButton>
      </WelcomeContainer>
    </AsideContainer>
  );
};

export default Aside;
