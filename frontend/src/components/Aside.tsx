import {
  Button,
  Grid,
  Input,
  Snackbar,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import axios from "axios";
import { ReactElement, useEffect, useState } from "react";
import {
  BorderedFullSizeImage,
  ProgressBar,
  StyledButton,
  UnstyledLink,
} from "./StyledComponents";

const AsideContainer = styled("div")(({ theme }) => ({
  maxWidth: useMediaQuery(theme.breakpoints.up("md")) ? "17rem" : "100%",
  minWidth: useMediaQuery(theme.breakpoints.up("md")) ? "17rem" : "100%",
  margin: useMediaQuery(theme.breakpoints.up("md"))
    ? "50px 100px 0 0"
    : "50px 0",

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
  maxWidth: "17rem",
  height: "100%",
}));

const AsideItemContainer = styled("div")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.primary.dark : "white",
  color: theme.palette.mode === "dark" ? "white" : "black",
  border: `1px solid ${theme.palette.primary.dark}`,
  borderRadius: "20px 5px",
  maxWidth: "17rem",
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

const SnackbarContent = styled("div", {
  shouldForwardProp: (prop) => prop !== "status",
})<{ status: string }>(({ status }) => ({
  backgroundColor: status === "success" ? "green" : "red",
  border: "1px solid black",
  padding: "20px",
  color: "white",
}));

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
    "Adding a newsletter",
    "React styling & colors overhaul",
  ];

  const welcomePartial = (
    <AsideItemContainerContainer>
      <AsideItemContainer>
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
          <AsideButton>More About Me</AsideButton>
        </UnstyledLink>
      </AsideItemContainer>
    </AsideItemContainerContainer>
  );

  const obsessionsPartial = (
    <AsideItemContainerContainer>
      <AsideItemContainer>
        <AsideTitle>Current Obsessions & Upcoming Articles:</AsideTitle>
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
          {readingProgress}/{readingGoal} ({readingPercent}%)
        </AsideText>
        <UnstyledLink
          to="https://www.goodreads.com/user_challenges/52076751"
          target="_blank"
        >
          <AsideButton>View on Goodreads</AsideButton>
        </UnstyledLink>
        <UnstyledLink
          to="https://hardcover.app/@hannahwilloughby/goals/6990#sortBy%5B0%5D%5BlastReadDate%5D=desc_nulls_last"
          target="_blank"
        >
          <AsideButton>View on Hardcover</AsideButton>
        </UnstyledLink>
        <UnstyledLink
          to="https://fable.co/hannah-willoughby-114282952258"
          target="_blank"
        >
          <AsideButton>View on Fable</AsideButton>
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
          data-width="300"
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
            <BorderedFullSizeImage src="https://img.fablecdn.net/images/cdn.fable.co/group_covers/D7CE5584-21F6-41A6-A854-5418B5FEFCCF.jpg?w=416" />
            <StyledButton>Hannah's Book Club</StyledButton>
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
    </AsideItemContainerContainer>
  );

  const [email, setEmail] = useState<string>("");
  const [emailValid, setEmailValid] = useState(false);
  const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);
  const [failureSnackbarOpen, setFailureSnackbarOpen] = useState(false);

  useEffect(() => {
    if (email?.includes("@") && email?.includes(".")) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  }, [email]);

  const handleEmailSignup = async () => {
    try {
      const resp = await axios.post(
        `${process.env.REACT_APP_API_URL}/newsletter`,
        { email },
      );
      if (resp.status === 201) {
        setSuccessSnackbarOpen(true);
      } else if (resp.status === 409) {
        setFailureSnackbarOpen(true);
      }
    } catch (e) {
      console.log(e);
      setFailureSnackbarOpen(true);
    }
  };

  const handleSnackbarClose = () => {
    setSuccessSnackbarOpen(false);
    setFailureSnackbarOpen(false);
  };

  const newsletterPartial = (
    <AsideItemContainerContainer>
      <AsideItemContainer>
        <AsideTitle>Newsletter Signup</AsideTitle>
        <AsideText>
          Want to be notified of new articles? Sign up here!
        </AsideText>
        <Input
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button disabled={!emailValid} onClick={handleEmailSignup}>
          Sign up
        </Button>
        <AsideText>
          <p className="small">
            Your data is encrypted and will never be sold, and you can
            unsubscribe at any time.
          </p>
        </AsideText>
      </AsideItemContainer>
    </AsideItemContainerContainer>
  );

  const SNACKBAR_DURATION = 5000;

  return (
    <AsideContainer>
      {welcomePartial}
      {newsletterPartial}
      {obsessionsPartial}
      {readingChallengePartial}
      {bookclubPartial}
      {connectPartial}
      <Snackbar
        autoHideDuration={SNACKBAR_DURATION}
        open={successSnackbarOpen}
        onClose={handleSnackbarClose}
      >
        <SnackbarContent status="success">
          You are now signed up for the newsletter!
        </SnackbarContent>
      </Snackbar>
      <Snackbar
        autoHideDuration={SNACKBAR_DURATION}
        open={failureSnackbarOpen}
        onClose={handleSnackbarClose}
      >
        <SnackbarContent status="failure">
          You are already subscribed!
        </SnackbarContent>
      </Snackbar>
    </AsideContainer>
  );
};

export default Aside;
