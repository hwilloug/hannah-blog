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
  align-items: center;
  background-color: white;
`;

const Title = styled.span`
  font-size: 2.75rem;
  text-align: center;

  font-family: Montserrat, Arial, Helvetica, sans-serif;
`;

const Subtitle = styled.h1`
  margin: 0;
  font-weight: normal;
  font-size: 1.5rem;
  margin-bottom: 30px;
`;

const LatestArticlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;

const WelcomeText = styled.p`
  line-height: 1.75;
  margin-top: 30px;
`;

const WelcomeP = styled.p`
  margin: 20px 50px;
`;

const HomePage: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <BodyContainer>
      <WelcomeBanner break={sm}>
        <Title>Welcome to Poppyland Blog</Title>
        <Subtitle>Hannah's Hobby Blog</Subtitle>
        <Navigation showText={true} />
        <WelcomeText>
          <WelcomeP> Welcome to Poppyland Blog! 🌸</WelcomeP>
          <WelcomeP>
            Hello there! I'm Hannah, and I'm thrilled to welcome you to my hobby
            blog. Here, I share my passions and delve into the diverse world of
            activities that bring me joy.
          </WelcomeP>
          <WelcomeP>
            🍳 <b>Food</b>: Explore the art of culinary creativity with me as I
            whip up delicious recipes and share the stories behind each dish.
          </WelcomeP>
          <WelcomeP>
            🌿 <b>Gardening</b>: Join me in the garden as I cultivate a vibrant
            green space, sharing tips on plant care, landscaping, and the pure
            joy of watching seeds blossom into blooms.
          </WelcomeP>
          <WelcomeP>
            ✂️ <b>Crafts</b>: Embark on a journey through the delicate art of
            needlework and woodworking and discover the beauty of crafting
            through knitting, embroidery, woodworking, and more.
          </WelcomeP>
          <WelcomeP>
            💻 <b>Coding</b>: Dive into the world of coding and technology. I
            share my insights, experiences, and projects as I navigate the
            exciting realm of programming.
          </WelcomeP>
          <WelcomeP>
            📚 <b>Books</b>: Immerse yourself in the captivating world of
            literature. I'll recommend books, discuss my latest reads, and
            explore the magic of storytelling.
          </WelcomeP>
          <WelcomeP>
            🎌 <b>Languages</b>: Embark on a linguistic adventure with me as I
            navigate the intricacies of learning Japanese. Share in the
            challenges and triumphs of mastering a new language.
          </WelcomeP>
          <WelcomeP>
            I hope you find inspiration, joy, and perhaps a few new hobbies to
            explore. Feel free to wander through the pages and join me on this
            eclectic journey through the things that make life more vibrant.
          </WelcomeP>
          <WelcomeP>
            Thank you for stopping by, and I can't wait to share this space with
            you!
          </WelcomeP>
          <WelcomeP>Warm regards, Hannah</WelcomeP>
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
