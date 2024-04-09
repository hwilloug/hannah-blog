import { styled, useMediaQuery } from "@mui/material";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import Browse from "../components/Browse";
import CategoryPreview from "../components/CategoryPreview";
import FeaturedContent from "../components/FeaturedContent";
import Navigation from "../components/Navigation";
import {
  BodyContainer,
  CategoryB,
  ContainerContainer,
  SectionTitle,
  StyledButton,
  StyledP,
} from "../components/StyledComponents";
import WordColorAlternator from "../components/WordColorAlternator";

const WelcomeContainer = styled("div")(({ theme }) => ({
  border: "1px solid black",
  borderRadius: "5px",
  padding: "20px 0",
  maxWidth: "55rem",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.primary.dark : "white",
  color: theme.palette.mode === "dark" ? "white" : "black",
}));

const LatestArticlesContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",

  backgroundColor: theme.palette.primary.main,
  borderRadius: "5px",
  marginTop: "50px",
  padding: "10px",
}));

const WelcomeP = styled(StyledP)(({ theme }) => ({
  margin: useMediaQuery(theme.breakpoints.down("xs")) ? "20px" : "20px 50px",
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
      message:
        "Join me while I grow a vegetable garden, take care of houseplants, and consistently do too much for me to handle",
      emoji: "🌿",
    },
    {
      category: "Crafts",
      message:
        "Check out what crafts I've been doing lately. From cross-stitch to woodworking, let's have some creative fun!",
      emoji: "✂️",
    },
    {
      category: "Coding",
      message:
        "Follow along as I make updates to the site, develop other random web apps and video games, and play around on my Raspberry Pi.",
      emoji: "💻",
    },
    {
      category: "Books",
      message:
        "Sometimes I'll read a book and post my thoughts and feelings about it",
      emoji: "📚",
    },
    {
      category: "Antiquing",
      message:
        "Come shopping with me and check out my antiquing hauls. I can always find something for one of my collections!",
      emoji: "🕰️",
    },
    {
      category: "Food",
      message:
        "I'm still not entirely sure what this category is, but it's a category about food! I used to be really into cooking and trying new recipes, but I've fallen off the wagon on that. But this category is here for whenever I'm in the mood for that again!",
      emoji: "🍳",
    },
  ];

  return (
    <BodyContainer>
      <FeaturedContent />
      <ContainerContainer>
        <WelcomeContainer>
          <WordColorAlternator colors={wordColors} words={welcomeWords} />
          <StyledP>
            <WelcomeP>
              Hi! I'm Hannah, and I'm thrilled to welcome you to my hobby blog.
              Here, I share what I've been working on and how I did it! There
              are six categories to choose from <CategoryB>gardening</CategoryB>
              , <CategoryB>crafts</CategoryB>, <CategoryB>coding</CategoryB>,{" "}
              <CategoryB>books</CategoryB>, <CategoryB>antiquing</CategoryB>,
              and <CategoryB>food</CategoryB>.
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

      {categoryPreviews.map((preview) => (
        <CategoryPreview
          category={preview.category}
          emoji={preview.emoji}
          message={preview.message}
        />
      ))}
      <LatestArticlesContainer>
        <MiniNavContainer>
          <Navigation showText filled />
          <StyledP>
            Select a category above, or browse latest articles below.
          </StyledP>
        </MiniNavContainer>
        <SectionTitle>Latest Articles:</SectionTitle>
        <Browse hidePagination />
        <StyledButton
          onClick={() => navigate("/articles")}
          sx={{ textAlign: "center" }}
        >
          View All Articles
        </StyledButton>
      </LatestArticlesContainer>
    </BodyContainer>
  );
};

export default HomePage;
