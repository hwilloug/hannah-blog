import ClickableImage from "../components/ClickableFullSizeImage";
import {
  ArticleContentContainer,
  Section,
  SectionHeader,
} from "../components/StyledComponents";

const SpringSampler: React.FunctionComponent = () => {
  return (
    <ArticleContentContainer>
      <Section>
        I made a spring sampler cross stitch for my mom! I ripped the design off
        a kit found{" "}
        <a href="https://www.everythingcrossstitch.com/spring-band-sampler-mrp-p32517.aspx">
          here
        </a>
        , so I won't post the pattern myself. Below are the pictures of it in
        progress:
      </Section>
      <Section>
        <SectionHeader>In Progress Pictures</SectionHeader>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/spring_sampler_1.jpeg`}
          alt="starting the spring sampler cross stitch"
        />
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/spring_sampler_2.jpeg`}
          alt="spring sampler cross stitch in progress"
        />
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/spring_sampler_3.jpeg`}
          alt="spring sampler cross stitch in progress"
        />
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/spring_sampler_4.jpeg`}
          alt="spring sampler cross stitch in progress"
        />
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/spring_sampler_5.jpeg`}
          alt="a close up of the final spring sampler cross stitch"
        />
      </Section>
      <Section>
        <SectionHeader>What's next</SectionHeader>
        <p>
          Since the dimensions are not normal for a regular picture frame, I
          plan on building a custom frame. I borrowed a router from my dad, and
          am planning on starting it this week! Then, the piece will be done. I
          plan on giving it to my mom to match the squirrel sampler I made her
          for Christmas ❤️
        </p>
      </Section>
    </ArticleContentContainer>
  );
};

export default SpringSampler;
