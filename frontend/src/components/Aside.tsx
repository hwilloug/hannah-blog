import styled from "@emotion/styled";
import { ReactElement, useEffect, useState } from "react";
import {
  BorderedFullSizeImage,
  BreakPointProps,
  CssProps,
  ProgressBar,
  StyledButton,
  UnstyledLink,
} from "./StyledComponents";
import {
  Button,
  Grid,
  Input,
  Snackbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import axios from "axios";

const AsideContainer = styled.div<BreakPointProps>`
  max-width: ${(props) => (props.break ? "17rem" : "100%")};
  min-width: ${(props) => (props.break ? "17rem" : "100%")};
  margin: ${(props) => (props.break ? "50px 100px 0 0" : "50px 0")};

  display: ${(props) => (props.break ? "block" : "flex")};
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
`;

const AsideItemContainerContainer = styled.div<CssProps>`
  background-color: ${({ colors }) => colors.primary.main};
  border-radius: 20px 5px;
  padding: 10px;
  margin-bottom: 20px;
  max-width: 17rem;
  height: 100%;
`;

const AsideItemContainer = styled.div<CssProps>`
  background-color: ${({ colors }) =>
    colors.mode === "dark" ? colors.primary.dark : "white"};
  color: ${({ colors }) => (colors.mode === "dark" ? "white" : "black")};
  border: 1px solid ${({ colors }) => colors.primary.dark};
  border-radius: 25px 5px;
  max-width: 17rem;
  height: 100%;

  padding: 20px;

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

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .small {
    font-size: 12px;
    font-color: grey;
  }
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

const SnackbarContent = styled.div<{ status: string }>`
  background-color: ${({ status }) => (status === "success" ? "green" : "red")};
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;
  color: white;
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
    "Adding a newsletter",
  ];

  const welcomePartial = (
    <AsideItemContainerContainer colors={theme.palette} break={md}>
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
    </AsideItemContainerContainer>
  );

  const obsessionsPartial = (
    <AsideItemContainerContainer colors={theme.palette} break={md}>
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
    </AsideItemContainerContainer>
  );

  const readingChallengePartial = (
    <AsideItemContainerContainer colors={theme.palette} break={md}>
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
    </AsideItemContainerContainer>
  );

  const connectPartial = (
    <AsideItemContainerContainer colors={theme.palette} break={md}>
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
    </AsideItemContainerContainer>
  );

  const bookclubPartial = (
    <AsideItemContainerContainer colors={theme.palette} break={md}>
      <AsideItemContainer colors={theme.palette} break={md}>
        <AsideTitle>Join my bookclub!</AsideTitle>
        <AsideText>
          <a
            href="https://fable.co/club/hannahs-bookclub-with-hannah-willoughby-183460376024?club_type=free"
            target="_blank"
            className="center"
          >
            <BorderedFullSizeImage src="https://img.fablecdn.net/images/cdn.fable.co/group_covers/D7CE5584-21F6-41A6-A854-5418B5FEFCCF.jpg?w=416" />
            <StyledButton colors={theme.palette}>
              Hannah's Book Club
            </StyledButton>
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
    <AsideItemContainerContainer colors={theme.palette} break={md}>
      <AsideItemContainer colors={theme.palette} break={md}>
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
    <AsideContainer break={md}>
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
