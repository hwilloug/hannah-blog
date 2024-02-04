import styled from "@emotion/styled";
import { ReactElement } from "react";
import {
  BorderedFullSizeImage,
  ColorProps,
  StyledButton,
  UnstyledLink,
} from "./StyledComponents";
import { useTheme } from "@mui/material";

const AsideContainer = styled.div`
  max-width: 17rem;
  min-width: 17rem;
  margin-right: 50px;
`;

const AsideItemContainer = styled.div<ColorProps>`
  background-color: ${({ colors }) =>
    colors.mode === "dark" ? colors.primary.dark : "white"};
  color: ${({ colors }) => (colors.mode === "dark" ? "white" : "black")};
  border: 1px solid black;
  border-radius: 25px 5px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const WelcomeTitle = styled.span`
  font-size: 36px;
  color: inherit;
`;

const WelcomeText = styled.p`
  font-size: 18px;
  line-height: 1.75;
  color: inherit;
`;

const AboutButton = styled(StyledButton)``;

const Aside: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();

  return (
    <AsideContainer>
      <AsideItemContainer colors={theme.palette}>
        <WelcomeTitle>Welcome to My Hobby Room</WelcomeTitle>
        <BorderedFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/me.jpeg`}
          alt="A pic of Hannah"
        />
        <WelcomeText>
          Hello world! It's me, Hannah. This is where I write about what I do
          outside of work!
        </WelcomeText>
        <UnstyledLink to="/about">
          <AboutButton colors={theme.palette}>More About Me</AboutButton>
        </UnstyledLink>
      </AsideItemContainer>
    </AsideContainer>
  );
};

export default Aside;
