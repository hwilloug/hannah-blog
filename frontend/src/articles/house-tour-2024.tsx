import ClickableFullSizeImage from "../components/ClickableFullSizeImage";
import {
  ArticleContentContainer,
  Section,
  SectionHeader,
} from "../components/StyledComponents";

const HouseTour2024: React.FunctionComponent = () => {
  return (
    <ArticleContentContainer>
      <Section>
        <p>
          Welcome to my house tour! Follow along below for a tour of each room.
        </p>
      </Section>
      <Section>
        <SectionHeader>Entryway</SectionHeader>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/entryway.jpeg`}
          alt="hannah's house entryway"
        />
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/sofa_table.jpeg`}
        />
        <p>The teal lamp in this picture is my favorite lamp I own!</p>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/entryway_wall_1.jpeg`}
        />
        <p>I made the moose plastic canvas on the bottom right!</p>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/entryway_wall_2.jpeg`}
        />
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/entryway_wall_3.jpeg`}
        />
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/entryway_wall_4.jpeg`}
        />
      </Section>
      <Section>
        <SectionHeader>Living Room</SectionHeader>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/living_room.jpeg`}
        />
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/living_room_2.jpeg`}
        />
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/living_room_3.jpeg`}
        />
        <p>
          Sorry for the mess here, I've been cross sitching and doing legos.
        </p>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/living_room_wall_1.jpeg`}
        />
        <p>I made the kitty embroidery above on top!</p>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/living_room_wall_2.jpeg`}
        />
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/living_room_wall_3.jpeg`}
        />
        <p>I made the three basket embroideries to the right of the hutch!</p>
      </Section>
      <Section>
        <SectionHeader>Dining Room</SectionHeader>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/dining_room.jpeg`}
        />
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/dining_room_1.jpeg`}
        />
        <p>
          McCoy strawberry collection, Mikasa Poppy Parade collection, and
          various other pieces.
        </p>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/dining_room_2.jpeg`}
        />
        <p>Corning Ware collection, some Pyrex.</p>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/dining_room_3.jpeg`}
        />
        <p>Salt and pepper shakers</p>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/dining_room_4.jpeg`}
        />
        <p>Glassware, juice glasses, and random kitchen wall art</p>
      </Section>
      <Section>
        <SectionHeader>Kitchen</SectionHeader>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/kitchen.jpeg`}
        />
      </Section>
      <Section>
        <SectionHeader>Hobby Room</SectionHeader>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/hobby_room.jpeg`}
        />
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/hobby_room_1.jpeg`}
        />
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/grow_lights_feb_2024.jpeg`}
        />
      </Section>
      <Section>
        <SectionHeader>Library</SectionHeader>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/library.jpeg`}
        />
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/library_wall_1.jpeg`}
        />
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/library_wall_2.jpeg`}
        />
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/library_wall_3.jpeg`}
        />
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/library_wall_4.jpeg`}
        />
      </Section>
      <Section>
        <SectionHeader>Outside</SectionHeader>
        <ClickableFullSizeImage
          src={`${process.env.REACT_APP_IMAGES_BASE_URL}/front_of_house_2024.jpeg`}
        />
      </Section>
      <Section>
        <p>
          So what'd you think? I tried to make my house as cozy as possible.
          Comment below!{" "}
        </p>
      </Section>
    </ArticleContentContainer>
  );
};

export default HouseTour2024;
