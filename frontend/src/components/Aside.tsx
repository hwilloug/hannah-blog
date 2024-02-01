import styled from "@emotion/styled";
import { ReactElement } from "react";
import {
  BorderedFullSizeImage,
  StyledButton,
  UnstyledLink,
} from "./StyledComponents";
import { useTheme } from "@mui/material";

const AsideContainer = styled.div`
  max-width: 17rem;
  min-width: 17rem;
  margin-right: 50px;
`;

const WelcomeContainer = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WelcomeTitle = styled.span`
  font-size: 36px;
`;

const WelcomeText = styled.p`
  font-size: 18px;
  line-height: 1.75;
`;

const AboutButton = styled(StyledButton)``;

const Aside: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();

  return (
    <AsideContainer>
      <WelcomeContainer>
        <WelcomeTitle>Welcome to Poppyland Blog</WelcomeTitle>
        <BorderedFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/me.png`}
        />
        <WelcomeText>
          Hello world! It's me, Hannah. This is where I write about what I do
          outside of work!
        </WelcomeText>
        <UnstyledLink to="/about">
          <AboutButton colors={theme.palette}>More About Me</AboutButton>
        </UnstyledLink>
      </WelcomeContainer>
    </AsideContainer>
  );
};

export default Aside;
