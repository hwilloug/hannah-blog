import { ReactElement } from "react";
import {
  ArticleContentContainer,
  FullSizeImage,
  Section,
  SectionHeader,
} from "../components/StyledComponents";

const HomeIsWhereTheCakeIs: React.FunctionComponent = (): ReactElement => {
  return (
    <ArticleContentContainer>
      <Section>
        <p>
          When I came across{" "}
          <a
            href="https://www.everythingcrossstitch.com/where-the-cake-is-mrp-p94406.aspx?k2=e1"
            target="_blank"
          >
            this "home is where the cake is" design
          </a>
          , I knew I had to make it for my cake-obsessed boyfriend.
        </p>
      </Section>
      <Section>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/cake_home_4.png`}
        />
        <p>
          I knew I'd have a hard time finding a frame that was long enough for
          the original design, so I cut off the bottom section. The above
          screenshot is the pared-down design that I used.
        </p>
      </Section>
      <Section>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/cake_home_1.png`}
        />
        <p>In progress...</p>
      </Section>
      <Section>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/cake_home_2.png`}
        />
        <p>Almost done!</p>
      </Section>
      <Section>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/cake_home_3.png`}
        />
        <p>
          And here is the final result! I added stitching along the lighter
          colors' borders so that they'd stand out better against the background
          fabric color. And I found this frame at a local thrift store that goes
          with it perfectly!
        </p>
      </Section>
      <Section>
        <p>MORE TO COME!</p>
      </Section>
    </ArticleContentContainer>
  );
};

export default HomeIsWhereTheCakeIs;
