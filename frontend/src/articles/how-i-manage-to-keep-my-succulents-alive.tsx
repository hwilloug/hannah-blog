import { Grid } from "@mui/material";
import { ReactElement } from "react";
import ClickableImage from "../components/ClickableFullSizeImage";
import {
  ArticleContentContainer,
  CategoryB,
  Section,
  SectionHeader,
} from "../components/StyledComponents";

const SucculentCare: React.FunctionComponent = (): ReactElement => {
  return (
    <ArticleContentContainer>
      <Section>
        <p>
          By trial and error, I have learned how to keep my succulents alive and
          thriving. I started with an aloe about 10 years ago, and since then
          I've tried my hand at a variety of <i>genera</i> or species. Here are
          some tips and suggestions on light, soil, containers, watering, and
          varieties.
        </p>
      </Section>
      <SectionHeader>Light</SectionHeader>
      <Section>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/succulentcare_5.jpeg`}
          alt="succulents on a window sill"
        />
        <p>
          Succulents need <CategoryB>plenty of light</CategoryB>. I keep mine on
          a east-facing window sill, but a west- or south-facing window would
          work as well,{" "}
          <CategoryB>south-facing windows being the best</CategoryB> as they
          receive the most light. If you don't have a window that gets a lot of
          light, you can use a grow light. You can tell if your succulent is
          getting enough light if it is growing upwards and not excessively
          leaning towards the light source. After I'm done watering, I like to
          rotate the way they are facing so that they grow evenly.
        </p>
      </Section>
      <SectionHeader>Water</SectionHeader>
      <Section>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/succulentcare_6.jpeg`}
          alt="a lot of succulents soaking in a baking dish"
        />
        <p>
          The best success I've had in terms of watering is by{" "}
          <CategoryB>soaking the bottom of the pot in water</CategoryB>. I do
          this about <CategoryB>once a week to every other week</CategoryB>,
          depending on the variety of succulent. This method is best because it
          allows the soil to become completely saturated, as well as not getting
          the leaves of the plant wet.
        </p>
        <p>
          You'll want to water your succulents{" "}
          <CategoryB>when the soil is completely dry</CategoryB>, but before the
          leaves start to shrivel. Beware of over-watering as well. You can tell
          if the succulent is getting too much water by the leaves turning
          yellow or translucent.
        </p>
      </Section>
      <SectionHeader>Soil</SectionHeader>
      <Section>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <ClickableImage
              src={`${process.env.REACT_APP_IMAGES_BASE_URL}/succulentcare_8.jpeg`}
              alt="a bag of succulent soil"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <ClickableImage
              src={`${process.env.REACT_APP_IMAGES_BASE_URL}/succulentcare_7.jpeg`}
              alt="a bag of perlite"
            />
          </Grid>
        </Grid>
        <p>
          Succulents need <CategoryB>well-draining soil</CategoryB>. You can use
          cactus soil, sand, pumice, or perlite. I use a mix of cactus soil and
          perlite. I like to use a lot of perlite because it's cheap and it
          helps the soil dry out quickly. You can also use sand, but I've heard
          that it can compact and cause drainage issues.
        </p>
      </Section>
      <SectionHeader>Containers</SectionHeader>
      <Section>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/succulentcare_9.jpeg`}
          alt="terracotta pots at hobby lobby"
        />
        <p>
          I like to use <CategoryB>terracotta pots</CategoryB> because they are
          porous and allow the soil to dry out quickly, and I like the natural
          look. You can also use plastic or ceramic pots, but you'll want to be
          careful about over-watering. It's essential to have{" "}
          <CategoryB>adequate drainage holes</CategoryB> at the bottom of the
          pot. Otherwise, the water will sit at the bottom of the pot and rot
          the roots. In addition, you can't water by soaking if there is no hole
          at the bottom.
        </p>
        <p>
          The place I've had the most luck finding these small, 2-3 inch
          terracotta pots is at Hobby Lobby. They are pretty cheap, and they
          have a variety of shapes and sizes. If you wanted to plant multiple in
          a pot, you can get a larger size.
        </p>
      </Section>
      <SectionHeader>Sourcing and Varieties</SectionHeader>
      <Section>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/succulentcare_10.jpeg`}
          alt="a close up of a ruffle jade succulent"
        />
        <p>
          Lowes and Home Depot have a good selection of succulents of the basic
          varieties, but if you are looking for more rare or unique species, I
          would suggest looking at a local nursery or ordering online. The basic
          succulents are just fine for starting out and getting your hands
          dirty. As always, I suggest shopping locally if you can. Succulents do
          fine being mailed, but they will be a little stressed from the trip.
        </p>
        <p>
          My favorite place to shop locally is{" "}
          <a href="https://www.wilsonsnurseryrh.com/" target="_blank">
            Wilson's Nursery and Garden Center
          </a>{" "}
          in Rock Hill, SC. They have a great selection of succulents, and they
          are always healthy and well taken care of. I've also ordered from{" "}
          <a href="https://succulentsbox.com" target="_blank">
            Succulents Box
          </a>
          ; they have a subscription service where they send a selection of
          succulents to your door every month, allowing you to try out all kinds
          of varieties.
        </p>
        <p>
          I would just suggest getting any succulent that looks appealing to
          you, but if you are nervous getting started, I would recommend getting
          a basic <i>echeveria</i>, jade, or aloe. These are all pretty easy to
          care for and can survive neglect. I have a variety of <i>genera</i>,
          and they all have their own quirks, so pick one and do your best to
          learn about what it likes.
        </p>
      </Section>
      <SectionHeader>My Favorites</SectionHeader>
      <Section>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/succulentcare_1.jpeg`}
          alt="a close up of an aeonium succulent"
        />
        <p>
          The above image is what I'm pretty sure is an aeonium. I haven't been
          the best at watering it so it's lost its lower leaves, but I really
          like the shape of it anyway.
        </p>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/succulentcare_2.jpeg`}
          alt="a close up of a sedum succulent"
        />
        <p>
          This succulent is a sedum. I got it at Lowes recently, and I love its
          shape and slight pink hue.
        </p>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/succulentcare_3.jpeg`}
          alt="a close up of a ruffle jade succulent"
        />
        <p>
          This is a ruffle jade that I ordered online. It's definitely my
          favorite succulent because it's beautiful, it shows when it really
          needs water, and should get pretty big. It's probably time for me to
          pot it in a larger pot!
        </p>
      </Section>
      <SectionHeader>In Summary</SectionHeader>
      <Section>
        <p>
          I hope these tips and suggestions help you keep your succulents alive.
          I have had a lot of fun learning about and caring for these plants.
          They are a great way to bring some green into your home, and they are
          easy to care for once you get the hang of it. Good luck!
        </p>
        <p>Key tips for succulent care:</p>
        <ul>
          <li>Place on a east, south, or west window</li>
          <li>Use a pot with a drainage hole</li>
          <li>Use well draining soil</li>
          <li>Water by soaking the bottom of the pot in water</li>
        </ul>
        <ClickableImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/succulentcare_4.jpeg`}
          alt="succulents on a window sill"
        />
      </Section>
    </ArticleContentContainer>
  );
};

export default SucculentCare;
