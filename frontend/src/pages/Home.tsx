import styled from "@emotion/styled";
import { ReactElement } from "react";
import Navigation from "../components/Navigation";
import {
  BodyContainer,
  BreakPointProps,
  SectionTitle,
} from "../components/StyledComponents";
import { useMediaQuery, useTheme } from "@mui/material";
import Browse from "../components/Browse";

const WelcomeBanner = styled.div<BreakPointProps>`
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;
  max-width: ${(props) => (props.break ? "90vw" : "100%")};

  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  background-color: white;
`;

const Title = styled.span`
  font-size: 2.75rem;
  text-align: center;

  font-family: Montserrat, Arial, Helvetica, sans-serif;
`;

const LatestArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const WelcomeText = styled.p`
  line-height: 1.75;
`;

const HomePage: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <BodyContainer>
      <WelcomeBanner break={sm}>
        <Title>Welcome to Poppyland Blog</Title>
        <Navigation showText={true} />
        <WelcomeText>
          Browse latest articles below, or click a category above.
        </WelcomeText>
      </WelcomeBanner>
      <LatestArticlesContainer>
        <SectionTitle break={sm} colors={theme.palette}>
          Latest Articles:
        </SectionTitle>
        <Browse />
      </LatestArticlesContainer>
    </BodyContainer>
  );
};

export default HomePage;
