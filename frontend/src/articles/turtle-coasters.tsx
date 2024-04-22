import { ReactElement } from "react";
import ClickableFullSizeImage from "../components/ClickableFullSizeImage";
import {
  ArticleContentContainer,
  RecipeContainer,
  Section,
  SectionHeader,
} from "../components/StyledComponents";

const TurtleCoasters: React.FunctionComponent = (): ReactElement => {
  return (
    <ArticleContentContainer>
      <Section>
        <ClickableFullSizeImage
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
        <ClickableFullSizeImage
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
        <ClickableFullSizeImage
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
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/big_turtle_coaster.jpeg`}
          alt="big turtle coaster"
        />
        <p>
          Danny had an idea to make some bigger ones for larger cups or candles,
          so I built on the design from tutorial and created a large version!
          Below is the design I created:
        </p>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/large_turtle_pattern.jpeg`}
          alt="big coaster pattern"
        />
      </Section>
      <Section>
        <RecipeContainer>
          <SectionHeader>
            Large Turtle Coaster Pattern Instructions
          </SectionHeader>
          <ol>
            <li>
              Color 1: Chain 4, and slip stitch in first stitch to create a
              loop, or do a magic circle
            </li>
            <li>Chain 2</li>
            <li>Double crochet 15x in the circle (for a total of 16)</li>
            <li>Slip stitch to move to the next round</li>
            <li>Chain 2</li>
            <li>
              Double crochet in same stitch, then double crochet 2x in each
              stitch all the way around (for a total of 32)
            </li>
            <li>Slip stitch to move to the next round</li>
            <li>Chain 2</li>
            <li>
              Double crochet in the same stitch, then double crochet 2x in each
              stitch all the way around (for a total of 64)
            </li>
            <li>Switch to color 2</li>
            <li>
              Leg 1: Single crochet 1, chain 2, double crochet in same stitch,
              treble crochet in same stitch, treble crochet in next stitch,
              double crochet in same stitch, chain 2, single crochet in same
              stitch to latch.
            </li>
            <li>Single crochet 1x in each stitch 6x </li>
            <li>
              Head: Single crochet 1, Chain 3, treble crochet in same stitch,
              quadruple crochet in same stitch, quadruple crochet in next
              stitch, treble crochet in same stitch, chain 3, single crochet in
              same stitch to latch.
            </li>
            <li>Single crochet 1x in each stitch 6x</li>
            <li>Leg 2: repeat leg 1</li>
            <li>Single crochet 1x in each stitch 14x</li>
            <li>Leg 3: repeat leg 1</li>
            <li>Single crochet 1x in each stitch 6x</li>
            <li>
              Tail: Chain 5, single crochet in second chain from end, double
              crochet x2 in each chain, single crochet to latch
            </li>
            <li>Single crochet 1x in each stitch 6x</li>
            <li>Leg 4: repeat leg 1</li>
            <li>Single crochet 1x in each stitch 14x</li>
            <li>Slip stitch to finish!</li>
          </ol>
        </RecipeContainer>
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
