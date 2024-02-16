import { ReactElement } from "react";
import BlockQuote from "../components/BlockQuote";
import {
  ArticleContentContainer,
  Section,
} from "../components/StyledComponents";
import YoutubePlayer from "../components/YoutubePlayer";

const AnneOfGreenGables: React.FunctionComponent = (): ReactElement => {
  return (
    <ArticleContentContainer>
      <Section>
        <p>
          L.M. Montgomery's <i>Anne of Green Gables</i> is a classic
          coming-of-age novel about an orphan girl who gets adopted by a brother
          and sister in a small town in Nova Scotia. While the siblings had
          originally requested to adopt a boy to help on the farm, they ended up
          with Anne, a young girl with bright red hair who talks a lot. And by a
          lot I mean A LOT. One would think that would get annoying, Anne is
          able to imagine the romance in everything she sees and is able to
          share that with everyone around her.
        </p>
      </Section>
      <Section>
        <p>
          Reading <i>Anne of Green Gables</i> cleared the fog in my brain. It
          wasn't so much the plot, which was mostly just Anne getting in trouble
          and learning from her mistakes, but it was that romance and
          imagination. She brings to life and gives meaning to everything and
          everyone she sees. Every time I put the book down, I wanted to pick it
          back up and see the world as she was seeing it. I was struggling with
          some depression at the time, and everything was looking so dull, if I
          was even looking aroud at my surroundings at all. But Anne is hopeful
          and adds that sparkle to even the littlest things, and she made me
          want to get outside and actually practice some mindfulness.
        </p>
      </Section>
      <Section>
        <BlockQuote
          quote="Mrs. Lynds says, 'Blessed are they who expect nothing for they shall not be disappointed.' But I think it would be worse to expect nothing than to be disappointed."
          citation="Anne"
        />
        <p>
          The above quote from Anne really resonantes with me. I couldn't wait
          to grow up when I was a pre-teen/teenager, and then now that I'm
          actually an adult, it really doesn't feel any different. Maybe it's
          just that our desires change, or maybe it's that it really is more
          about the buildup and expectation.
        </p>
      </Section>
      <Section>
        <p>
          My Japanese teacher told me that there was an Anne of Green Gables
          Anime from back in the 70s! The series is called 赤毛のアン - "Red
          Headed Anne". I'm going to have to watch it to get some listening
          practice! And my sibling and mom told me about the{" "}
          <i>Anne of Green Gables: The Musical</i>, which according to Wikipedia
          is the longest running annual musical theater production in the world!
          Next time I need a pick-me-up, I'll be trying to find a performance :)
        </p>
        <YoutubePlayer video_id="DBQgH2o8YKI" />
      </Section>
    </ArticleContentContainer>
  );
};

export default AnneOfGreenGables;
