import { ReactElement } from "react";
import {
  ArticleContentContainer,
  FullSizeImage,
  Section,
  SectionHeader,
} from "../components/StyledComponents";
import YoutubePlayer from "../components/YoutubePlayer";
import { useTheme } from "@mui/material";

const Curtains: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();

  return (
    <ArticleContentContainer colors={theme.palette}>
      <Section>
        <p>
          My boyfriend is moving in with me soon, and he wanted some curtains
          for the bedroom, so I thought, why not make them myself!
        </p>
      </Section>
      <Section>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/kitchen_curtain_1.jpeg`}
          alt="Kitchen valence"
        />
        <p>
          Using{" "}
          <a
            href="https://www.housebeautiful.com/design-inspiration/a31187477/how-to-make-curtains/"
            target="_blank"
          >
            this article
          </a>
          , I practiced on my first curtains! The first one turned out a little
          uneven, but I paid more attention to detail for the second and it
          turned out great! The end result was a little thick for a valence, but
          it made for good practice before starting on the curtains for my
          bedroom.
        </p>
      </Section>
      <Section>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/curtain_1.jpeg`}
          alt="Bedroom curtain closed"
        />
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/curtain_2.jpeg`}
          alt="Bedroom curtain open"
        />
        <p>
          Here's how the bedroom curtains turned out! Because of the dark
          lining, they block out light pretty well. I followed the same article
          to make these. I kept having problems with my thread breaking, so the
          stitching isn't perfect, but you can't tell without looking pretty
          close. At first I thought it was due to my top thread tension being
          too high, but I (re)learned that you should use 100% cotton thread for
          general use in a sewing machine, I guess because it's better suited to
          handle the thread tension.
        </p>
      </Section>
      <Section>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/living_room_curtain.jpeg`}
          alt="Living room scalloped valence"
        />
        <p>
          After feeling accomplished from making the bedroom curtains, I
          attempted to make a scalloped valence for the living room. I learned
          how to cut a pattern from painter's butcher paper, and also got got
          practice with sewing curved lines. With this, I had a lot of problems
          with the fabric bunching as I was sewing, which I thought was due to
          my tension being messed up (since I was messing with it for the
          bedroom curtains), but I learned about stitch length. Apparently, for
          lighter-weight fabrics, you should use a shorter stitch length to
          prevent bunching. I had set my speed to very low because I was
          uncomfortable with the curved lines and was pulling the fabric too
          much in between stitches, causing the stitches to be long and the
          fabric to bunch.
        </p>
      </Section>
      <Section>
        <FullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/door_curtain_3.jpeg`}
          alt="Door scalloped valence"
        />
        <p>
          And here's the second scalloped valence for the front door! I thought
          after having practice on the first one that the second one would turn
          out better, but it's pretty uneven and I still had problems with
          puckering and breaking thread.
        </p>
      </Section>
      <Section>
        <p>MORE TO COME</p>
      </Section>
      <Section>
        <SectionHeader>Resources</SectionHeader>
        <ul>
          <li>
            <a
              href="https://www.housebeautiful.com/design-inspiration/a31187477/how-to-make-curtains/"
              target="_blank"
            >
              How to Make Curtains
            </a>
          </li>
          <li>
            <YoutubePlayer video_id="cTKfXw7SMMI" />
          </li>
          <li>
            <a
              href="https://siemachtsewingblog.com/2023/05/how-to-fix-puckered-fabric/"
              target="_blank"
            >
              How to Fix Puckered Fabric
            </a>
          </li>
        </ul>
      </Section>
    </ArticleContentContainer>
  );
};

export default Curtains;
