import { mdiGithub, mdiGoodreads, mdiLinkedin, mdiWeb } from "@mdi/js";
import { styled, useMediaQuery } from "@mui/material";
import { ReactElement } from "react";
import {
  BodyContainer,
  BorderedFullSizeImage,
  SectionHeader,
  StyledIcon,
  UnstyledLink,
} from "../components/StyledComponents";

const AboutContainerContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  borderRadius: "20px 5px",
  padding: "10px",
  marginBottom: "50px",
}));

const AboutContainer = styled("div")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark" ? theme.palette.primary.dark : "white",
  color: theme.palette.mode === "dark" ? "white" : "black",
  border: "1px solid black",
  borderRadius: "5px",
  padding: "20px",
  width: useMediaQuery(theme.breakpoints.down("sm")) ? "100%" : "35rem",
  lineHeight: 1.75,
}));

const LinksContainer = styled("ul")({
  listStyleType: "none",
  margin: "0 10px",
  padding: 0,
});

const LinkItem = styled("li")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? theme.palette.secondary.dark
      : theme.palette.secondary.main,
  margin: "20px 0",
  align: "center",
  borderRadius: "5px",
}));

const LinkItemLink = styled(UnstyledLink)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  color: "white",
});

const About: React.FunctionComponent = (): ReactElement => {
  const links = [
    {
      name: "GitHub",
      link: "https://github.com/hwilloug",
      icon: mdiGithub,
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/hannah-willoughby-6a8664160/",
      icon: mdiLinkedin,
    },
    {
      name: "Goodreads",
      link: "https://www.goodreads.com/hannah218",
      icon: mdiGoodreads,
    },
    {
      name: "HannahWilloughby.dev",
      link: "https://hannahwilloughby.dev",
      icon: mdiWeb,
    },
  ];

  return (
    <BodyContainer>
      <AboutContainerContainer>
        <AboutContainer>
          <SectionHeader>About Me</SectionHeader>
          <p>
            Hello world, and welcome to my blog! I'm Hannah, and this is where I
            write about the stuff I do for fun. Currently, I live in Fort Mill,
            SC with my boyfriend, Danny, and our four cats. As my day job, I am
            a software engineer, but I like to keep myself busy outside of work
            by keeping up with a multitude of hobbies, which include cooking,
            gardening, needle arts, coding, reading, woodworking, antiquing, and
            learning langages.
          </p>
          <p>Find me on:</p>
          <LinksContainer>
            {links.map((link) => (
              <LinkItem key={link.name}>
                <LinkItemLink to={link.link}>
                  <StyledIcon path={link.icon} size={1} />
                  <p>{link.name}</p>
                </LinkItemLink>
              </LinkItem>
            ))}
          </LinksContainer>
          <BorderedFullSizeImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/me_and_danny.jpeg`}
            alt="A photo of me and danny"
          />
          <BorderedFullSizeImage
            src={`${process.env.REACT_APP_IMAGES_BASE_URL}/family_photo_2.jpeg`}
            alt="A family photo of my cats"
          />
        </AboutContainer>
      </AboutContainerContainer>
      <AboutContainerContainer>
        <AboutContainer>
          <SectionHeader>Contact Me</SectionHeader>
          <p>Questions, comments, or feedback?</p>
          <ul>
            <li>
              Email me at{" "}
              <a href="mailto: support@hannahshobbyroom.com">
                support@hannahshobbyroom.com
              </a>
            </li>
            <li>
              Connect with me on X!{" "}
              <a href="https://twitter.com/HannahHobbyRoom">@HannahHobbyRoom</a>
            </li>
          </ul>
        </AboutContainer>
      </AboutContainerContainer>
    </BodyContainer>
  );
};

export default About;
