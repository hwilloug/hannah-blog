import { ReactElement } from "react";
import ClickableFullSizeImage from "../components/ClickableFullSizeImage";
import {
  ArticleContentContainer,
  Section,
  SectionHeader,
} from "../components/StyledComponents";

const SquirrelSampler: React.FunctionComponent = (): ReactElement => {
  return (
    <ArticleContentContainer>
      <Section>
        It took me forever to decide what to make my mom for Christmas last
        month. I was scouring Pinterest and the internet for cross stitch ideas
        (my mom loves needlepoint), and I finally came across{" "}
        <a
          href="https://www.everythingcrossstitch.com/autumn-band-sampler-mrp-p30737.aspx"
          target="_blank"
        >
          this Autumn Band Sampler
        </a>
        . When I saw the squirrels, I knew some variation of it would be the
        perfect gift for my mom.
      </Section>
      <Section>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/squirrel_sampler_3.jpeg`}
          alt="Squirrel sampler cross stitch design"
        />
        <p>
          Here's the final pared-down design I made from the Autumn Band
          Sampler. I designed it so that it would fit in a frame that I already
          had, so it ended up being much smaller than the original design (which
          was fine because I was kind of short on time as Christmas was fast
          approaching).
        </p>
      </Section>
      <Section>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/squirrel_sampler_1.jpeg`}
          alt="Squirrel sampler cross stitch in progress"
        />
        <p>In progress...</p>
      </Section>
      <Section>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/squirrel_sampler_2.jpeg`}
          alt="Squirrel sampler cross stitch final"
        />
        <p>
          And here is the final result! I was so so so happy with it, and my mom
          loved it!
        </p>
      </Section>
      <Section>
        <SectionHeader>References</SectionHeader>

        <a
          href="https://www.everythingcrossstitch.com/autumn-band-sampler-mrp-p30737.aspx"
          target="_blank"
        >
          Autumn Band Sampler
        </a>
      </Section>
    </ArticleContentContainer>
  );
};

export default SquirrelSampler;
