import {
  ArticleContentContainer,
  FullSizeImage,
  Section,
  SectionHeader,
} from "../components/StyledComponents";

const SOTGMarch2024: React.FunctionComponent = () => {
  return (
    <ArticleContentContainer>
      <Section>
        Having almost started all my seeds, I figured it was time to give you
        all an update on my garden!
      </Section>
      <Section>
        <SectionHeader>Seedlings</SectionHeader>
        <p>
          <FullSizeImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/grow_lights_feb_2024.jpeg`}
          />
          Indoors, I've got my started seeds and my seedlings without true
          leaves. The grow lights are positioned a little too closely to the
          plants, but I don't have the space to move them up. I have the seeds
          yet to sprout on a heating mat and covered with lids to trap the
          moisture and encourage germination.
        </p>
        <p>
          <FullSizeImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/march_2024_garden_1.jpeg`}
          />
          <FullSizeImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/march_2024_garden_2.jpeg`}
          />
          I had forgotten how good it feels to grow the easy stuff like zinnias
          and peppers. I was so excited they started germinating after only a
          day or two! And the broccoli, cauliflower, and thyme are starting to
          come up as well.
        </p>
        <p>
          <FullSizeImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/march_2024_garden_3.jpeg`}
          />
          <FullSizeImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/march_2024_garden_4.jpeg`}
          />
          I moved my seedlings that had a few true leaves outside to make room
          under the grow lights inside, and it was a perfect cloudy week for
          acclimating new seedlings to the outdoors. The geraniums were having a
          hard time, anyway, under the grow lights; you can see that they were
          burned from too much and too intense light. I did move my peppers
          outside, however, I think that they may need a warmer environment, so
          I may move them back inside.
        </p>
      </Section>
      <Section>
        <SectionHeader>Beds</SectionHeader>
        <p>
          <FullSizeImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/march_2024_garden_5.jpeg`}
          />
          I've got a few things going outside as well: asparagus, strawberries,
          onions, garlic, and parsley.
        </p>
        <p>
          <FullSizeImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/march_2024_garden_6.jpeg`}
          />
          The parsley I planted spring last year is still going strong.
        </p>
        <p>
          <FullSizeImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/march_2024_garden_7.jpeg`}
          />
          The asparagus I planted last spring is starting to come up. I added a
          layer of compost in January.
        </p>
        <p>
          <FullSizeImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/march_2024_garden_8.jpeg`}
          />
          Finally, the strawberry bed. I didn't really take care of my
          strawberries last year, so they are looking kind of puny, but they are
          healthy enough and are showing new growth! I also planted onions in
          this bed a couple weeks ago, and they look healthy.
        </p>
        <p>
          <FullSizeImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/march_2024_garden_9.jpeg`}
          />
          There's a huge clover patch growing on the path between the beds, and
          I really love it. I'm hoping it will spread over the entire path.
        </p>
      </Section>
      <Section>
        <p>Any questions? Post in the comments below!</p>
      </Section>
    </ArticleContentContainer>
  );
};

export default SOTGMarch2024;
