import ClickableImage from "../components/ClickableFullSizeImage";
import {
  ArticleContentContainer,
  Section,
  SectionHeader,
  SectionP,
  SubsectionHeader,
} from "../components/StyledComponents";

const CleaningUpDeck: React.FC = () => {
  return (
    <ArticleContentContainer>
      <Section>
        Happy May, everyone! This weekend was filled with gardening: I
        landscaped the front of the house, as well as cleaned up the front and
        back decks.
      </Section>
      <Section>
        <SectionHeader>
          Starting to Landscape the Front of the House
        </SectionHeader>
        <SectionP>
          I wanted to get the very front of the house planted with shrubs, so I
          went to Lowes to pick out plants. I knew I wanted Knockout Roses as
          the flowering shrub since they are very low maintenence and bloom from
          spring to frost. Knockout roses generally come in pink, but I found a
          few that had coral-colored blossoms! I'm curious to see how they will
          do with the shade from the house; it was listed as needing full-sun,
          but I figured I'd give them a shot anyway.
        </SectionP>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/coral_knockout_rose.jpeg`}
          alt="a coral knockout rose"
        />
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/young_knockout_rose_bush.jpeg`}
          alt="a young coral knockout rose bush"
        />
        <SectionP>
          After picking up the Knockout Roses, I looked around for a good
          non-flowering shrub to go between them. I ended up going with barberry
          bushes because they have pink foliage in the summer and fall that I
          thought would compliment the roses. It's also very deer resistant,
          which is a plus! Although, after doing some research for this article,
          I learned that barberry bushes are invasive in the United States. I
          already bought and planted them, so I'll do some more research before
          buying something else with which to replace them.
        </SectionP>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/young_bradberry_bush.jpeg`}
          alt="a young bradberry bush"
        />
        <SectionP>
          Here's what the front of the house looked like before:
        </SectionP>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/front_of_house_2024.jpeg`}
          alt="before landscaping the front house"
        />
        <SectionP>And after:</SectionP>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/front-garden-bed-1.jpeg`}
          alt="after landscaping the front of the house"
        />
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/front-garden-bed-3.jpeg`}
          alt="a closer view of the front landscaping"
        />
        <SectionP sx={{ marginBottom: "30px" }}>
          The plan for the future is to wrap the bed all the way around the
          right side of the house. That side of the house is north-facing and
          doesn't get much sun, so I'll need to decide on different plants than
          the front.
        </SectionP>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/front-garden-bed-2.jpeg`}
          alt="gnome welcome light from cracker barrel"
        />
        <SectionP>
          <SubsectionHeader>Planting and Mulching</SubsectionHeader>
          This little section of landscaping was simple to do. I first put
          landscaping fabric down, then cut an X where each plant should go.
          Then, I dug holes, planted the shrubs, and covered the bed with a
          couple inches of mulch. And that's it!
        </SectionP>
      </Section>
      <Section>
        <SectionHeader>Cleaning up the Back Deck</SectionHeader>
        <SectionP>
          The back deck was dirty, and the empty pots were filled with clover.
          So first, I moved the pots out of the way and swept (or, got Danny to
          sweep lol). Then, I went to Lowes yet again to get flowers to fill up
          the empty pots. Unsurprisingly, I went overboard and ended up getting
          more containers and more flowers. I even found a maple sapling in my
          garden beds that I replanted in a small pot to grow into a bonsai!
          I've always wanted to keep a bonsai, but never can keep up with
          watering it consistently enough for it to stay alive. So, I'm trying
          again!
        </SectionP>
        <SectionP>Before:</SectionP>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/back-deck-5.jpeg`}
          alt="before cleaning up the back deck; dirty and empty pots"
        />
        <SectionP>After:</SectionP>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/back-deck-2.jpeg`}
          alt="cleaned up back deck; flowers in containers"
        />
        <SectionP>
          It still needs a little work cleaning up (maybe a power wash), but
          everything is repotted, topped off with soil, and watered thoroughly!
          I gave some height to the containers in the back by raising them up on
          stands. Below is the after picture labelled with what's in each pot.
        </SectionP>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/back-deck-2-labelled.jpeg`}
          alt="labelled pic of what's planted on my back deck"
        />
        <SectionP>
          Apparently I'm really into dahlias this year. Here's close up pics of
          the two I picked out so far:
        </SectionP>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/dahlia_1.jpeg`}
          alt="a flowering dahlia"
        />
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/dahlia_2.jpeg`}
          alt="flowering hypnotic rose bicolor dahlia"
        />
        <SectionP>
          And I filled the railing planters and put petunias in them. They
          should fill out pretty well and hang over the baskets, which is going
          to be so beautiful!
        </SectionP>
        <SectionP>Before:</SectionP>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/back-deck-4.jpeg`}
          alt="before planting petunias in the railing planter"
        />
        <SectionP>After:</SectionP>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/back-deck-3.jpeg`}
          alt="after planting petunias in the railing planters and cleaning up"
        />
      </Section>
      <Section>
        <SectionHeader>Cleaning up the Front Porch</SectionHeader>
        <SectionP>
          Cleaning up the front porch was pretty simple: I just had a couple of
          dead plants in the two containers. I needed partial-shade-loving
          plants for this part of the property since it doesn't get much sun
          during the day (just in the mornings), so I picked out impatiens, a
          begonia, and a creeping vine.
        </SectionP>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/front-porch.jpeg`}
          alt="impatients, begonia, creeping vine planted in containers"
        />
        <SectionP>Here's a close up of the begonia and creeping vine:</SectionP>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/begonia.jpeg`}
          alt="a young flowering begonnia and a creeping vine"
        />
        <SectionP>And here's a close up of the impatiens:</SectionP>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/impatiens.jpeg`}
          alt="a young flowering begonnia and a creeping vine"
        />
      </Section>
      <Section>
        <SectionP>
          The trick now is going to be staying on top of watering and
          fertilizing. I'm keeping notes in my planner of when I fertilize, and
          I'm getting into the habit of checking on the garden and containers
          after work each day to see if they need water. I'm telling myself each
          day that it is satisfying and fufilling to nurture plants to life
          (including watering!). It's going to be a good growing season! 🌸
        </SectionP>
      </Section>
      <Section>
        <SectionP>
          So, what do you think? Post in the comments below, and be sure to give
          this article a like if you enjoyed it!
        </SectionP>
      </Section>
    </ArticleContentContainer>
  );
};

export default CleaningUpDeck;
