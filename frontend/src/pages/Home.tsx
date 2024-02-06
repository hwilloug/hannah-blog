import styled from "@emotion/styled";
import { ReactElement } from "react";
import Navigation from "../components/Navigation";
import {
  BodyContainer,
  ColorProps,
  CssProps,
  SectionTitle,
} from "../components/StyledComponents";
import { useMediaQuery, useTheme } from "@mui/material";
import Browse from "../components/Browse";
import WordColorAlternator from "../components/WordColorAlternator";
import FeaturedContent from "../components/FeaturedContent";

const WelcomeContainer = styled.div<CssProps>`
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px 0;
  margin: 20px 0 20px 0;
  max-width: ${(props) => (props.break ? "90vw" : "90%")};

  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ colors }) =>
    colors.mode === "dark" ? colors.primary.dark : "white"};
  color: ${({ colors }) => (colors.mode === "dark" ? "white" : "black")};
`;

const Subtitle = styled.h1`
  margin-top: 30px;
  font-weight: normal;
  font-size: 1.5rem;
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

const WelcomeP = styled.p`
  margin: 20px 50px;
`;

const CategoryB = styled.b<ColorProps>`
  color: ${({ colors }) =>
    colors.mode === "dark" ? colors.secondary.main : colors.primary.main};
  text-decoration: underline ${({ colors }) => colors.primary.main} wavy;
  padding: 10px 0px;
  text-decoration-thickness: 1.15px;
`;

const Signature = styled.img`
  width: 100px;
`;

const HomePage: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const colors = theme.palette;

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
      <WelcomeContainer break={sm} colors={colors}>
        <WordColorAlternator colors={wordColors} words={welcomeWords} />
        <WelcomeText>
          <WelcomeP>
            Hi! I'm Hannah, and I'm thrilled to welcome you to my hobby blog.
            Here, I share my passions and delve into the diverse world of
            activities that bring me joy.
          </WelcomeP>
          <WelcomeP>
            🍳 <CategoryB colors={colors}>Food:</CategoryB> Explore the art of
            culinary creativity with me as I try out delicious recipes and share
            the stories behind each dish.
          </WelcomeP>
          <WelcomeP>
            🌿 <CategoryB colors={colors}>Gardening:</CategoryB> Join me in the
            garden as I cultivate a vibrant green space, sharing tips on plant
            care, landscaping, and the pure joy of watching seeds blossom into
            blooms.
          </WelcomeP>
          <WelcomeP>
            ✂️ <CategoryB colors={colors}>Crafts:</CategoryB> Embark on a
            journey through the delicate art of needlework and woodworking and
            discover the beauty of crafting through knitting, embroidery,
            woodworking, and more.
          </WelcomeP>
          <WelcomeP>
            💻 <CategoryB colors={colors}>Coding:</CategoryB> Dive into the
            world of coding and technology. I share my insights, experiences,
            and projects as I navigate the exciting realm of programming.
          </WelcomeP>
          <WelcomeP>
            📚 <CategoryB colors={colors}>Books:</CategoryB> Immerse yourself in
            the captivating world of literature. I'll recommend books, discuss
            my latest reads, and explore the magic of storytelling.
          </WelcomeP>
          <WelcomeP>
            🎌 <CategoryB colors={colors}>Languages:</CategoryB> Embark on a
            linguistic adventure with me as I navigate the intricacies of
            learning Japanese. Share in the challenges and triumphs of mastering
            a new language.
          </WelcomeP>
          <WelcomeP>
            I hope you find inspiration, joy, and perhaps a few new hobbies to
            explore. Feel free to wander through the pages and join me on this
            eclectic journey through the things that make life more vibrant.
          </WelcomeP>
          <WelcomeP>
            Thank you for stepping into my world, and I can't wait to share this
            room with you!
          </WelcomeP>
          <WelcomeP>Warm regards,</WelcomeP>
          <WelcomeP>
            <Signature
              src={`${process.env.REACT_APP_IMAGES_BASE_URL}/signature.png`}
            />
          </WelcomeP>
        </WelcomeText>
        <Navigation showText={true} />
        <WelcomeText>
          <WelcomeP>
            Select a category above, or browse latest articles below.
          </WelcomeP>
        </WelcomeText>
      </WelcomeContainer>
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
