import { ReactElement } from "react";
import {
  ArticleContentContainer,
  FullSizeImage,
  Section,
  SectionHeader,
} from "../components/StyledComponents";
import { useTheme } from "@mui/material";

const TurtleCoasters: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();

  return (
    <ArticleContentContainer colors={theme.palette}>
      <Section>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/turtle_coasters_on_table.jpeg`}
          alt="turtle coaster stack"
        />
        <p>
          We recently antiqued a trout table that has 3D carved trout under the
          glass. I am not a fan of glass-on-glass, so I decided to crochet some
          coasters!
        </p>
      </Section>
      <Section>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/turtle_coasters.gif`}
          alt="turtle coaster stack"
        />
        <p>
          Since the table is river themed, I decided to make the coasters shaped
          like turtles! I followed{" "}
          <a
            href="https://youtu.be/GstprIsKh5s?si=qPxZYzRs8H_u9sSc"
            target="_blank"
          >
            this
          </a>{" "}
          YouTube tutorial. Here's the final result.
        </p>
      </Section>
      <Section>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/turtle_coasters.jpeg`}
          alt="turtle coasters"
        />
        <p>
          It felt good to get back into crochet. I never really make anything
          big with crochet, mostly because I have tension issues and thus cannot
          size things correctly, but these coasters turned out great, and they
          didn't take long to make!
        </p>
      </Section>
      <Section>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/big_turtle_coaster.jpeg`}
          alt="big turtle coaster"
        />
        <p>
          Danny had an idea to make some bigger ones for larger cups or candles,
          so I built on the design from tutorial and created a large version!
          Below is the design I created:
        </p>
      </Section>
      <Section>
        <SectionHeader>Resources</SectionHeader>
        <ul>
          <li>
            <a
              href="https://youtu.be/GstprIsKh5s?si=qPxZYzRs8H_u9sSc"
              target="_blank"
            >
              YouTube: How to Crochet Turtle/Tortoise Applique Tutorial
            </a>
          </li>
        </ul>
      </Section>
    </ArticleContentContainer>
  );
};

export default TurtleCoasters;
