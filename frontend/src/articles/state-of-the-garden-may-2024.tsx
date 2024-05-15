import ClickableFullSizeImage from "../components/ClickableFullSizeImage";
import {
  ArticleContentContainer,
  Section,
  SectionHeader,
  SubsectionHeader,
} from "../components/StyledComponents";

const SotgMay2024: React.FC = () => {
  return (
    <ArticleContentContainer>
      <Section>
        <p>Introduction</p>
      </Section>
      <Section>
        <SectionHeader>Garden Updates</SectionHeader>
        <SubsectionHeader>Broccoli and Cauliflower Bed</SubsectionHeader>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/sotg_may_2024_7.jpeg`}
          alt="a broccoli and cauliflower bed"
        />
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/sotg_may_2024_3.jpeg`}
          alt="a nice, stocky cauliflower plant"
        />
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/sotg_may_2024_4.jpeg`}
          alt="a leggy broccoli plant"
        />
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/sotg_may_2024_5.jpeg`}
          alt="a broccoli plant that has been eaten by a grasshopper"
        />
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/sotg_may_2024_6.jpeg`}
          alt="shasta daisies by the garden bed"
        />
        <SubsectionHeader>
          Peppers, Tomatoes, Eggplant, Okra Bed
        </SubsectionHeader>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/sotg_may_2024_9.jpeg`}
          alt="peppers, tomatoes, basil, eggplant in a garden bed"
        />
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/sotg_may_2024_8.jpeg`}
          alt="a baby shishito pepper"
        />
        <SubsectionHeader>Purple Hull Peas, Corn, Squash Bed</SubsectionHeader>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/sotg_may_2024_11.jpeg`}
          alt="before thinning purple hull peas"
        />
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/sotg_may_2024_10.jpeg`}
          alt="after thinning purple hull peas"
        />
      </Section>
    </ArticleContentContainer>
  );
};

export default SotgMay2024;
