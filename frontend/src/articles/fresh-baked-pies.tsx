import { ReactElement } from "react";
import {
  ArticleContentContainer,
  FullSizeImage,
  Section,
} from "../components/StyledComponents";

const Pies: React.FunctionComponent = (): ReactElement => {
  return (
    <ArticleContentContainer>
      <Section>
        <p>
          After I saw some 3D pie embroideries on Pinterest, I knew I wanted to
          try to do it as well. I knew I wanted to frame the final design, so I
          sifted through Pinterest for some text to go with the pies to make it
          a more complete piece.
        </p>
      </Section>
      <Section>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/pies_1.jpeg`}
        />
        <p>In progress...</p>
      </Section>
      <Section>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/pies_2.jpeg`}
        />
        <p>
          And here's the final result! I had problems with fraying edges, so I
          learned not to cut the fabric to size without binding the edges. For
          this project, the frame covered up most of the fraying, but I am still
          a unhappy that you can see it a little. Also, I wish I took my time on
          the pies a bit more so they'd be a little more neat and even. At any
          rate, I gave this to my Aunt for Christmas, and she loved it!
        </p>
      </Section>
    </ArticleContentContainer>
  );
};

export default Pies;
