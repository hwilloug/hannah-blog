import ClickableFullSizeImage from "../components/ClickableFullSizeImage";
import {
  ArticleContentContainer,
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
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_2.jpeg`}
          alt="Corningware haul. Spice O' Life, Pastel Boquet"
        />
        <p>
          Corningware finds. Top and bottom right: Spice o' Life; bottom left:
          Pastel Boquet
        </p>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_3.jpeg`}
          alt="Glassbake blueberry, forest fancies pyrex, fire king ramekin"
        />
        <p>
          Back left: Glassbake blueberry; back right: Forest Fancies pyrex;
          front: Fire King ramekin
        </p>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_18.jpeg`}
          alt="Milk glass salt and pepper shaker and bowl"
        />
        <p>Milk glass</p>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_19.jpeg`}
          alt="Fire King jadeite and pink bowl"
        />
        <p>Fire King finds</p>
      </Section>
      <Section>
        <SectionHeader>Strawberries</SectionHeader>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_5.jpeg`}
          alt="strawberry pitcher; strawberry cheese dome; strawberry hand towel"
        />
        <p>Strawberry finds and gifts</p>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_8.jpeg`}
          alt="Heartland stoneware; dinner plate, butter dish, creamer, salt and pepper shakers"
        />
        <p>
          Heartland stoneware. Back: dinner plate; middle left: butter dish;
          middle right: creamer; front left: gravy boat plate; front right: salt
          and pepper shakers
        </p>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_9.jpeg`}
          alt="vintage juice glasses"
        />
        <p>Vintage juice glasses and tea cup</p>
      </Section>
      <Section>
        <SectionHeader>Ducks</SectionHeader>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_11.jpeg`}
          alt="duck bathroom accessories"
        />
        <p>Duck bathroom accessories</p>
      </Section>
      <Section>
        <SectionHeader>Clocks</SectionHeader>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_14.jpeg`}
          alt="vintage clocks"
        />
        <p>Clock finds</p>
      </Section>
      <Section>
        <SectionHeader>Lamps</SectionHeader>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_15.jpeg`}
          alt="vintage hurricane-style lamps"
        />
        <p>Hurricane-style electric lamps</p>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_16.jpeg`}
          alt="vintage wall lamp and tiffany stle lamp shade"
        />
        <p>Left: vintage wall lamp; right: Tiffany-style lamp shade</p>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_17.jpeg`}
          alt="small oil lamps"
        />
        <p>Small oil lamps</p>
      </Section>
      <Section>
        <SectionHeader>Furniture</SectionHeader>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/glassware_cabinet_2.jpeg`}
          alt="english glassware cabinet"
        />
        <p>An English glassware cabinet</p>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/cat_chest.jpeg`}
          alt="cat tapestry chest"
        />
        <p>A kitty tapestry chest</p>
      </Section>
      <Section>
        <SectionHeader>Misc. Finds</SectionHeader>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_1.jpeg`}
          alt="vintage ashtray; pink depression glass glass; vintage trays"
        />
        <p>
          Top-left: ashtray; top-right: depression glass trinket holder; bottom:
          cute mini floral trays
        </p>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_4.jpeg`}
          alt="vintage vegetables napkin holder"
        />
        <p>Vintage vegetables napkin holder</p>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_12.jpeg`}
          alt="fish jelly mold; squirrel jelly mold"
        />
        <p>Jelly molds</p>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_13.jpeg`}
          alt="vintage recipes box"
        />
        <p>A vintage recipes box</p>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_10.jpeg`}
          alt="vintage canisters; flower planter; vintage butter dish"
        />
        <p>Canisters; a planter; a butter dish</p>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_6.jpeg`}
          alt="fall table runner; raspberry table cloth"
        />
        <p>Left: Fall table runner; right: raspberry table cloth</p>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul_7.jpeg`}
          alt="amish farm canisters"
        />
        <p>Amish farm canisters</p>
      </Section>
      <Section>
        <p>What's your favorite thing I found? Post in the comments below!</p>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/mississippi_haul.jpeg`}
          alt="antiques haul mississippi"
        />
      </Section>
    </ArticleContentContainer>
  );
};

export default MississippiHaulFeb2024;
