import { ReactElement } from "react";
import {
  ArticleContentContainer,
  FullSizeImage,
  Section,
  SectionHeader,
} from "../components/StyledComponents";

const Arbor: React.FunctionComponent = (): ReactElement => {
  return (
    <ArticleContentContainer>
      <Section>
        <p></p>
      </Section>
      <Section>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/arbor_3.jpeg`}
          alt="The arbor design"
        />
        <p></p>
      </Section>
      <Section>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/arbor_1.jpeg`}
          alt="The arbor in progress"
        />
        <p></p>
      </Section>
      <Section>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/arbor_2.jpeg`}
          alt="The built arbor"
        />
        <p></p>
      </Section>
      <Section>
        <SectionHeader>Resources</SectionHeader>
        <ul>
          <li>
            <a
              href="https://www.woodshopdiaries.com/how-to-build-a-garden-arbor/"
              target="_blank"
            >
              How to Build a Garden Arbor
            </a>
          </li>
        </ul>
      </Section>
    </ArticleContentContainer>
  );
};

export default Arbor;
