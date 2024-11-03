import ClickableImage from "../components/ClickableFullSizeImage";
import {
  ArticleContentContainer,
  Section,
  SectionHeader,
  SubsectionHeader,
} from "../components/StyledComponents";

const GettingBackIntoRibbonEmbroidery: React.FunctionComponent = () => {
  return (
    <ArticleContentContainer>
      <Section>
        <p>
          After years of traditional embroidery and cross-stitch, I've recently
          rediscovered the joy of ribbon embroidery. This dimensional technique
          transforms ordinary embroidery into stunning, textured pieces that
          quite literally pop off the fabric. Not only is it a great way to add
          texture to your embroidery, but it also allows you to use a wider
          variety of materials than just thread.
        </p>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/ribbon_embroidery_1_2.jpeg`}
          alt="ribbon embroidery in progress"
        />
      </Section>
      <Section>
        <SectionHeader>My work</SectionHeader>
        <SubsectionHeader>Basket Bouquet</SubsectionHeader>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/ribbon_embroidery_1_7.jpeg`}
          alt="a close up of the final ribbon embroidery"
        />
        <p>
          This was my first piece. I used satin ribbon for the pansies, sheer
          ribbon for the coneflowers, thread for the baby's breath, and jute
          ribbon for the basket.
        </p>
        <p>If I were to remake this piece, I would:</p>
        <ul>
          <li>
            Improve the way I did the pansies by using bigger stitches for the
            top petals, as well as using finer black thread for petal detail.
          </li>
          <li>
            Use a different texture or color of ribbon for the basket, as well
            as a different stitch/combination of stitches. I'd probably use a
            thinner ribbon as well.
          </li>
        </ul>
        <SubsectionHeader>Daisies and Roses</SubsectionHeader>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/ribbon_embroidery_1_4.jpeg`}
          alt="ribbon embroidery in progress"
        />
        <p>
          This was my second piece. I used sheer ribbon for the daisies and
          satin for the roses and leaves. I used thread for the stems, vines,
          and butterflies. I used tulle for a green effect at the base of the
          flowers.
        </p>
        <p>If I were to remake this piece, I would:</p>
        <ul>
          <li>
            Use satin ribbon for the daisies. They were sold out of satin when I
            went to the store for the ribbon for this piece. I might even just
            go over the daisies with the satin ribbon now that I have it and
            haven't framed this piece yet.
          </li>
        </ul>
        <SubsectionHeader>Cherry Blossoms</SubsectionHeader>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/ribbon_embroidery_1_6.jpeg`}
          alt="a close up of the final ribbon embroidery"
        />
        <p>
          This was my third piece. I used satin ribbon for the flower petals and
          the leaf, and I used thread for the stems and petal details.
        </p>
        <p>
          For the stem, I used 6 strands of a dark brown thread, and then added
          a single strand of brown-gold thread. This gave the stem an effect of
          light reflection off of it, giving it even more texture. To stitch it,
          I used the stem stitch.
        </p>
        <p>
          As for the petals and leaf, I used the "ribbon stitch". This gives the
          petals a look of curling outward.
        </p>
        <SubsectionHeader>Irises</SubsectionHeader>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/ribbon_embroidery_1_5.jpeg`}
          alt="a close up of the final ribbon embroidery"
        />
        <p>
          This was my fourth piece. I used satin and sheer ribbon for the flower
          petals, and thread for the stems. I had found this really interesting
          velvet ribbon, so I used it for the leaves to give them a different
          texture. I used gold thread for the detail on the petals.
        </p>
        <p>
          To stitch the petals, I used a combination of the ribbon stitch and
          the chain stitch. I used the ribbon stitch for the leaves.
        </p>
        <p>
          Just a couple details I would change if I were to remake this piece:
        </p>
        <ul>
          <li>
            Use more strands of the gold thread for the petals since it's not
            very noticeable with just the single strand.
          </li>
          <li>
            Use the stem stitch for the stems instead of a straight stitch.
          </li>
        </ul>
        <SubsectionHeader>Pansies</SubsectionHeader>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/ribbon_embroidery_1_8.jpeg`}
          alt="a close up of the final ribbon embroidery"
        />
        <p>
          This was my fifth piece. I used satin ribbon for the flower petals and
          leaves, and thread for the stems.
        </p>
        <p>
          To stitch the petals, I used the ribbon stitch, including for the
          black details. I used a french knot for the center of the flower.
        </p>
        <p>
          For the leaves, I used a variant of the ribbon stitch in which you
          place the ribbon through a side of the ribbon rather than the center.
          This gives the leaves a look of drooping or curling in a certain
          direction.
        </p>
        <p>What I might still change about this piece:</p>
        <ul>
          <li>
            Remove the black detail from the petals and replace it with 6-strand
            black thread to give it even more detail.
          </li>
        </ul>
        <SubsectionHeader>Yellow Jessamine</SubsectionHeader>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/ribbon_embroidery_1_3.jpeg`}
          alt="ribbon embroidery in progress"
        />
        <p>
          This was my sixth piece. I used satin ribbon for the flower petals and
          leaves, and thread for the vine, an actual stick for the stake, velvet
          ribbon for the pot, and thread for the butterflies.
        </p>
        <p>To stitch the petals, I used the ribbon stitch.</p>
        <p>
          My favorite thing about this piece is the way the yellow ribbon pops
          in contrast to the reddish pink velvet pot and the dark red
          butterflies. This one is definitely my favorite out of all the pieces
          I've done so far!
        </p>
      </Section>
      <Section>
        <SectionHeader>What's next?</SectionHeader>
        <p>Here are a few ways I'd like to improve my ribbon embroidery:</p>
        <ul>
          <li>Practice more difficult stitches</li>
          <li>Make more complex pieces</li>
        </ul>
        <p>
          I'm not sure what I'm going to do with these pieces yet. I still need
          to frame and finish them to be ready for display. At any rate, I'm
          glad to be working on something more textured and less time-consuming
          than my usual cross stitch.
        </p>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/ribbon_embroidery_1_1.jpeg`}
          alt="starting the ribbon embroidery"
        />
      </Section>
      <Section>
        <SectionHeader>References</SectionHeader>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://www.amazon.com/Beginners-Guide-Silk-Ribbon-Embroidery/dp/0855328355"
            >
              Beginner's Guide to Silk Ribbon Embroidery by Ann Cox
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.amazon.com/Embroidered-Garden-Stitching-through-Seasons/dp/1611802660"
            >
              The Embroidered Garden: Stitching Through the Seasons by Kazuko
              Aoki
            </a>
          </li>
        </ul>
      </Section>
      <Section>
        <p>
          Stay tuned for a how-to guide on how to get started with ribbon
          embroidery!
        </p>
        <p>
          If you have any ideas, questions, or comments, please post them below!
        </p>
      </Section>
    </ArticleContentContainer>
  );
};

export default GettingBackIntoRibbonEmbroidery;
