import ClickableImage from "../components/ClickableFullSizeImage";
import {
  ArticleContentContainer,
  Section,
  SectionHeader,
} from "../components/StyledComponents";

const CoffeeCrossStitch: React.FC = () => {
  return (
    <ArticleContentContainer>
      <Section>
        <p>
          Inspired by the coffee shop I go to nearly every morning,{" "}
          <a href="https://humblecupcoffeeco.com/" target="_blank">
            Humble Cup Coffee Co
          </a>
          , I began a vintage-looking sampler with a coffee theme! Read on for
          tips on finishing an embroidery project, as well as some in progress
          pictures of working this piece.
        </p>
      </Section>
      <Section>
        <Section>
          <SectionHeader>
            Finishing a Needlework Piece for a Frame
          </SectionHeader>
          <p>
            The process for finishing a needlework piece for a frame is just two
            two simple steps:
          </p>
          <ol>
            <li>Block</li>
            <li>Sew to back panel</li>
          </ol>
          <p>
            First, I blocked the piece by soaking it in water and pinning it to
            one of those foam kids' playmats with T-pins, then letting it dry.
            This process does a few things: it gets all the wrinkles and creases
            out from using an embroidery hoop, evens out the stitching, and gets
            rid of any erroneous holes you may have poked in the fabric.
          </p>
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/coffee_cross_stitch_6.jpeg`}
            alt="blocking the coffee cross stitch piece"
          />
          <p>
            Then, I sewed it together using embroidery thread. I centered the
            piece on the backboard of the frame, then tied a knot at the end of
            the thread and weaved the two long edges together around the
            backboard. This doesn't need to look the prettiest since it's the
            back, but you want to make sure that it's nice and tight so the
            front is completely flat.
          </p>
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/coffee_cross_stitch_7.jpeg`}
            alt="finishing a cross stitch piece on a frame"
          />
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/coffee_cross_stitch_8.jpeg`}
            alt="finishing a cross stitch piece on a frame"
          />
          <p>
            I repeated the same process for the short edges, this time folding
            the corners in a bit so they don't show from the front.
          </p>
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/coffee_cross_stitch_10.jpeg`}
            alt="finishing a cross stitch piece on a frame"
          />
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/coffee_cross_stitch_11.jpeg`}
            alt="finishing a cross stitch piece on a frame"
          />
        </Section>
        <SectionHeader>In Progress Pictures</SectionHeader>
        <p>
          I mostly worked on this piece while travelling. Here are some pictures
          along the way.
        </p>
        <p>On the plane.</p>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/coffee_cross_stitch_1.jpeg`}
          alt="coffee cross stitch in progress on an airplane"
        />
        <p>At a coffee shop in Prague.</p>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/coffee_cross_stitch_3.jpeg`}
          alt="coffee cross-stitch in progress at a coffee shop in prague"
        />
        <p>Sitting on the balcony at our Airbnb.</p>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/coffee_cross_stitch_4.jpeg`}
          alt="coffee cross-stitch in progress outside in prague"
        />
        <p>The finished piece!</p>
      </Section>
      <Section>
        <SectionHeader>The Finished Piece</SectionHeader>
        <p>I'm planning on giving this cross stitch Humble Cup!</p>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/coffee_cross_stitch_9.jpeg`}
          alt="the finished coffee cross stitch from the front with a custom frame"
        />
      </Section>
      <Section>
        <SectionHeader>What I Will Do Differently Next Time</SectionHeader>
        <ul>
          <li>
            Put the T-pins a little larger than the size of the frame so that
            the holes don't show.
          </li>
          <li>
            Fix spacing issues when I notice them while working the piece.
          </li>
          <li>Practice lettering before putting it on the final piece.</li>
        </ul>
      </Section>
      <Section>
        <p>
          Be sure to give this post a like, and post any comments or questions
          below! 🌸
        </p>
      </Section>
    </ArticleContentContainer>
  );
};

export default CoffeeCrossStitch;
