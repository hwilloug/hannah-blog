import styled from "@emotion/styled";
import { ReactElement } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import {
  BodyContainer,
  BorderedFullSizeImage,
  BreakPointProps,
  ColorProps,
  CssProps,
  FullSizeImage,
  SectionHeader,
  StyledIcon,
  UnstyledLink,
} from "../components/StyledComponents";
import { mdiGithub, mdiGoodreads, mdiLinkedin, mdiWeb } from "@mdi/js";
import Icon from "@mdi/react";

const AboutContainerContainer = styled.div<ColorProps>`
  background-color: ${({ colors }) => colors.primary.main};
  border-radius: 20px 5px;
  padding: 10px;
  margin-bottom: 50px;
`;

const AboutContainer = styled.div<CssProps>`
  background-color: ${({ colors }) =>
    colors.mode === "dark" ? colors.primary.dark : "white"};
  color: ${({ colors }) => (colors.mode === "dark" ? "white" : "black")};
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;
  width: ${(props) => (props.break ? "100%" : "35rem")};
  line-height: 1.75;
`;

const LinksContainer = styled.ul`
  list-style-type: none;
  margin: 0 10px;
  padding: 0;
`;

const LinkItem = styled.li<ColorProps>`
  background-color: ${({ colors }) =>
    colors.mode === "dark" ? colors.secondary.dark : colors.secondary.main};
  margin: 20px 0;
  align: center;
  border-radius: 5px;
`;

const LinkItemLink = styled(UnstyledLink)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: stretch;
  gap: 10px;
  color: white;
  justify-content: center;
`;

const About: React.FunctionComponent = (): ReactElement => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));

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
      <AboutContainerContainer colors={theme.palette}>
        <AboutContainer break={sm} colors={theme.palette}>
          <SectionHeader>About Me</SectionHeader>
          <p>
            Hello world, and welcome to my blog! I'm Hannah, and this is where I
            write about the stuff I do for fun. Currently, I live in Fort Mill,
            SC with my boyfriend, Danny, and our four cats. As my day job, I am
            a software engineer, but I like to keep myself busy outside of work
            by keeping up with a multitude of hobbies, which include cooking,
            gardening, needle arts, coding, reading, woodworking, and learning
            Japanese.
          </p>
          <p>Find me on:</p>
          <LinksContainer>
            {links.map((link) => (
              <LinkItem colors={theme.palette} key={link.name}>
                <LinkItemLink to={link.link}>
                  <StyledIcon
                    path={link.icon}
                    size={1}
                    colors={theme.palette}
                  />
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
      <AboutContainerContainer colors={theme.palette}>
        <AboutContainer break={sm} colors={theme.palette}>
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
