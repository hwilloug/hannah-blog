import ClickableImage from "../components/ClickableFullSizeImage";
import {
  ArticleContentContainer,
  Section,
} from "../components/StyledComponents";

const PoppysPlaygroundGame: React.FC = () => {
  return (
    <ArticleContentContainer>
      <Section>
        <p>
          Hello, friends! Long time no see 🌸 I've been jumping from hobby to
          hobby lately, not able to finish anything before I start something
          else. It's quite frustrating, but I am slowly making progress on a
          bunch of things at once.
        </p>
        <p>
          One of the things I've been working on is a game called Poppy's
          Playground! It is written in{" "}
          <a
            href="https://en.wikipedia.org/wiki/Lua_(programming_language)"
            target="_blank"
          >
            Lua
          </a>
          , and is pretty simple so far. Basically, you are my cat Poppy, and
          you are trying to collect cookies without getting caught by the evil
          Tiger.
        </p>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/poppys-playground-sample.gif`}
          alt="Poppy's playground game, a game made with Lua"
        />
        <p>
          I haven't deployed the game anywhere yet because I'll need to set up a
          server to host the game, and those are expensive to run.
        </p>
        <p>
          Future work includes:
          <ul>
            <li>
              selecting a player at the beginning of the game (Poppy, Buddy, or
              Ray). each player has different stats
            </li>
            <li>a high score board</li>
            <li>adding tiger to chase the player</li>
            <li>
              allowing the player to jump on furniture to get away from Tiger
            </li>
            <li>adding catnip to give the player a boost</li>
            <li>putting the game on a server to embed on this website</li>
          </ul>
        </p>
        <p>
          So there's still a lot of work to do before it's an actual, like, fun
          game, but it's coming along, and I've learned a lot about Lua!{" "}
          <a
            href="https://github.com/hwilloug/poppys-playground"
            target="_blank"
          >
            Click here
          </a>{" "}
          for the source code!
        </p>
      </Section>
    </ArticleContentContainer>
  );
};

export default PoppysPlaygroundGame;
