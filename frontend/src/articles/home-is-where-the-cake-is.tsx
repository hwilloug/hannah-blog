import { useTheme } from "@mui/material";
import { ReactElement } from "react";
import ClickableImage from "../components/ClickableFullSizeImage";
import {
  ArticleContentContainer,
  Section,
} from "../components/StyledComponents";

const HomeIsWhereTheCakeIs: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();

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
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/cake_home_4.jpeg`}
          alt="Home is where the cake is design"
        />
        <p>
          I knew I'd have a hard time finding a frame that was long enough for
          the original design, so I cut off the bottom section. The above
          screenshot is the pared-down design that I used.
        </p>
      </Section>
      <Section>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/cake_home_1.jpeg`}
          alt="Tiger sitting under my cross stitch setup"
        />
        <p>In progress...</p>
      </Section>
      <Section>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/cake_home_2.jpeg`}
          alt="Cross stitch home is where the cake is almost complete"
        />
        <p>Almost done!</p>
      </Section>
      <Section>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/cake_home_3.jpeg`}
          alt="Framed home is where the cake is"
        />
        <p>
          And here is the final result! I added stitching along the lighter
          colors' borders so that they'd stand out better against the background
          fabric color. And I found this frame at a local thrift store that goes
          with it perfectly!
        </p>
      </Section>
      <Section>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/home_cake_5.jpeg`}
          alt="paired cross stitch with cake and a key"
        />
        <p>
          Now for giving it to my boyfriend, I paired the cross stitch with his
          favorite cake and a house key! He loved it!!
        </p>
      </Section>
    </ArticleContentContainer>
  );
};

export default HomeIsWhereTheCakeIs;
