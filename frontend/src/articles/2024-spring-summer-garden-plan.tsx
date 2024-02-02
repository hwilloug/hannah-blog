import { ReactElement } from "react";
import {
  ArticleContentContainer,
  FullSizeImage,
  Section,
  SectionHeader,
} from "../components/StyledComponents";

const Garden2024Plan: React.FunctionComponent = (): ReactElement => {
  return (
    <ArticleContentContainer>
      <Section>
        <p>
          After planting and mostly forgetting last year, I'm still and yet
          again going to go overboard with my garden.
        </p>
      </Section>
      <SectionHeader>Planting Plan</SectionHeader>
      <Section>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/garden_2024.jpeg`}
          alt="Garden 2024 Plan"
        />
        <p>
          The above image is my current plan for the year. The top left box will
          be planted in late winter/early spring, and the bottom two boxes will
          be my summer boxes. My asparagus and strawberry beds are still going
          strong(ish), dispite my lack of care for my garden last year, and I'm
          going to add some annuals to those two beds with their respective
          companion plant pairings.
        </p>
        <p>
          I of course rotated the beds in which I am planting certain genera.
          For example, I am planting the brassicas where I planted squash, and
          planting squash where I planted tomatoes/peppers, and planting
          tomatoes/peppers in one of the new beds. This is a good gardening
          practice as it helps reduce pest problems.
        </p>
        <p>
          Below is a list of the varieties I will be using. I ordered my seeds
          from{" "}
          <a href="https://burpee.com" target="_blank">
            Burpee
          </a>
          .
          <ul>
            <li>Broccoli, Waltham 29</li>
            <li>Arugula, Rocket (Roquette)</li>
            <li>Beet, Detroit Dark Red Medium Top</li>
            <li>Cantaloupe, Burpees Ambrosia Hybrid</li>
            <li>Carrot, Touchon</li>
            <li>Cauliflower, Early White Hybrid</li>
            <li>Corn, Nirvana Hybrid</li>
            <li>Garlic, Early Italian</li>
            <li>Kale, Dwarf Blue Curled Vates</li>
            <li>Leek, Dawn Giant</li>
            <li>Lettuce, Buttercrunch</li>
            <li>Onion, Georgia Queen</li>
            <li>Pepper, Hot, Jalapeño Early</li>
            <li>Pepper, Sweet, Sweet Banana</li>
            <li>Pepper, Hot, Dragon Roll Hybrid</li>
            <li>Pepper, Sweet, Costa Rican Sweet Hybrid</li>
            <li>Pumpkin, Jack Be Little</li>
            <li>Radish, Early Scarlet Globe</li>
            <li>Spinach, Double Choice Hybrid</li>
            <li>Squash, Summer, Butterstick Hybrid</li>
            <li>Squash, Zucchini, Black Beauty</li>
            <li>Tomato, Super Sweet 100 Hybrid</li>
            <li>Tomato, Brandywine Pink</li>
            <li>Tomato, Gladiator Hybrid</li>
            <li>Tomato, Fresh Salsa Hybrid</li>
            <li>Tomatillo, Gigante Verde</li>
            <li>Marigold, Strawberry Blonde</li>
            <li>Marigold, Red Knight</li>
            <li>Morning Glory, Heavenly Blue</li>
            <li>Geranium, Border Mix</li>
            <li>Nasturtium, Double Dwarf Jewel Mix</li>
            <li>Salvia, Gemstone Purple</li>
            <li>Zinnia, Tequila Lime</li>
            <li>Basil, Sweet</li>
            <li>Basil, Lemon scented, Limoncello</li>
            <li>Chamomile, German</li>
            <li>Lemon Balm</li>
            <li>Mint, Spearmint</li>
            <li>Parsley, Single Italian</li>
            <li>Sage, Broad Leaf</li>
            <li>Thyme, Common</li>
          </ul>
        </p>
      </Section>
      <SectionHeader>Building More Beds</SectionHeader>
      <Section>
        <p>
          I wasn't going to build the last two beds yet, but after making the
          plan for the year, I for sure needed to add one (since the spring
          crops won't be done before it's time to plant the summer crops), so I
          went ahead and made both boxes.
        </p>
      </Section>
      <Section>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/garden_bed_design.jpeg`}
          alt="Garden Bed Design"
        />
        <p>
          The design for the L-shaped bed. The long sides are 8 ft long and the
          short sides are 3 1/2 ft long. The beds are 12" deep, and the corners
          are squared using 4x4 blocks.
        </p>
      </Section>
      <Section>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/garden_beds_1.jpeg`}
          alt="Garden Beds cut and laid out in shape"
        />
        <p>Cuts made and boards laid out in-shape.</p>
      </Section>
      <Section>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/garden_beds_2.jpeg`}
          alt="Complete garden beds"
        />
        <p>
          The final result! This completes all the beds I wanted to build. Next
          up is adding fencing and an arbor gate!
        </p>
      </Section>
      <Section>
        <SectionHeader>Resources</SectionHeader>
        <ul>
          <li>
            <a href="https://a.co/d/9cGkru7" target="_blank">
              Companion Planting: Organic Gardening Tips and Tricks for
              Healthier, Happier Plants
            </a>
          </li>
        </ul>
      </Section>
    </ArticleContentContainer>
  );
};

export default Garden2024Plan;
