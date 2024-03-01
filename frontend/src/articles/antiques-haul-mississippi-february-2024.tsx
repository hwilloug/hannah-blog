import {
  ArticleContentContainer,
  FullSizeImage,
  Section,
  SectionHeader,
} from "../components/StyledComponents";

const AntiquesHaulFeb2024: React.FunctionComponent = () => {
  return (
    <ArticleContentContainer>
      <Section>
        <p>
          I am in currently Mississippi, and one of my favorite things to do
          there while visiting family is go antiquing. I made an exception to my
          self-imposed no-spend Februrary ahead of time since 1) I needed a new
          cabinet for glassware, and it would be much cheaper in Mississippi,
          and 2) it's a lovely way to bond with my grandparents, and I don't get
          to visit as often as I would like.
        </p>
        <p>Below is my haul from each antique store or mall!</p>
      </Section>
      <Section>
        <SectionHeader>The Front Porch, Winona MS</SectionHeader>
        <p>
          An antique mall in Winona, Mississippi, The Front Porch has 54 vendors
          and is one of my favorite places to go near my grandma's house. This
          trip, I found two stunning lamps.
        </p>
        <p>
          <FullSizeImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/pink_lamp.jpeg`}
          />
          Above is a pink hobnail Hurricane-style table lamp. Although it was
          labelled as a reproduction, I simply could not resist it.
        </p>
        <p>
          <FullSizeImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/wall_lamp.jpeg`}
          />
          The above quoziel Abigail Adams Hurricane-style wall lamp has a
          beautiful floral shade and a cast iron base that can be mounted to a
          wall.
        </p>
      </Section>
      <Section>
        <SectionHeader>
          Rayburn Trading Center, North Carrollton MS
        </SectionHeader>
        <p>
          Owned by my cousin, Rayburn Trading Center is another one of my
          favorite places to go. It's a huge warehouse chock full of various
          antiques at a wonderful price. This is where I wanted to get a
          glassware cabinet, and I found the perfect one! See the pic below:
        </p>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/glassware_cabinet.jpeg`}
        />
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/tiffany_shade.jpeg`}
        />
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/duck_mirror.jpeg`}
        />
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/duck_jar.jpeg`}
        />
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/duck_coaster.jpeg`}
        />
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mini_floral_frame.jpeg`}
        />
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mini_oil_lamp.jpeg`}
        />
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/small_trinket_cabinet.jpeg`}
        />
      </Section>
      <Section>
        <SectionHeader>Gifts from Relatives</SectionHeader>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/strawberry_cheese_dome.jpeg`}
        />
      </Section>
      <Section>
        <SectionHeader>References and Resources</SectionHeader>
        <ul>
          <li>
            <a href="https://antiqueanswers.com/what-is-hobnail-glass/">
              What is hobnail glass?
            </a>
          </li>
        </ul>
      </Section>
    </ArticleContentContainer>
  );
};

export default AntiquesHaulFeb2024;
