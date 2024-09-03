import { styled } from "@mui/material";
import ClickableImage from "../components/ClickableFullSizeImage";
import {
  ArticleContentContainer,
  Section,
  SectionHeader,
} from "../components/StyledComponents";

const ImageandText = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
});

const Image = styled("p")({
  flexGrow: 0,
  maxWidth: "50%",
});

const ElizabethtonAntiqueHaulMay2024: React.FC = () => {
  return (
    <ArticleContentContainer>
      <Section>
        Danny and I were looking to get away this weekend, so we went up to my
        aunt's cabin in Roan Mountain, Tennessee. As you all know, my favorite
        pastime is antiquing, and there's tons of places around Roan Mountain to
        do so. Danny found an antique store called Duck Crossing Antique Mall in
        the neighboring town Elizabethton, and naturally we had to go! There
        were a ton of other stores nearby as well, and I was able to find
        treasures at Picket Fence Antiques & Gifts, the Eagle Center, and the
        Vintage Elk. Below are my finds!
      </Section>
      <Section>
        <SectionHeader>Haul Pictures</SectionHeader>
        <ImageandText>
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/roan_mtn_antiquing_1.jpeg`}
            size="50%"
            alt="a small vintage milk glass oil lamp"
          />
          <Image>A small milk glass oil lamp</Image>
        </ImageandText>
        <ImageandText>
          <Image>A cast iron pig wall hook</Image>
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/roan_mtn_antiquing_2.jpeg`}
            size="50%"
            alt="a cast iron pig wall hook"
          />
        </ImageandText>
        <ImageandText>
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/roan_mtn_antiquing_3.jpeg`}
            size="50%"
            alt="jadeite salt and pepper shakers, tulip pattern"
          />
          <Image>
            Jadeite salt and pepper shakers, tulip pattern. These are definitely
            a reproduction, but they were so cute, I couldn't resist!
          </Image>
        </ImageandText>
        <ImageandText>
          <Image>A basket copper mold</Image>
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/roan_mtn_antiquing_4.jpeg`}
            size="50%"
            alt="a basket copper mold"
          />
        </ImageandText>
        <ImageandText>
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/roan_mtn_antiquing_5.jpeg`}
            size="50%"
            alt="sheffield strawberries and cream crock and mccoy strawberry mug"
          />
          <Image>
            Left: Sheffield strawberries & cream crock; Right: McCoy
            strawberries mug
          </Image>
        </ImageandText>
        <ImageandText>
          <Image>A duck jam jar</Image>
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/roan_mtn_antiquing_6.jpeg`}
            size="50%"
            alt="a duck jam jar"
          />
        </ImageandText>
        <ImageandText>
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/roan_mtn_antiquing_7.jpeg`}
            size="50%"
            alt="a floral espresso cup and saucer"
          />
          <Image>A floral espresso cup and saucer</Image>
        </ImageandText>
        <ImageandText>
          <Image>
            A floral lamp base. This came with a shade that I didn't really
            like, so I'll be looking for a replacement.
          </Image>
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/roan_mtn_antiquing_8.jpeg`}
            size="50%"
            alt="a vintage floral lamp base"
          />
        </ImageandText>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/roan_mtn_antiquing_9.jpeg`}
          alt="elizabethton antiquing haul"
        />
      </Section>
      <Section>
        <SectionHeader>Bonus Pics from a Hike to Laurel Falls</SectionHeader>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/roan_mtn_antiquing_11.jpeg`}
          alt="pond mountain sign"
        />
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/roan_mtn_antiquing_10.jpeg`}
          alt="Laurel falls"
        />
      </Section>
      <Section>
        <p>
          So, what do you think? What's your favorite antique from this haul?
          Post in the comments below! 🌸
        </p>
      </Section>
    </ArticleContentContainer>
  );
};

export default ElizabethtonAntiqueHaulMay2024;
