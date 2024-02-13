import styled from "@emotion/styled";
import { ReactElement } from "react";
import {
  BorderedFullSizeImage,
  BreakPointProps,
  CssProps,
  ProgressBar,
  SocialIcon,
  StyledButton,
  UnstyledLink,
} from "./StyledComponents";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import { ContactMail } from "@mui/icons-material";

const AsideContainer = styled.div<BreakPointProps>`
  max-width: ${(props) => (props.break ? "17rem" : "100%")};
  min-width: ${(props) => (props.break ? "17rem" : "100%")};
  margin: 50px 100px 0 0;

  display: ${(props) => (props.break ? "block" : "flex")};
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const AsideItemContainer = styled.div<CssProps>`
  background-color: ${({ colors }) =>
    colors.mode === "dark" ? colors.primary.dark : "white"};
  color: ${({ colors }) => (colors.mode === "dark" ? "white" : "black")};
  border: 1px solid ${({ colors }) => colors.primary.light};
  border-radius: 25px 5px;
  max-width: ${(props) => (props.break ? "17rem" : "100%")};
  width: ${(props) => (props.break ? "100%" : "17rem")};

  padding: 20px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  a {
    color: ${({ colors }) => colors.secondary.main};
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  }
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
  list-style-type: circle;
`;

const AsideListLinkedItem = styled.li`
  list-style-type: none;
  margin: 20px 0;

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;

    p {
      margin-top: 5px;
    }

    :hover {
      text-decoration: underline;
    }
  }
`;

const AsideButton = styled(StyledButton)`
  margin-top: 10px;
`;

const Aside: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  const readingGoal = parseInt(process.env.REACT_APP_READING_GOAL || "0");
  const readingProgress = parseInt(
    process.env.REACT_APP_READING_PROGRESS || "0",
  );
  const readingPercent = (readingProgress / readingGoal) * 100;

  const obsessions = [
    <a
      href="https://www.goodreads.com/book/show/164154.A_Canticle_for_Leibowitz"
      target="_blank"
    >
      <i>A Canticle for Leibowitz</i> by Walter M. Miller Jr.
    </a>,
    <a
      href="https://www.goodreads.com/book/show/126918788-the-women"
      target="_blank"
    >
      <i>The Women</i> by Kristin Hannah
    </a>,
    "Finishing up drip irrigation",
    "Finishing up garden arbor & fence",
    "Crochet turtle coasters",
    "Adding a newsletter",
  ];

  const welcomePartial = (
    <AsideItemContainer colors={theme.palette} break={md}>
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
  );

  const obsessionsPartial = (
    <AsideItemContainer colors={theme.palette} break={md}>
      <AsideTitle>Current Obsessions & Upcoming Articles:</AsideTitle>
      <AsideText>
        <AsideList>
          {obsessions.map((item) => (
            <li key={obsessions.indexOf(item)}>{item}</li>
          ))}
        </AsideList>
      </AsideText>
    </AsideItemContainer>
  );

  const readingChallengePartial = (
    <AsideItemContainer colors={theme.palette} break={md}>
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
      <UnstyledLink
        to="https://hardcover.app/@hannahwilloughby/goals/6990#sortBy%5B0%5D%5BlastReadDate%5D=desc_nulls_last"
        target="_blank"
      >
        <AsideButton colors={theme.palette}>View on Hardcover</AsideButton>
      </UnstyledLink>
      <UnstyledLink
        to="https://fable.co/hannah-willoughby-114282952258"
        target="_blank"
      >
        <AsideButton colors={theme.palette}>View on Fable</AsideButton>
      </UnstyledLink>
    </AsideItemContainer>
  );

  const connectPartial = (
    <AsideItemContainer colors={theme.palette} break={md}>
      <a
        className="twitter-timeline"
        data-lang="en"
        data-width="300"
        data-height="500"
        data-theme={theme.palette.mode}
        href="https://twitter.com/HannahHobbyRoom?ref_src=twsrc%5Etfw"
      >
        Tweets by @HannahHobbyRoom
      </a>
    </AsideItemContainer>
  );

  const bookclubPartial = (
    <AsideItemContainer colors={theme.palette} break={md}>
      <AsideTitle>Join my bookclub!</AsideTitle>
      <AsideText>
        <a
          href="https://fable.co/club/hannahs-bookclub-with-hannah-willoughby-183460376024?club_type=free"
          target="_blank"
        >
          <BorderedFullSizeImage src="https://img.fablecdn.net/images/cdn.fable.co/group_covers/D7CE5584-21F6-41A6-A854-5418B5FEFCCF.jpg?w=416" />
          Hannah's Book Club
        </a>
        <p>
          February's book:{" "}
          <a
            href="https://www.goodreads.com/book/show/126918788-the-women"
            target="_blank"
          >
            <i>The Women</i> by Kristin Hannah
          </a>
        </p>
      </AsideText>
    </AsideItemContainer>
  );

  return (
    <AsideContainer break={md}>
      {welcomePartial}
      {obsessionsPartial}
      {readingChallengePartial}
      {bookclubPartial}
      {connectPartial}
    </AsideContainer>
  );
};

export default Aside;
