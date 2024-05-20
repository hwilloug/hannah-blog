import { Grid, styled, useMediaQuery, useTheme } from "@mui/material";
import { ReactElement } from "react";
import {
  BorderedImage,
  ProgressBar,
  StyledButton,
  UnstyledLink,
} from "./StyledComponents";

const AsideContainer = styled("div")(({ theme }) => ({
  display: useMediaQuery(theme.breakpoints.up("md")) ? "block" : "flex",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "center",
}));

const AsideItemContainerContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "20px 5px",
  padding: "10px",
  marginBottom: "20px",
  height: "100%",
}));

const AsideItemContainer = styled("div")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.primary.dark : "white",
  color: theme.palette.mode === "dark" ? "white" : "black",
  border: `1px solid ${theme.palette.primary.dark}`,
  borderRadius: "20px 5px",
  height: "100%",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  a: {
    color: theme.palette.secondary.main,
    textDecoration: "none",
    ":hover": {
      textDecoration: "underline",
    },
  },
}));

const AsideTitle = styled("span")({
  fontSize: "1.5rem",
  color: "inherit",
  marginBottom: "10px",
});

const AsideText = styled("p")({
  fontSize: "18px",
  lineHeight: 1.75,
  color: "inherit",
  marginTop: "10px",
  ".center": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  ".small": {
    fontSize: "12px",
    fontColor: "grey",
  },
});

const AsideList = styled("ul")({
  marginTop: "5px",
  paddingLeft: "20px",
  listStyleType: "circle",
});

const AsideButton = styled(StyledButton)({
  marginTop: "10px",
});

const AsideImage = styled(BorderedImage)({
  maxWidth: "24rem",
});

const Aside: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();

  const readingGoal = parseInt(process.env.REACT_APP_READING_GOAL || "0");
  const readingProgress = parseInt(
    process.env.REACT_APP_READING_PROGRESS || "0",
  );
  const readingPercent = (readingProgress / readingGoal) * 100;

  const obsessions = [
    "Finishing up drip irrigation",
    "Spring/Summer 2024 Garden",
    "Finishing up garden arbor & fence",
    "'Farm Fresh' Cross Stitch",
  ];

  const welcomePartial = (
    <AsideItemContainerContainer>
      <AsideItemContainer>
        <AsideTitle>Welcome to My Hobby Room</AsideTitle>
        <AsideImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/me.jpeg`}
          alt="A pic of Hannah"
        />
        <AsideText>
          Hello world! It's me, Hannah. This is where I write about what I do
          outside of work!
        </AsideText>
        <UnstyledLink to="/about">
          <AsideButton>More About Me</AsideButton>
        </UnstyledLink>
      </AsideItemContainer>
    </AsideItemContainerContainer>
  );

  const obsessionsPartial = (
    <AsideItemContainerContainer>
      <AsideItemContainer>
        <AsideTitle>Current Projects & Upcoming Articles:</AsideTitle>
        <AsideText>
          <AsideList>
            {obsessions.map((item) => (
              <li key={obsessions.indexOf(item)}>{item}</li>
            ))}
          </AsideList>
        </AsideText>
      </AsideItemContainer>
    </AsideItemContainerContainer>
  );

  const readingChallengePartial = (
    <AsideItemContainerContainer>
      <AsideItemContainer>
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
          {readingProgress}/{readingGoal} ({readingPercent.toFixed(1)}%)
        </AsideText>
        <UnstyledLink
          to="https://www.goodreads.com/user_challenges/52076751"
          target="_blank"
        >
          <AsideButton>View on Goodreads</AsideButton>
        </UnstyledLink>
      </AsideItemContainer>
    </AsideItemContainerContainer>
  );

  const connectPartial = (
    <AsideItemContainerContainer>
      <AsideItemContainer>
        <a
          className="twitter-timeline"
          data-lang="en"
          data-width="200"
          data-height="500"
          data-theme={theme.palette.mode}
          href="https://twitter.com/HannahHobbyRoom?ref_src=twsrc%5Etfw"
        >
          Tweets by @HannahHobbyRoom
        </a>
      </AsideItemContainer>
    </AsideItemContainerContainer>
  );

  const bookclubPartial = (
    <AsideItemContainerContainer>
      <AsideItemContainer>
        <AsideTitle>Join my bookclub!</AsideTitle>
        <AsideText>
          <a
            href="https://fable.co/club/hannahs-bookclub-with-hannah-willoughby-183460376024?club_type=free"
            target="_blank"
            className="center"
          >
            <AsideImage src="https://img.fablecdn.net/images/cdn.fable.co/group_covers/D7CE5584-21F6-41A6-A854-5418B5FEFCCF.jpg?w=416" />
            <StyledButton>Hannah's Book Club</StyledButton>
          </a>
          <p>
            May's book:{" "}
            <a
              href="https://www.goodreads.com/book/show/62047984-yellowface"
              target="_blank"
            >
              <i>Yellowface</i> by R.F. Kuang
            </a>
          </p>
        </AsideText>
      </AsideItemContainer>
    </AsideItemContainerContainer>
  );

  return (
    <AsideContainer>
      {welcomePartial}
      {obsessionsPartial}
      {readingChallengePartial}
      {bookclubPartial}
      {connectPartial}
    </AsideContainer>
  );
};

export default Aside;
