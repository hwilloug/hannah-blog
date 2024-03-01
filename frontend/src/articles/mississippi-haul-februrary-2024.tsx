import {
  ArticleContentContainer,
  FullSizeImage,
  Section,
  SectionHeader,
} from "../components/StyledComponents";

const MississippiHaulFeb2024: React.FunctionComponent = () => {
  return (
    <ArticleContentContainer>
      <Section>
        <p>
          One of my favorite things to do when I visit my grandparents in
          Mississippi is to go antiquing. We went to a large number of places,
          and I was able to find a lot of items for my collections at reasonable
          prices. Not in any particular order, here are all the antique shops
          and malls that we went to:
        </p>
        <ul>
          <li>The Front Porch (Winona, MS)</li>
          <li>Rayburn Trading Center (North Carrollton, MS)</li>
          <li>The Nest Egg (Grenada, MS)</li>
          <li>The Broken Pot Thrift Shop (Grenada, MS)</li>
          <li>Central Mississippi Flea Market (Kosciusko, MS)</li>
          <li>The Hunny Hole (Kosciusko, MS)</li>
          <li>Unique Treasures (Summit, MS)</li>
        </ul>
        <p>Check out all my finds below!</p>
      </Section>
      <Section>
        <SectionHeader>Bakeware & Glassware</SectionHeader>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_2.jpeg`}
        />
        <p>
          Corningware finds. Top and bottom right: Spice o' Life; bottom left:
          Pastel Boquet
        </p>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_3.jpeg`}
        />
        <p>
          Back left: Glassbake blueberry; back right: Forest Fancies pyrex;
          front: Fire King trinket bowl
        </p>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_18.jpeg`}
        />
        <p>Milk glass</p>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_19.jpeg`}
        />
        <p>Fire King finds</p>
      </Section>
      <Section>
        <SectionHeader>Strawberries</SectionHeader>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_5.jpeg`}
        />
        <p>Strawberry finds and gifts</p>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_8.jpeg`}
        />
        <p>
          Heartland stoneware. Back: dinner plate; middle left: butter dish;
          middle right: creamer; front left: gravy boat plate; front right: salt
          and pepper shakers
        </p>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_9.jpeg`}
        />
        <p>Vintage juice glasses and tea cup</p>
      </Section>
      <Section>
        <SectionHeader>Ducks</SectionHeader>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_11.jpeg`}
        />
        <p>Duck bathroom accessories</p>
      </Section>
      <Section>
        <SectionHeader>Clocks</SectionHeader>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_14.jpeg`}
        />
        <p>Clock finds</p>
      </Section>
      <Section>
        <SectionHeader>Lamps</SectionHeader>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_15.jpeg`}
        />
        <p>Hurricane-style electric lamps</p>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_16.jpeg`}
        />
        <p>Left: vintage wall lamp; right: Tiffany-style lamp shade</p>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_17.jpeg`}
        />
        <p>Small oil lamps</p>
      </Section>
      <Section>
        <SectionHeader>Furniture</SectionHeader>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/glassware_cabinet_2.jpeg`}
        />
        <p>An English glassware cabinet</p>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/cat_chest.jpeg`}
        />
        <p>A kitty tapestry chest</p>
      </Section>
      <Section>
        <SectionHeader>Misc. Finds</SectionHeader>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_1.jpeg`}
        />
        <p>
          Top-left: ashtray; top-right: depression glass trinket holder; bottom:
          cute mini floral trays
        </p>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_4.jpeg`}
        />
        <p>Vintage vegetables napkin holder</p>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_12.jpeg`}
        />
        <p>Jelly molds</p>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_13.jpeg`}
        />
        <p>A vintage recipes box</p>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_10.jpeg`}
        />
        <p>Canisters; a planter; a butter dish</p>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_6.jpeg`}
        />
        <p>Left: Fall table runner; right: raspberry table cloth</p>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_7.jpeg`}
        />
        <p>Amish farm canisters</p>
      </Section>
      <Section>
        <p>What's your favorite thing I found? Post in the comments below!</p>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul.jpeg`}
        />
      </Section>
    </ArticleContentContainer>
  );
};

export default MississippiHaulFeb2024;
