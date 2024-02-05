import styled from "@emotion/styled";
import { ReactElement } from "react";
import {
  BorderedFullSizeImage,
  ColorProps,
  ProgressBar,
  StyledButton,
  UnstyledLink,
} from "./StyledComponents";
import { Grid, useTheme } from "@mui/material";

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
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AsideTitle = styled.span`
  font-size: 1.5rem;
  color: inherit;
  margin-bottom: 10px;
`;

const AsideText = styled.p`
  font-size: 18px;
  line-height: 1.75;
  color: inherit;
  margin-top: 10px;
`;

const AsideList = styled.ul`
  margin-top: 5px;
  padding-left: 20px;
`;

const AsideButton = styled(StyledButton)``;

const Aside: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();

  const readingGoal = parseInt(process.env.REACT_APP_READING_GOAL || "0");
  const readingProgress = parseInt(
    process.env.REACT_APP_READING_PROGRESS || "0",
  );
  const readingPercent = (readingProgress / readingGoal) * 100;

  const obsessions = ["Hannah's Hobby Room refactor and rebranding"];

  return (
    <AsideContainer>
      <AsideItemContainer colors={theme.palette}>
        <AsideTitle>Welcome to My Hobby Room</AsideTitle>
        <BorderedFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/me.jpeg`}
          alt="A pic of Hannah"
        />
        <AsideText>
          Hello world! It's me, Hannah. This is where I write about what I do
          outside of work!
        </AsideText>
        <UnstyledLink to="/about">
          <AsideButton colors={theme.palette}>More About Me</AsideButton>
        </UnstyledLink>
      </AsideItemContainer>

      <AsideItemContainer colors={theme.palette}>
        <AsideTitle>Current Obsessions & Upcoming Articles:</AsideTitle>
        <AsideText>
          <AsideList>
            {obsessions.map((item) => (
              <li>{item}</li>
            ))}
          </AsideList>
        </AsideText>
      </AsideItemContainer>

      <AsideItemContainer colors={theme.palette}>
        <AsideTitle>2024 Reading Challenge</AsideTitle>
        <AsideText>
          Follow along as I reach my goal of reading 50 books this year!
        </AsideText>
        <Grid spacing={1} container>
          <Grid item xs>
            <ProgressBar variant="determinate" value={readingPercent} />
          </Grid>
        </Grid>
        <AsideText>
          {readingProgress}/{readingGoal} ({readingPercent}%)
        </AsideText>
        <UnstyledLink
          to="https://www.goodreads.com/user_challenges/52076751"
          target="_blank"
        >
          <AsideButton colors={theme.palette}>View on Goodreads</AsideButton>
        </UnstyledLink>
      </AsideItemContainer>
    </AsideContainer>
  );
};

export default Aside;
