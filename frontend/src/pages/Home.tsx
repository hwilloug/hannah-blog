import { styled } from "@mui/material";
import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import Browse from "../components/Browse";
import FeaturedContent from "../components/FeaturedContent";
import Navigation from "../components/Navigation";
import {
  BodyContainer,
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

const WelcomeP = styled(StyledP)({
  margin: "20px 50px",
});

const CategoryB = styled("b")(({ theme }) => ({
  color:
    theme.palette.mode === "dark"
      ? theme.palette.secondary.main
      : theme.palette.secondary.main,
  textDecoration: `underline ${theme.palette.secondary.main} wavy`,
  padding: "10px 0",
  textDecorationThickness: "1.15px",
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

  return (
    <BodyContainer>
      <FeaturedContent />
      <ContainerContainer>
        <WelcomeContainer>
          <WordColorAlternator colors={wordColors} words={welcomeWords} />
          <StyledP>
            <WelcomeP>
              Hi! I'm Hannah, and I'm thrilled to welcome you to my hobby blog.
              Here, I share my passions and delve into the diverse world of
              activities that bring me joy.
            </WelcomeP>
            <WelcomeP>
              🍳 <CategoryB>Food:</CategoryB> Explore the art of culinary
              creativity with me as I try out delicious recipes and share the
              stories behind each dish.
            </WelcomeP>
            <WelcomeP>
              🌿 <CategoryB>Gardening:</CategoryB> Join me in the garden as I
              cultivate a vibrant green space, sharing tips on plant care,
              landscaping, and the pure joy of watching seeds blossom into
              blooms.
            </WelcomeP>
            <WelcomeP>
              ✂️ <CategoryB>Crafts:</CategoryB> Embark on a journey through the
              delicate art of needlework and woodworking and discover the beauty
              of crafting through knitting, embroidery, woodworking, and more.
            </WelcomeP>
            <WelcomeP>
              💻 <CategoryB>Coding:</CategoryB> Dive into the world of coding
              and technology. I share my insights, experiences, and projects as
              I navigate the exciting realm of programming.
            </WelcomeP>
            <WelcomeP>
              📚 <CategoryB>Books:</CategoryB> Immerse yourself in the
              captivating world of literature. I'll recommend books, discuss my
              latest reads, and explore the magic of storytelling.
            </WelcomeP>
            <WelcomeP>
              🎌 <CategoryB>Languages:</CategoryB> Embark on a linguistic
              adventure with me as I navigate the intricacies of learning
              Japanese. Share in the challenges and triumphs of mastering a new
              language.
            </WelcomeP>
            <WelcomeP>
              I hope you find inspiration, joy, and perhaps a few new hobbies to
              explore. Feel free to wander through the pages and join me on this
              eclectic journey through the things that make life more vibrant.
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
          <Navigation showText filled />
          <StyledP>
            <WelcomeP>
              Select a category above, or browse latest articles below.
            </WelcomeP>
          </StyledP>
        </WelcomeContainer>
      </ContainerContainer>
      <LatestArticlesContainer>
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
