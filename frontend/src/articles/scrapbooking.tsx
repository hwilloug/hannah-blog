import ClickableImage from "../components/ClickableFullSizeImage";
import {
  ArticleContentContainer,
  Section,
} from "../components/StyledComponents";

const Scrapbooking: React.FunctionComponent = () => {
  return (
    <ArticleContentContainer>
      <Section>
        <p>
          After visiting my grandparents in Mississippi, I was inspired to get
          back into printing photos for my photo albums. Scrapbooking was always
          something I have wanted to do, so instead of buying a new photo album
          when I ran out of space for my new photos, I decided to start
          scrapbooking!
        </p>
      </Section>
      <Section>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/poppy_scrapbooking.jpeg`}
          alt="my cat poppy on the scrapbooking stuff"
        />
        <p>Poppy helping me scrapbook</p>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/scrapbooks_1.jpeg`}
          alt="scrapbooking about cats"
        />
        <p>
          There are pages and pages of cat photos. They truly are my babies ❤️🌸
        </p>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/scrapbooks.jpeg`}
          alt="full scrapbooks"
        />
        <p>
          And of course I can't help myself but to go overboard. My two binders
          I bought are already full! The first binder is from college, and the
          second album is Boston and beyond. I hope to get a third album for
          before college.
        </p>
        <p>
          For now, the pages are mostly filled with pictures, but I am going
          back through and adding little notes and descriptions as well. I have
          some trinkets saved that I've also put in the pages!
        </p>
      </Section>
      <Section>
        Going through these old photos is helping me process my memories and
        reflect on good and bad times. I've learned so much about myself the
        last few years, and I hope that 2024 is a spectacular year.
      </Section>
    </ArticleContentContainer>
  );
};

export default Scrapbooking;
