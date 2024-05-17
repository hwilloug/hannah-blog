import ClickableImage from "../components/ClickableFullSizeImage";
import {
  ArticleContentContainer,
  Section,
  SectionHeader,
} from "../components/StyledComponents";

const SOTGApril2024: React.FunctionComponent = () => {
  return (
    <ArticleContentContainer>
      <Section>
        <p>
          It's gardening season here in South Carolina, I'm eating strawberries
          constantly, and my seedlings are finally ready to be transplanted! I
          let most of my seedling die from neglect, but the broccoli,
          cauliflower, and tomatoes are still going strong. I had just overdone
          myself planting seeds, and had done too much for me to handle, but
          this spring is a fresh start! I wish I could have gotten the broccoli
          and cauliflower in the ground a little earlier, but I can always add a
          shade cloth over them if it starts getting too hot.
        </p>
        <p>
          I also planted some peppers, basil, and eggplant earlier this week. I
          went to a local nursery (
          <a
            href="https://www.facebook.com/FarmersExchangeRockHill/"
            target="_blank"
          >
            Poe's Farmers Exchange in Rock Hill, SC
          </a>
          ), and they happened to have all the types of peppers that I had
          started and let die, so I grabbed one of each of shishito, red bell,
          jalapeño, and sweet banana pepper plants.
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/garden_april_2024_4.jpeg`}
            alt="transplanted peppers in a garden bed"
          />
        </p>
        <p>
          I also planted some eggplant.
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/garden_april_2024_3.jpeg`}
            alt="transplanted eggplant in a garden bed"
          />
        </p>
        <p>
          Next week, I'll transplant my tomatoes, and start everything else from
          seed outdoors.
        </p>
      </Section>
      <Section>
        <p>
          As for the rest of the beds, my asparagus is done producing, and my
          strawberry plants are getting bigger! However, the bermuda grass is
          starting to take over my beds. I looked up how to get rid of bermuda
          grass and found this article:{" "}
          <a
            href="https://www.organicgrowersschool.org/blog/ask-ogs-eradicating-bermuda-grass-from-your-garden"
            target="_blank"
          >
            Ask OGS: Eradicating Bermuda Grass from Your Garden
          </a>
          . Based on this article, it seems like it's going to be pretty hard to
          get rid of it in my strawberry beds. I think the best thing to do
          would be to just hand weed everything ASAP and just really stay on top
          of it. Then, I'll cover the bed with plastic (except over the
          strawberries, getting as close to the base as possible) to prevent the
          grass from being able to photosynthesize.
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/garden_april_2024_2.jpeg`}
            alt="asparagus garden bed"
          />
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/garden_april_2024_1.jpeg`}
            alt="strawberry and onion garden bed"
          />
        </p>
      </Section>

      <Section>
        <SectionHeader>Transplanting Brassicas</SectionHeader>
        <p>
          Below are some tips and steps on how to transplant brassicas
          (broccoli, cauliflower, etc).
        </p>
        <ol>
          <li>
            First, decide where you want to transplant your plant. Broccoli and
            cauliflower need about 18 inches between each plant.
            <ClickableImage
              src={`${process.env.REACT_APP_IMAGES_BASE_URL}/broccoli_1.jpeg`}
              alt="how to transplant broccoli and cauliflower"
            />
          </li>
          <li>
            Then, dig a hole a little deeper than the the depth of the plant's
            container with a hand trowel or a potting spade (or your hands if
            you're feeling frisky).
            <ClickableImage
              src={`${process.env.REACT_APP_IMAGES_BASE_URL}/broccoli_2.jpeg`}
              alt="transplanting broccoli and cauliflower"
            />
          </li>
          <li>
            Finally, put soil up to the first set of true leaves. This will help
            the plant keep a strong base and stand up straight as it grows.
            <ClickableImage
              src={`${process.env.REACT_APP_IMAGES_BASE_URL}/broccoli_3.jpeg`}
              alt="transplanted broccoli and cauliflower"
            />
          </li>
          <li>And don't forget to water!</li>
        </ol>
        <p>
          The key here is to bury the plant up to its first set of true leaves,
          or even the second set depending on how leggy the plant is. If you
          don't do this, your plants will probably end up falling over once they
          grow bigger. These seedlings didn't get the best care and are leggy
          and not upright, but this can be mended somewhat by this technique.
        </p>
      </Section>
      <Section>
        <p>
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/broccoli_4.jpeg`}
            alt="transplanted broccoli and cauliflower bed"
          />
          And there you have it! My broccoli and cauliflower plants are now
          transplanted!
        </p>
      </Section>
      <Section>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/sotg_april_2024.jpeg`}
          alt="some garden beds"
        />
      </Section>
      <Section>
        <p>Any questions or comments? Post in the comments below!</p>
      </Section>
    </ArticleContentContainer>
  );
};

export default SOTGApril2024;
