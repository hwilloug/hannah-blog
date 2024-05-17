import { styled } from "@mui/material";
import ClickableImage from "../components/ClickableFullSizeImage";
import {
  ArticleContentContainer,
  Section,
  SectionHeader,
} from "../components/StyledComponents";

const Instructions = styled("ol")({
  li: {
    margin: "20px 0",
  },
});

const CrossStitchFrame: React.FC = () => {
  return (
    <ArticleContentContainer>
      <Section>
        <p>
          After cross stitching a spring sampler for my mom, I realized the
          dimensions of the piece were quite odd, making it difficult for me to
          find a suitable frame in which to hang it. So, I decided to build my
          own frame!
        </p>
      </Section>
      <Section>
        <SectionHeader>Building the Frame</SectionHeader>
        <p>
          The frame's construction was very simple. I somewhat followed the
          first part of this tutorial:{" "}
          <a href="https://www.youtube.com/watch?v=pYapIIF0FtU" target="_blank">
            How to Make a Picture Frame 3 Ways | DIY Woodworking
          </a>
          , except that I didn't attach any guides to my chop saw. Below are the
          steps I followed to build this frame:
        </p>
        <Instructions>
          <li>
            <b>Pick out the frame lumber and the back panel plywood.</b> I went
            with select pine because it was cheap, but you can choose whatever
            you'd like.
          </li>
          <li>
            <b>Use a router to bevel the outer and inner edges.</b> If you don't
            know what a router is,{" "}
            <a
              href="https://en.wikipedia.org/wiki/Router_(woodworking)"
              target="_blank"
            >
              here's the wikipedia article
            </a>
            , but basically it's a power tool that carves or hollows out the
            wood to create a nice bevel or indention. It's easy to use once you
            figure out the bits and pieces.
          </li>
          <li>
            <b>Cut pieces to length using a chop saw set to 45 degrees.</b> I
            measured along the inner edge of the back indention made in step 2,
            and then used a square to draw a 45 degree angled line.
            <ClickableImage
              src={`${process.env.REACT_APP_IMAGES_BASE_URL}/frame_4.jpeg`}
              alt="measuring length of side for a frame"
            />
            I bought two 1x4s so I could lay them on top of each other to ensure
            equal sizes of the opposing sides. Ensure the ends are flush, and
            clamp together to make two cuts at the same time.
            <ClickableImage
              src={`${process.env.REACT_APP_IMAGES_BASE_URL}/frame_3.jpeg`}
              alt="two 45 degree cuts that are flush"
            />
            <ClickableImage
              src={`${process.env.REACT_APP_IMAGES_BASE_URL}/frame_2.jpeg`}
              alt="two boards clamped together ready to cut at 45 degrees with a chop saw"
            />
            For the first cut and for after cutting the first two sides, I
            flipped the 1x4s and cut again so that the shorter side is the inner
            edge and the longer side is the outer edge.
            <ClickableImage
              src={`${process.env.REACT_APP_IMAGES_BASE_URL}/frame_1.jpeg`}
              alt="cut 1x4s"
            />
          </li>
          <li>
            <b>Glue pieces together using wood glue.</b> Tape to hold joints
            together tightly.
          </li>
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/frame_glue.jpeg`}
            alt="wood glue on a cut"
          />
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/frame_in_progress.jpeg`}
            alt="glued edges of a frame taped together while drying"
          />
          <li>
            <b>Hammer in joint fasteners.</b>
          </li>
          <ClickableImage
            size="50%"
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/frame_6.jpeg`}
            alt="joint fasteners"
          />
          <li>
            <b>Sand.</b> I just used 220 grit to soften the edges, then 120 to
            finish.
          </li>
          <li>
            <b>Stain.</b> I used Minwax Early American 230 stain and applied it
            with tack cloth.
          </li>
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/frame_5.jpeg`}
            alt="minwax wood finish stain and tack cloth"
          />
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/handmade_frame.jpeg`}
            alt="stained frame"
          />
          <li>
            <b>Add hanger.</b>
          </li>
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/frame_7.jpeg`}
            alt="frame with hanger; sawtooth hangers"
          />
          <li>
            <b>Cut back panel out of plywood.</b> I measured the inner bevel
            length for the width and the height, then cut. This doesn't need to
            be perfect since the cross stitch piece will be covering the edges.
            You want it shaped anywhere between the inner edge and the inner
            bevel edge.
          </li>
          <li>
            <b>Sew cross stitch piece to back panel.</b> Cut excess fabric if
            needed.
          </li>
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/spring_cross_stitch_frame_back.jpeg`}
          />
          <li>
            <b>Hang, and enjoy!</b>
          </li>
          <ClickableImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/frame_with_spring_cross_stitch.jpeg`}
          />
        </Instructions>
      </Section>
      <Section>
        <SectionHeader>Improvements for Next Time</SectionHeader>
        <p>
          For my next frame, there are a couple things that I would do
          differently:
        </p>
        <Instructions>
          <li>Pay closer attention to hanger centering.</li>
          <li>Sand along the grain, espeically around the joints.</li>
          <li>Pay closer attention to cross stitch centering.</li>
          <li>
            Remove excess glue before it dries. The stain doesn't take to the
            places where the glue seeped out.
          </li>
          <li>Hammer in joint fasteners more cleanly.</li>
          <li>
            Use a tool better suited to cutting larger pieces of wood for the
            back panel. I had to finish cutting it with a jigsaw because 1. my
            chop saw wouldn't reach the full length of the cut I wanted to make,
            and 2. the jigsaw didn't cut as cleanly as I would have liked.
          </li>
          <li>
            Use another method to strengthen the joints on the frame. The joint
            fasteners were too difficult to hammer in straight, and they don't
            look very nice. But, it's just the back of the frame, I'm okay with
            it for my first frame or two because of how simple they are.
          </li>
        </Instructions>
        <p>
          Other than the above nitpicky details, I am very pleased with how this
          piece turned out, and my mom was so happy when I gave it to her!
        </p>
      </Section>
      <Section>
        <p>
          So, what do you think? Comment below, and be sure to give this article
          a like! 🌸
        </p>
      </Section>
    </ArticleContentContainer>
  );
};

export default CrossStitchFrame;
