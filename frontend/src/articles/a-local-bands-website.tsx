import { ReactElement } from "react";
import {
  ArticleContentContainer,
  FullSizeImage,
  Section,
  SectionHeader,
} from "../components/StyledComponents";
import YoutubePlayer from "../components/YoutubePlayer";
import { useTheme } from "@mui/material";

const NoseyNeighborBand: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();

  return (
    <ArticleContentContainer colors={theme.palette}>
      <Section>
        <p>
          I made a website for a local band! Check it out here --{" "}
          <a href="https://noseyneighborband.com" target="_blank">
            noseyneighborband.com
          </a>
        </p>
        <p>
          The site is written in React, and served via S3/Cloudfront. Check out
          the source code{" "}
          <a href="https://github.com/hwilloug/nosey-neighbors" target="_blank">
            ~here~
          </a>
          .
        </p>
      </Section>
    </ArticleContentContainer>
  );
};

export default NoseyNeighborBand;
