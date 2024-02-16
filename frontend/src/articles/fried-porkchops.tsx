import { useTheme } from "@mui/material";
import { ReactElement } from "react";
import {
  ArticleContentContainer,
  FullSizeImage,
  RecipeContainer,
  Section,
  StyledListItem,
} from "../components/StyledComponents";

const FriedPorkchops: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();

  return (
    <ArticleContentContainer>
      <Section>
        <p>
          If you don't mind deep frying, fried pork chops are the most delicious
          breakfast, and they go great with a gravy or Japanese curry. All you
          need are thin-sliced pork chops (I prefer bone-in) and a few other
          basic ingredients! Below are step-by-step instructions on how I make
          my fried pork chops.
        </p>
        <ol>
          <StyledListItem>
            First, I salt the thin-sliced pork chops. This can be done a day
            ahead of time in order to give the salt plenty of time to penetrate
            the meat. However, at the time of cooking is just fine as well.
          </StyledListItem>
          <StyledListItem>
            Next, prepare your breading. I just dump some flour into a plate,
            scramble two eggs on a second plate, and dump some panko bread
            crumbs on a third plate.
            <FullSizeImage
              src={`${process.env.REACT_APP_IMAGES_BASE_URL}/fried_porkchops_1.jpeg`}
              alt="Fried pork chops in progress"
            />
          </StyledListItem>
          <StyledListItem>
            After that, pat the pork chops dry with a paper towel. This will
            allow the breading to better stick to the meat.
          </StyledListItem>
          <StyledListItem>
            At this point, I fill up my chicken-fryer about 2/3 full of canola
            oil and turn on the heat to high. It'll take a while for the oil to
            heat up enough to the temperature that is good for frying.
          </StyledListItem>
          <StyledListItem>
            Finally, it's time to bread the pork chops. Dip the meat in the
            flour, shake off the excess, then dip it in the egg, drip off the
            excess, then finally coat the pork chop in the panko. Set aside for
            frying. Repeat for all the pork chops.
          </StyledListItem>
          <StyledListItem>
            Lastly, once the oil sizzles when you drop a little panko in it,
            carefully drop the breaded pork chops into the fryer. Be careful not
            to overcrowd the fryer. I can fit only two pork chops at a time in
            mine.
          </StyledListItem>
          <StyledListItem>
            Once the pork chops are golden brown, they are done. If you are
            worried about them being cooked through, pull one out and ensure the
            internal temperature is at least 145 degrees Farenheight. But, since
            these are thin and your oil was hot enough, they will most likely be
            done once they are golden. Place the cooked pork chops on a cooling
            rack, and sprinkle with a bit of salt while they are still hot.
            <FullSizeImage
              src={`${process.env.REACT_APP_IMAGES_BASE_URL}/fried_porkchops_2.jpeg`}
              alt="Fried pork chop"
            />
          </StyledListItem>
          <StyledListItem>
            Continue until all your pork chops are cooked to golden perfection.
            In between batches, it's helpful to sift out any panko that is
            sitting in the oil so that it doesn't burn.
          </StyledListItem>
        </ol>
        <p>
          And there you have it! These pork chops are tender, crisp, and
          delicious. I like to serve mine sliced on top of Japanese curry (then
          technically they become tonkatsu).
        </p>
      </Section>
      <Section>
        <RecipeContainer>
          <h2>Thin-Sliced Fried Pork Chops</h2>
          <h3>Ingredients</h3>
          <ul>
            <StyledListItem>6 thin-sliced pork chops, bone-in</StyledListItem>
            <StyledListItem>2 cups all-purpose flour</StyledListItem>
            <StyledListItem>2 eggs, scrambled</StyledListItem>
            <StyledListItem>2 cups panko bread crumbs</StyledListItem>
            <StyledListItem>Canola oil</StyledListItem>
            <StyledListItem>Salt</StyledListItem>
          </ul>
          <h3>Instructions</h3>
          <ol>
            <StyledListItem>Salt your pork. Pat dry.</StyledListItem>
            <StyledListItem>
              Dip each pork chop in the flour, then the egg, then the panko. Set
              aside.
            </StyledListItem>
            <StyledListItem>Heat up the oil in your fryer.</StyledListItem>
            <StyledListItem>
              Carefully place breaded pork chops in the hot oil.
            </StyledListItem>
            <StyledListItem>
              Once golden brown, remove and set on a cooling rack. Lightly salt.
            </StyledListItem>
            <StyledListItem>
              Continue until all pork chops are cooked.
            </StyledListItem>
          </ol>
        </RecipeContainer>
      </Section>
    </ArticleContentContainer>
  );
};

export default FriedPorkchops;
