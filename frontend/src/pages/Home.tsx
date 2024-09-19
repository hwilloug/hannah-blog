import { Box, Container, Grid, styled, useMediaQuery } from "@mui/material";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import CategoryPreview from "../components/CategoryPreview";
import EmailSignup from "../components/EmailSignup";
import FeaturedContent from "../components/FeaturedContent";
import {
  BodyContainer,
  CategoryB,
  ContainerContainer,
  StyledButton,
  StyledP,
} from "../components/StyledComponents";
import WordColorAlternator from "../components/WordColorAlternator";

const WelcomeContainer = styled(Box)(({ theme }) => ({
  border: "1px solid black",
  borderRadius: "5px",
  padding: "20px 0",

  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.primary.dark : "white",
  color: theme.palette.mode === "dark" ? "white" : "black",
}));

const LatestArticlesGrid = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main + "99",
  borderRadius: "5px",
  padding: "20px",
  border: `5px solid ${theme.palette.primary.dark}`,
}));

const WelcomeP = styled(StyledP)(({ theme }) => ({
  margin: useMediaQuery(theme.breakpoints.down("xs")) ? "20px" : "20px 50px",
}));

const EmailContainer = styled(Container)(({ theme }) => ({
  backgroundColor: theme.palette.warning.main,
  color: `${theme.palette.mode === "dark" ? "white" : "black"}`,
  borderRadius: "5px",
  marginTop: "20px",
  padding: "10px",
  textAlign: "center",
}));

const MiniNavContainer = styled(StyledP)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.primary.dark : "white",
  borderRadius: "5px",
  padding: "10px",
}));

const Signature = styled("img")({
  width: "100px",
});

const HomePage: React.FunctionComponent = (): ReactElement => {
  const navigate = useNavigate();

  const wordColors = [
    "salmon",
    "#D0F0C0",
    "sandybrown",
    "khaki",
    "lightblue",
    "thistle",
  ];
  const welcomeWords = "Welcome to Hannah's Hobby Room🌸".split(" ");

  const categoryPreviews = [
    {
      category: "Gardening",
    },
    {
      category: "Crafts",
    },
    {
      category: "Coding",
    },
    {
      category: "Books",
    },
    {
      category: "Antiquing",
    },
  ];

  return (
    <BodyContainer
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "50px",
      }}
    >
      <FeaturedContent />

      <ContainerContainer>
        <WelcomeContainer>
          <WordColorAlternator colors={wordColors} words={welcomeWords} />
          <StyledP>
            <WelcomeP>
              Hi! I'm Hannah, and I'm thrilled to welcome you to my hobby blog.
              Here, I share what I've been working on and how I did it! There
              are six categories to choose from:{" "}
              <CategoryB>gardening</CategoryB>, <CategoryB>crafts</CategoryB>,{" "}
              <CategoryB>coding</CategoryB>, <CategoryB>books</CategoryB>, and{" "}
              <CategoryB>antiquing</CategoryB>.
            </WelcomeP>
            <WelcomeP>
              I hope you learn something new or find a new hobby to explore.
            </WelcomeP>
            <WelcomeP>
              Thank you for stepping into my world, and I can't wait to share
              this room with you!
            </WelcomeP>
            <WelcomeP>Warm regards,</WelcomeP>
            <WelcomeP>
              <Signature
                src={`${process.env.REACT_APP_IMAGES_BASE_URL}/signature.png`}
              />
            </WelcomeP>
          </StyledP>
        </WelcomeContainer>
      </ContainerContainer>

      <EmailContainer>
        <MiniNavContainer>
          <StyledP>Sign up for email notifications below!</StyledP>
          <EmailSignup />
        </MiniNavContainer>
      </EmailContainer>

      <div>
        {categoryPreviews.map((preview) => (
          <CategoryPreview category={preview.category} key={preview.category} />
        ))}
      </div>

      <LatestArticlesGrid container direction="column">
        <StyledButton
          onClick={() => navigate("/articles")}
          sx={{ textAlign: "center", mt: "20px" }}
        >
          View All Articles
        </StyledButton>
      </LatestArticlesGrid>
    </BodyContainer>
  );
};

export default HomePage;
