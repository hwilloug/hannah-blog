import { useTheme } from "@mui/material";
import { ReactElement } from "react";
import ClickableImage from "../components/ClickableFullSizeImage";
import {
  ArticleContentContainer,
  Section,
  SectionHeader,
  StyledListItem,
} from "../components/StyledComponents";

const FarmFreshCrossStitch: React.FunctionComponent = (): ReactElement => {
  return (
    <ArticleContentContainer>
      <Section>
        <p>
          Long time no see! I finally finished a cross-stitch project that I've been putting off for a while. I was inspired to do this piece by my garden, and I'm really happy with how it turned out. I used a pattern from <a target="_blank" href="https://www.123stitch.com/item/Country-Cottage-Needleworks-Farm-Fresh-Cross-Stitch-Pattern/12-2208">this site</a>!
        </p>
      </Section>
      <SectionHeader>The Cross Stitch</SectionHeader>
      <Section>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/farm-fresh-1.jpeg`}
          alt="Farm Fresh Cross Stitch in progress"
        />
        <p>
          This is the piece in progress. I used 14 count cloth and (mostly) DMC floss. The 14 count cloth is a good size such that I can see the holes, and therefore, where the crosses should go.
        </p>
        <p>
          I wasn't sure I'd be able to get through the canpoy because it was pretty tedious, but it didn't end up being <i>too</i> bad. I really like the depth that the slight change in shade gives the canopy.
        </p>
      </Section>
      <Section>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/farm-fresh-3.jpeg`}
          alt="Finished farm fresh cross stitch"
        />
        <p>
          And here's the finished piece! My favorite part of making this was stitching the vegetables. I feel like doing that part really brought everything together and encouraged me to continue working on it. 
        </p>
      </Section>
      <SectionHeader>Framing</SectionHeader>
      <Section>
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/farm-fresh-4.jpeg`}
            alt="A green frame"
          />
        <p>
          I had this green frame that was perfect for this piece. I found it at <a href="https://humanesocietyofyorkcounty.org/about-hsyc/our-locations/location-pawsibilities-thrift-store.html">Pawsibilities</a>, a thrift store in Fort Mill. I loved the color of this frame, so snagged it for a time when I'd have a project that suits it. I also like the sizing of the frame because of the amount of margin it leaves, and I think the color really makes it pop!
        </p>
      </Section>
      <SectionHeader>Final Result</SectionHeader>
      <Section>
        <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/farm-fresh-5.jpeg`}
            alt="A complete and framed farm fresh cross stitch"
          />
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/farm-fresh-6.jpeg`}
            alt="A complete and framed farm fresh cross stitch"
          />
          <p>
            And here's the final result! I hung it up in my dining room.
          </p>
      </Section>
      <SectionHeader>What I'd Do Differently</SectionHeader>
      <Section>
        <ul>
          <StyledListItem>Make the text smaller so I could include the chickens.</StyledListItem>
          <StyledListItem>
            Use a darker shade of cloth. I think shade I picked was a little too light, and I would have rather had the clouds pop.
          </StyledListItem>
        </ul>
      </Section>
      <SectionHeader>Sneak Peek</SectionHeader>
      <Section>
        Here's a sneak peak of my next project. What could it be??
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/barnyard-1.jpeg`}
          alt="A sneak peak of a new cross stitch project"
        />
      </Section>
    </ArticleContentContainer>
  );
};

export default FarmFreshCrossStitch;
